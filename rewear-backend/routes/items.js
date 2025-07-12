const express = require('express');
const router = express.Router();
const { checkAuth } = require('../middleware/auth');
const {
  createItem,
  getItems,
  getItemById,
  updateItem,
  deleteItem
} = require('../controllers/items');

// Protected routes
router.post('/', checkAuth, createItem);
router.get('/', getItems);
router.get('/:id', getItemById);
router.put('/:id', checkAuth, updateItem);
router.delete('/:id', checkAuth, deleteItem);

module.exports = router;