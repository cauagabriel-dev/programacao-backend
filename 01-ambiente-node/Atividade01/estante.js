// ===== LIVRO 1 =====

const livro1 = {
  titulo: "Clean Code",
  autor: "Robert C. Martin",
  preco: 89.9,
  estoque: 12,
};

// ===== LIVRO 2 — TROQUE os quatro valores abaixo =====
const livro2 = {
  titulo: "Memórias Póstumas de Brás Cubas",
  autor: "Machado de Assis",
  preco: 62.9,
  estoque: 120,
};

// Esta linha entrega os dois livros para os outros arquivos usarem
module.exports = { livro1, livro2 };