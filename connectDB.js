const mongoose = require('mongoose')
mongoose.set("strictQuery", true)
async function connectToMongoDB(){
    const mongoURL = process.env.MONGODB_URI
    return mongoose.connect(mongoURL)
}

module.exports = {connectToMongoDB}