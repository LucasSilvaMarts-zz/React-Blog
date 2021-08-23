const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const port = 3001;

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
  .then(console.log('connected'))
  .catch((err) => console.log(err));

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`App listening on port ${port}!`));
