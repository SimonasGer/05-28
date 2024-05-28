const categories = (list) => {
    let categories = document.querySelector("#categories");
    for (let i of list){
        let category = document.createElement("option");
        category.value = i;
        category.innerHTML = i;
        categories.appendChild(category);
    }
    
}
export default categories;