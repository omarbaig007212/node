$(() => {
    $('#navbar').load('../components/navbar.html', loginIfNeeded)
    $('#footer').load('../components/footer.html')
    $('#content').load('../components/all-article.html')
})
function loginIfNeeded() {
    window.currentUser = window.localStorage.user ? JSON.parse(window.localStorage.user) : null
    if(!currentUser)
    {
        $.post('/api/user', {} , (user) => {
            if(user) {
                console.log(user)
                // console.log('register current user as ',user.username)
                window.localStorage.user = JSON.stringify(user)
                currentUser = user
                $('#nav-username').text(currentUser.username)
            }
        })
    }  
    else {
        console.log(currentUser.username)
        // console.log(' resuming session as ',currentUser.username)
        $('#nav-username').text(currentUser.username)
    }
}