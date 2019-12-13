const { MongoClient } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {

    const db = client.db('CoolMongo');

    if(err){
        return console.log('Unable to connect to mongoDB server');
    }

    console.log('Connected to mongoDB server!');

db.collection('CoolMongo').insertOne({
    taskName: 'learning mongodb',
    completed: false
}, (err, result) => {
    if(err){
        console.log("there was an error inserting new data");
    }
})

    client.close();

})