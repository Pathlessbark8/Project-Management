const express = require('express')
const app = express()

const bodyParser = require("body-parser")
const router = express.Router()

const path = require('path')
const util = require('util');
const mysql = require('mysql')


app.get('/output', (req, res) => {

    const conn = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'mysql',
        database: 'project_management'
    })


    conn.connect()

    conn.query('select * from student', (err, rows) => {
        if (err) {
            throw err
        }

        console.log('The student table:', rows)
        res.send(rows)
    })


    conn.end()

})


app.use("/", router)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})


router.post('/login', (req, res) => {
    var user_name = req.body.user;
    var password = req.body.password;
    console.log("User name = " + user_name + " , password is "+ password);
    res.end("yes");
})


const PORT = 3000;

app.listen(PORT, ()=>{
    console.log("Started on PORT " + PORT);
})