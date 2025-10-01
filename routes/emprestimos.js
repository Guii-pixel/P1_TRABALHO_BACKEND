const express = require('express');
const router = express.Router();

let emprestimos = [
  { id: 1, alunoId: 1, livroId: 1, dataEmprestimo: "2025-09-01", dataDevolucao: "2025-09-15" }
];

router.get('/', (req, res) => res.json(emprestimos));

router.get('/:id', (req, res) => {
  const emp = emprestimos.find(e => e.id == req.params.id);
  emp ? res.json(emp) : res.status(404).json({ message: "Empréstimo não encontrado" });
});

router.post('/', (req, res) => {
  const { alunoId, livroId, dataEmprestimo, dataDevolucao } = req.body;
  if (!alunoId || !livroId) return res.status(400).json({ message: "Campos obrigatórios faltando" });

  const novo = { id: emprestimos.length + 1, alunoId, livroId, dataEmprestimo, dataDevolucao };
  emprestimos.push(novo);
  res.status(201).json(novo);
});

router.put('/:id', (req, res) => {
  const index = emprestimos.findIndex(e => e.id == req.params.id);
  if (index === -1) return res.status(404).json({ message: "Empréstimo não encontrado" });

  emprestimos[index] = { ...emprestimos[index], ...req.body };
  res.json(emprestimos[index]);
});

router.delete('/:id', (req, res) => {
  const index = emprestimos.findIndex(e => e.id == req.params.id);
  if (index === -1) return res.status(404).json({ message: "Empréstimo não encontrado" });

  emprestimos.splice(index, 1);
  res.status(204).end();
});

module.exports = router;