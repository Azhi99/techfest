
const express = require('express')
const app = express()
const Controller = require('../controllers/users.controller')

app.get('/report',Controller.report())
app.get('/all',Controller.getAll())
app.get('/all/:id',Controller.getById())
app.get('/filter',Controller.getByColumn())
app.post('/create',Controller.createOne())
app.post('/create/list',Controller.createList())
app.put('/update/:id',Controller.updateByID())
app.put('/update_column',Controller.updateByColumn())
app.delete('/delete/:id',Controller.deleteByID())
app.delete('/delete_list',Controller.deleteList())

app.post('/login',Controller.login())

module.exports = app 
        