const sum = (a,b) => {return a+b};

console.log(sum(7,3));

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromDollarToYen = (dollar) => {
    let value_to_euro = dollar / oneEuroIs.USD;
    let yen = value_to_euro * oneEuroIs.JPY;
    return Math.round(yen * 100) / 100;
}

const fromEuroToDollar = (euro) => {
    let dollar = euro * oneEuroIs.USD;
    return Math.round(dollar * 100) / 100;
}

const fromYenToPound = (yen) => {
    let value_to_euro = yen / oneEuroIs.JPY;
    let pound = value_to_euro * oneEuroIs.GBP;
    return Math.round(pound * 100) / 100;
}

module.exports = {sum, fromDollarToYen, fromEuroToDollar, fromYenToPound};