const btnDD = document.querySelector("#btn-dd");
const menuDD = document.querySelector("#menu-dd");

/* DROPDOWN FUNCTIONS */
btnDD.onclick = () => {
    if(menuDD.style.maxHeight){
        btnDD.className = "fas fa-folder flex-2 txt-c l-h2";
        menuDD.style.maxHeight = null;
    }else{
        btnDD.className = "fas fa-folder-open flex-2 txt-c l-h2";
        menuDD.style.maxHeight = "1000px";
    }
}
