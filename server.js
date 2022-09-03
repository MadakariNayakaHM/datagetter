const app=require('./app');
const dotenv=require('dotenv');
const { default: mongoose } = require('mongoose');
dotenv.config({path:'./config.env'})
const port=process.env.port;
const db=process.env.Database
console.log(process.env.NODE_ENV)
mongoose.connect(db).then(console.log(`app is running at the port ${port}`)).catch();
app.listen(port,()=>console.log(`app is running at the port ${port} database connected`))