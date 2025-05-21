import { Task, Board } from '../models/taskManager.model.js';


export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find().populate("boardId", "name");
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
export const getTaskByBoard= async (req, res) => {
  const { boardId } = req.params;
  try {
    const tasks = await Task.find({ boardId }).populate("boardId", "name");
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const createTask = async (req, res) => {
  const { title, description, status, boardId } = req.body;
  const task = new Task({
    title,
    description,
    status,
    boardId,
  });
  try {
    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export const updateTask = async (req, res) => {
  const { taskId } = req.params;
  const { title, description, status, boardId } = req.body;
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      taskId,
      { title, description, status, boardId },
      { new: true, runValidators: true }
    );
    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    } else{
      res.status(200).json(updatedTask);
    }
  }
  catch (error) {
    res.status(400).json({ message: error.message });
  }
}
export const deleteTask = async (req, res) => {
  const { taskId } = req.params;
  try {
    const deletedTask = await Task.findByIdAndDelete(taskId);
    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

//Board part

export const getAllBoards = async (req, res) => {
  try {
    const boards = await Board.find().populate("tasks");
    res.status(200).json(boards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
export const getBoardById = async (req, res) => {
  const { boardId } = req.params;
  try {
    const board = await Board.findById(boardId).populate("tasks");
    if (!board) {
      return res.status(404).json({ message: "Board not found" });
    }
    res.status(200).json(board);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const createBoard = async (req, res) => {
  const { name, description } = req.body;
  const board = new Board({
    name,
    description,
  });
  try {
    const newBoard = await board.save();
    res.status(201).json(newBoard);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export const updateBoard = async (req, res) => {
  const { boardId } = req.params;
  const { name, description } = req.body;
  try {
    const updatedBoard = await Board.findByIdAndUpdate(
      boardId,
      { name, description },
      { new: true, runValidators: true }
    );
    if (!updatedBoard) {
      return res.status(404).json({ message: "Board not found" });
    } else{
      res.status(200).json(updatedBoard);
    }
  }
  catch (error) {
    res.status(400).json({ message: error.message });
  }
}
export const deleteBoard = async (req, res) => {
  const { boardId } = req.params;
  try {
    const deletedBoard = await Board.findByIdAndDelete(boardId);
    if (!deletedBoard) {
      return res.status(404).json({ message: "Board not found" });
    }
    res.status(200).json({ message: "Board deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
