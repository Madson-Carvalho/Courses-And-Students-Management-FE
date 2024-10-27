const httpGet = (path, setData) => {
    const baseUrl = 'http://localhost:8080/api/v1/';

    fetch(`${baseUrl}${path}`)
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.log('Erro ao buscar dados:', error));
}

export default httpGet;