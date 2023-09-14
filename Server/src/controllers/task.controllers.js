import { TaskModel } from "../models/tasks.js";

export const ctrlGetTasks = async (req, res) => {
  try {
    const task = await TaskModel.findAll();
    if (!task) {
      return res.status(404);
    } else {
      return res.status(200).json(task);
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "error server" });
  }
};

export const ctrlCreateTasks = async (req, res) => {
  const { tittle, description, image } = req.body;
  try {
    const newTask = await TaskModel.create(req.body);
    return res.status(201).json(newTask);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "error server" });
  }
};

export const ctrlUpdateTasks = async (req, res) => {
  const { id } = req.params
    try {
        const task = await TaskModel.findByPk(id)

        if (!task) {
            return res.status(404).json({
                message: 'Tarea no encontrada'
            })
        }

        task.update(req.body)

        return res.status(200).json(task)
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'Error Server'
        })
    }
};

export const ctrlDeleteTasks = async (req, res) => {
  const { id } = req.params;
  try {
    const taskDelted = await TaskModel.destroy({
      where: { id: id },
    });
    if (!taskDelted) {
      return res.status(404).json({ message: "Tarea no encontrada" });
    }
    return res.status(200).json({ message: "Tarea eliminada" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "error server" });
  }
};
