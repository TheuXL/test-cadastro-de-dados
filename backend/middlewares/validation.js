function validateData(req, res, next) {
    const { nome, idade, email } = req.body;

    if (!nome || typeof nome !== 'string') {
        return res.status(400).json({ error: 'Nome é obrigatório e deve ser uma string.' });
    }

    if (!idade || typeof idade !== 'number' || idade <= 0) {
        return res.status(400).json({ error: 'Idade deve ser um número maior que zero.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        return res.status(400).json({ error: 'E-mail deve ser válido.' });
    }

    next();
}

module.exports = { validateData }; // Exportando a função corretamente
