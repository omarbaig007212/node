const sequelize = require('sequelize')

let db;

if(process.env.DATABASE_URL){
    db=new Sequelize(process.env.DATABASE_URL);
}
else{
    db = new sequelize('socialapp','socialuser','socialuser',{
        host:'localhost',
        dialect:'mysql'
    });
}

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