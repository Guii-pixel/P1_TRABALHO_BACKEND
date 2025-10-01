const express = require('express');
const router = express.Router();

let livros = [
  { id: 1, titulo: "Node.js na prática", autor: "Carlos Mendes", ano: 2021, isbn: "123-456" }
];

router.get('/', (req, res) => res.json(livros));

router.get('/:id', (req, res) => {
  const livro = livros.find(l => l.id == req.params.id);
  livro ? res.json(livro) : res.status(404).json({ message: "Livro não encontrado" });
});

router.post('/', (req, res) => {
  const { titulo, autor, ano, isbn } = req.body;
  if (!titulo || !autor) return res.status(400).json({ message: "Campos obrigatórios faltando" });

  const novo = { id: livros.length + 1, titulo, autor, ano, isbn };
  livros.push(novo);
  res.status(201).json(novo);
});

router.put('/:id', (req, res) => {
  const index = livros.findIndex(l => l.id == req.params.id);
  if (index === -1) return res.status(404).json({ message: "Livro não encontrado" });

  livros[index] = { ...livros[index], ...req.body };
  res.json(livros[index]);
});

router.delete('/:id', (req, res) => {
  const index = livros.findIndex(l => l.id == req.params.id);
  if (index === -1) return res.status(404).json({ message: "Livro não encontrado" });

  livros.splice(index, 1);
  res.status(204).end();
});

module.exports = router;