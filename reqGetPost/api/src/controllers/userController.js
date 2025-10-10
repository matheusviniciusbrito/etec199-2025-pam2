const userModel = require('../models/userModel');

const userController = {
  async index(req, res, next) {
    try {
      const users = await userModel.findAll();
      res.json(users);
    } catch (err) { next(err); }
  },

  async show(req, res, next) {
    try {
      const user = await userModel.findById(req.params.id);
      if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });
      res.json(user);
    } catch (err) { next(err); }
  },

  async store(req, res, next) {
    try {
      const { name, email } = req.body;
      if (!name || !email) return res.status(400).json({ message: 'name e email são obrigatórios' });
      const created = await userModel.create({ name, email });
      res.status(201).json(created);
    } catch (err) { next(err); }
  },

  async update(req, res, next) {
    try {
      const { name, email } = req.body;
      const id = req.params.id;
      const exists = await userModel.findById(id);
      if (!exists) return res.status(404).json({ message: 'Usuário não encontrado' });
      const updated = await userModel.update(id, { name, email });
      res.json(updated);
    } catch (err) { next(err); }
  },

  async destroy(req, res, next) {
    try {
      const id = req.params.id;
      const exists = await userModel.findById(id);
      if (!exists) return res.status(404).json({ message: 'Usuário não encontrado' });
      await userModel.remove(id);
      res.status(204).send();
    } catch (err) { next(err); }
  },
};

module.exports = userController;
