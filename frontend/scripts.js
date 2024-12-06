document.getElementById('dataForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const idade = parseInt(document.getElementById('idade').value);
    const email = document.getElementById('email').value;

    try {
        const response = await fetch('http://localhost:3000/api/data', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, idade, email }),
        });

        if (!response.ok) throw new Error(await response.text());

        alert('Dados salvos com sucesso!');
        fetchData();
    } catch (error) {
        alert(`Erro: ${error.message}`);
    }
});

async function fetchData() {
    const response = await fetch('http://localhost:3000/api/data');
    const data = await response.json();
    const tableBody = document.querySelector('#dataTable tbody');
    tableBody.innerHTML = '';

    data.forEach(({ nome, idade, email }) => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${nome}</td><td>${idade}</td><td>${email}</td>`;
        tableBody.appendChild(row);
    });
}

fetchData();
