const express = require('express')
const router = express.Router()
const path = require('path')
const blogs = require('../data/blogs.js')

router.get('/', (req,res) => {
    res.render('home');
})

router.get('/blog', (req,res) => {
    res.render('bloghome', {
        blogs: blogs
    });
})

router.get('/blogpost/:slug', (req,res) => {
    myblog = blogs.filter( (e) => {
        return e.slug == req.params.slug
    })
    console.log(myblog)
    res.sendFile(path.join(__dirname,'../templates/blogpage.html'))
})

module.exports = router