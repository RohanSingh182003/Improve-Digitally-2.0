const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema(
  {
    title: String,
    author: String,
    content: String,
    image: String
  },
  { timestamps: true }
);

const Blog = mongoose.model('Blog',BlogSchema)

module.exports =  Blog;
