const express = require("express");
const axios = require('axios');

const carsRoute = express.Router();

carsRoute.post("/make", (req, res) => {
    const make = req.body.make

    const url = `https://api.api-ninjas.com/v1/cars?make=${make}`

    const config = {
        headers:{
            'X-Api-Key': 'd1GcXT0keoxS2bNMiyyt0Q==DiqLTFPDuJKigoEP'
          }
    }

    axios.get(url, config).then(response => {
        res.send({data: response.data});
    })
    .catch(error => {
        console.log(error);
    });
})

module.exports = carsRoute