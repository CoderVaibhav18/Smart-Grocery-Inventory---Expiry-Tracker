const db = require("../config/db");

const getItems = () => {};

const addItem = (req, res) => {
  const { name, quantity, purchase_date, expiry_date } = req.body;

  db.query(
    "INSERT INTO groceries (name, quantity, purchase_date, expiry_date) VALUES (?, ?, ?, ?)",
    [name, quantity, purchase_date, expiry_date],
    async (err, result) => {
      if (err) {
        console.log(err);
      }
      res.status(200).json({
        message: "Item added successfully",
      });
    }
  );
};

const deleteItem = () => {};

module.exports = {
  getItems,
  addItem,
  deleteItem,
};
