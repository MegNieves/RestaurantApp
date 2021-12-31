var db = require('./models')

module.exports = {
    // plates controller
    platesController: {
      all: function(req, res){
          db.plates.find({}, function(err, plates){
              if(err) console.log("err from db: ", err)
              res.json(plates)
          })
      },
      create: function(req,res){
          var plate = new db.plates(req.body)
          plate.save(function(err, plate){
              if(err) console.log("err from db saving: ", err)
              res.json(plate)
          })
      },
      delete : function(req, res){
        db.plates.findOneAndRemove({_id: req.params.id},
          function(err,plate){
            if(err) console.log("err from db deleting", err)
            db.plates.find({}, function(err, plates){
              if(err) console.log("err from db: ", err)
              res.json(plates)
          })
        })
      },
     update : function(req, res){
        db.plates.findOneAndUpdate({_id: req.params.id},req.body,{new:true}, 
          function(err, plate){
            if(err) console.log("err updating", err)
            res.json(plate)
          })
        }
      }
    }//end of my plates controller