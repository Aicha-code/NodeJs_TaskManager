import express from 'express';
import {
  getAllBoards,
  createBoard
} from "../controllers/taskManagerController.js";

const router = express.Router();

router.get('/', getAllBoards);
router.post('/', createBoard);

export default router;
