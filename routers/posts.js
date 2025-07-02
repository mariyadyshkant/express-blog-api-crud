const express = require('express');
const router = express.Router();
const PORT = process.env.PORT;
const posts = require('../data/posts.js');
const { log } = require('node:console');

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

// Destroy
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);

    if (post) {
        res.status(204);
        posts.splice(posts.indexOf(post), 1);
        res.json({
            message: `Post with id ${id} deleted successfully`
        });
        console.log(posts);
    } else {
        res.status(404);
        return res.json({
            message: `Post with id ${id} not found`
        });
    }
});