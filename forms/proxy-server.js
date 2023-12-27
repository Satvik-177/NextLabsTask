import express from "express"
import fetch from "node-fetch"
const app = express();
const PORT = 5500;

app.use(express.json());

app.post('/formapi/32', async (req, res) => {
    try {
        const response = await fetch('https://forms.maakeetoo.com/formapi/32', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(req.body),
        });

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Proxy server listening on port ${PORT}`);
});
