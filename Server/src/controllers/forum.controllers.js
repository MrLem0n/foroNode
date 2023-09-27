import { ForuModel } from "../models/forum.js";

export const ctrlGetForum = async (req, res) => {
  try {
    const forum = await ForuModel.findAll();
    if (!forum) {
      return res.status(404);
    } else {
      return res.status(200).json(forum);
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "why" });
  }
};

export const ctrlCreateForum = async (req, res) => {
  const { tittle, description, image } = req.body;
  try {
    const newPost = await ForuModel.create(req.body);
    return res.status(201).json(newPost);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "error server" });
  }
};

export const ctrlUpdateForum = async (req, res) => {
  const { id } = req.params
    try {
        const task = await ForuModel.findByPk(id)

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

export const ctrlDeleteForum = async (req, res) => {
  const { id } = req.params;
  try {
    const taskDelted = await ForuModel.destroy({
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
