const httpPost = (path, dataToSave) => {
    const baseUrl = 'http://localhost:8080/api/v1/';

    fetch(`${baseUrl}${path}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToSave)
    })
        .then(response => {
            console.log(`Dado criado com sucesso!`);
        })
        .catch(e => console.log(`Erro ao salvar dados ${e}`))
}

export default httpPost;