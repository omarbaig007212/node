const { Router } = require('express')
const { createNewPost,getAllPosts } = require('../../controllers/post')
const route = Router()

route.get('/', async (req,res) => {
    const posts = await getAllPosts()
    res.status(200).send(posts)
})

route.post('/', async (req,res) => {
    const { userId, title, body } = req.body
    if((!userId) || (!title) || (!body))
    {
        return res.status(400).send({
            error: "Bad Connection"
        })
    }
    const post = await createNewPost(userId,title,body)
    res.status(201).send(post)
})

exports = module.exports = {
    PostRoute: route
}