const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

const {connectToMongoDb} = require('./final/connect')
connectToMongoDb('mongodb://127.0.0.1:27017/task-manager');

const taskRoute = require('./final/routes/taskRoute');
app.use('/api/',taskRoute);

app.listen(3000,()=>{
    console.log("running on port 3000");
});