const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/userRoute");
const tourRoute = require("./routes/tourRoute");
dotenv.config({ path: `${__dirname}/config.env` });
const app = express();
const port = process.env.PORT;
const db = process.env.DATABASE.replace("<password>", process.env.PASSWORD);
mongoose.connect(db, (err) => {
  if (!err) {
    console.log("connected to database: " + db);
    app.listen(port, () => console.log("listening on port " + port));
  } else {
    console.log(err);
  }
});
app.use(express.json());
app.use("/api/v1/users", userRoute);
app.use("/api/v1/tours", tourRoute);
