const mongoose = require('mongoose')

// const connectDB = (url) => {
//     return mongoose.connect(url, {
//         useNewUrlParser: true,
//         useCreateIndex: true,
//         useFindAndModify: false,
//         useUnifiedTopology: true
//     })
// }

// module.exports = connectDB

const connectionString = process.env.MONGO_URI

const connectDB = (url) => {
    return mongoose.connect(connectionString)
}

module.exports = connectDB