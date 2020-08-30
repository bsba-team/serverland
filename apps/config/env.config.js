const colors = require("colors");

if (!process.env.HOST) {
  require("dotenv").config();
  console.log(
    "Environmental variables has been loaded from .env file!".green.bold
  );
  //     .catch(async error => {
  //     console.log("Error caught while loading environmental variables: ".red.bold + error.red.italic)
  // })
} else {
  console.log(
    "Environmental variables has been loaded from local environment file!".green
      .bold
  );
}

module.exports = process.env;
