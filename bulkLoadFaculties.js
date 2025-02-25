const mongoose = require('mongoose');
const Faculty = require('./models/Faculty');
require('dotenv').config();

const facultiesData = [
  { name: 'Ingeniería' },
  { name: 'Humanidades' },
  { name: 'Económicas' },
  { name: 'Salud' },
  { name: 'Políticas' },
  { name: 'Jurídicas' },
  { name: 'Arquitectura' },
  { name: 'Ambientales' },
  { name: 'Teología' }
];

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('Connected to MongoDB');

    // Eliminar todas las facultades existentes
    await Faculty.deleteMany({});

    // Insertar las nuevas facultades
    await Faculty.insertMany(facultiesData);

    console.log('Faculties data has been loaded successfully');
    mongoose.disconnect();
  })
  .catch(err => {
    console.error('Error connecting to MongoDB', err);
  });