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
      let tareaBox = document.createElement("div");
      tareaBox.classList.add("tareaBox");
      tareasBox.append(tareaBox);
      let p = document.createElement("p");
      p.innerHTML = obj.text;
      tareaBox.append(p);
      let btn = document.createElement("button");
      btn.classList.add("btnState");
      btn.innerHTML = "Uncompleted";
      tareaBox.append(btn);
    });
  }

  textInput.value = "";
});

/*const btnState = document.querySelector("#btnState");

const completed = () => {
  btnState.innerHTML = "Completed";
  btnState.classList.toggle("btn-state-completed");
};*/
