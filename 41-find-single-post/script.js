
const findPostById = (postId, post) => {
   return posts.find((post) => post.postId === postId)  

}



const posts = [
   { postId: 1355, commentsQuantity: 5 },
   { postId: 5131, commentsQuantity: 13 },
   { postId: 6134, commentsQuantity: 2 },
   { postId: 2351, commentsQuantity: 8 }
]


console.log(findPostById(6134, posts))

console.log(findPostById(4511, posts))