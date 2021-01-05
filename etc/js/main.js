const btnDD = document.querySelector("#btn-dd");
const menuDD = document.querySelector("#menu-dd");

/* DROPDOWN FUNCTIONS */
btnDD.onclick = () => {
    if(menuDD.style.maxHeight){
        btnDD.classList.replace("fa-folder-open", "fa-folder");
        menuDD.style.maxHeight = null;
    }else{
        btnDD.classList.replace("fa-folder","fa-folder-open");
        menuDD.style.maxHeight = "250px";
    }
}
