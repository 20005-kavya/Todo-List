import Todo from "../models/todoModel.js";

// GET
export const getTodos = async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
};

// POST
export const createTodo = async (req, res) => {
  const todo = await Todo.create({
    title: req.body.title
  });
  res.json(todo);
};

// PUT
export const updateTodo = async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  todo.title = req.body.title || todo.title;

  if (req.body.completed !== undefined) {
    todo.completed = req.body.completed;
  }

  await todo.save();

  res.json(todo);
};

// DELETE
export const deleteTodo = async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  await todo.deleteOne();

  res.json({ message: "Todo deleted" });
};