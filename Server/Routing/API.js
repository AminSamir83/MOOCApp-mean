/*sconst router = require('express').Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;


const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/app9', (err, client) => {
        if (err) return console.log(err);
        let db = client.db('app9');
        closure(db);
    })
}


// Error handling
const sendError = (err, res, code) => {
    response.status = code;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(code).json(response);
  };

  // Response handling
  let response = {
    status: 200,
    data: [],
    message: null
  };

  router.get('/app9', (req, res)=> {
      res.sendFile(__dirname+'/index.html')
    })


  module.exports = router;*/