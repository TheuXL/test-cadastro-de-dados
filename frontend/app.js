document.addEventListener('DOMContentLoaded', function () {
    const dataForm = document.getElementById('dataForm');
    const nomeInput = document.getElementById('nome');
    const idadeInput = document.getElementById('idade');
    const emailInput = document.getElementById('email');
    const dataTable = document.getElementById('dataTable');
    const tableBody = dataTable.querySelector('tbody');

    // Submissão do formulário
    dataForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        const nome = nomeInput.value.trim();
        const idade = parseInt(idadeInput.value);
        const email = emailInput.value.trim();

        if (!nome || idade <= 0 || !email) {
            alert('Todos os campos devem ser preenchidos corretamente!');
            return;
        }

        const data = { nome, idade, email };

        try {
            const response = await fetch('http://localhost:3000/api/data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Erro ao salvar os dados');
            }

            alert('Dados salvos com sucesso!');
            fetchData();  // Atualiza a tabela após salvar
            dataForm.reset();  // Reseta o formulário
        } catch (error) {
            console.error('Erro: ', error);
            alert(`Erro: ${error.message}`);
        }
    });

    // Função para pegar os dados e atualizar a tabela
    async function fetchData() {
        try {
            const response = await fetch('http://localhost:3000/api/data');
            const data = await response.json();

            if (response.status === 404) {
                alert('Nenhum dado encontrado.');
                return;
            }

            tableBody.innerHTML = '';  // Limpa os dados anteriores

            data.forEach(({ nome, idade, email }) => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${nome}</td>
                    <td>${idade}</td>
                    <td>${email}</td>
                `;
                tableBody.appendChild(row);
            });
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
            alert('Erro ao carregar os dados.');
        }
    }

    // Chama a função para preencher a tabela ao carregar a página
    fetchData();
});
