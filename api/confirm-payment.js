const cors = require('cors');

module.exports = (req, res) => {
    // Enable CORS
    cors()(req, res, () => {});
    
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

            // Add any additional validation for amount format
            if (isNaN(parseFloat(amount))) {
                return res.status(400).json({ 
                    success: false,
                    message: "Invalid amount format" 
                });
            }

            // Process the payment here
            // Add your payment processing logic

            return res.status(200).json({ 
                success: true,
                message: `Payment of ${amount} confirmed successfully!` 
            });
        } catch (error) {
            console.error('Payment processing error:', error);
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
};
