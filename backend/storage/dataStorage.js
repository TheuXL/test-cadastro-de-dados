let data = []; // Armazenamento em memória

module.exports = {
    push: (item) => data.push(item),
    getAll: () => [...data], // Retorna uma cópia dos dados
    clear: () => (data = []), // Limpa o array
    get length() {
        return data.length;
    },
};
