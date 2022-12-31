const path = require("path");
const Blog = require("../models/BlogSchema");

const GetBlogPosts = async (req, res) => {
  try {
    const allBlogs = await Blog.find();
    res.status(200).send(allBlogs);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const GetBlogPost = async (req, res) => {
  try {
    const _id = req.params.id;
    const allBlogs = await Blog.findOne({ _id });
    res.status(200).send(allBlogs);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const AddBlogPost = async (req, res) => {
  try {
    const { author, title, content } = req.body;
    const alreadyExists = await Blog.findOne({ $and: [{ author, title }] });
    if (alreadyExists) return res.status(400).send("Post already exists!");
    const newPost = {
      author,
      title,
      content,
      image: `http://localhost:4000/api/blogs/static/${author
        .split(" ")
        .join("")
        .toLowerCase()}/${req.body.title.split(" ").join("")}${path.extname(
        req.file.filename
      )}`,
    };
    const response = await Blog.create(newPost);
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const UpdateBlogPost = async (req, res) => {
  try {
    const _id = req.params.id;
    const alreadyExists = await Blog.findOne({ _id });
    if (!alreadyExists) return res.status(400).send("Post doesn't exists!");
    const { author, title, content } = req.body;
    const newPost = { author, title, content };
    const response = await Blog.findByIdAndUpdate({ _id }, newPost);
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const DeleteBlogPost = async (req, res) => {
  try {
    const _id = req.params.id;
    const alreadyExists = await Blog.findOne({ _id });
    if (!alreadyExists) return res.status(400).send("Post doesn't exists!");
    const response = await Blog.findByIdAndDelete({ _id });
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  GetBlogPosts,
  GetBlogPost,
  AddBlogPost,
  UpdateBlogPost,
  DeleteBlogPost,
};
