const { post,user } = require('../db/model')

async function createNewPost(userId,title,body){
    const posts = await post.create({
        userId,
        title,
        body
    })
    return posts
}

async function getAllPosts(query){
    let where={}
    if(query.userId){ where.userId = query.userId }
    const posts = post.findAll({
        include: [ user ],
        where 
    })
    return posts
}

// async function task(){
//     console.log( 
//         await createNewPost(
//             1,
//             'This is a ttile',
//             'This is a body'
//         )
//     )
//     console.log(
//         await createNewPost(
//             2,
//             'This is a anther ttile',
//             'This is a another body'
//         )
//     )
    // const posts = await getAllPosts()
    // for (let p of posts)
    // {
    //     console.log(`${p.title}\n author ${p.user.username} \n ${p.body}`)
    // }
// }

 // task()

exports = module.exports = {
    createNewPost,
    getAllPosts
}