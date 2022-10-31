function mostrarResultados(dato) {
   const precio = document.querySelector(".result-item-price");
   console.log(dato[0].price);
   //precio.innerHTML = dato[0].price;
}

function main() {
   const form = document.querySelector(".form-buscar");
   form.addEventListener("submit", function (e) {
      e.preventDefault();
      const buscarText = e.target.buscar.value;
      fetch("https://api.mercadolibre.com/sites/MLA/search?q=" + buscarText)
         .then(function (result) {
            return result.json();
         })
         .then(function (dato) {
            return mostrarResultados(dato.results);
         });
   });
}

main();
