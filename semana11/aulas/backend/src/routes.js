/**
 * Rota / Recurso
 */

/**
 * métodos HTTP
 *
 * GET: busca uma informacao do backend
 * POST: Criar uma informacao no backend
 * PUT: Alterar uma informacao no backend
 * DELETE: Deletar uma informacao no backend
 *
 */
/**
 * Tipos de parametros
 * >>> Query Params: parametros nomeados enviados na rota apos o ? (filtros, paginacao)
 * http://localhost:3333/users?name=Diego
 * http://localhost:3333/users?page=2
 * http://localhost:3333/users?name=Diego&idade=25
 *
 * >>> Route Params: Parametros utilizados para identificar recursos
 * http://localhost:3333/users/1
 *
 * >>> Request Body: corpo da requisicao utilizado par criar ou alterar
 *
 */
const express = require("express");
const ongController = require("./controllers/ongController");
const incidentsController = require("./controllers/incidentsController");
const profileController = require("./controllers/profileController");
const sessionControler = require("./controllers/sessionController");

const routes = express.Router();

routes.post("/sessions", sessionControler.create);

routes.get("/ongs", ongController.index);
routes.post("/ongs", ongController.create);

routes.get("/incidents", incidentsController.index);
routes.get("/profile", profileController.index);
routes.post("/incidents", incidentsController.create);
routes.delete("/incidents/:id", incidentsController.delete);

module.exports = routes;
