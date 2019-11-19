var user = {
    login: function (name, password, fn) {
        $.ajax({
            url: 'http://localhost:8000/admin/login',
            type: 'post',
            data: {
                user_name: name,
                password: password
            },
            success: fn
        })
    }
}