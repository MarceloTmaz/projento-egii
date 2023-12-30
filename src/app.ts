import express from 'express';

import path from 'path';

const UsuarioCtrl_1 = require("./controllers/UsuarioCtrl");

const TarefaCtrl_1 = require("./controllers/TarefaCtrl");


const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));

// Configurar o mecanismo de template Pug
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Routers
app.get('/', (req, res) => res.render('index'));

const usuarioCtrl = new UsuarioCtrl_1.UsuarioCtrl();
app.get('/usuario', (req, res) => usuarioCtrl.perfil(req, res));
app.get('/usuario/atualizar', (req, res) => usuarioCtrl.atualizar(req, res));
app.post('/usuario/dadosatualizados', (req, res) => usuarioCtrl.dadosatualizados(req, res));

const tarefaCtrl = new TarefaCtrl_1.TarefaCtrl();
app.get('/tarefa/listar',(req,res)=>tarefaCtrl.listar(req,res))
app.get('/tarefa/listar_ordenada',(req,res)=>tarefaCtrl.listarOrdenada(req,res))
app.get('/tarefa/criar',(req,res)=>tarefaCtrl.criar(req,res))
app.post('/tarefa/AtualizarTarefa',(req,res)=>tarefaCtrl.AtualizarTarefa(req,res))
app.post('/tarefa/criar_', (req, res) => tarefaCtrl.criarTarefa(req, res));
app.post('/tarefa/Atualizar_Tarefa', (req, res) => tarefaCtrl.Atualizar_Tarefa(req, res));
app.post('/tarefa/trocaStatus', (req, res) => tarefaCtrl.trocaStatus(req, res));
app.post('/tarefa/removerTarefa', (req, res) => tarefaCtrl.removerTarefa(req, res));

app.get('/usuario/:email3',(req,res)=> usuarioCtrl.rotaEmail(req,res))
app.get('/tarefa/:id',(req,res)=> tarefaCtrl.verificarEstado(req,res))

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


//Aplicativo de Lista de Tarefas: 

//Aplicativo de Anotações