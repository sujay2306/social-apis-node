const express = require('express')
const format = require("date-format")
const { restart } = require('nodemon')
const app = express()
const port = process.env.Port || 4000

//swagger docs
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yml');
//app.use is a middleware
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/',(req,res) => {
    res.status(200).send("<h1> Hello from backend </h1>");
})

app.get('/api/v1/instagram', (req,res) => {
    const instaSocial = {
        uername: "sujay_ks",
        followers: 230,
        following: 700,
        date: format.asString("dd[MM] - hh:mm:ss",new Date()),
    }
    res.status(200).json(instaSocial)
})

app.get('/api/v1/facebook', (req,res) => {
    const instaSocial = {
        uername: "sujay_ks",
        followers: 230,
        following: 700,
        date: format.asString("dd[MM] - hh:mm:ss",new Date()),
    }
    res.status(200).json(instaSocial)
})

app.get('/api/v1/linkedin', (req,res) => {
    const instaSocial = {
        uername: "sujay_ks",
        followers: 20,
        following: 70,
        date: format.asString("dd[MM] - hh:mm:ss",new Date()),
    }
    res.status(200).json(instaSocial)
})

app.get("/api/v1/:id", (req,res) => {
    console.log(req.params.id)
    res.status(200).json({param:req.params.id})
})
app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})
