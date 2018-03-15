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

//get cours
router.get('/cours', (req, res)=> {
    connection( db => {
        db.collection('cours').find().toArray().then(result=>{
            res.send(result);
        })
    })
})

//add cours

router.post('/cours',(req,res)=>{
    connection (db =>{
        db.collection('cours').insert(req.body,(err,result)=>{
            res.send(result);
        })
    })
})

// get cours by id

router.get('/cours/:id',(req,res)=>{
    connection(db=>{
        db.collection('cours').findOne({_id:ObjectID(req.params.id)},(err,result)=>{
            res.send(result);
        })
    })
})

// get categories

router.get('/category',(req,res)=>{
    connection(db=>{
        db.collection('cours').find(req.body,(err,result)=>{
            res.send(result.category);
        })
    })
})

//get comments by id

router.get('/comments/:id',(req,res)=>{
    connection(db=>{
        db.collection('cours').findOne({_id:ObjectID(req.params.id)},(err,result)=>{
            res.send(result.comments);
        })
    })
})

// update cours

router.put('/cours/:id', (req, res) =>{
    connection(db=>{
      db.collection('cours').updateOne({_id:ObjectID(req.params.id)},{$set:req.body},(err,result)=>{
        res.send(result);
    })
  })
  })

  //delete cours

  router.delete('/cours/:id',(req,res)=>{
    connection(db=>{
      db.collection('cours').remove({_id:ObjectID(req.params.id)},(err,result)=>{
        res.send(result);
    })
  })
  })

  //add comment to a cours

  router.post('/comments/:id',(req,res)=>{
    connection (db =>{
        db.collection('cours').update({_id:ObjectID(req.params.id)},{$addToSet: {comments: req.body}},(err,result)=>{
            res.send(result.comments);
        })
    })
})

// update likes

router.put('/likes/:id', (req, res) =>{
    connection(db=>{
      db.collection('cours').updateOne({_id:ObjectID(req.params.id)},{$set:req.body},(err,result)=>{
        res.send(result);
    })
  })
  })

  // delete a comment by id

  router.delete('/comments/:id',(req,res)=>{
    connection(db=>{
      db.collection('cours').updateOne({_id:ObjectID(req.params.id)},{$unset:req.body.comments},(err,result)=>{
        res.send(result);
    })
  })
  })

module.exports = router;