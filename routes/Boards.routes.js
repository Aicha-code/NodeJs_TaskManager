import express from 'express';
import {
  getAllBoards,
  createBoard,
  getBoardById,
  updateBoard,
  deleteBoard
} from "../controllers/taskManagerController.js";

const router = express.Router();

router.get('/', getAllBoards);
router.post('/', createBoard);
router.get('/:boardId', getBoardById);
router.put('/:boardId', updateBoard);
router.delete('/:boardId', deleteBoard);

export default router;
