###### Nome do projeto: Biblioteca.api


##### Descrição breve:
API REST desenvolvida em Node.js + Express, que simula um sistema de biblioteca universitária.
O projeto contém 5 CRUDs completos:

- Alunos

- Professores

- Livros

- Empréstimos

- Cursos

Este trabalho atende aos requisitos do Trabalho Prático P1 – Construção de Backend, utilizando rotas REST, versionamento com GitHub, Postman para testes e colaboração em equipe

###### Instalação e Execução:

1.Clone este repositório:

git clone https://github.com/usuario/biblioteca-api.git
cd biblioteca-api

2.Instale as dependências:
npm install

3.Inicie o servidor com Nodemon:
npm start


###### Endpoints da API:
### Alunos

GET /alunos → Lista todos os alunos

GET /alunos/:id → Retorna um aluno pelo ID

POST /alunos → Cria um novo aluno

PUT /alunos/:id → Atualiza os dados de um aluno

DELETE /alunos/:id → Remove um aluno

Exemplo de requisição (POST /alunos):
{
  "nome": "João Silva",
  "email": "joao@email.com",
  "cpf": "12345678900",
  "telefone": "11999999999",
  "dataNascimento": "2000-05-10"
}

Exemplo de resposta:
{
  "id": 1,
  "nome": "João Silva",
  "email": "joao@email.com",
  "cpf": "12345678900",
  "telefone": "11999999999",
  "dataNascimento": "2000-05-10"
}

#### Professores
GET /professores

GET /professores/:id

POST /professores

PUT /professores/:id

DELETE /professores/:id

Exemplo de requisição (POST /professores):
{
  "nome": "Maria Souza",
  "email": "maria@uni.com",
  "cpf": "98765432100",
  "curso": "Engenharia",
  "disciplina": "Cálculo"
}

Exemplo de resposta:
{
  "nome": "Maria Souza",
  "email": "maria@uni.com",
  "cpf": "98765432100",
  "curso": "Engenharia",
  "disciplina": "Cálculo"
}



###### Integrantes da Equipe:
- Guilherme Almeida Siqueira (@Guii-pixel) → Configuração inicial do projeto + CRUD de Alunos + Requisições de alunos

- Alisson dos Santos Teixeira (@Alisson10101010) → CRUD de Professores + Requisições de professores

- Rhayner de Paiva Oliveira Mendonça (@Rhaynerzin) → CRUD de Livros + Requisições de livros + Criação da Collection do Postman

- Diego Sousa Leal (@dg23nrt) → CRUD de Empréstimos e Cursos + Requisições de empréstimos e cursos