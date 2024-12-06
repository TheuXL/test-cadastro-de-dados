const request = require('supertest');
const express = require('express');
const dataRoutes = require('../routes/dataRoutes');
const dataStorage = require('../storage/dataStorage'); // Armazenamento compartilhado

const app = express();
app.use(express.json());
app.use('/api/data', dataRoutes);

describe('Testes para rotas de dados', () => {
    beforeEach(() => {
        dataStorage.clear(); // Limpa o armazenamento antes de cada teste
    });

    it('Deve adicionar um novo registro', async () => {
        const response = await request(app).post('/api/data').send({
            nome: 'João Silva',
            idade: 25,
            email: 'joao@gmail.com',
        });
        expect(response.status).toBe(201);
        expect(response.body.message).toBe('Dados salvos com sucesso!');
    });

    it('Deve retornar erro ao enviar dados inválidos', async () => {
        const response = await request(app).post('/api/data').send({
            nome: '',
            idade: -5,
            email: 'email_invalido',
        });
        expect(response.status).toBe(400);
    });

    it('Deve listar registros salvos', async () => {
        await request(app).post('/api/data').send({
            nome: 'Ana Silva',
            idade: 30,
            email: 'ana@gmail.com',
        });

        const response = await request(app).get('/api/data');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.length).toBe(1);
        expect(response.body[0]).toEqual({
            nome: 'Ana Silva',
            idade: 30,
            email: 'ana@gmail.com',
        });
    });

    it('Deve retornar erro quando não há registros', async () => {
        const response = await request(app).get('/api/data');
        expect(response.status).toBe(404);
        expect(response.body.message).toBe('Nenhum registro encontrado.');
    });

    it('Deve limpar todos os registros', async () => {
        await request(app).post('/api/data').send({
            nome: 'Carlos Silva',
            idade: 40,
            email: 'carlos@gmail.com',
        });
        await request(app).delete('/api/data');

        const response = await request(app).get('/api/data');
        expect(response.status).toBe(404);
        expect(response.body.message).toBe('Nenhum registro encontrado.');
    });
});
