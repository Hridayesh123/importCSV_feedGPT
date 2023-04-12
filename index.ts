import { gptService } from "./src/service";
import { db, seedDB } from "./src/db";
import Response from "./src/model";

db.authenticate()
  .then(async () => {
    await Response.findAndCountAll().then(({ count, rows }) => {
      if (count === 0) {
        seedDB();
      }
    });

    console.log("Connection successful");
  }).then(() => gptService())
  .catch((error) => {
    console.log(error);
  });

// gptService();
////
