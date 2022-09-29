// comienzo declarando una lista vacía
let content = [];

// esta función agrega el contenido del input "agregar" y deja el campo vacío
function addToListing() {
  let item = document.getElementById("item");
  content.push(item.value); //agrego el contenido del input con push
  localStorage.setItem("list", JSON.stringify(content)); // esto fue necesario porque se mostraba de a una sola letra y no la palabra entera
  item.value = "";
  show(content);
}
//esta funcion muestra cada elemento que se agrega en una lista en el elemento <div> "contenedor"
function show(result) {
  let listed = "";
  for (let element of result) {
    listed += `<li>${element}</li>`;
  }
  document.getElementById("container").innerHTML = listed;
}

//esta funcion borra la lista
function clean() {
  content.splice(0, content.length);
  show(content);
}
//acá digo que cuando se carga el html pase lo siguiente
document.addEventListener("DOMContentLoaded", () => {
  content = JSON.parse(localStorage.getItem("list")); //lo parseo para que devuelva la palabra entera
  if (content != null) {
    show(content); //si habia contenido lo muestro y sino vuelve a ser una lista vacía
  } else {
    content = [];
  }

  document.getElementById("add").addEventListener("click", () => {
    addToListing();
  });
  document.getElementById("delete").addEventListener("click", () => {
    clean();
    localStorage.removeItem("list"); // si elijo limpiar, cuando recargo ya no aparece el contenido
  });
});
