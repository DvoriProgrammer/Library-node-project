// index.ts

import express from 'express';
import connectDB from './models/db';
import userRouter from './routers/UserRouter';
import bookRouter from './routers/BookRouter';

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/users', userRouter);
app.use('/books', bookRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
