const{
    saludo,
    colors,
    fizzBuzz,
    operadoresLogicos,
    esPrimo,
    esVerdadero,
    tablaDelSeis,
    tieneTresDigitos,
    doWhile
} = require("./index3.js");



describe('saludo(idioma)', function () {
    it("Deberia de volver el idioma", function(){
        expect(saludo("aleman")).toBe("Guten Tag!");
       expect(saludo("mandarin")).toBe("Ni Hao!");
    })
})

describe('colors(color)', function () {
    it("Deberia de volver los colores", function(){
        expect(colors("blue")).toBe("This is blue");
        expect(colors("red")).toBe("This is red");
        expect(colors("green")).toBe("This is green");
        expect(colors("orange")).toBe("This is orange");
        expect(colors("marron")).toBe("Color not found");
    })
})
describe('fizzBuzz(numero)', function () {
    it("Deberia devolver las respuesta indicada por cada condición", function(){
        expect(fizzBuzz(15)).toBe("fizzbuzz");
       
    })
})
describe('operadoresLogicos(num1, num2, num3)', function () {
    it("Deberia devolver la respuesta indicada para cada condición", function(){
        expect(operadoresLogicos(7, 2, 1)).toBe("Numero 1 es mayor y positivo");
        expect(operadoresLogicos(3, 4, -4)).toBe("Hay negativos");
        expect(operadoresLogicos(3, 4, 7)).toBe(8);
        expect(operadoresLogicos(0, 0, 0)).toBe("Error");
        expect(operadoresLogicos(5, 5, 5)).toBe(false);
    })
})
describe('esVerdadero(valor)', function () {
    it("Deberia devolver si el valor recibio es verdadero  falso", function(){
        expect(esVerdadero(true)).toBe("soy Verdadero");
        expect(esVerdadero(false)).toBe("soy falso");
    })
})
describe('esPrimo(numero)', function () {
    it("Deberia devolver si el digito ingresado es primo", function(){
        expect(esPrimo(3)).toBe(true);
        expect(esPrimo(18)).toBe(false);
    })
})

describe('tablaDelSeis()', function () {
    it("tabla de 6", function(){
        expect(tablaDelSeis()).toEqual([0,6,12,18,24,30,36,42,48,54,60]);
        
    })
})


describe('tieneTresDigitos(numero)', function () {
    it("Deberia devolver si el número tiene 3 digitos", function(){
        expect(tieneTresDigitos(550)).toBe(true);
        expect(tieneTresDigitos(-250)).toBe(true);
        expect(tieneTresDigitos(95)).toBe(false);
        expect(tieneTresDigitos(1040)).toBe(false);
    })
})
describe('doWhile(numero)', function () {
    it("Deberia devolver el valor recibido en 5 hasta un límite de 8 veces", function(){
        expect(doWhile(0)).toBe(40);
    })
})