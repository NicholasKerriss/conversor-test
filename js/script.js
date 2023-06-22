// let botaoResultado = document.getElementById("section__btn");
// botaoResultado.addEventListener("click", conversorResult);

// function conversorResult() {
//   let valorEmLibras = parseFloat(document.getElementById("input").value);
//   let valorEmQuilos = valorEmLibras * 0.45359237;

//   document.querySelector(".result").textContent =
//     "Medida convertida (kg): " + valorEmQuilos.toFixed(2);
// }

// let botaoResultado = document.getElementById("section__btn");
// botaoResultado.addEventListener("click", conversorResult);

function conversorResult() {
  const valor = parseFloat(document.getElementById("input").value);
  const medidaDe = document.getElementById("select-de").value;
  const medidaPara = document.getElementById("select-para").value;

  let resultado;

  if (medidaDe === "Kg") {
    if (medidaPara === "Lb") {
      resultado = valor * 2.2;
    } else if (medidaPara === "Oz") {
      resultado = valor * 35.27396194958;
    } else {
      resultado = valor;
    }
  }

  if (medidaDe === "Lb") {
    if (medidaPara === "Kg") {
      resultado = valor * 0.45359237;
    } else if (medidaPara === "Oz") {
      resultado = valor * 16;
    } else {
      resultado = valor;
    }
  }

  if (medidaDe === "Oz") {
    if (medidaPara === "Kg") {
      resultado = valor * 0.0283527076835;
    } else if (medidaPara === "Lb") {
      resultado = valor * 0.0625;
    } else {
      resultado = valor;
    }
  }

  document.querySelector(".result").textContent =
    "Medida convertida: " + resultado;
}

let botaoResultado = document.getElementById("section__btn");
botaoResultado.addEventListener("click", conversorResult);
