const router = require('express').Router();
const rescue = require('express-rescue');
const Category = require('../models/Category');

router.post('/', rescue (async (req, res) => {
  const newCategory = new Category(req.body);

  const savedCategory = await newCategory.save();

  res.status(200).json(savedCategory);
}));

router.get('/', rescue (async (_req, res) => {
  const categories = await Category.find();
  res.status(200).json(categories);
}));

router.use((err, _req, res, _next) => {
  res.status(500).json({ error: `Error: ${err.message}` });
});

module.exports = router;
