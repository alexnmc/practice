/*
user has an array property called posts.
posts is an array of post objects.
Each post object has an integer property called likes.
Return the sum of all the likes from all the post objects.

Input Example:

{
  posts: [
    {
      likes: 10
    },
    {
      likes: 15
    }
  ]
}

Output Example:

25  */

function sumUserPostLikes(user) {
    x=0;
    for(i=0;i<user.posts.length;i++){x+=user.posts[i].likes}
    return x
  }