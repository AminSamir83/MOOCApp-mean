const router = require('express').Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
var bodyParser=require('body-parser')

const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/App9', (err, client) => {
        if (err) return console.log(err);
        let db = client.db('App9');
        closure(db);
    })
}

// find one user by id

router.get('/users/:id',(req,res)=>{
    connection(db=>{
        db.collection('users').findOne({_id:ObjectID(req.params.id)},(err,result)=>{
            res.send(result);
        })
    })
})

// get users
router.get('/users', (req, res)=> {
    connection( db => {
        db.collection('users').find().toArray().then(result=>{
            res.send(result);
        })
    })
})

//add user

router.post('/users',(req,res)=>{
    connection (db =>{
        db.collection('users').insert(req.body,(err,result)=>{
            res.send(result);
        })
    })
})

// update a user
router.put('/users/:id', (req, res) =>{
    connection(db=>{
      db.collection('users').updateOne({_id:ObjectID(req.params.id)},{$set:req.body},(err,result)=>{
        res.send(result);
    })
  })
  })

  // delete a user

  router.delete('/users/:id',(req,res)=>{
    connection(db=>{
      db.collection('users').remove({_id:ObjectID(req.params.id)},(err,result)=>{
        res.send(result);
    })
  })
  })
 
  
  
  
  


module.exports = router;