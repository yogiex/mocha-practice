var express = require('express');
var router = express.Router();
var dataModel = require('../models/data.js');

/* GET users listing. */
router.get('/users', async (req, res, next) => {
  //res.send('respond with a resource');
  const data = await dataModel.find({});

  try {
    res.send(data)
  } catch (error) {
    res.status(500).send(err);
  }
});

// * get one data
router.get('/users/:id', async (req, res, next) => {
  //res.send('respond with a resource');
  const data = await dataModel.find({_id:req.params.id});

  try {
    res.send(data)
  } catch (error) {
    res.status(500).send(err);
  }
});

// *insert data POST
router.post('/users', async (req, res) => {
  const data = new dataModel(req.body);

  try {
    data.save();
    res.send(data);
  } catch (error) {
    res.status(500).send(err);
  }
})
// * edit one data
router.put ('/users/:id', async function (req, res, next) {
  const ada = await dataModel.find ({_id:req.params.id});
  try {
    if (!ada) {
      await res.send ({msg: 'id tidak ada'});
    } else {
      await ada.updateOne (
        {},
        {
          $set: {
            nama: req.body.nama,
            asal: req.body.asal
          },
          multi: true,
        },
        function (err, result) {
          if (err) {
            res.send ({msg: 'gagal update karena id tidak ada'});
          } else {
            res.send({msg:"updated"})
            //res.redirect ('/');
          }
        }
      );
    }
  } catch (error) {
    res.status (400).send({msg: 'gagal update'});
  }
});

// * delete by id
router.delete ('/users/:id', async (req, res) => {
  const ada = await dataModel.findOne ({_id: req.params.id});
  try {
    if (!ada) {
      res.send ({msg: 'id tidak ada'});
      //res.redirect ('/');
    } else {
      await ada.remove ({_id: req.params.id});
      res.status(200).send({msg:"deleted"})
      //res.redirect ('/');
    }
  } catch (error) {
    res.status (400).send ({msg: 'bingung slurr'});
  }
});



module.exports = router;
