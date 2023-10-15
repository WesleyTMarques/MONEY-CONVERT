const convertButton = document.querySelector(".main-button")
const currencySelectorInitial = document.querySelector(".initial-coin")
const currencySelectorFinal = document.querySelector(".ended-coin")

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

    //realiza o calculo da conversão e trocar formato da moeda final

    if (currencySelectorInitial.value === "real") {

        switch (currencySelectorFinal.value) {
            case "dolar":
                currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputCurrencyValue / 5.05)
                break;

            case "bitcoin":
                currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "BTC" }).format(inputCurrencyValue / 136627.15)
                break;

            case "euro":
                currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputCurrencyValue / 5.31)
                break;

            case "libra":
                currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "GBP" }).format(inputCurrencyValue / 6.13)
                break;

            case "real":
                alert(`NÃO PODEMOS CONVERTER A REAL PARA REAL.                
TROQUE UMA DAS MOEDAS PARA CONVERTER.`)
                break;

            default:
                break;
        }
    } else if (currencySelectorInitial.value === "dolar") {

        switch (currencySelectorFinal.value) {
            case "dolar":
                alert(`NÃO PODEMOS CONVERTER A DOLAR PARA DOLAR.                
TROQUE UMA DAS MOEDAS PARA CONVERTER.`)
                break;

            case "bitcoin":
                currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "BTC" }).format(inputCurrencyValue * 0.000037)
                break;

            case "euro":
                currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputCurrencyValue * 0.95)
                break;

            case "libra":
                currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "GBP" }).format(inputCurrencyValue * 0.82)
                break;

            case "real":
                currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputCurrencyValue * 5.05)
                break;

            default:
                break;
        }
    } else if (currencySelectorInitial.value === "bitcoin") {

        switch (currencySelectorFinal.value) {
            case "dolar":
                currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputCurrencyValue * 27005.50)
                break;

            case "bitcoin":
                alert(`NÃO PODEMOS CONVERTER A BITCOIN PARA BITCOIN.                
TROQUE UMA DAS MOEDAS PARA CONVERTER.`)
                break;

            case "euro":
                currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputCurrencyValue * 25683.58)
                break;

            case "libra":
                currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "GBP" }).format(inputCurrencyValue * 22254.23)
                break;

            case "real":
                currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputCurrencyValue * 136447.89)
                break;

            default:
                break;
        }
    } else if (currencySelectorInitial.value === "euro") {

        switch (currencySelectorFinal.value) {
            case "dolar":
                currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputCurrencyValue * 1.05)
                break;

            case "bitcoin":
                currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "BTC" }).format(inputCurrencyValue * 0.000039)
                break;

            case "euro":
                alert(`NÃO PODEMOS CONVERTER A EURO PARA EURO.                
TROQUE UMA DAS MOEDAS PARA CONVERTER.`)
                break;

            case "libra":
                currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "GBP" }).format(inputCurrencyValue * 0.87)
                break;

            case "real":
                currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputCurrencyValue * 5.31)
                break;

            default:
                break;
        }
    } else if (currencySelectorInitial.value === "libra") {

        switch (currencySelectorFinal.value) {
            case "dolar":
                currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputCurrencyValue * 1.21)
                break;

            case "bitcoin":
                currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "BTC" }).format(inputCurrencyValue * 0.000045)
                break;

            case "euro":
                currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputCurrencyValue * 1.15)
                break;

            case "libra":
                alert(`NÃO PODEMOS CONVERTER A LIBRA PARA LIBRA.                
TROQUE UMA DAS MOEDAS PARA CONVERTER.`)
                break;

            case "real":
                currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputCurrencyValue * 6.13)
                break;

            default:
                break;
        }
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