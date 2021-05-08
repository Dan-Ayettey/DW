
const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
import indexRouter from  './routes/router';
const swaggerUi =require('swagger-ui-express')
import * as swaggerDocument from "./swagger.json"

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(cors({origin:true}))
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req:any, res:any, next:any) {
  res.status(404).json({status:404,mg:'Not found, check method'});
});


// error handler
app.use(function(err:any, req:any, res:any, next:any ) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
export default app;
