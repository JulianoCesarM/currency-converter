function currencyConverter() {
  const valueDolar = document.querySelector("#valueDolar")
  const spanResp = document.querySelector("#resp")

  const cotacao = {
    yen: 150.3,
    real: 4.87,
    won: 1305.14,
    southAfrican: 18.21,
    bitcoin: 0.000027,
  }

  const valueReal = valueDolar.value * cotacao.real
  const valueYen = valueDolar.value * cotacao.yen
  const valueWon = valueDolar.value * cotacao.won
  const valueSouthAfrican = valueDolar.value * cotacao.southAfrican
  const valueBTC = valueDolar.value * cotacao.bitcoin
  spanResp.classList.add("resp")
  const msg = `A cotação do real é de R$ ${cotacao.real.toFixed(
    2
  )}, e a conversão é R$ ${valueReal.toFixed(
    2
  )},</br>A cotação do Yen é de ¥ ${cotacao.yen.toFixed(
    2
  )}, e a conversão é ¥ ${valueYen.toFixed(
    2
  )},</br>A cotação do Won é de ₩ ${cotacao.won.toFixed(
    2
  )}, e a conversão é ₩ ${valueWon.toFixed(
    2
  )},</br>A cotação do South African(ZAR) é de R ${cotacao.southAfrican.toFixed(
    2
  )}, e a conversão é R ${valueSouthAfrican.toFixed(
    2
  )},</br>A cotação do Bitcoin(₿) é de ₿ ${
    cotacao.bitcoin
  }, e a conversão é ₿ ${valueBTC}
  `

  return (spanResp.innerHTML = msg)
}
