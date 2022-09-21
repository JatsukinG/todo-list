let lista = [];

const formSubmit = document.querySelector(".form");

formSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  let text = document.querySelector("#text").value;

  if (!text) {
    alert("Por favor ingrese un texto");
  } else {
    let tarea = new Object();
    tarea.id = lista.length;
    tarea.text = text;
    console.log(tarea);
    lista.push(text);
    console.log(lista);
  }
});
