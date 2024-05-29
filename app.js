import api from "./api.js";
import categories from "./categories.js";
import keyword from "./keyword.js";
import categorySearch from "./categorySearch.js";
import template from "./template.js";

// localStorage.clear()


document.querySelector(".saved").addEventListener("click", (e) => {
    if (document.querySelector(".saved").innerHTML === "Saved"){
        e.preventDefault();
        document.querySelector(".saved").innerHTML = "Hide all";
        let jokes = document.querySelector(".jokes");
        for (let subjects in localStorage){
            if (localStorage.getItem(subjects) != undefined && localStorage.getItem(subjects) !== "honey:core-sdk:*"){
                let joke = document.createElement("div");
                joke.className = "col-sm-3 border";
                jokes.appendChild(joke).innerHTML = template(localStorage.getItem(subjects), "Delete", subjects);
                document.querySelectorAll(".Delete").forEach(item => {
                    item.addEventListener("click", ()=>{
                        event.preventDefault();
                        let id = item.parentNode.children[0].id
                        localStorage.removeItem(id)
                        item.parentNode.parentNode.remove();
                    })
                });
            }
        }
    } else {
        e.preventDefault();
        console.log("ok");
        document.querySelector(".saved").innerHTML = "Saved";
        document.querySelector(".jokes").innerHTML = "";
    }
})


let search
api("categories")
.then(response => search = response)
.then(() => categories(search))

document.querySelector(".search").addEventListener("click", (e) => {
    e.preventDefault();
    const keyWord = document.querySelector("input").value;
    const category = document.querySelector("#categories").value;
    document.querySelector(".jokes").innerHTML = "";
    if (keyWord === "" && category !== ""){
        categorySearch(category)
    }
    else if (category === "" && keyWord !== ""){
        keyword(keyWord);
        document.querySelector("input").value = "";
    }
   
})
