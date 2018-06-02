const Journalist = require('../../models/journalist');

module.exports = (app) => {
  //get a list of Journalist from the db
  app.get('/journalist', function(req, res, next){
    Journalist.find({}).then(function(journalist){
      res.send(journalist);
    });
  });
  //add a Journalist in the db
  app.post('/journalist', function(req, res, next){
    var journalist = new Journalist(req.body);
    journalist.save().then(function(journalist){
      res.send(journalist);
    }).catch(next);
  });



  //add an Artikel to the Journalist
  app.post('/journalist/:id', function(req, res, next){
    Journalist.findOne({_id: req.params.id}).then(function(record){
      record.artikel.push({title: req.body.title, text: req.body.text});
      record.save().then(function(){
        res.send(record);
      }).catch(next);
    });
  });


  //update a Journalist from the db
  app.put('/journalist/:id', function(req, res, next){
    Journalist.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
      Journalist.findOne({_id: req.params.id}).then(function(journalist){
        res.send(journalist);
      });
    });
  });
  //deltes are Journalist from db
  app.delete('/journalist/:id', function(req, res, next){
    Journalist.findByIdAndRemove({_id: req.params.id}).then(function(journalist){
      res.send(journalist);
    });
  });
};


