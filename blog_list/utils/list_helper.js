// eslint-disable-next-line no-unused-vars
const dummy = blogs => {
  return 1
}

const totalLikes = blogs => {
  let total = 0

  blogs.forEach(blog => {
    total += blog.likes
  })

  return total
}

const favoriteBlog = blogs => {
  if (blogs.length === 0) {
    return null
  }
  
  let favBlog = blogs[0]
  blogs.forEach(blog => {
    if (blog.likes > favBlog.likes) {
      favBlog = blog
    }
  })

  return {
    title: favBlog.title,
    author: favBlog.author,
    likes: favBlog.likes
  }
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}