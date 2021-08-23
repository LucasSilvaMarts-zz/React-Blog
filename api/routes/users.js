const router = require('express').Router();
const rescue = require('express-rescue');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const Post = require('../models/Post');

router.put('/:id', rescue (async (req, res) => {
  const { id } = req.params;
  let { userId, password } = req.body;

  if (userId === id) {
    if (password) {
      const salt = await bcrypt.genSalt(10);
      password = await bcrypt.hash(password, salt);
    }

    const updatedUser = await User.findByIdAndUpdate(id ,{
      $set: req.body,
    }, { new: true });
    res.status(200).json(updatedUser)
  } else {
    res.status(401).json('You can update only your account!');
  }

}));

router.delete('/:id', rescue (async (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;

  if (userId === id) {

    const user = await User.findById(id);

    await Post.deleteMany({ username: user.username });

    await User.findByIdAndDelete(id)

    res.status(200).json('User has been deleted...');
  } else {
    res.status(401).json('You can delete only your account!');
  }

}));

router.use((err, _req, res, _next) => {
  res.status(500).json({ error: `Error: ${err.message}` });
});

module.exports = router;
