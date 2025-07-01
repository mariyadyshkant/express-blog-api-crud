const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Questo è il server del mio blog');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
