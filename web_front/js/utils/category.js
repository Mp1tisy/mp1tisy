var category={
    search:function(fn){
        $.ajax({
            url:URLS.category_search,
            type:'get',
            success:function(res){
                fn(res)
            }
        })
    },

    delete:function(id,fn){
        $.ajax({
            url:URLS.category_delete,
            type:'post',
            data:{
                id:id
            },
            success:function(res){
                fn(res)
            }
        })
    },

    add:function(name,slug,fn){
        $.ajax({
            url:URLS.category_add,
            type:'post',
            data:{
                name:name,
                slug:slug
            },
            success:function(res){
                fn(res)
            }
        })
    },

    edit:function(id,name,slug,fn){
        $.ajax({
            url:URLS.category_edit,
            type:'post',
            data:{
                id:id,
                name:name,
                slug:slug
            },
            success:function(res){
                fn(res)
            }
        })
    }
    
}