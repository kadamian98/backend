const mongoose = require('mongoose');
const Schedule = require('./models/Schedule');
require('dotenv').config();

const schedulesData = [
  { day: 'Lunes', startTime: 700, endTime: 820 },
  { day: 'Lunes', startTime: 830, endTime: 950 },
  { day: 'Lunes', startTime: 1020, endTime: 1140 },
  { day: 'Lunes', startTime: 1150, endTime: 1310 },
  { day: 'Lunes', startTime: 1340, endTime: 1500 },
  { day: 'Lunes', startTime: 1630, endTime: 1750 },
  { day: 'Lunes', startTime: 1800, endTime: 1920 },
  { day: 'Lunes', startTime: 1950, endTime: 2110 },
  { day: 'Martes', startTime: 700, endTime: 820 },
  { day: 'Martes', startTime: 830, endTime: 950 },
  { day: 'Martes', startTime: 1020, endTime: 1140 },
  { day: 'Martes', startTime: 1150, endTime: 1310 },
  { day: 'Martes', startTime: 1340, endTime: 1500 },
  { day: 'Martes', startTime: 1630, endTime: 1750 },
  { day: 'Martes', startTime: 1800, endTime: 1920 },
  { day: 'Martes', startTime: 1950, endTime: 2110 },
  { day: 'Miércoles', startTime: 700, endTime: 820 },
  { day: 'Miércoles', startTime: 830, endTime: 950 },
  { day: 'Miércoles', startTime: 1020, endTime: 1140 },
  { day: 'Miércoles', startTime: 1150, endTime: 1310 },
  { day: 'Miércoles', startTime: 1340, endTime: 1500 },
  { day: 'Miércoles', startTime: 1630, endTime: 1750 },
  { day: 'Miércoles', startTime: 1800, endTime: 1920 },
  { day: 'Miércoles', startTime: 1950, endTime: 2110 },
  { day: 'Jueves', startTime: 700, endTime: 820 },
  { day: 'Jueves', startTime: 830, endTime: 950 },
  { day: 'Jueves', startTime: 1020, endTime: 1140 },
  { day: 'Jueves', startTime: 1150, endTime: 1310 },
  { day: 'Jueves', startTime: 1340, endTime: 1500 },
  { day: 'Jueves', startTime: 1630, endTime: 1750 },
  { day: 'Jueves', startTime: 1800, endTime: 1920 },
  { day: 'Jueves', startTime: 1950, endTime: 2110 },
  { day: 'Viernes', startTime: 700, endTime: 820 },
  { day: 'Viernes', startTime: 830, endTime: 950 },
  { day: 'Viernes', startTime: 1020, endTime: 1140 },
  { day: 'Viernes', startTime: 1150, endTime: 1310 },
  { day: 'Viernes', startTime: 1340, endTime: 1500 },
  { day: 'Viernes', startTime: 1630, endTime: 1750 },
  { day: 'Viernes', startTime: 1800, endTime: 1920 },
  { day: 'Viernes', startTime: 1950, endTime: 2110 },
  { day: 'Sábado', startTime: 700, endTime: 2200 }
];

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('Connected to MongoDB');

    // Eliminar todos los horarios existentes
    await Schedule.deleteMany({});

    // Insertar los nuevos horarios
    await Schedule.insertMany(schedulesData);

    console.log('Schedules data has been loaded successfully');
    mongoose.disconnect();
  })
  .catch(err => {
    console.error('Error connecting to MongoDB', err);
  });