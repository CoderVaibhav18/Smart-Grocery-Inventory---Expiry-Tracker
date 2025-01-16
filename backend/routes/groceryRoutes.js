const express = require("express");
const {
  getItems,
  addItem,
  deleteItem,
} = require("../controllers/groceryController");
const router = express.Router();

router.post("/add", addItem);
router.get("/items", getItems);
router.delete("/delete/:id", deleteItem);

module.exports = router;
