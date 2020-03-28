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
const routes = express.Router();

routes.post("/users", (request, response) => {
  // return Response.send("Hello word");
  const body = request.body;

  console.log(body); // mostra os parametros n

  return response.json({
    evento: "Semana OmniStack 11.0",
    aluno: "jose henrique"
  });
});

module.exports = routes;
