const mongoose = require('mongoose');
const Schedule = require('./models/Schedule');
require('dotenv').config();

const schedulesData = [
  { faculty: 'Ingeniería', room: 'D-12', day: 'Lunes', startTime: 700, endTime: 820 },
  { faculty: 'Ingeniería', room: 'D-13', day: 'Lunes', startTime: 700, endTime: 820 },
  { faculty: 'Ingeniería', room: 'D-14', day: 'Lunes', startTime: 700, endTime: 820 },
  { faculty: 'Ingeniería', room: 'D-15', day: 'Lunes', startTime: 700, endTime: 820 }
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