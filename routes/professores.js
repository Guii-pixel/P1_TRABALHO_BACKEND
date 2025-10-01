const express = require('express');
const router = express.Router();

let professores = [
  { id: 1, nome: "Maria Souza", email: "maria@uni.com", cpf: "98765432100", curso: "Engenharia", disciplina: "Cálculo" }
];

// GET todos
router.get('/', (req, res) => res.json(professores));

// GET por ID
router.get('/:id', (req, res) => {
  const prof = professores.find(p => p.id == req.params.id);
  prof ? res.json(prof) : res.status(404).json({ message: "Professor não encontrado" });
});

// POST criar
router.post('/', (req, res) => {
  const { nome, email, cpf, curso, disciplina } = req.body;
  if (!nome || !email || !cpf) return res.status(400).json({ message: "Campos obrigatórios faltando" });

  const novo = { id: professores.length + 1, nome, email, cpf, curso, disciplina };
  professores.push(novo);
  res.status(201).json(novo);
});

// PUT atualizar
router.put('/:id', (req, res) => {
  const index = professores.findIndex(p => p.id == req.params.id);
  if (index === -1) return res.status(404).json({ message: "Professor não encontrado" });

  professores[index] = { ...professores[index], ...req.body };
  res.json(professores[index]);
});

// DELETE remover
router.delete('/:id', (req, res) => {
  const index = professores.findIndex(p => p.id == req.params.id);
  if (index === -1) return res.status(404).json({ message: "Professor não encontrado" });

  professores.splice(index, 1);
  res.status(204).end();
});

module.exports = router;