const router = require('express').Router();
const { Tag, Product } = require('../../models');

// The `/api/tags` endpoint

// Finds all tags including its associated Product data
router.get('/', async (req, res) => {
  try {
    const data = await Tag.findAll( {include: {model: Product}} );
    res.status(200).json(data);
  } 
  catch (err) { res.status(500).json(err) }
});

// Finds a single tag by its `id` including its associated Product data
router.get('/:id', async (req, res) => {
  try {
    const data = await Tag.findByPk(req.params.id, {include: {model: Product}} );
    res.status(200).json(data);
  } 
  catch (err) { res.status(500).json(err) }
});

  // Creates a new tag
router.post('/', async (req, res) => {
  try {
    const data = await Tag.create( req.body );
    res.status(200).json(data);
  } 
  catch (err) { res.status(500).json(err) }
});

  // Updates a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const data = await Tag.update( req.body, {where: req.params});
    res.status(200).json(data);
  } 
  catch (err) { res.status(500).json(err) }
});

// Deletes on tag by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const data = await Tag.destroy( {where: req.params} );
    res.status(200).json(data);
  } 
  catch (err) { res.status(500).json(err) }
});

module.exports = router;
