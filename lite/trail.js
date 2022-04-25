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


// connection.query("select * from student", (err, rows) => {
//     if (err) {
//         throw err
//     }

//     // console.log('The student table:', rows)
//     data = rows
//     // conso
// })


// connection.end()

// function datapoint(){
//     return data;
// }


// var values = []

// app.get('/', (req, res) => {

//     // res.send(data)

//     console.log(data)

//     res.sendFile(path.join(__dirname, '/form.html'))

//     console.log("hello")
// })


// app.get('/output', (req, res) => {

//     const conn = mysql.createConnection({
//         host: 'localhost',
//         user: 'root',
//         password: 'mysql',
//         database: 'project_management'
//     })

//     conn.connect()


//     conn.query('select * from student', (err, rows) => {
//         if (err) {
//             throw err
//         }

//         console.log('The student table:', rows)
//         res.send(rows)
//     })

//     conn.end()

// })




// const PORT = 3000

// app.listen(PORT)