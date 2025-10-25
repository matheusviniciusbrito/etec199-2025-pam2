const { pool } = require('../config/database');

const userModel = {
  async findAll() {
    const [rows] = await pool.query(
      'SELECT id, name, email, phone, DATE_FORMAT(birth_date, "%Y-%m-%d") AS birthDate, created_at FROM users ORDER BY id DESC'
    );
    return rows;
  },

  async findById(id) {
    const [rows] = await pool.query(
      'SELECT id, name, email, phone, DATE_FORMAT(birth_date, "%Y-%m-%d") AS birthDate, created_at FROM users WHERE id = ?',
      [id]
    );
    return rows[0] || null;
  },

  async create({ name, email, phone, birthDate }) {
    const [result] = await pool.query(
      'INSERT INTO users (name, email, phone, birth_date) VALUES (?, ?, ?, ?)',
      [name, email, phone, birthDate]
    );
    return { id: result.insertId, name, email, phone, birthDate };
  },

  async update(id, { name, email, phone, birthDate }) {
    await pool.query(
      'UPDATE users SET name = ?, email = ?, phone = ?, birth_date = ? WHERE id = ?',
      [name, email, phone, birthDate, id]
    );
    return this.findById(id);
  },

  async remove(id) {
    await pool.query('DELETE FROM users WHERE id = ?', [id]);
    return true;
  },
};

module.exports = userModel;
