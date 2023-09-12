const app = require('./app');
const dotEnv = require('dotenv');

dotEnv.config({path:'./config.env'});

app.listen(process.env.RUNNING_PORT,() =>{
    console.log("Running Port no:", process.env.RUNNING_PORT);
})