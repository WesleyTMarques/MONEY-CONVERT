const convertButton = document.querySelector(".main-button")
const currencySelectorInitial = document.querySelector(".initial-coin")
const currencySelectorFinal = document.querySelector(".ended-coin")

async function convertValues() { //função para a troca dos formatos das moedas
    const inputCurrencyValue = document.querySelector(".input-main").value
    const currencyValueToConvert = document.querySelector(".currency-value")
    const currencyValueConverted = document.querySelector(".currency-value-result")
    const inputPlaceHolder = document.querySelector(".input-main")


    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL,EUR-USD,GBP-USD,BTC-USD,BRL-USD,BRL-EUR,USD-EUR,GBP-EUR,BTC-EUR,USD-GBP,BRL-GBP,EUR-GBP").then(response => response.json())

    const coin = [{name:"USD-BRL", value:data.USDBRL.high},
    {name:"EUR-BRL", value:data.EURBRL.high},
    {name:"BTC-BRL", value:data.BTCBRL.high},
    {name:"GBP-BRL", value:data.GBPBRL.high},
    {name:"EUR-USD", value:data.EURUSD.high},
    {name:"GBP-USD", value:data.GBPUSD.high},
    {name:"BTC-USD", value:data.BTCUSD.high},
    {name:"BRL-USD", value:data.BRLUSD.high},
    {name:"BRL-EUR", value:data.BRLEUR.high},
    {name:"USD-EUR", value:data.USDEUR.high},
    {name:"GBP-EUR", value:data.GBPEUR.high},
    {name:"BTC-EUR", value:data.BTCEUR.high},
    {name:"USD-GBP", value:data.USDGBP.high},
    {name:"BRL-GBP", value:data.BRLGBP.high},
    {name:"EUR-GBP", value:data.EURGBP.high}]

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
                currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputCurrencyValue * coin[7].value)
                break;

            case "bitcoin":
                currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "BTC" }).format(inputCurrencyValue / coin[2].value)
                break;

            case "euro":
                currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputCurrencyValue * coin[8].value)
                break;

            case "libra":
                currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "GBP" }).format(inputCurrencyValue * coin[13].value)
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
                currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "BTC" }).format(inputCurrencyValue / coin[6].value)
                break;

            case "euro":
                currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputCurrencyValue * coin[9].value)
                break;

            case "libra":
                currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "GBP" }).format(inputCurrencyValue * coin[12].value)
                break;

            case "real":
                currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputCurrencyValue * coin[0].value)
                break;

            default:
                break;
        }
    } else if (currencySelectorInitial.value === "bitcoin") {

        switch (currencySelectorFinal.value) {
            case "dolar":
                currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputCurrencyValue * coin[6].value)
                break;

            case "bitcoin":
                alert(`NÃO PODEMOS CONVERTER A BITCOIN PARA BITCOIN.                
TROQUE UMA DAS MOEDAS PARA CONVERTER.`)
                break;

            case "euro":
                currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputCurrencyValue * coin[11].value)
                break;

            case "libra":
                currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "GBP" }).format(inputCurrencyValue * 41074.21)
                break;

            case "real":
                currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputCurrencyValue * coin[2].value)
                break;

            default:
                break;
        }
    } else if (currencySelectorInitial.value === "euro") {

        switch (currencySelectorFinal.value) {
            case "dolar":
                currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputCurrencyValue * coin[4].value)
                break;

            case "bitcoin":
                currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "BTC" }).format(inputCurrencyValue / coin[11].value)
                break;

            case "euro":
                alert(`NÃO PODEMOS CONVERTER A EURO PARA EURO.                
TROQUE UMA DAS MOEDAS PARA CONVERTER.`)
                break;

            case "libra":
                currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "GBP" }).format(inputCurrencyValue * coin[14].value)
                break;

            case "real":
                currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputCurrencyValue * coin[1].value)
                break;

            default:
                break;
        }
    } else if (currencySelectorInitial.value === "libra") {

        switch (currencySelectorFinal.value) {
            case "dolar":
                currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputCurrencyValue * coin[5].value)
                break;

            case "bitcoin":
                currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "BTC" }).format(inputCurrencyValue * 0.000024346180285169243)
                break;

            case "euro":
                currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputCurrencyValue * coin[10].value)
                break;

            case "libra":
                alert(`NÃO PODEMOS CONVERTER A LIBRA PARA LIBRA.                
TROQUE UMA DAS MOEDAS PARA CONVERTER.`)
                break;

            case "real":
                currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputCurrencyValue * coin[3].value)
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