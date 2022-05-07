const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
//reading url in .env file
require("dotenv").config();

//Define port
const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

//Connect database

const URL = process.env.ATLAS_URI;

mongoose.connect(URL, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
//open created database connection
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("mongodb Connection success");
});

 const eventsRouter = require("./routes/EventsManage");
 app.use("/events", eventsRouter);

 const employeeRouter = require('./routes/employee');
 app.use('/employee', employeeRouter);

 const servicesRouter = require("./routes/ServicesManage");
 app.use("/services", servicesRouter);

 const paymentsRouter = require("./routes/PaymentsManage");
 app.use("/payments", paymentsRouter);
 
 //const salaryRouter = require("./routes/salary");
 //app.use("/salary", salaryRouter);
 app.use("/users", require("./routes/auth"));

//running port 8070
app.listen(PORT, () => {
  console.log(`Server is up and running on port no: ${PORT}`);
});
