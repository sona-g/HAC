const express = require("express");
const morgan = require("morgan");
const router = require("./routes/route")
require('dotenv').config()

const app = express();
const PORT = process.env.PORT
//middleware
app.use(morgan("dev"))
app.use("/api", router)

app.listen(PORT, () => console.log(`server is running on ${PORT}`))