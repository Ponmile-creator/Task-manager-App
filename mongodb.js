// CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient 
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb') 

const connectionURL = 'mongodb://127.0.0.1:27017/task-manager'
const databaseName = 'task-manager'


MongoClient.connect(connectionURL, { useNewUrlParser: true },  (error, client) => {
    if (error) {
    return console.log('Unable to connect to database') 
    } 

   const db = client.db(databaseName)

    //    db.collection('users').findOne({ _id: new ObjectID("5eb4ec5a5e95e617ece27d9a") },(error, user) => {
    //        if (error) {
    //            return console.log('Unable to fetch')
    //        }

    //        console.log(user)

    //    })

   db.collection('users').find({ age :23 }).toArray((error, users) => {
       console.log(users)

   })
   db.collection('users').find({ age :23 }).count((error, users) => {
        console.log(count)

    })

})

 //    db.collection('users').insertOne({
    //        name: 'Femi',
    //        age: 25
    //    }, (error, result) => {
    //        if (error) {
    //            return console.log('Unable to insert user')
    //        }
    //        console.log(result.ops)

    //    })
 
    // db.collection('users').insertMany([
    //     {
    //         name: 'Akin',
    //         age: 27
    //     }, {
    //         name: 'Pelumi',
    //         age: 20
    //     }  
    // ], (error, result) => {
    //     if (error) { 
    //         return console.log('Unable to insert documents!')
    //     }
    
    //     console.log(result.ops)
    // })
    // db.collection('users-2').insertMany([
    //     {
    //         description: 'Iron the clothes ',
    //         completed: true
    //     }, {
    //         description: 'Clean the house',
    //         completed: false
    //     }, {
    //         description: 'Wash the car',
    //         completed: false
    //     }  
    // ], (error, result) => {
    //     if (error) { 
    //         return console.log('Unable to insert tasks!')
    //     }
    
    //     console.log(result.ops)
    // })