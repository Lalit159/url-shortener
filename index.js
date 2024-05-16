require('dotenv').config()
const express = require('express')
const {connectToMongoDB} = require('./connectDB')
const URL = require('./models/url')
const urlRoute = require('./routes/url.js')

const app = express()
const PORT = 8001

connectToMongoDB()
.then(()=>{
    console.log("Mongodb connected")
})

app.use(express.json())
app.use('/url', urlRoute)

app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId
    const entry = await URL.findOneAndUpdate(
        {
        shortId,
        }, 
        {
            $push:{
                visitHistory: {
                    timestamp: Date.now(),
                },
            },
        }
    );
    res.redirect('http://' + entry.redirectURL)
})

app.listen(PORT, ()=> console.log(`Server started at PORT ${PORT}`))
