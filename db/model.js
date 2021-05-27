const sequelize = require('sequelize')

const db=new sequelize({
    dialect: 'postgres',
    database: 'd1jspir78fgplq',
    username: 'jwtpyqytmzizqq',
    password: 'b7943d2c2ffa23945fb9954ed1a95266e0d37cacc1cd5d5967f6099a16890855',
    host: 'ec2-52-5-247-46.compute-1.amazonaws.com'
})

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