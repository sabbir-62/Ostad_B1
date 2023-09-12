var mongoClient = require('mongodb').MongoClient;
var URL = "mongodb://127.0.0.1:27017/";

mongoClient.connect(URL, function(error, myMongoClient){
    if(error){
        console.log("connection fail");
    }
    else{
        console.log("connection success");

        // insertData(myMongoClient);
        // deleteData(myMongoClient);
        // deleteAllData(myMongoClient);
        // findData(myMongoClient);
        // findAllData(myMongoClient);
        // findDataByProjection(myMongoClient);
        // findDataByQuery(myMongoClient);
        // findDataByLimit(myMongoClient);
        // findDataBySort(myMongoClient);
        // updateData(myMongoClient);
        // createCollection(myMongoClient);
         deleteCollection(myMongoClient);
    }
})

//Data insertion

function insertData(myMongoClient){
    var myDataBase = myMongoClient.db("school");
    var myCollection = myDataBase.collection("students");
    
    var myData = {"id": 12361, "name": "moshiur", "roll": 1, "home": "Fulbari"}

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
function deleteData(myMongoClient){
    var myDataBase = myMongoClient.db("school");
    var myCollection = myDataBase.collection("students");
    
    var deleteItem = {"roll":5};

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
function deleteAllData(myMongoClient){
    var myDataBase = myMongoClient.db("school");
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
function findData(myMongoClient){
    let myDataBase = myMongoClient.db("school");
    let myCollection = myDataBase.collection("students");

    let resultData = {roll: 4};
    myCollection.findOne(resultData, function(error, result){
            console.log(result);
    })
}


// Data find(all data)
function findAllData(myMongoClient){
    let myDataBase = myMongoClient.db("school");
    let myCollection = myDataBase.collection("students");

    myCollection.find().toArray(function(error, result){
            console.log(result);
            console.log(error);
    })
}


// find data by projection(find one or many column)
function findDataByProjection(myMongoClient){
    let myDataBase = myMongoClient.db("school");
    let myCollection = myDataBase.collection("students");

    let obj = {};
    let projection = {projection:{name:1, roll:1}}

    myCollection.find(obj, projection).toArray(function(error, result){
            console.log(result);
    })
}


// find data by query
function findDataByQuery(myMongoClient){
    let myDataBase = myMongoClient.db("school");
    let myCollection = myDataBase.collection("students");

    let query = {"roll": 1};

    myCollection.find(query).toArray(function(error, result){
            console.log(result);
    })
}


// find data by limit
function findDataByLimit(myMongoClient){
    let myDataBase = myMongoClient.db("school");
    let myCollection = myDataBase.collection("students");

    myCollection.find().limit(3).toArray(function(error, result){
            console.log(result);
            console.log(error);
    })
}


// find data by sort
function findDataBySort(myMongoClient){
    let myDataBase = myMongoClient.db("school");
    let myCollection = myDataBase.collection("students");

    let sort = {"name":1}

    myCollection.find().sort(sort).toArray(function(error, result){
            console.log(result);
            console.log(error);
    })
}


// Updated data
function updateData(myMongoClient){
    let myDataBase = myMongoClient.db("school");
    let myCollection = myDataBase.collection("students");

    let findData = {"roll": 1}
    let updatedData = {$set:{"home": "Bogra", "id": 123456}};

    myCollection.updateOne(findData, updatedData, function(error, result){
            console.log(result);
    })
}


// Create Collection

function createCollection(myMongoClient){
    let myDataBase = myMongoClient.db("school");

    myDataBase.createCollection("teachers", function(error, result){
        console.log(result);
    })
}


// Delete(drop) collection(table)
function deleteCollection(myMongoClient){
    let myDataBase = myMongoClient.db("school");

    myDataBase.dropCollection("abc", function(error, result){
        console.log(result);
        console.log(error);
    })
}