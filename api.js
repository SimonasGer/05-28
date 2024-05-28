const api = (select) => {
    const url = `https://api.chucknorris.io/jokes/${select}`
    return fetch(url)
    .then(response => response.json())
}

export default api