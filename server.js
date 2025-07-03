const express = require('express');
const app = express();
const port = 3000;
const postsRouter = require('./routers/posts');
const error500Handler = require('./middlewares/error500_status');
const error404Handler = require('./middlewares/error404_status');

app.use(express.static('public'));
app.use('/posts', postsRouter);


app.get('/', (req, res) => {
    res.send('Questo è il server del mio blog');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

app.use(error404Handler);
app.use(error500Handler);