const Server = require("./src/server/server");
const Repository = require("./src/repositories/repository");

(async () => {
  try {
     await Repository.initRepository();
     await Server.initServer();
  } catch (err) {
    console.log(`Error initializing server: ${err}`);
    process.exit(1);
  }
})();
