const {sum} = require('./app.js');
const {fromDollarToYen} = require('./app.js');
const {fromEuroToDollar} = require('./app.js');
const {fromYenToPound} = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});


test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(3.5);
    const expected = Math.round(3.5 * 1.07 * 100) / 100;
    expect(dollars).toBe(expected);
})

test("Esperado que 10 dolares sean, 1462.62 yenes", function(){
    const yenes = fromDollarToYen(10);
    const expected = Math.round(((10 / 1.07) * 156.5) * 100) / 100;
    expect(yenes).toBe(expected);
})

test("Esperando que 1000 yenes sean, 5.56 Pound", function(){
    const pounds = fromYenToPound(1000);
    const expected = Math.round(((1000 / 156.5) * 0.87) * 100) / 100;
    expect(pounds).toBe(expected);
})