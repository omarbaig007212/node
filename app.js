const express = require('express')
const { db } = require('./db/model')
const { UserRoute } = require('./routes/user')
const { PostRoute } = require('./routes/post')

const SERVER_PORT = process.env.PORT || 4444;

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api/user',UserRoute)
app.use('/api/post', PostRoute)
app.use('/',express.static(__dirname+'/public'))

db.sync().then(() => {
     app.listen(SERVER_PORT,() => {
        console.log("Server connected at http://localhost:4444");
    })
}).catch((err) => {
    console.error(new Error("couln't connect to server"));
    console.error(err);
})