const express = require('express');
const router = express.Router();
const PORT = process.env.PORT;
const posts = require('../data/posts.js');

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

// Update
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);

    if (!post) {
        res.status(404);
        return res.json({
            message: `Post with id ${id} not found`
        });
    }

    const updatedPost = {
        id: post.id,
        title: req.body.title || post.title,
        content: req.body.content || post.content,
        image: req.body.image || post.image,
        tags: req.body.tags || post.tags
    };

    posts[posts.indexOf(post)] = updatedPost;
    console.log(posts);
    res.json(updatedPost);
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