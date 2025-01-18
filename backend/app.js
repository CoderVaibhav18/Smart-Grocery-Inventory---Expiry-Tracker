require("dotenv").config();
const cors = require('cors')
const express = require("express");
const groceryRoutes = require('./routes/groceryRoutes')
const app = express();
const PORT = process.env.PORT || 5656;
const cron = require('node-cron');
const sendReminderEmail = require('./config/email');

// require('./scheduler/expiryCheck');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Runs daily at 9 AM
cron.schedule('* * * * *', () => {
    const query = `SELECT * FROM groceries WHERE DATEDIFF(expiry_date, CURDATE()) = 1`;

    db.query(query, (err, results) => {
        if (err) throw err;

        results.forEach(item => {
            // Replace with the user's email
            sendReminderEmail('vaibhavsathe160@gmail.com', item.name, item.expiry_date);
        });

        if (results.length > 0) {
            console.log('Reminder emails sent.');
        }
    });
});


app.use('/api', groceryRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));