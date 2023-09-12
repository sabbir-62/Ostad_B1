let mongoClient = require('mongodb').MongoClient;
let URL = 'mongodb+srv://sabbir:sabbir5313@cluster0.bcnvmpc.mongodb.net/?retryWrites=true&w=majority';

mongoClient.connect(URL, function(error){
    if(error){
        console.log('connection fail');
    }
    else{
        console.log('connection success');
    }
})