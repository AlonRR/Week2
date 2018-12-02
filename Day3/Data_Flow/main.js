let posts = [
    { name:'Bill' , text: 'Is ok' }
]
const render = function(){
    for(let post of posts){
        $("#here").append(`<div class="post">${post.name} ${post.text}</div>`)
    }
}
const addToPosts = function(){
    $(".post").remove()
    posts.push({name:`${$("#name").val()}`,text:`${$("#text").val()}`})
    render()
}
const removePost = function(){
    $(this).filter()
}

$("body").on("click","button",addToPosts)
$("body").on("click",".post",removePost)
render()