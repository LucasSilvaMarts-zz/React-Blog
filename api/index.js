const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const port = 3001;

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
  .then(console.log('connected'))
  .catch((err) => console.log(err));

app.use('/api/auth', authRoute);

app.use('/api/users', userRoute);

app.listen(port, () => console.log(`App listening on port ${port}!`));
