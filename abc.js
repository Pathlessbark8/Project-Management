// const express = require('express')
// const app = express()

// const path = require('path')

// const mysql = require('mysql')

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'mysql',
//     database: 'project_management'
// })

// var data

// connection.connect()


// // connection.query('select * from student', (err, rows) => {
// //     if (err) {
// //         throw err
// //     }

// //     // console.log('The student table:', rows)
// //     data = rows
// //     // conso
// // })

// let abcd = connection.query('select * from student')

// connection.end()

// // console.log(data)

// // var val = data.find(function(o){ return o.key==="select" }).value;

// //function to make student objects
// // function Student(sid,fname){
// //     this.sid = sid;
// //     this.fname = fname;
// // }

// var values = []

// app.get('/', (req, res) => {

//     res.send(data)

//     //SFilling values to student object
//     // for (key in data) {
//     //     values[key] = new Student(data[key].sid, data[key].fname)
//     // console.log(data[key].sid + " " + data[key].fname)
//     // }

//     console.log(data)



//     // console.log(data.length)

//     // res.sendFile(path.join(__dirname, '/index.html'))

//     console.log("hello")
// })

// app.get('/new', (req, res) => {

//     res.send(data)



//     var values = []

//     for (key in data) {
//         console.log(data[key].sid)
//     }
//     // console.log(data.length)

//     // res.sendFile(path.join(__dirname, '/index.html'))

//     console.log("hello")
// })




// app.get('/output', (req, res) => {

//     const conn = mysql.createConnection({
//         host: 'localhost',
//         user: 'root',
//         password: 'mysql',
//         database: 'project_management'
//     })

//     var abc

//     conn.connect()


//     // abc = await conn.query('select * from student')
//     // , (err, rows) => {
//     //     if (err) {
//     //         throw err
//     //     }

//     //     // console.log('The student table:', rows)
//     //     // abc = rows


//     //     // conso
//     // })

//     conn.end()

//     res.send(abc)

//     console.log(abc)

// })




// const PORT = 3000

// app.listen(PORT)