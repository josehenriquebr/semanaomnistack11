/**
 * SQL : mySQL, SQLLite, PostGreSQL, Oracle, SQLServer
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Driver: Select * from users
 * QueryBuilder: Table('users').select('*').where(  )
 */

const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);
