const convertButton = document.querySelector(".main-button")
const currencySelector = document.querySelector(".ended-coin")

const valueDolarToday = 4.7798999
const valueEuroToday = 5.2038992
const valueBitCoinToday = 146997.88
const valueRealToday = 4.7793
const valueLibraToday = 6.0704991

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-main").value
    const currencyValueToConvert = document.querySelector(".currency-value")
    const currencyValueConverted = document.querySelector(".currency-value-result")

    if (currencySelector.value == "dolar") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputCurrencyValue / valueDolarToday)
    }

    if (currencySelector.value == "bitcoin") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "BTC" }).format(inputCurrencyValue / valueBitCoinToday)
    }

    if (currencySelector.value == "euro") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputCurrencyValue / valueEuroToday)
    }

    if (currencySelector.value == "libra") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "GBP" }).format(inputCurrencyValue / valueLibraToday)
    }    

    if (currencySelector.value == "real") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputCurrencyValue / valueRealToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputCurrencyValue)
}

function changeCurrency() {
    const nameCurrency = document.querySelector(".currency-converted")
    const imageCurrency = document.querySelector(".converted")

    if (currencySelector.value == "dolar") {
        nameCurrency.innerHTML = "Dólar Americano"
        imageCurrency.src = "./assets/dolar.png"
    }

    if (currencySelector.value == "bitcoin") {
        nameCurrency.innerHTML = "BitCoin"
        imageCurrency.src = "./assets/bitcoin.png"
    }

    if (currencySelector.value == "euro") {
        nameCurrency.innerHTML = "Euro"
        imageCurrency.src = "./assets/euro.png"
    }

    if (currencySelector.value == "libra") {
        nameCurrency.innerHTML = "Libra"
        imageCurrency.src = "./assets/libra.png"
    }

    if (currencySelector.value == "real") {
        nameCurrency.innerHTML = "BitCoin"
        imageCurrency.src = "./assets/real.png"
    }

    convertValues()
}

currencySelector.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)