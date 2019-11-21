var user = {
    login: function (name, password, fn) {
        $.ajax({
            url: URLS.user_login,
            type: 'post',
            data: {
                user_name: name,
                password: password
            },
            success: function(res){
                fn(res);
            }
        })
    },


    logout:function(fn){
        $.ajax({
            url:URLS.user_logout,
            type:'post',
            success:function(res){
                fn(res);
            }
        })
    }
}