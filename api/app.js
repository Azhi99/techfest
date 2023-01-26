const jwt = require('jsonwebtoken');
require('dotenv').config();
const express = require('express')
require("dotenv").config();
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const app = express()

const users = require('./routes/users.route')
const visitors = require('./routes/visitors.route')
const visitor_check_in = require('./routes/visitor_check_in.route')
const cities = require('./routes/cities.route')

app.use(morgan('dev'))

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(cors())

app.get('/documentation',(req,res,next)=>{
    res.sendFile('./api-documentation/index.html',{root:__dirname})
})

app.get('/postman.json',(req,res,next)=>{
    res.sendFile('./api-documentation/postman.json',{root:__dirname})
})


app.get('/documentation/users',(req,res,next)=>{
    res.sendFile('./api-documentation/users.html',{root:__dirname})
})

app.get('/documentation/visitors',(req,res,next)=>{
    res.sendFile('./api-documentation/visitors.html',{root:__dirname})
})

app.get('/documentation/visitor_check_in',(req,res,next)=>{
    res.sendFile('./api-documentation/visitor_check_in.html',{root:__dirname})
})


app.use('/users',users)
app.use('/visitors',visitors)
app.use('/visitor_check_in',visitor_check_in)
app.use('/cities',cities)

app.post('/verifyToken', (req, res, next) => {
    const token = req.body.token
    console.log(process.env.TOKEN_SECRET);
    console.log(token);
    if (token) {
        jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).json({
                    message: 'Auth Failed'
                })
            }
            req.user = decoded
            res.status(200).json({
                message: 'Auth Successful'
            })
        })
    } else {
        return res.status(401).json({
            message: 'Auth Failed'
        })
    }
})

app.use((req,res,next)=>{
    const error = new Error('Route Not Found')
    error.status = 404
    next(error)
})
app.use((error,req,res,next)=>{
    res.status(error.status || 500)
    res.json({
        error:{
            message:error.message
        }
    })
})

const port = process.env.SERVER_PORT || 5000
app.listen(port,()=>{
    console.log('listening on port : '+port)
    console.log('visit /documentation to see full api documentation')
})
        