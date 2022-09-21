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
    tareasBox.innerHTML = "";
    let tarea = new Object();
    tarea.id = lista.length;
    tarea.text = text;

    lista.unshift(tarea);

    lista.map((obj) => {
      let tareaBox = document.createElement("label");
      tareaBox.innerHTML = obj.text;
      tareaBox.classList.add("tareaBox");
      tareasBox.append(tareaBox);
    });
  }

  textInput.value = "";
});
