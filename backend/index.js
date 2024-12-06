const express = require('express');
const cors = require('cors'); // Importando CORS
const bodyParser = require('body-parser');
const dataRoutes = require('./routes/dataRoutes');

const app = express();
const PORT = 3000;

app.use(cors()); // Habilita CORS
app.use(bodyParser.json());
app.use('/api/data', dataRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
