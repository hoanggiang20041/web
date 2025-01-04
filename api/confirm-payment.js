export default function handler(req, res) {
    // Kiểm tra phương thức HTTP
    if (req.method === 'POST') {
        const { paymentConfirmed, amount } = req.body;

        if (paymentConfirmed && amount) {
            // Xử lý thanh toán ở đây
            console.log(`Payment confirmed for amount: ${amount}`);
            return res.status(200).send('Payment confirmed successfully!');
        } else {
            return res.status(400).send('Invalid request');
        }
    } else {
        // Phương thức không hợp lệ
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
