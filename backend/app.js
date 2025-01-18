require("dotenv").config();
const cors = require('cors')
const express = require("express");
const groceryRoutes = require('./routes/groceryRoutes');
const { scheduller } = require("./scheduler/expiryCheck");
const app = express();
const PORT = process.env.PORT || 5656;


// require('./scheduler/expiryCheck');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


scheduller()

app.use('/api', groceryRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));