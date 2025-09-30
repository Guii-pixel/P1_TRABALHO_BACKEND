const express = require('express');
const router = express.Router();

let alunos = [
  { id: 1, nome: "João Silva", email: "joao@email.com", cpf: "12345678900", telefone: "11999999999", dataNascimento: "2000-05-10" }
];

// GET todos
router.get('/', (req, res) => res.json(alunos));

// GET por ID
router.get('/:id', (req, res) => {
  const aluno = alunos.find(a => a.id == req.params.id);
  aluno ? res.json(aluno) : res.status(404).json({ message: "Aluno não encontrado" });
});

// POST criar
router.post('/', (req, res) => {
  const { nome, email, cpf, telefone, dataNascimento } = req.body;
  if (!nome || !email || !cpf) return res.status(400).json({ message: "Campos obrigatórios faltando" });

  const novo = { id: alunos.length + 1, nome, email, cpf, telefone, dataNascimento };
  alunos.push(novo);
  res.status(201).json(novo);
});

// PUT atualizar
router.put('/:id', (req, res) => {
  const index = alunos.findIndex(a => a.id == req.params.id);
  if (index === -1) return res.status(404).json({ message: "Aluno não encontrado" });

  alunos[index] = { ...alunos[index], ...req.body };
  res.json(alunos[index]);
});

// DELETE remover
router.delete('/:id', (req, res) => {
  const index = alunos.findIndex(a => a.id == req.params.id);
  if (index === -1) return res.status(404).json({ message: "Aluno não encontrado" });

  alunos.splice(index, 1);
  res.status(204).end();
});

module.exports = router;
