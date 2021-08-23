const router = require('express').Router();
const rescue = require('express-rescue');
const User = require('../models/User');

router.post('/register', rescue (async (req, res) => {
  const { username, email, password  } = req.body;
  const newUser = new User({
    username,
    email,
    password,
  });

  const user = await newUser.save();
  res.status(200).json(user);
}));

router.use((err, _req, res, _next) => {
  res.status(500).json({ error: `Erro: ${err.message}` });
});


module.exports = router;
