const router = require("express").Router();
const {
  AddBlogPost,
  DeleteBlogPost,
  GetBlogPost,
  GetBlogPosts,
  UpdateBlogPost,
} = require("../controllers/BlogController");
const upload = require("../middlewares/upload");

router.get("/", GetBlogPosts);
router.get("/:id", GetBlogPost);
router.post(
  "/",
  upload.single("image"),
  AddBlogPost
);
router.put("/:id", upload.single("image"), UpdateBlogPost);
router.delete("/:id", DeleteBlogPost);

module.exports = router;
