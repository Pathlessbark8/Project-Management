// IMPORTING

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
const bodyParser = require("body-parser");
const session = require('express-session');
const cookieParser = require('cookie-parser');
const store = new session.MemoryStore();





// ROUTES

var usersRouter = require('./routes/users');
var interLoginRouter = require('./routes/interLogin');
var interSignupRouter = require('./routes/interSignup');

//Student
var studentSignupGetRouter = require('./routes/studentSignUpGet');
var studentSignupPostRouter = require('./routes/studentSignUpPost');
var studentLoginPostRouter = require('./routes/studentLoginPost');
var studentLoginGetRouter = require('./routes/studentLoginGet');
var landingRouter = require('./routes/landing');
// var studentProjectListRouter=require("./routes/projectStudentView")

//Professor
var profSignupGetRouter = require('./routes/profSignupGet')
var profSignupPostRouter = require('./routes/profSignupPost')
var profSigninGetRouter = require('./routes/profLoginGet')
var profSigninPostRouter = require('./routes/profLoginPost')
var profRouter=require('./routes/prof')
var project_entryGetRouter = require('./routes/projectEntryGet')
var project_entryPostRouter = require('./routes/projectEntryPost')

//Projects
var studentProjectsGetRouter = require('./routes/projectStudentViewGet')
var studentProjectsPostRouter = require('./routes/projectStudentViewPost')
var professorProjectsRouter = require('./routes/projectProfessorViewGet')
var professorStudentsRouter = require('./routes/studentProfessorView')




//Setting up App
const app = express();

//session
app.use(session({
  secret : 'some secret',
  cookie : {maxAge : 300000},
  saveUnintialized : false,
  store
}));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// view engine setup
app.set('views', path.join(__dirname, 'views'));


// app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));






// PATHS

app.use('/', interLoginRouter)
app.use('/', interSignupRouter)

//students
app.use('/users', usersRouter);
app.use('/', studentSignupGetRouter);
app.use('/', studentSignupPostRouter);
app.use('/', landingRouter);
app.use('/',studentLoginPostRouter);
app.use('/',studentLoginGetRouter);
app.use('/prof', profRouter);
app.use('/student', studentProjectsGetRouter)
app.use('/student', studentProjectsPostRouter)
// app.use('/',loginRouter);

//professor
app.use('/signup', profSignupGetRouter)
app.use('/signup', profSignupPostRouter)
app.use('/login', profSigninGetRouter)
app.use('/login', profSigninPostRouter)
app.use('/prof', professorProjectsRouter)
app.use('/prof', professorStudentsRouter)
app.use('/prof', project_entryGetRouter)
app.use('/prof', project_entryPostRouter)









// ERROR HANDLING

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









// PORT

const PORT = 3000;

app.listen(PORT, ()=>{
    console.log("Started on PORT " + PORT);
})