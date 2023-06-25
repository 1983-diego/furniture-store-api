require("dotenv").config()
const connectDB = require("./db/connect")
const express = require("express")
const productsRouter = require("./routes/products")
const notFound = require("./middleware/notFound")

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    return res.send("<h1>Home page - Furniture Store API</h1>")
})

app.use('/api/v1/products', productsRouter )

app.use(notFound)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(process.env.PORT || 3000, () => {
            console.log(`Server running in ${process.env.PORT} port...`)
        })
    } catch (error) {
        console.log(error.message)
    }
}

start()