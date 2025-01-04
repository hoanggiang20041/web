const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.post('/confirm-payment', (req, res) => {
    const { paymentConfirmed, amount } = req.body;

    if (paymentConfirmed && amount) {
        // Xử lý thanh toán ở đây
        console.log(`Payment confirmed for amount: ${amount}`);
        return res.status(200).send('Payment confirmed successfully!');
    } else {
        return res.status(400).send('Invalid request');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
