const express = require("express");
const {
  getItems,
  addItem,
  deleteItem,
} = require("../controllers/groceryController");
const router = express.Router();

router.get("/items", getItems);
router.post("/add", addItem);
router.delete("/delete/:id", deleteItem);

module.exports = router;
