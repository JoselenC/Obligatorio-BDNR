const Config = require("config");

const cassandra = require('cassandra-driver');
const fs = require("fs");

module.exports = class Repository {

  constructor() {
    
    try {
      this.client= new cassandra.Client({ 
        contactPoints: ['127.0.0.1', '127.0.0.2', '127.0.0.3'],
        localDataCenter: 'datacenter1'
      });
    }
   catch (err) {
    this.client=null
      console.log(`Error trying to connect to database: ${err}`);
    }
  }

  static async initRepository() {
    try {
      this.client= new cassandra.Client({ 
        contactPoints: ['127.0.0.1', '127.0.0.2', '127.0.0.3'],
        localDataCenter: 'datacenter1'
      });
      this.client.connect(async function(e) {
        var query;
         query = "CREATE KEYSPACE IF NOT EXISTS bdnr WITH replication = {'class': 'SimpleStrategy', 'replication_factor': '3' }";
         await new Promise(async function (resolve, reject) {
         await Repository.client.execute(query, function(err) {
          try{
            resolve()
           }catch(err){
             reject(new Error("error in keyspace creation"))
             console.log("error in keyspace creation");
           }
         });
        })  
        var query2 = "CREATE TABLE IF NOT EXISTS bdnr.telemetry (vehicleid varchar,registertime timestamp, waves INT,temperature INT, vibration INT,voltage INT, pressure INT, speed INT, PRIMARY KEY(vehicleid,registertime)) WITH CLUSTERING ORDER BY(registertime DESC);"
         await new Promise(async function (resolve, reject) {
          await Repository.client.execute(query2,function(err,result){
            try{
             resolve()
            }catch(err){
              reject(new Error("error creating table"))
              console.log("error creating table")
            }
          } ); })  
      });
      await Repository.massiveInsert()
    } catch (err) {
      console.log(`Error trying to connect to database: ${err}`);
    }
  }

    async getAll(){
      var res  = null
      const query = "SELECT  * FROM bdnr.telemetry WHERE vehicleid= 'ATBC2CBVHY' ORDER BY registertime;"
       await new Promise(async function (resolve, reject) {
        await Repository.client.execute(query,function(err,result){
          try{
           resolve()
           res= result.rows
          }catch(err){
            reject(new Error("No data found"))
          }
        } ); })  
        return res;
  }

  async add(data){
    var res  = null
    const query = "INSERT INTO bdnr.telemetry (vehicleid,registertime,waves,temperature,vibration,voltage,pressure,speed) VALUES('"+data.vehicleid+"',toTimestamp(now()),"+data.waves+","+data.temperature+","+data.vibration+","+data.voltage+","+data.pressure+","+data.speed+" );";
    await new Promise(async function (resolve, reject) {
      await Repository.client.execute(query,function(err,result){
        try{
         resolve(res)
         res= "Se agrego correctamente"
        }catch(err){
          reject(new Error("error inserting data"))
        }
      } ); })  
      return res;
   }
   
   static async massiveInsert(){
    var lines=[]
    fs.readFile('datos.txt', 'utf-8', (err, data) => {
      if(err) {
        console.log('error: ', err);
      } else {
        lines = data.split(";");   
        lines.forEach(async function (element) {
          const query = element + ";"
          await new Promise(async function (resolve, reject) {
            await Repository.client.execute(query,function(err,result){
              try{
               resolve()
               res= result.rows
              }catch(err){
                reject(new Error("No data found"))
              }
            } ); })  
       })  
      }
    });
  }
};





