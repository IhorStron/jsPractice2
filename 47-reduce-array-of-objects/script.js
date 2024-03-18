
const popularPostsIds = (posts, minimalComentsQty) => {
   return posts.reduce((postsIds, post) => post.comments >= minimalComentsQty ? postsIds.concat([post.postId]) : postsIds, [])
}

const inputPosts = [
   {
      title: 'how fast learn js',
      postId: 3421,
      coments: 25,
   },

   {
      title: 'were using js',
      postId: 5216,
      coments: 3,
   },

   {
      title: 'which difference with React and Angular',
      postId: 8135,
      coments: 12,
   },
]

console.log(popularPostsIds(inputPosts, 10))

console.log(popularPostsIds(inputPosts, 15))

console.log(popularPostsIds(inputPosts, 50))