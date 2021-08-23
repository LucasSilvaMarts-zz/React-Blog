const router = require('express').Router();
const rescue = require('express-rescue');
const bcrypt = require('bcrypt');
const User = require('../models/User');

router.post('/register', rescue (async (req, res) => {
  const { username, email, password  } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(password, salt);

  const newUser = new User({
    username,
    email,
    password: hashedPass,
  });

  const user = await newUser.save();
  res.status(200).json(user);
}));

router.post('/login', rescue (async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  !user && res.status(400).json("Wrong credentials!");

  const validated = await bcrypt.compare(password, user.password);
  !validated && res.status(400).json("Wrong credentials!");

  res.status(200).json(user);
}));

router.use((err, _req, res, _next) => {
  res.status(500).json({ error: `Erro: ${err.message}` });
});


module.exports = router;
