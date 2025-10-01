const express = require('express');
const router = express.Router();

let cursos = [
  { id: 1, nome: "Ciência da Computação", duracao: "8 semestres", modalidade: "Presencial" }
];

router.get('/', (req, res) => res.json(cursos));

router.get('/:id', (req, res) => {
  const curso = cursos.find(c => c.id == req.params.id);
  curso ? res.json(curso) : res.status(404).json({ message: "Curso não encontrado" });
});

router.post('/', (req, res) => {
  const { nome, duracao, modalidade } = req.body;
  if (!nome) return res.status(400).json({ message: "Nome é obrigatório" });

  const novo = { id: cursos.length + 1, nome, duracao, modalidade };
  cursos.push(novo);
  res.status(201).json(novo);
});

router.put('/:id', (req, res) => {
  const index = cursos.findIndex(c => c.id == req.params.id);
  if (index === -1) return res.status(404).json({ message: "Curso não encontrado" });

  cursos[index] = { ...cursos[index], ...req.body };
  res.json(cursos[index]);
});

router.delete('/:id', (req, res) => {
  const index = cursos.findIndex(c => c.id == req.params.id);
  if (index === -1) return res.status(404).json({ message: "Curso não encontrado" });

  cursos.splice(index, 1);
  res.status(204).end();
});

module.exports = router;