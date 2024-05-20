require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const app = express()
const router = require("./routes/routes")
const cors = require('cors')

app.use(express.json())
app.use('/api/auth',router)

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('Connected to MongoDB');
    const port = process.env.PORT;
    app.listen(port, (err) => {
        if (err) throw err;
        console.log(`Server is running on port ${port}`);
    })
}).catch(err=>{
    console.log(err);
})


