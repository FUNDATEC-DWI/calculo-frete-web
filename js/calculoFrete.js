let txtAltura = document.getElementById("txtAltura");
let txtProfundidade = document.getElementById("txtProfundidade");
let txtLargura = document.getElementById("txtLargura");
let txtPeso = document.getElementById("txtPeso");
let chkFragil = document.getElementById("chkFragil");
let txtDistancia = document.getElementById("txtDistancia");
let lblValorFrete = document.getElementById("lblValorFrete");

function calcularCubagem(altura, profundidade, largura) {
  return altura * profundidade * largura;
}

function calcularPasso2(cubagem) {
  return cubagem * 0.5;
}

function calcularPasso3(resultadoPasso2, peso) {
  return resultadoPasso2 * peso;
}

function calcularPasso4(resultadoPasso3, ehFragil) {
  let adicionalDeFragilidade = 0;

  if (ehFragil) {
    adicionalDeFragilidade = resultadoPasso3 * 0.15;
  }

  return resultadoPasso3 + adicionalDeFragilidade;
}

function calcularPasso5(resultadoPasso4, distancia) {
  return resultadoPasso4 * (distancia / 2);
}

document.getElementById("btnCalcular").addEventListener("click", function () {
  let altura = parseFloat(txtAltura.value);
  let profundidade = parseFloat(txtProfundidade.value);
  let largura = parseFloat(txtLargura.value);
  let peso = parseFloat(txtPeso.value);
  let distancia = parseFloat(txtDistancia.value);
  let ehFragil = chkFragil.checked;

  let cubagem = calcularCubagem(altura, profundidade, largura);
  let resultadoPasso2 = calcularPasso2(cubagem);
  let resultadoPasso3 = calcularPasso3(resultadoPasso2, peso);
  let resultadoPasso4 = calcularPasso4(resultadoPasso3, ehFragil);
  let valorFrete = calcularPasso5(resultadoPasso4, distancia);

  lblValorFrete.innerText = "Valor do frete: R$ " + valorFrete.toFixed(2);
});
