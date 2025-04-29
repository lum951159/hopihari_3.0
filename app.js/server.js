const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const authRoutes = require('../src/routes/authRoutes'); // Corrigido o caminho

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public'))); // Corrigido o caminho para a pasta public

// Rotas
app.use('/api', authRoutes);

// Rota para a página de login
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'login.html')); // Corrigido o caminho
});

// Rota para a página de cadastro
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'register.html')); // Corrigido o caminho
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'register.html')); // Certifique-se de que o caminho está correto
});