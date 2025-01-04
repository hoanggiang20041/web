// api/confirm-payment.js
module.exports = (req, res) => {
    if (req.method === 'POST') {
        const { paymentConfirmed } = req.body;

        if (paymentConfirmed) {
            return res.status(200).json({ message: "Payment confirmed successfully!" });
        } else {
            return res.status(400).json({ message: "Payment not confirmed." });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};
