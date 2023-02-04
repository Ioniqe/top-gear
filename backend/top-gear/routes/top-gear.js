const express = require("express");
const https = require('https')
const axios = require('axios');

const topGearRoute = express.Router();

topGearRoute.get("/body-style", (req, res) => {
    const bodyStyle = req.body.bodyStyle

    const url = `https://www.topgear.com/api/search/CarReviews?sort=-createdAt&filter%5BbodyStyle%5D=${bodyStyle}`
    
    axios.get(url).then(response => {
        res.send({result: response.data.data});
    })
    .catch(error => {
        console.log(error);
    });
})

module.exports = topGearRoute