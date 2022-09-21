let lista = [{}]

const formSubmit = document.querySelector(".form");

formSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  let text = document.querySelector("#text").value;

  if (!text) {
    alert("Por favor ingrese un texto");
  }
});
