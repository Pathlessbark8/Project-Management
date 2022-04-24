const util = require('util');
const mysql = require('mysql')

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    database: 'project_management'
})


conn.connect()
function allStudent(){
conn.query('select * from student', (err, rows) => {
    if (err) {
        throw err
    }

    console.log('The student table:', rows)
    
})

}

conn.end()

