const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const usersRouter = require('./routes/usersRouter');
const postsRouter = require('./routes/postsRouter');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

// app level middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// define routes
app.use('/users', usersRouter);
app.use('/posts', postsRouter);

// global error middleware
app.use(errorHandler);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
  mongoose
    .connect('mongodb://localhost:27017/myapp')
    .then(() => console.log('💯💯 Connected to MongoDB'))
    .catch((err) => console.error('⚠️⚠️ MongoDB connection error:', err));
});
