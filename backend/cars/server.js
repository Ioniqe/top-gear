const express = require("express");
const bodyParser = require("body-parser")
const cors = require("cors");

const aboutRouter = require("./routes/about");
const carsRouter = require("./routes/cars");

const PORT = 8081;

const app = express();

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use("/cars", carsRouter);
app.use("/cars/about", aboutRouter);


app.listen(PORT, () => {
    console.log(`Server running at: ${PORT}`)
})