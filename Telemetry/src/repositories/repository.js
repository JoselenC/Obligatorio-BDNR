const Config = require("config");

const cassandra = require('cassandra-driver');


module.exports = class Repository {

  constructor() {
    try {
      this.client= new cassandra.Client({ 
        contactPoints: ['127.0.0.1', '127.0.0.2', '127.0.0.3'],
        localDataCenter: 'datacenter1',
        keyspace: 'bdnr3' 
      });
       this.client.connect();
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
        localDataCenter: 'datacenter1',
        keyspace: 'bdnr3' 
      });
       this.client.connect();
    }
   catch (err) {
      console.log(`Error trying to connect to database: ${err}`);
    }
  }

    async getAll(){
      var res  = null
      const query = "SELECT  * FROM telemetry WHERE vehicleid= 'ATBC2CBVHY' ORDER BY registertime;"
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
    const query = "INSERT INTO telemetry (vehicleid,registertime,waves,temperature,vibration,voltage,pressure,speed) VALUES('"+data.vehicleid+"',toTimestamp(now()),"+data.waves+","+data.temperature+","+data.vibration+","+data.voltage+","+data.pressure+","+data.speed+" )";
    await new Promise(async function (resolve, reject) {
      await Repository.client.execute(query,function(err,result){
        try{
         resolve(res)
         res= "Se agrego correctamente"
        }catch(err){
          reject(new Error("No data found"))
        }
      } ); })  
      return res;
   }
};





