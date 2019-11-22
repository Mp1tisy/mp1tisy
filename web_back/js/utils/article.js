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
    }
}