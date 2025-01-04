// api/confirm-payment.js
const express = require('express');
const app = express();

// Middleware để phân tích JSON request body
app.use(express.json());

app.post('/api/confirm-payment', (req, res) => {
    const { paymentConfirmed } = req.body;

    if (paymentConfirmed) {
        return res.status(200).json({ message: "Payment confirmed successfully!" });
    } else {
        return res.status(400).json({ message: "Payment not confirmed." });
    }
});

// Xuất ứng dụng để Vercel có thể sử dụng
module.exports = app;
