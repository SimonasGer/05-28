const template = (text, button, id) => {
    return `
    <div class="joke" mb-2">
        <p id = "${id}">${text}</p>

        <button type="submit" class="${button} btn btn-primary float-end mb-2">${button}</button>
    </div>
    `
}

export default template