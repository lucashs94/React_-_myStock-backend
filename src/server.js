require("express-async-errors");

const cors = require("cors");
const express = require("express");
const routes = require("./routes");
const cookieParser = require('cookie-parser')
const AppError = require("./utils/AppError")
const ErrorHandler = require('./utils/ErroHandler')

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
  credentials: true,
}))

app.use(routes)

app.use(ErrorHandler)

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));