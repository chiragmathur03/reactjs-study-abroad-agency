//backend for contact us - which takes data from the front end and sent to mongodb

const express = require("express")
const cors = require("cors")
const collection = require("./mongo")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

//getting data from front end
app.post("/", async (req, res) => {
    const { firstname } = req.body
    const { lastname } = req.body
    const { company } = req.body
    const { email } = req.body
    const { number } = req.body
    const { message } = req.body

    //data-object
    const data = {
        firstname: firstname,
        lastname: lastname,
        company: company,
        email: email,
        number: number,
        message: message
    }

    await collection.insertMany([data])
})

app.listen(8000, () => {
    console.log('Port Connected')
})