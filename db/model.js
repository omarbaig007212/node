const sequelize = require('sequelize')

let db;

db=new sequelize({
    dialect: 'mysql',
    database: '5ZC8zQHPP5',
    username: '5ZC8zQHPP5',
    password: 'irln7q81ee',
    host: 'remotemysql.com'
})

// db= new sequelize("postgres://ygsmduxfvuktdy:803e293e096f5f66fc0e1211b9167d97d7e2c62ad78f91fabac0276ed5e9a387@ec2-54-160-96-70.compute-1.amazonaws.com:5432/da4pam25la1dgv");

// if(process.env.DATABASE_URL){
//     db = new sequelize("process.env.DATABASE_URL");
// }
// else{
//     db = new sequelize('socialapp','socialuser','socialuser',{
//         host:'localhost',
//         dialect:'mysql'
//     })
// }


const COL_ID_DEF={
    type: sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
}

const COL_USERNAME_DEF={
    type: sequelize.DataTypes.STRING(30),
    allowNull: false,
    unique: true
}

const COL_TITLE_DEF = {
    type: sequelize.DataTypes.STRING(140),
    allowNull: false
}
const user = db.define('user',{
    id: COL_ID_DEF,
    username: COL_USERNAME_DEF
})

const post = db.define('post',{
    id: COL_ID_DEF,
    title: COL_TITLE_DEF,
    body: {
        type: sequelize.DataTypes.TEXT,
        allowNull: false
    }
})

const comments = db.define('comments',{
    id: COL_ID_DEF,
    title: COL_TITLE_DEF,
    body: {
        type: sequelize.DataTypes.TEXT('tiny')
    }
})

user.hasMany(post)
post.belongsTo(user)

user.hasMany(comments)
comments.belongsTo(user)

post.hasMany(comments)
comments.belongsTo(post)

exports = module.exports = {
    db,
    user,
    post,
    comments
}