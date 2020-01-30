const axios = require('axios')
const express = require('express')
const app = express()
const cors = require('cors')
const path = require(path)
require('dotenv').config()
const port = process.env.PORT || 3000

app.use(cors())

app.use(express.static(path.join(__dirname, ".", "build")))

app.get("getfacts", (req, res) =>{
    axios.get("https://cat-fact.herokuapp.com/facts", {
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    })
    .then((reponse=>{
        console.log(response.data)
        res.status(200).send(response.data)
    }))
    .catch(err=>res.status(500).send(err))
})

app.get("*", (req, res) =>{
    res.sendFile(path.join(__dirname, ".", "build", "index.html"))
})

app.listen(port, () => console.log(`listening on port ${port}!`))