const express = require("express");
const app = express();
const PORTA = 3000;

app.use(express.json());
app.use(express.static("public"));

app.post("/api/disciplinas", (req, res) => {
const { nome, semestre } = req.body || {};
if (!nome) {
return res.status(400).json({ erro: "O campo nome é obrigatório" });
}
const nova = { id: proximoId++, nome, semestre };
disciplinas.push(nova);
res.status(201).json(nova);
});

let disciplinas = [
{ id: 1, nome: "Tecnologias de Internet", semestre: 4 },
{ id: 2, nome: "Banco de Dados", semestre: 3 },
{ id: 3, nome: "Redes de Computadores", semestre: 3 }
];
let proximoId = 3;

app.get("/api/disciplinas", (req, res) => {
res.json(disciplinas);
});

const perfil = { nome: "Clarissa", curso: "Ciência da Computação", semestre: 3 };
app.get("/api/perfil", (req, res) => {
res.json(perfil);
});


app.get("/api/disciplinas/:id", (req, res) => {
const id = Number(req.params.id);
const disciplina = disciplinas.find((d) => d.id === id);
if (!disciplina) {
return res.status(404).json({ erro: "Disciplina não encontrada" });
}
res.json(disciplina);
});


app.listen(PORTA, () => {
console.log(`Servidor rodando em http://localhost:${PORTA}`);
});