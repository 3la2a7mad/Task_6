async function getPost(){
const Response= await fetch(`https://jsonplaceholder.typicode.com/posts`);
const Post = await Response.json();
const rusalt = Post.map(function(ele){
    return`
    <h2>${ele.title}</h2>    
    <p>${ele.body}</p>

    `
}).join('');
document.querySelector(".posts").innerHTML = rusalt;
}

getPost();