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

//insert data POST
router.post('/users', async (req, res) => {
  const data = new dataModel(req.body);

  try {
    await data.save();
    res.send(data);
  } catch (error) {
    res.status(500).send(err);
  }

})



module.exports = router;
