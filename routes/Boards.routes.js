import express from 'express';
import {
  getAllBoards,
  createBoard,
  getBoardById
} from "../controllers/taskManagerController.js";

const router = express.Router();

router.get('/', getAllBoards);
router.post('/', createBoard);
router.get('/:boardId', getBoardById);

export default router;
