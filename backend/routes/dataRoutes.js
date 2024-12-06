const express = require('express');
const { validateData } = require('../middlewares/validation'); // Middleware de validação
const dataStorage = require('../storage/dataStorage'); // Armazenamento compartilhado

const router = express.Router();

// Rota para salvar dados
router.post('/', validateData, (req, res) => {
    const { nome, idade, email } = req.body;
    dataStorage.push({ nome, idade, email });
    res.status(201).json({ message: 'Dados salvos com sucesso!', data: { nome, idade, email } });
});

// Rota para consultar dados
router.get('/', (req, res) => {
    const records = dataStorage.getAll();
    if (records.length === 0) {
        return res.status(404).json({ message: 'Nenhum registro encontrado.' });
    }
    res.status(200).json(records);
});

// Rota para limpar registros (apenas para testes ou manutenção)
router.delete('/', (req, res) => {
    dataStorage.clear(); // Método para limpar o armazenamento
    res.status(200).json({ message: 'Todos os registros foram removidos.' });
});

module.exports = router;
