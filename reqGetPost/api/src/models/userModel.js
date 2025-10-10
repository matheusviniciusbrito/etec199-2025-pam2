const { pool } = require('../config/database');

const userModel = {
  async findAll() {
    const [rows] = await pool.query('SELECT id, name, email FROM users ORDER BY id DESC');
    return rows;
  },

  async findById(id) {
    const [rows] = await pool.query('SELECT id, name, email FROM users WHERE id = ?', [id]);
    return rows[0] || null;
  },

  async create({ name, email }) {
    const [result] = await pool.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]);
    return { id: result.insertId, name, email };
  },

  async update(id, { name, email }) {
    await pool.query('UPDATE users SET name = ?, email = ? WHERE id = ?', [name, email, id]);
    return this.findById(id);
  },

  async remove(id) {
    await pool.query('DELETE FROM users WHERE id = ?', [id]);
    return true;
  },
};

module.exports = userModel;
