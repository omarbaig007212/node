const { Router } = require('express')
const route = Router()
const { createuser,
    getUserByName,
    getUserById
} = require('../../controllers/user')

route.get('/:id', async (req,res) => {
    let user;
    if(isNaN(parseInt(req.params.id))) {
        user = await getUserByName(req.params.id)
    }
    else
    {
        user = await getUserById(req.params.id)
    }

    if(user){
        res.status(200).send(user)
    }
    else{
        res.status(404).send({
            error: 'No such id or username'
        })
    }
})

route.post('/', async (req,res) => {
    const user= await createuser()
    res.status(201).send(user)
})

exports = module.exports = {
    UserRoute: route
}