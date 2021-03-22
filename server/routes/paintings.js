var express = require('express');
var router = new express.Router();
const PaintingModel = require("../model/Paintings");


/* GET users listing. */
router.get('/', function(req, res, next) {
  PaintingModel.find()
  .then((data)=>res.status(200).json(data))
  .catch(next)
});

router.get('/:id', function(req, res, next) {
  PaintingModel.findById(req.params.id)
  .then((data)=>res.status(200).json(data))
  .catch(next)
});

router.patch('/:id', function(req, res, next) {
  const paintingToUpdate = { ...req.body };

  PaintingModel.findByIdAndUpdate(req.params.id, paintingToUpdate, {new:true})
  .then((data)=>res.status(200).json(data))
  .catch(next)
});

router.post('/', function(req, res, next) {
  const paintingToCreate = { ...req.body };

  PaintingModel.create(paintingToCreate)
  .then((data)=>res.status(200).json(data))
  .catch(next)
});

router.delete('/:id', function(req, res, next) {
  console.log('coucou')
  PaintingModel.findByIdAndRemove(req.params.id)
  .then((data)=>res.status(200).json(data))
  .catch(next)
});





module.exports = router;
