const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Importar rotas
const alunosRouter = require('./routes/alunos');
const professoresRouter = require('./routes/professores');
const livrosRouter = require('./routes/livros');
const emprestimosRouter = require('./routes/emprestimos');
const cursosRouter = require('./routes/cursos');

// Usar rotas (sem parênteses!)
app.use('/alunos', alunosRouter);
app.use('/professores', professoresRouter);
app.use('/livros', livrosRouter);
app.use('/emprestimos', emprestimosRouter);
app.use('/cursos', cursosRouter);

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
