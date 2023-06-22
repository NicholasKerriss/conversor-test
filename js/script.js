let botaoResultado = document.getElementById("section__btn");
botaoResultado.addEventListener("click", conversorResult);

function conversorResult() {
  let valorEmLibras = parseFloat(document.getElementById("input").value);
  let valorEmQuilos = valorEmLibras * 0.45359237;

  document.querySelector(".result").textContent =
    "Medida convertida (kg): " + valorEmQuilos.toFixed(2);
}
