const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Importa el paquete cors
require('dotenv').config();

const app = express();
app.use(cors()); // Habilita CORS para todas las rutas
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const facultiesRouter = require('./routes/faculties');
const roomsRouter = require('./routes/rooms');
const schedulesRouter = require('./routes/schedules');

app.use('/api/faculties', facultiesRouter);
app.use('/api/rooms', roomsRouter);
app.use('/api/schedules', schedulesRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});