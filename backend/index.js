const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')
//const bodyParser = require('body-parser')
//const { json } = require('body-parser')
const sql = require('./database')
//const { parse } = require('postcss')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.get('/', (req,res) => {
    res.send('Connected to the backend server')
})

app.get('/getbooking', (req,res) => {
    let sqlQuery = `SELECT * FROM booking`
    sql.query(sqlQuery, (error, result) => {
        res.send(result)
    })
})

app.post('/insertdirect', (req, res) => {
    let sqlQuery = `INSERT INTO booking(id, email, booking_day_one, booking_day_two, booking_day_three) VALUES (1, 'ganesha@gmail.com', 'October, 4; 7:00 AM', 'October, 5; 7:00 AM', 'October, 6; 7:00 AM')`
    sql.query(sqlQuery, (error, result) => {
        if(error) console.log(error)
        res.send(result)
        console.log(result)
        console.log('Data inserted')
    })
})

app.post('/api/insert', cors(), (req,res) => {
    let id = req.body.id
    let email = req.body.email
    let dayOne = req.body.booking_day_one
    let dayTwo = req.body.booking_day_two
    let dayThree = req.body.booking_day_three
    let location = req.body.location
    let sqlQuery = `INSERT INTO booking (id, email, booking_day_one, booking_day_two, booking_day_three, location) VALUES (?, ?, ?, ?, ?, ?)`
    sql.query(sqlQuery, [id, email, dayOne, dayTwo, dayThree, location], (error, result) => {
        if(error) console.log(error)
        res.send(result)
        console.log(`Details of the user ${email} inserted`)
        console.log(result)
    })
})

app.delete('/delete', cors(), (req,res) => {
    let sqlQuery = `DELETE FROM booking WHERE id= 2`
    sql.query(sqlQuery, (error, result) => {
        console.log('row deleted')
        res.send(result)
    })
})

//selecting particular format of date
app.get('/formatbooking', (req,res) => {
    let sqlQuery = `SELECT id, email, DATE_FORMAT(booking_day_one, '%a %Y %M %e %H:%i:%s') AS DAY_ONE FROM booking`
    sql.query(sqlQuery, (error, result) => {
        if(error) console.log(error)
        res.send(result)
        console.log(result)
    })
})

app.listen(port, () => {
    console.log(`listening on port: ${port} at http://localhost:${port}`)
    sql.connect(err => {
        if(err) console.log(err)
        console.log('Database connected')
    })
})