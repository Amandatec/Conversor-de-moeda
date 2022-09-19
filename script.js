function converterParaReal() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);

  var valorEmReal = valorEmDolarNumerico * 5;

  console.log(valorEmReal);

  var elementoValorConvertidoReal = document.getElementById("valorConvertidoReal");
  var valorConvertido = "O resultado em real é R$ " + valorEmReal;

  elementoValorConvertidoReal.innerHTML = valorConvertido;

}

function converterParaDolar(){
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmRealNumerico = parseFloat(valor);
  var valorEmDolar = valorEmRealNumerico / 5;
  
  console.log(valorEmDolar);

  var elementoValorConvertidoDolar = document.getElementById("valorConvertidoDolar");
  var valorConvertidoResultado = "O resultado em dolar é US$ " + valorEmDolar;

  elementoValorConvertidoDolar.innerHTML = valorConvertidoResultado;
}
