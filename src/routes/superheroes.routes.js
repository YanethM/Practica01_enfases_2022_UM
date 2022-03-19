const express = require('express');
const superheroe_route = express.Router();
const superheroSchema = require('../models/superheroeModel');

/* Ruta para crear un superheroe
Endpoint: http://localhost:5000/api/v1/superheroes/superheroe */
superheroe_route.post('/superheroe', (req, res) => {
  const superhero = superheroSchema(req.body);
  superhero
    .save()
    .then((data) => res.json({ message: data }))
    .catch((error) => res.json({ message: error }));
});

/* Ruta para listar los superheroes
Endpoint: http://localhost:5000/api/v1/superheroes */
superheroe_route.get('/', (req, res) => {
  superheroSchema
    .find()
    .then((data) => res.json({ message: data }))
    .catch((error) => res.json({ message: error }));
});

/* Ruta para consultar un superheroe especifico
Endpoint: http://localhost:5000/api/v1/superheroes/:superheroeId */
superheroe_route.get('/:superheroeId', (req, res) => {
  const { superheroeId } = req.params;
  superheroSchema
    .findById(superheroeId)
    .then((data) => res.json({ message: data }))
    .catch((error) => res.json({ message: error }));
});

/* Ruta para editar un superheroe especifico
Endpoint: http://localhost:5000/api/v1/superheroes/:superheroeId */
superheroe_route.put('/:superheroeId', (req, res) => {
  const { superheroeId } = req.params;
  const {
    superheroe,
    real_name,
    features: { skills, universe },
    enemies,
  } = req.body;
  superheroSchema
    .updateOne({ _id: superheroeId })
    .then((data) => res.json({ message: data }))
    .catch((error) => res.json({ message: error }));
});

/* Ruta para eliminar un superheroe especifico
Endpoint: http://localhost:5000/api/v1/superheroes/:superheroeId */
superheroe_route.delete('/:superheroeId', (req, res) => {
  const { superheroeId } = req.params;
  superheroSchema
    .remove({ _id: superheroeId })
    .then((data) => res.json({ message: data }))
    .catch((error) => res.json({ message: error }));
});

module.exports = superheroe_route;
