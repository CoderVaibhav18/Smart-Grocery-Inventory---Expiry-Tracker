const db = require("../config/db");

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

const getItems = (req, res) => {
  db.query("SELECT * FROM groceries", (err, result) => {
    if (err) throw err;
    res.status(200).json(result);
  });
};

const deleteItem = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM groceries WHERE id = ?", [id], (err, result) => {
    if (err) throw err;
    res.status(200).json({ message: "Item deleted successfully" });
  });
};

module.exports = {
  getItems,
  addItem,
  deleteItem,
};
