const express = require("express")
const bodyparser = require("body-parser")
const cors = require("cors")
const userschema = require("./schema")

const app = express()

app.use(cors())
app.use(bodyparser.json())

app.get("/getdata/:token", async (req,res) => {
    var token = req.params.token
    try {
        const response = await userschema.deleteOne({_id : token})
        res.status(200).send(response)
    } catch (error) {
        // console.log(error)
        res.status(404).send("Provide proper Id")
    }
})

app.post("/adddata", async (req,res) => {
    try {
        const body = req.body
        const response = await userschema.insertMany(body)
        res.status(201).send(response)
    } catch (error) {
        res.status(404).send(error)
    }
})



module.exports = app