document.addEventListener('DOMContentLoaded', function() {
    let listaFaculdadeSP = [
    "Graduação",
    "Pós-graduação",

  ];
  
  
  function exibeLista() {
    let listaFaculdadeElement = document.querySelector(".lista-faculdade");
  
    listaFaculdadeSP.forEach(function (faculdade) {
      let option = document.createElement("option");
      option.text = faculdade;
      listaFaculdadeElement.appendChild(option);
    });
  }
  
  exibeLista();
  
  })
  
  
  function exibeFaculdade(e) {
    console.log(e)
    let selectElement = document.querySelector(".lista-faculdade");
    let selectedOption = selectElement.options[selectElement.selectedIndex].text;
    console.log(selectedOption)
    let selecionadaElement = document.querySelector(".selecionada");
    selecionadaElement.textContent = "Selecionado: " + 'Você não apresenta pêndencias';
  }