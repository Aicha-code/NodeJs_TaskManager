import express from 'express';
import {
  getAllTasks,
  createTask,
  getTaskByBoard
} from "../controllers/taskManagerController.js";

const router = express.Router();

router.get('/', getAllTasks);
router.get('/:boardId', getTaskByBoard);
router.post('/', createTask);
router.put('/:taskId', updateTask);
router.delete('/:taskId', deleteTask);

export default router;
