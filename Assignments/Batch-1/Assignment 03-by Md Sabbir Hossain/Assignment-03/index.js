var mongoClient = require('mongodb').MongoClient;
var URL = "mongodb://localhost:27017/";

mongoClient.connect(URL, function(error, dbs){
    if(error){
        console.log("connection failed");
    }
    else{
        console.log("connection success");

         insertData(dbs);
        // deleteData(dbs);
        // deleteAllData(dbs);
        // findData(dbs);
        // findAllData(dbs);
        // findDataByProjection(dbs);
        // findDataByQuery(dbs);
        // findDataByLimit(dbs);
        // findDataBySort(dbs);
        // updateData(dbs);
        // createCollection(dbs);
        //deleteCollection(dbs);
    }
})

//Data insertion
let insertData = (dbs) => {
    var myDataBase = dbs.db("school");
    var myCollection = myDataBase.collection("students");
    
    var myData = {"id": 12361, "name": "Moshtasedf", "roll": 4356431, "home": "sadar"}

    myCollection.insertOne(myData, function(error){
        if(error){
            console.log("insertion fail");
        }
        else{
            console.log("insertion success");
        }
    })
}



// Data delete(one data)
let deleteData = (dbs) => {
    var myDataBase = dbs.db("school");
    var myCollection = myDataBase.collection("students");
    
    var deleteItem = {"roll": 5};

    myCollection.deleteOne(deleteItem, function(error){
        if(error){
            console.log("Deletion fail");
        }
        else{
            console.log("Deletion  success");
        }
    })
}


// Data delete(All data)
let deleteAllData = (dbs) => {
    var myDataBase = dbs.db("school");
    var myCollection = myDataBase.collection("students");

    myCollection.deleteMany(function(error, result){
        if(error){
            console.log("deletion fail")
        }
        else{
            console.log("deletion success ", result);
        }
    })
    
}


// Data find(one data)
let findData = (dbs) => {
    let myDataBase = dbs.db("school");
    let myCollection = myDataBase.collection("students");

    let resultData = {roll: 3};

    myCollection.findOne(resultData, function(error, result){
        if(error){
            console.log("Data finding failed")
        }
        else{
            console.log("Finding success: ", result);
        }
    })
}


// Data find(all data)
let findAllData = (dbs) => {
    let myDataBase = dbs.db("school");
    let myCollection = myDataBase.collection("students");

    myCollection.find().toArray(function(error, result){
        if(error){
            console.log("Data finding failed")
        }
        else{
            console.log("Finding success: ", result);
        }
    })
}


// find data by projection(find one or many column)
let findDataByProjection = (dbs) => {
    let myDataBase = dbs.db("school");
    let myCollection = myDataBase.collection("students");

    let obj = {};
    let projection = {projection:{name:1, roll:1}}

    myCollection.find(obj, projection).toArray(function(error, result){
        if(error){
            console.log("Data finding failed")
        }
        else{
            console.log("Finding success: ", result);
        }
    })
}


// find data by query
let findDataByQuery = (dbs) => {
    let myDataBase = dbs.db("school");
    let myCollection = myDataBase.collection("students");

    let query = {"roll": 1};

    myCollection.find(query).toArray(function(error, result){
        if(error){
            console.log("Data query failed")
        }
        else{
            console.log("Query success: ", result);
        }
    })
}


// find data by limit
let findDataByLimit = (dbs) => {
    let myDataBase = dbs.db("school");
    let myCollection = myDataBase.collection("students");

    myCollection.find().limit(3).toArray(function(error, result){
        if(error){
            console.log("Data finding failed")
        }
        else{
            console.log("Finding by limit success: ", result);
        }
    })
}


// find data by sort
let findDataBySort = (dbs) => {
    let myDataBase = dbs.db("school");
    let myCollection = myDataBase.collection("students");

    let sort = {"name":1}

    myCollection.find().sort(sort).toArray(function(error, result){
        if(error){
            console.log("Sorting failed")
        }
        else{
            console.log("Sorting success: ", result);
        }
    })
}


// Updated data
let updateData = (dbs) => {
    let myDataBase = dbs.db("school");
    let myCollection = myDataBase.collection("students");

    let findData = {"roll": 1}
    let updatedData = {$set:{"home": "Mohonpur", "id": 93456}};

    myCollection.updateOne(findData, updatedData, function(error, result){
        if(error){
            console.log("Data Updating failed")
        }
        else{
            console.log("Data Updating success: ", result);
        }
    })
}


// Create Collection
let createCollection = (dbs) => {
    let myDataBase = dbs.db("school");

    myDataBase.createCollection("staff", function(error, result){
        if(error){
            console.log("Collection Creating failed")
        }
        else{
            console.log("Collection Creating success: ", result);
        }
    })
}


// Delete(drop) collection(table)
let deleteCollection = (dbs) => {
    let myDataBase = dbs.db("school");

    myDataBase.dropCollection("stuf", function(error, result){
        if(error){
            console.log("Failed")
        }
        else{
            console.log("Success: ", result);
        }
    })
}