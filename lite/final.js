// const express = require('express')
// const app = express()

// const bodyParser = require("body-parser")
// const router = express.Router()

// const path = require('path')
// const util = require('util');
// const mysql = require('mysql')
// require('custom-env').env()


// app.get('/output', (req, res) => {

//     const conn = mysql.createConnection({
//         host: process.env.HOST,
//         user: process.env.USER,
//         password: process.env.PASSWORD,
//         database: process.env.DB
//     })


//     conn.connect()

//     conn.query('select * from student', (err, rows) => {
//         if (err) {
//             throw err
//         }

//         // console.log('The student table:', rows)
//         res.send(rows)
//     })


//     conn.end()

// })


// app.use("/", router)

// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())

// router.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '/student.html'))
// })

// router.get('/student.js', (req, res) => {
//     res.sendFile(path.join(__dirname, '/student.js'))
// })


// app.get('/form', (req, res) => {
//     res.sendFile(path.join(__dirname, '/form.html'))
// })


// app.post('/form', (req, res) => {
//     var sid = req.body.sid;
//     var fname = req.body.fname;
//     var lname = req.body.lname;
//     var course = req.body.course;
    
//     console.log(req.body)
// })

// app.get('/abc', (req, res)=>{
//     res.sendFile(path.join(__dirname, 'abc.html'));
// });

// app.post('/login',(req, res) => {
//     var user_name = req.body.user;
//     var password = req.body.password;
//     console.log("User name = "+user_name+", password is "+password);
//     res.end("yes");
// });

// app.post('/entry',(req, res) => {

//     var sid = req.body.sid
//     var fname = req.body.fname
//     var lname = req.body.lname
//     var course = req.body.course
    
//     console.log("User name = "+req.body.sid+" First name = "+req.body.fname+" Last name = "+ req.body.lname+ " course = "+ req.body.course);
    

//     //DB Part
//     const conn = mysql.createConnection({
//       host: process.env.HOST,
//       user: process.env.USER,
//       password: process.env.PASSWORD,
//       database: process.env.DB
//     })


//     conn.connect()

//     var command = "insert into student VALUES ('" + sid + "','" + fname + "','" + lname + "','" + course +"');";


//     conn.query(command, (err, rows) => {
//         if (err) {
//             throw err
//         }

//         console.log("Value Entered");
//         // console.log('The student table:', rows)
//         // res.send(rows)
//     })


//     conn.end()

//     //DB Part End


//     res.end("yes");
// });
    


// const PORT = 3000;

// app.listen(PORT, ()=>{
//     console.log("Started on PORT " + PORT);
// })

