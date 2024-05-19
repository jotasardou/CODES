document.addEventListener('DOMContentLoaded', function() {
    let listaFaculdadeSP = [
    "Universidade de São Paulo (USP)",
    "Universidade Estadual de Campinas (UNICAMP)",
    "Universidade Federal de São Paulo (UNIFESP)",
    "Pontifícia Universidade Católica de São Paulo (PUC-SP)",
    "Fundação Getúlio Vargas (FGV)",
    "Universidade Presbiteriana Mackenzie",
    "Universidade Estadual Paulista (UNESP)",
    "Instituto Tecnológico de Aeronáutica (ITA)",
    "Instituto de Ensino e Pesquisa (INSPER)",
    "Escola Superior de Propaganda e Marketing (ESPM)",
    "Faculdade Cásper Líbero",
    "Centro Universitário FEI",
    "Universidade São Judas Tadeu",
    "Faculdade de Medicina do ABC",
    "Universidade Cruzeiro do Sul",
    "Faculdade de Tecnologia de São Paulo (FATEC-SP)",
    "Universidade Paulista (UNIP)",
    "Universidade Anhembi Morumbi",
    "Faculdade Armando Alvares Penteado (FAAP)",
    "Universidade Metodista de São Paulo (UMESP)",
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
    selecionadaElement.textContent = "Selecionado: " + selectedOption;
  }