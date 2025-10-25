require('dotenv').config();
const express = require('express');
const { testConnection } = require('./src/config/database');

const app = express();

// Middlewares
app.use(express.json());
// CORS básico
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	if (req.method === 'OPTIONS') return res.sendStatus(204);
	next();
});

// Healthcheck
app.get('/health', async (req, res) => {
	const dbOk = await testConnection();
	res.json({ status: 'ok', db: dbOk ? 'connected' : 'error' });
});

// Rotas
const userRoutes = require('./src/routes/userRoutes');
app.use('/users', userRoutes);

// Middleware de tratamento de erros
app.use((err, req, res, next) => {
	console.error(err);
	res.status(500).json({ message: 'Erro interno no servidor' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`API rodando em http://localhost:${PORT}`);
});

