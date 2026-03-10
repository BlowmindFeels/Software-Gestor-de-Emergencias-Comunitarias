const express = require('express');
const cors = require('cors');
const routes = require('./routes/emergencyRoutes');
const { errorHandler } = require('./middlewares/errorHandler');
require('dotenv').config();


const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    mensaje: "API de emergencias funcionando"
  });
});

app.use('/api/emergencias', routes);

app.use(errorHandler);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Backend escuchando en puerto ${PORT}`);
});
