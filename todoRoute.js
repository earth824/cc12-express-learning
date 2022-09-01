const express = require('express');

const routerLevelMiddleware = express.Router();
routerLevelMiddleware.get('/', (req, res) => {}); // GET /todos
routerLevelMiddleware.get('/:id', (req, res) => {}); // GET /todos/:id
routerLevelMiddleware.post('/', (req, res) => {}); // POST /todos
routerLevelMiddleware.put('/:id', (req, res) => {}); // PUT /todos/:id
routerLevelMiddleware.delete('/:id', (req, res) => {}); // DELETE /todos/:id

module.exports = routerLevelMiddleware;
