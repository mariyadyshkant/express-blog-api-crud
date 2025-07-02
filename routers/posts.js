const express = require('express');
const router = express.Router();
const PORT = process.env.PORT;
const posts = require('../data/posts.js');
const { appendFile } = require('fs');
// const { log } = require('node:console');

router.use(express.json());

// Index
router.get('/', (req, res) => {
    res.json(posts);
});

// Show
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);

    if (post) {
        res.json(post);
    } else {
        res.status(404);
        return res.json({
            message: `Post with id ${id} not found`
        });
    }
});

//Store
router.post('/', (req, res) => {
    const newId = posts[posts.length - 1].id + 1;

    const newPost = {
        id: newId,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    };

    posts.push(newPost);
    console.log(posts);
    res.status(201);
    res.json(newPost);
});

// Destroy
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);

    if (!post) {
        res.status(404);
        return res.json({
            message: `Post with id ${id} not found`
        });
    }

    posts.splice(posts.indexOf(post), 1);
    console.log(posts);
    res.status(204);
});

module.exports = router;