const express = require('express')
const router = express.Router()
const path = require('path')
const blogs = require('../data/blogs.js')

router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'../templates/index.html'))
})

router.get('/blog', (req,res) => {
    blogs.forEach(element => {
        console.log(element.quote)
        console.log(element.author)
    });
    res.sendFile(path.join(__dirname,'../templates/index.html'))
})

module.exports = router