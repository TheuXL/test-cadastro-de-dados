# README: Cadastro de Dados

Este projeto é um sistema simples de cadastro e consulta de dados desenvolvido em **Node.js** e **Express.js** para o backend, e **HTML, CSS e JavaScript** para o frontend. Ele permite salvar, listar e limpar registros de usuários.

---

## Estrutura do Projeto

### **Frontend**

- **`index.html`**
  - Define a interface gráfica do sistema.
  - Contém um formulário para entrada de dados (nome, idade, e-mail) e uma tabela para exibir os registros salvos.

- **`styles.css`**
  - Arquivo de estilos que define a aparência da interface, incluindo design responsivo, cores e espaçamentos.

- **`app.js`**
  - Gerencia a interação do usuário com o sistema:
    - Submete os dados para o backend.
    - Atualiza a tabela com os dados recebidos.
    - Valida campos no frontend antes do envio.

- **`scripts.js`**
  - Alternativa ao `app.js` para operações similares, centralizando chamadas à API.

---

### **Backend**

- **`index.js`**
  - Configura o servidor Node.js utilizando **Express**.
  - Habilita o **CORS** e configura o roteamento.
  - Inicia o servidor na porta `3000`.

- **`routes/dataRoutes.js`**
  - Define as rotas da API:
    - **POST `/api/data`**: Salva um registro no sistema.
    - **GET `/api/data`**: Retorna todos os registros salvos.
    - **DELETE `/api/data`**: Remove todos os registros.

- **`middlewares/validation.js`**
  - Valida os dados enviados pelo cliente:
    - Nome deve ser uma string.
    - Idade deve ser um número maior que zero.
    - E-mail deve seguir um formato válido.

- **`tests/dataRoutes.test.js`**
  - Contém testes automatizados para as rotas da API utilizando **Jest** e **Supertest**.

---

## Como Rodar o Projeto

### **1. Configurar o Backend**
1. Certifique-se de que o Node.js está instalado.
2. Navegue até a pasta `backend`:
   ```bash
   cd backend
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o servidor:
   ```bash
   npm start
   ```
5. O backend estará disponível em: [http://localhost:3000](http://localhost:3000).

---

### **2. Configurar o Frontend**
1. Navegue até a pasta `frontend`:
   ```bash
   cd frontend
   ```
2. Use npm start.

---

## Como Rodar os Testes

### Pré-requisitos:
Certifique-se de que as dependências de desenvolvimento estão instaladas no backend.

### Rodando os testes:
1. Na pasta `backend`, execute:
   ```bash
   npm test
   ```
2. Os testes irão:
   - Validar a criação de registros.
   - Garantir o comportamento correto para entradas inválidas.
   - Confirmar a listagem e remoção de registros.

---

## Fluxo de Operação

1. **Interface do Usuário**
   - O formulário recebe os dados (nome, idade, e-mail) e os envia para o backend via `POST /api/data`.
   - Os dados validados são salvos no backend.

2. **Consulta de Dados**
   - A tabela na interface é preenchida com dados obtidos do backend via `GET /api/data`.

3. **Limpeza de Dados**
   - Todos os registros podem ser excluídos pelo backend via `DELETE /api/data` (útil para manutenção).

---

## Melhorias Futuras
- Autenticação de usuários.
- Armazenamento persistente com banco de dados (ex.: MongoDB, MySQL).
- Paginação na listagem de dados.
- Testes de integração frontend-backend.

---

