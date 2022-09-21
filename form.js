let lista = [];

const formSubmit = document.querySelector(".form");
const tareasBox = document.querySelector(".tareas-box");

formSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  let textInput = document.querySelector("#text");
  let text = textInput.value;

  if (!text) {
    alert("Por favor ingrese un texto");
  } else {
    let tarea = new Object();
    tarea.id = lista.length;
    tarea.text = text;

    let tareaBox = document.createElement("label");
    tareaBox.innerHTML = tarea.text;
    tareaBox.classList.add("tareaBox");
    tareasBox.append(tareaBox);
  }

  textInput.value = "";
});
