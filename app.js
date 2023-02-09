const express=require('express');
const path = require('path');

const app=express();

const userRouter=require('./routes/user');
const homeRouter=require('./routes/home');

app.use(express.static(path.join(__dirname,'public')));

app.use(userRouter);
app.use(homeRouter);
app.listen(3000);