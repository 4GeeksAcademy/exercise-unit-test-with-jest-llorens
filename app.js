const sum = (a,b) => {return a+b};

console.log(sum(7,3));

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromDollarToYen = (dollar) => {
    let value_to_euro = dollar / oneEuroIs.USD;
    return value_to_euro * oneEuroIs.JPY;
}

const fromEuroToDollar = (euro) => {
    return (euro * oneEuroIs.USD) / 1;
}

const fromYenToPound = (yen) => {
    let value_to_euro = (yen * 1) / oneEuroIs.JPY;
    return (value_to_euro * oneEuroIs.GBP) / 1;
}

module.exports = {sum, fromDollarToYen, fromEuroToDollar, fromYenToPound};