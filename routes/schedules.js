const express = require('express');
const router = express.Router();
const Schedule = require('../models/Schedule');

// Obtener todos los horarios
router.get('/', async (req, res) => {
  const schedules = await Schedule.find().populate('faculty').populate('room');
  res.json(schedules);
});

// Crear un nuevo horario
router.post('/', async (req, res) => {
  const schedule = new Schedule(req.body);
  await schedule.save();
  res.json(schedule);
});

// Eliminar un horario
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await Schedule.findByIdAndDelete(id);
  res.json({ message: 'Horario eliminado correctamente' });
});

module.exports = router;