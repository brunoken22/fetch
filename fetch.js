function mostrarResultados(dato) {
   const results  =document.querySelector(".result")
   const template = document.querySelector("#result-template")
   const resultCountSearch= document.querySelector(".cantidad-result")
   resultCountSearch.textContent = dato.length;
   for(let result of dato){
      const precio = template.content.querySelector(".result-item-price");
      let title =template.content.querySelector(".result-item-title")
      let condition = template.content.querySelector(".result-item-condition")
      let cantidadVentas = template.content.querySelector(".result-item-ventas")
      let clone = document.importNode(template.content,true)
      console.log(results);
      results.splice(1).appendChild(clone)
      condition.textContent = result.condition;
      title.textContent = result.title;
      precio.textContent = "$"+result.price;
      cantidadVentas.textContent = result["sold_quantity"]
   }
   console.log(dato[0]);
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
