$(function(){
    let username=currentUser.username
    let title=$('#title')
    let body=$('#body')
    $('#submit').click(function () {
        $.get('/api/user/'+username,(user) => {
            let userId=user.id
            addProduct(userId,title.val(),body.val())
            alert("Post Added To "+user.username)
        });
    })
})

function addProduct (userId, title, body) {
    $.post('/api/post', {
        userId: userId,
        title: title,
        body: body
    }, function (data) {
        done(data)
    })
}