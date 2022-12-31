const path = require("path");
const fs = require("fs");
const Blog = require("../models/BlogSchema");

const GetBlogPosts = async (req, res) => {
  try {
    const queryObject = {};
    if (req.query.author) {
      queryObject.author = req.query.author;
    }
    const page = req.query.page || 1;
    const limit = req.query.limit || 4;
    const skip = (page - 1) * limit;
    const allBlogs = await Blog.find(queryObject).skip(skip).limit(limit);
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
    // remove corresponding image while remove the document
    const filePath = `./uploads/${alreadyExists.author}/${
      alreadyExists.title.split(" ").join("") +
      path.extname(
        alreadyExists.image.split("/")[
          alreadyExists.image.split("/").length - 1
        ]
      )
    }`;
    fs.unlinkSync(filePath);
    // remove whole directory if doesn't exists any file into that
    const userFolder = `./uploads/${alreadyExists.author}/`;
    let fileCount = 0;
    fs.readdir(userFolder, (err, files) => {
      if (err) return res.status(500).send(err.message);
      files.forEach((file) => {
        fileCount++;
      });
    });
    if (fileCount === 0) {
      fs.rmdir(userFolder, (err) => {
        if (err) {
          console.log(err.message);
        }
        console.log(`${alreadyExists.author} is deleted!`);
      });
    }
    return res.status(200).send(response);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  GetBlogPosts,
  GetBlogPost,
  AddBlogPost,
  UpdateBlogPost,
  DeleteBlogPost,
};
