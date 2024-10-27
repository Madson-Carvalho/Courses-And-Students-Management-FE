const httpPut = (path, dataToEdit) => {
    const baseUrl = 'http://localhost:8080/api/v1/';

    fetch(`${baseUrl}${path}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToEdit)
    })
        .then(response => {
            console.log(`Dado editado com sucesso!`);
        })
        .catch(e => console.log(`Erro ao editar dados`, e))
}

export default httpPut;