/**
 * Recursos: pizzas, pedidos, clientes, enderecos, faturamento,...
 * Usuarios: clientes, administradores
*/

const express = require('express')
const ApiController = require('./controllers/ApiController')
const routerApi = express.Router()

routerApi.get('/adm/pizzas', (req, res) => {res.send('Oi')})
routerApi.post('/adm/pizzas', (req, res) => {res.send('Oi')})
routerApi.delete('/adm/pizzas/:id', (req, res) => {res.send('Oi')})
routerApi.put('/adm/pizzas/:id', (req, res) => {res.send('Oi')})
routerApi.get('/adm/clientes', ApiController.listarClientes) // Rota para listar clientes
routerApi.get('/adm/clientes/:idCliente', () => {}) // Rota para listar clientes


routerApi.post('/auth/register', ApiController.registrarCliente) // Rota para cadastro de clientes
routerApi.post('/auth/login', () => {}) // Rota para login de cliente


module.exports = routerApi