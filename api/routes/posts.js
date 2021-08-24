const router = require('express').Router();
const rescue = require('express-rescue');
const User = require('../models/User');
const Post = require('../models/Post');

router.post('/', rescue (async (req, res) => {
  const newPost = await Post(req.body);

  const savedPost = await newPost.save();

  res.status(200).json(savedPost);

}));

router.put('/:id', rescue (async (req, res) => {
  const { id } = req.params;
  const { username } = req.body;

  const post = await Post.findById(id);

  if (post.username === username) {
    const updatedPost = await Post.findByIdAndUpdate(id, {
      $set: req.body
    }, { new: true });

    res.status(200).json(updatedPost);

  } else {
    res.status(401).json('You can update only your post!');
  }

}));

router.get('/:id', rescue (async (req, res) => {
  const { id } = req.params;

  const user = await User.findById(id);
  const { password, ...others } = user._doc;
  res.status(200).json(others);
}));

router.use((err, _req, res, _next) => {
  res.status(500).json({ error: `Error: ${err.message}` });
});

module.exports = router;
