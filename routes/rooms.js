const express = require('express'); // Asegúrate de tener esta línea
const router = express.Router();
const Room = require('../models/Room');

// Obtener todas las salas
router.get('/', async (req, res) => {
  const rooms = await Room.find();
  res.json(rooms);
});

// Crear una nueva sala
router.post('/', async (req, res) => {
  const room = new Room(req.body);
  await room.save();
  res.json(room);
});

module.exports = router;