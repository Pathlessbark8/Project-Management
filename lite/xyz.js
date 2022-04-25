// const express = require('express')
// const app = express()

// const bodyParser = require("body-parser")
// const router = express.Router()

// const path = require('path')
// const util = require('util');
// const mysql = require('mysql')
// // const mysql = require('promise-mysql')



// // get rquest to display elements from DB

// // app.get('/', (req, res) => {

// //     // res.send(data)

// //     console.log(data)

// //     res.sendFile(path.join(__dirname, '/form.html'))

// //     console.log("hello")
// // })


// app.get('/output', (req, res) => {

//     const conn = mysql.createConnection({
//         host: 'localhost',
//         user: 'root',
//         password: 'mysql',
//         database: 'project_management'
//     })

//     // const getDbConnection = async () => {
//     //     return await mysql.createConnection({
//     //         host: 'localhost',
//     //         user: 'root',
//     //         password: 'mysql',
//     //         database: 'project_management'
//     //     })
//     //   }

//     conn.connect()
//     var abc;
//     // var abc
//     // const query = util.promisify(conn.query).bind(conn);

//     // async function getUsers  ()  {
//     //     const db = await getDbConnection()
//     //     const users = await db.query("SELECT * FROM student")
//     //     await db.end()
//     //     abc= await users
//     //     return users
//     //   }

//     // await getUsers()
//     // .then((val)=>{
//     //     abc=val
//     // abc[key]=val;
//     //     // console.log(abc);
//     // });
//     //   abc =await users;
//     // console.log(abc);

//     conn.query('select * from student', (err, rows) => {
//         if (err) {
//             throw err
//         }

//         console.log('The student table:', rows)
//         res.send(rows)
//         // abc  = rows;
//     })

//     // console.log('The student table:', abc)
//     // res.send(abc)

//     conn.end()

// })


// app.use("/", router)

// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

// router.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '/index.html'))
// })


// router.post('/login', (req, res) => {
//     var user_name = req.body.user;
//     var password = req.body.password;
//     console.log("User name = " + user_name + " , password is "+ password);
//     res.end("yes");
// })


// const PORT = 3000

// app.listen(PORT, ()=>{
//     console.log("Started on PORT " + PORT);
// })