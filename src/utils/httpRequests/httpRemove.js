const httpRemove = (path, id) => {
    const baseUrl = 'http://localhost:8080/api/v1/';

    fetch(`${baseUrl}${path}/${id}`, {
        method: 'DELETE'
    })
        .then(res => {
            console.log('Registro removido com sucesso!');
        })
        .catch(error => console.log('Erro ao remover registro:', error));
}

export default httpRemove;