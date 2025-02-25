const express = require('express');
const router = express.Router();
const Faculty = require('../models/Faculty');

// Obtener todas las facultades
router.get('/', async (req, res) => {
  const faculties = await Faculty.find();
  res.json(faculties);
});

// Crear una nueva facultad
router.post('/', async (req, res) => {
  const faculty = new Faculty(req.body);
  await faculty.save();
  res.json(faculty);
});

module.exports = router;