const { genrateRandomWords } = require('../utils/username')
const { user } = require('../db/model')

async function createuser(){
    const users = await user.create({
        username: genrateRandomWords()
    })
    return users
}

async function getUserById(id){
    return await user.findOne({where: {id} })
}

async function getUserByName(username){
    return await user.findOne({where: {username} })
}

// async function test(){
//     console.log(await createuser())
//     console.log(await createuser())
//     console.log(await createuser())
//     console.log(await createuser())
//     console.log(await createuser())
// }
// test()

exports = module.exports = {
    createuser,
    getUserByName,
    getUserById
}