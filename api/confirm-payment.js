const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/confirm-payment', (req, res) => {
    if (req.method === 'POST') {
        try {
            const { paymentConfirmed, amount } = req.body;

            // Validate the input
            if (!paymentConfirmed || !amount) {
                return res.status(400).json({ 
                    success: false,
                    message: "Missing required fields" 
                });
            }

            // Validate amount format
            if (isNaN(parseFloat(amount))) {
                return res.status(400).json({ 
                    success: false,
                    message: "Invalid amount format" 
                });
            }

            // Process the payment logic here
            // ...

            return res.status(200).json({ 
                success: true,
                message: `Payment of ${amount} confirmed successfully!` 
            });
        } catch (error) {
            console.error('Payment processing error:', error.message);
            return res.status(500).json({ 
                success: false,
                message: "Internal server error" 
            });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({ 
            success: false,
            message: `Method ${req.method} Not Allowed` 
        });
    }
});

// Khởi động server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
