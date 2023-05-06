const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

 // Finds all categories including its associated Products
router.get('/', async (req, res) => {
  try {
    const data = await Category.findAll( {include: {model: Product}} );
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Finds one category by its `id` value including its associated Products
router.get('/:id', async (req, res) => {
  try {
    const data = await Category.findByPk(req.params.id, {include: {model: Product}} );
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Creates new category
router.post('/', async (req, res) => {
  try {
    const data = await Category.create( req.body );
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Updates a category by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const data = await Category.update( req.body, {where: req.params});
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Deletes a category by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const data = await Category.destroy( {where: req.params} );
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
