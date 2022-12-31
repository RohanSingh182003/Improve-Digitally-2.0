const router = require('express').Router();
const {
  AddBlogPost,
  DeleteBlogPost,
  GetBlogPost,
  GetBlogPosts,
  UpdateBlogPost
} = require('../controllers/BlogController')

router.get("/", GetBlogPosts);
router.get("/:id", GetBlogPost);
router.post("/", AddBlogPost);
router.put("/:id", UpdateBlogPost);
router.delete("/:id", DeleteBlogPost);

module.exports = router;
