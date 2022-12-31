const express = require('express')
const mongoose = require('mongoose')
const BlogRoutes = require("./routes/BlogRoutes");

// decleare constant variables
const app = express()
const port = 4000
const mongoURI = 'mongodb://127.0.0.1:27017/blog'

// middlewares 
app.use(express.json())

// connect with DB 
mongoose.set('strictQuery', false);
mongoose.connect(mongoURI).then(()=> console.log('DB Connected!'))

// listening app 
app.listen(port,()=> console.log(`alive on ${port}`))

// serve static files 
app.use('/api/blogs/static', express.static('uploads'))

// api endpoints 
app.use('/api/blogs',BlogRoutes)