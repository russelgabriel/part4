const lodash = require("lodash")

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
  if (blogs.length === 0) return null

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

const mostBlogs = blogs => {
  if (blogs.length === 0) return null

  const blogCount = lodash.countBy(blogs, "author")
  let author = ""
  let authorBlogs = 0

  for (const [key, value] of Object.entries(blogCount)) {
    if (value > authorBlogs) {
      author = key
      authorBlogs = value
    }
  }

  return {
    author: author,
    blogs: authorBlogs
  }
}

const mostLikes = blogs => {
  if (blogs.length === 0) return null
  const authorOrganizedBlogs = lodash.groupBy(blogs, "author")
  let author = ""
  let likes = 0

  for (const [key, value] of Object.entries(authorOrganizedBlogs)) {
    let authorLikes = 0
    for (const blog of value) {
      authorLikes += blog.likes
    }
    if (authorLikes > likes) {
      author = key
      likes = authorLikes
    }
  }

  return {
    author: author,
    likes: likes
  }
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}