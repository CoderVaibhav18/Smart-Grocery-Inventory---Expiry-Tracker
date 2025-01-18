const db = require('../config/db');
const cron = require('node-cron');
const sendReminderEmail = require('../config/email');

// Runs daily at 9 AM
const scheduller = () => {
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
}

module.exports = {
  scheduller
}