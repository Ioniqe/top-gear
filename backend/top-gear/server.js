const express = require("express");
const bodyParser = require("body-parser")

const aboutRouter = require("./routes/about");
const topGearRouter = require("./routes/top-gear");

const PORT = 8080;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use("/top-gear", topGearRouter);
app.use("/about", aboutRouter);


app.listen(PORT, () => {
    console.log(`Server running at: ${PORT}`)
})