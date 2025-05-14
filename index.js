import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import boardRoutes from './routes/Boards.routes.js';
import taskRoutes from './routes/Task.routes.js';

dotenv.config({ path: './config/config.env' });

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/tasks', taskRoutes);
app.use('/api/boards', boardRoutes);

// Health check route
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
