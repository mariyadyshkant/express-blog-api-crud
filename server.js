const express = require('express');
const app = express();
const port = 3000;
const postsRouter = require('./routers/posts');
app.use(express.static('public'));
app.use('/posts', postsRouter);


app.get('/', (req, res) => {
    res.send('Questo è il server del mio blog');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
