import api from "./api.js";
import save from "./save.js";
import template from "./template.js";

const keyword = (keyword) => {
    let search
    let jokes = document.querySelector(".jokes")
    api(`search?query=${keyword}`)
    .then(response => search = response)
    .then(() => {
        for (let i in search.result){
            let joke = document.createElement("div");
            joke.className = "col-3 border"
            jokes.appendChild(joke).innerHTML = template(search.result[i].value, "Save", search.result[i].id)
        }
    })
    .then(() => {
        save()
    })
}
export default keyword