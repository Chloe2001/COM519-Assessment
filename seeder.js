const { MongoClient } = require("mongodb");
require("dotenv").config();
const fs = require("fs").promises;
const path = require("path");
const loading = require("loading-cli");
const { MONGODB_URI } = process.env;

const client = new MongoClient(MONGODB_URI);

async function main() {
  try {
    await client.connect();
    const db = client.db();
    const results = await db.collection("Loungefly").find({}).count();

    if (results) {
        console.info("deleting collection");
        await db.collection("Loungefly").drop();
      }

      const data = await fs.readFile(path.join(__dirname, "Database.json"));
    await db.collection("Loungefly").insertMany(JSON.parse(data));

    await db
    .collection("Loungefly")
    .updateMany({ regions: { $all: [null] } }, [
      { $set: { regions: [{ $arrayElemAt: ["$regions", 0] }] } },
    ]);
  load.stop();
  console.info(
   
  );
  process.exit();
}
 catch (error) {
console.error("error:", error);
process.exit();
}
}

main();