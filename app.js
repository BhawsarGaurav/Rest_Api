const express = require("express");
const cors = require("cors");
const DB = require("./config/db");
const router = require("./Routes/methods");
const app = express();
app.use(express.json());
app.use(cors());
app.use("/", router);
DB();
app.listen(8899, (err) => {
  if (err) throw err;
  console.log("running on Port 8899");
});
