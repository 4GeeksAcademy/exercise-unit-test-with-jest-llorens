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
    const expected = 3.5 * 1.07;
    expect(fromEuroToDollar(3.5)).toBe(3.745);
})

test("Esperado que 10 dolares sean, x yenes", function(){
    const yenes = fromDollarToYen(10);
    const expected = ((10 * 1 / 1.07) * 156.5) / 1;
    expect(fromDollarToYen(10)).toBe(expected);
})

test("Esperando que 1000 yenes sean, x Pound", function(){
    const pounds = fromYenToPound(1000);
    const expected = ((1000 * 1 / 156.5) * 0.87) / 1;
    expect(fromYenToPound(1000)).toBe(expected);
})