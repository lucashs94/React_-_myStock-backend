require("express-async-errors");

const cors = require("cors");
const express = require("express");
const routes = require("./routes");

const AppError = require("./utils/AppError")
const ErrorHandler = require('./utils/ErroHandler')

const app = express();
app.use(express.json());
app.use(cors());

app.use(routes);

app.use(ErrorHandler)

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));