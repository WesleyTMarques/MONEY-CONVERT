const convertButton = document.querySelector(".main-button")
const currencySelectorInitial = document.querySelector(".initial-coin")
const currencySelectorFinal = document.querySelector(".ended-coin")

const valueDolarToday = 4.7798999
const valueEuroToday = 5.2038992
const valueBitCoinToday = 146997.88
const valueRealToday = 4.7793
const valueLibraToday = 6.0704991

function convertValues() { //função para a troca dos formatos das moedas
    const inputCurrencyValue = document.querySelector(".input-main").value
    const currencyValueToConvert = document.querySelector(".currency-value")
    const currencyValueConverted = document.querySelector(".currency-value-result")
    const inputPlaceHolder = document.querySelector(".input-main")

    //trocar o formato da moeda inical
    switch (currencySelectorInitial.value) {
        case "real":
            currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputCurrencyValue)
            break;

        case "dolar":
            currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputCurrencyValue)
            break;

        case "bitcoin":
            currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "BTC" }).format(inputCurrencyValue)
            break;

        case "euro":
            currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputCurrencyValue)
            break;

        case "libra":
            currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "GBP" }).format(inputCurrencyValue)
            break;
    }

    //trocar formato da moeda final
    switch (currencySelectorFinal.value) {
        case "dolar":
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputCurrencyValue / valueDolarToday)
            break;

        case "bitcoin":
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "BTC" }).format(inputCurrencyValue / valueBitCoinToday)
            break;

        case "euro":
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputCurrencyValue / valueEuroToday)
            break;

        case "libra":
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "GBP" }).format(inputCurrencyValue / valueLibraToday)
            break;

        case "real":
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputCurrencyValue / valueRealToday)
            break;

        default:
            break;
    }

    //alterar o place Holder do input
    switch (currencySelectorInitial.value) {
        case "dolar":
            inputPlaceHolder.placeholder = "$ 10,000.00"
            break;

        case "bitcoin":
            inputPlaceHolder.placeholder = "10.000,00 BTC"
            break;

        case "euro":
            inputPlaceHolder.placeholder = "10.000,00 €"
            break;

        case "libra":
            inputPlaceHolder.placeholder = "10.000,00 £"
            break;

        case "real":
            inputPlaceHolder.placeholder = "R$ 10.000,00"
            break;

        default:
            break;
    }
}

//trocar a foto e nome das moeda selecionadas do inicial
function changeCurrencyInitial() {
    const nameCurrency = document.querySelector(".currency")
    const imageCurrency = document.querySelector(".to-convert")

    switch (currencySelectorInitial.value) {
        case "dolar":
            nameCurrency.innerHTML = "Dólar Americano"
            imageCurrency.src = "./assets/dolar.png"
            break;

        case "bitcoin":
            nameCurrency.innerHTML = "BitCoin"
            imageCurrency.src = "./assets/bitcoin.png"
            break;

        case "euro":
            nameCurrency.innerHTML = "Euro"
            imageCurrency.src = "./assets/euro.png"
            break;

        case "libra":
            nameCurrency.innerHTML = "Libra"
            imageCurrency.src = "./assets/libra.png"
            break;

        case "real":
            nameCurrency.innerHTML = "Real"
            imageCurrency.src = "./assets/real.png"
            break;
    }

    convertValues()
}

//trocar a foto e nome das moeda selecionadas no final
function changeCurrency() {
    const nameCurrency = document.querySelector(".currency-converted")
    const imageCurrency = document.querySelector(".converted")

    switch (currencySelectorFinal.value) {
        case "dolar":
            nameCurrency.innerHTML = "Dólar Americano"
            imageCurrency.src = "./assets/dolar.png"
            break;

        case "bitcoin":
            nameCurrency.innerHTML = "BitCoin"
            imageCurrency.src = "./assets/bitcoin.png"
            break;

        case "euro":
            nameCurrency.innerHTML = "Euro"
            imageCurrency.src = "./assets/euro.png"
            break;

        case "libra":
            nameCurrency.innerHTML = "Libra"
            imageCurrency.src = "./assets/libra.png"
            break;

        case "real":
            nameCurrency.innerHTML = "Real"
            imageCurrency.src = "./assets/real.png"
            break;
    }

    convertValues()
}

currencySelectorInitial.addEventListener("change", changeCurrencyInitial)
currencySelectorFinal.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)