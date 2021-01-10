const btnDD = document.querySelector("#btn-dd");
const menuDD = document.querySelector("#menu-dd");

/* DROPDOWN FUNCTIONS */
btnDD.onclick = () => {
  if (menuDD.className !== "bg-green") {
    btnDD.classList.replace("fa-folder-open", "fa-folder");
    menuDD.classList.remove("mh-dd");
  } else {
    btnDD.classList.replace("fa-folder", "fa-folder-open");
    menuDD.classList.add("mh-dd");
  }
}