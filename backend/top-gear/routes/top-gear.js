const express = require("express");
const https = require('https')
const axios = require('axios');

const topGearRoute = express.Router();

topGearRoute.post("/body-style", (req, res) => {
    const bodyStyle = req.body.bodyStyle

    console.log(bodyStyle)
    const url = `https://www.topgear.com/api/search/CarReviews?sort=-createdAt&filter%5BbodyStyle%5D=${bodyStyle}`
    
    axios.get(url).then(response => {
        // console.log(response.data.data)
        res.send({data: response.data.data});
    })
    .catch(error => {
        console.log(error);
    });
})

module.exports = topGearRoute