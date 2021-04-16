

window.addEventListener("load", ()=>{
    let menu = document.getElementById("menu");
    document.querySelectorAll('.api_key').forEach( e => {
        
        let menuItem = document.createElement("li");
        menuItem.classList.add("menu_item");
        menuItem.innerHTML = e.id;

        menuItem.addEventListener("click", ()=>{
            e.scrollIntoView(true);
        })
        
        menu.appendChild(menuItem);
    })
})