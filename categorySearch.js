import api from "./api.js";
import template from "./template.js";
import save from "./save.js";


const categorySearch = (category) => {
    let search
    let jokes = document.querySelector(".jokes")
    api(`search?query=Chuck`)
    .then(response => search = response)
    .then(() => {
        for (let i of search.result){
            if (i.categories[0] === category){
                let joke = document.createElement("div");
                joke.className = "col-3 border"
                jokes.appendChild(joke).innerHTML = template(i.value, "save", i.id)
            }
        }
    })
    .then(() => {
        save()
    })
}
export default categorySearch;