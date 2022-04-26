// New way

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require("body-parser");

// var indexRouter = require('./index');


var usersRouter = require('./routes/users');

//Student
var formPostRouter = require('./routes/formPost');
var formGetRouter = require('./routes/formGet');
var landingRouter = require('./routes/landing');
var loginRouter=require('./routes/loginGet')
var profRouter=require('./routes/prof')

//Professor
var profSignupGetRouter = require('./routes/profSignupGet')
var profSignupPostRouter = require('./routes/profSignupPost')
var profSigninGetRouter = require('./routes/profSigninGet')
var profSigninPostRouter = require('./routes/profSigninPost')

//Projects
var studentProjectsRouter = require('./routes/projectStudentView')
var professorProjectsRouter = require('./routes/projectProfessorView')
var professorStudentsRouter = require('./routes/studentProfessorView')

var app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
// view engine setup
app.set('views', path.join(__dirname, 'views'));
// app.use('/', indexRouter);

//students
app.use('/users', usersRouter);
app.use('/', formPostRouter);
app.use('/', formGetRouter);
app.use('/', landingRouter);
app.use('/prof', profRouter);
app.use('/student', studentProjectsRouter)
// app.use('/',loginRouter);

//professor
app.use('/signup', profSignupGetRouter)
app.use('/signup', profSignupPostRouter)
app.use('/signin', profSigninGetRouter)
app.use('/signin', profSigninPostRouter)
app.use('/prof', professorProjectsRouter)
app.use('/prof', professorStudentsRouter)




// app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// module.exports = app;

const PORT = 3000;

app.listen(PORT, ()=>{
    console.log("Started on PORT " + PORT);
})