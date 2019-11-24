var article={
    search:function(obj,fn){
        $.ajax({
            url:URLS.article_search,
            type:'get',
            data:obj,
            success:function(res){
                fn(res)
            }
        })
    },

    delete:function(id,fn){
        $.ajax({
            url:URLS.article_delete,
            type:'get',
            data:{
                id:id
            },
            success:function(res){
                fn(res)
            }
        })
    },

    publish:function(formdata,fn){
        $.ajax({
            url:URLS.article_publish,
            type:'post',
            data:formdata,
            processData:false,
            contentType:false,
            success:function(res){
                fn(res)
            }
        })
    }
}