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
const crypto = require("crypto");
const connection = require("./database/connection");

const routes = express.Router();

routes.get("/ongs", async (request, response) => {
  const ongs = await connection("ongs").select("*");

  return response.json(ongs);
});

routes.post("/ongs", async (request, response) => {
  const { name, email, whatsapp, city, uf } = request.body;

  const id = crypto.randomBytes(4).toString("HEX");

  await connection("ongs").insert({
    id,
    name,
    email,
    whatsapp,
    city,
    uf
  });
  return response.json({ id });

  // console.log(data); // mostra os parametros n
  // return response.json();
});

module.exports = routes;
