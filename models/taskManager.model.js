import mongoose from "mongoose";

// Task Schema
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxLength: 80,
  },
  description: {
    type: String,
    trim: true,
    maxLength: 100,
    default: "",
  },
  status: {
    type: String,
    enum: ["todo", "in-progress", "done"],
    default: "todo",
  },
  boardId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Board",
    required: true,
  },
});
const Task = mongoose.model("Task", taskSchema);

// Board Schema
const boardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxLength: 80,
  },
  description: {
    type: String,
    trim: true,
    maxLength: 100,
    default: "",
  },
});

boardSchema.virtual("tasks", {
  ref: "Task",
  localField: "_id",
  foreignField: "boardId",
});
boardSchema.set("toObject", { virtuals: true });
boardSchema.set("toJSON", { virtuals: true });

const Board = mongoose.model("Board", boardSchema);

export { Task, Board };
