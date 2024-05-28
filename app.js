import api from "./api.js";
import categories from "./categories.js";
import keyword from "./keyword.js";
import categorySearch from "./categorySearch.js";
import template from "./template.js";

// localStorage.clear()

let jokes = document.querySelector(".jokes")
for (let subjects in localStorage){
    if (localStorage.getItem(subjects) != undefined && localStorage.getItem(subjects) !== "honey:core-sdk:*"){
        let joke = document.createElement("div");
        joke.className = "col-3 border"
        jokes.appendChild(joke).innerHTML = template(localStorage.getItem(subjects), "Delete", subjects)
    }
}

let search
api("categories")
.then(response => search = response)
.then(() => categories(search))

document.querySelector("button").addEventListener("click", (e) => {
    e.preventDefault();
    const keyWord = document.querySelector("input").value;
    const category = document.querySelector("#categories").value;
    if (keyWord === "" && category !== ""){
        categorySearch(category)
    }
    else if (category === "" && keyWord !== ""){
        keyword(keyWord);
        document.querySelector("input").value = "";
    }
   
})

document.querySelectorAll(".Delete").forEach(item => {
    item.addEventListener("click", ()=>{
        event.preventDefault();
        let id = item.parentNode.children[0].id
        localStorage.removeItem(id)
        item.parentNode.parentNode.remove();
    })
});
