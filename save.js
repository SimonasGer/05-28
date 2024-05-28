const save = () => {
    document.querySelectorAll(".save").forEach(item => {
        item.addEventListener("click", ()=>{
            event.preventDefault();
            console.log("press")
            let id = item.parentNode.children[0].id;
            let text = item.parentNode.children[0].innerHTML;
            localStorage.setItem(id, text)
            item.className = "Save btn btn-success float-end mb-2"
        })
    })
}

export default save