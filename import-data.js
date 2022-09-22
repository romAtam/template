const mongoose = require("mongoose");
const { readFile } = require("fs");
const dotenv = require("dotenv");
dotenv.config({ path: `${__dirname}/config.env` });
const Tour = require("./models/tourModel");

const db = process.env.DATABASE.replace("<password>", process.env.PASSWORD);
mongoose.connect(db, (err) => {
  if (!err) {
    console.log("connection established");
  }
});
readFile(`${__dirname}/tours-simple.json`, "utf-8", (err, dataJson) => {
  if (!err) {
    const data = JSON.parse(dataJson);
    if (process.argv[2] === "--import") {
      importData(data);
    } else if (process.argv[2] === "--delete") {
      deleteData();
    }
  }
});

async function importData(data) {
  try {
    await Tour.create(data);
    console.log("imported data");
  } catch (error) {
    console.log(error);
  }
  process.exit();
}
async function deleteData() {
  try {
    await Tour.deleteMany();
    console.log("delete all data");
  } catch (error) {
    console.log(error);
  }
  process.exit();
}
