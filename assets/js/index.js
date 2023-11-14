cotacao = {
  yen: 150.3,
  real: 4.87,
  won: 1305.14,
  southAfrican: 18.21,
}

function currencyConverter() {
  const valueDolar = document.querySelector("#valueDolar")
  const spanResp = document.querySelector("#resp")
  const cotacaoEmDolar = 4.87

  const valueReal = valueDolar.value * cotacaoEmDolar

  spanResp.classList.add("resp")
  const msg = `A cotação é R$ ${cotacaoEmDolar.toFixed(
    2
  )}, e a conversão é R$ ${valueReal.toFixed(2)}`

  return (spanResp.innerText = msg)
}
