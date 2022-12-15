const{

    tienenMismaLongitud,
    sonIguales,
    menosQueNoventa,
    mayorQueCincuenta,
    divide,
    multiplica,
    obtenerResto,
    esPar,
    esImpar,
    elevar,
    redondearNumero,
    redondearHaciaArriba,
    numeroRandom,
    esPositivo,
    combinarNombres,
    obtenerSaludo,
    obtenerAreaRectangulo,
    retornarPerimetro,
    deEuroAdolar,

} = require("./index2.js");


describe('multiplica(x, y)', function () {
    it("Deberia de volver la multiplicacion de x*y", function(){
        expect(multiplica(5, 8)).toBe(40);
        expect(multiplica(5, 9)).toBe(45);
    })
})
describe('divide(x, y)', function () {
    it("Deberia de volver la division de x/y", function(){
        expect(divide(20, 2)).toBe(10);
        expect(divide(30, 2)).toBe(15);
    })
})
describe('sonIguales(x, y)', function () {
    it("Los valores deberian ser iguales", function(){
        expect(sonIguales(17, 17)).toBe(true);
        expect(sonIguales(12, 8)).toBe(false);
    })
})
describe("tienenMismaLongitud(str1, str2)", function () {
    it("Las cadenas deberian tener la misma longitud", function(){
        expect(tienenMismaLongitud("Hola", "Hola")).toBe(true);
        expect(tienenMismaLongitud("Margarita", "Rosas")).toBe(false);
    })
})
describe("menosQueNoventa(num)", function () {
    it("Deberia devolver true si es menor a 90, false si es mayor", function(){
        expect(menosQueNoventa(81)).toBe(true);
        expect(menosQueNoventa(117)).toBe(false);
    })
})
describe("mayorQueCincuenta(num)", function () {
    it("Deberia devolver true si es mayor a 50, false si es menor", function(){
        expect(mayorQueCincuenta(81)).toBe(true);
        expect(mayorQueCincuenta(35)).toBe(false);
    })
})
describe("obtenerResto(x, y)", function () {
    it("Deberiamos obtener el resto de x, y", function(){
        expect(obtenerResto(21, 5)).toBe(1);
        expect(obtenerResto(10, 2)).toBe(0);
    })
})
describe("esPar(num)", function () {
    it("Devuelve true si num es par, de lo contrario devuelve false ", function(){
        expect(esPar(12)).toBe(true);
        expect(esPar(17)).toBe(false);
    })
})
describe("esImpar(num)", function () {
    it("Devuelve true si num es impar, de lo contrario devuelve false", function(){
        expect(esImpar(17)).toBe(true);
        expect(esImpar(8)).toBe(false);
    })
})
describe("elevar(num, exponent)", function () {
    it("Deberia dar el resultado de la exponencia", function(){
        expect(elevar(5, 3)).toBe(125);
        expect(elevar(3, 2)).toBe(9);
    })
})
describe("redondearNumero(num)", function () {
    it("Deberia redondear el número mas proximo", function(){
        expect(redondearNumero(2.7)).toBe(3);
        expect(redondearNumero(2.1)).toBe(2);
    })
})
describe("redondearHaciaArriba(num)", function () {
    it("Deberia de redondear el numero hacia arriba", function(){
        expect(redondearHaciaArriba(2.1)).toBe(3);
        expect(redondearHaciaArriba(5.9)).toBe(6);
    })
})
describe("numeroRandom()", function () {
    it("Deberia dar como resultado aleatorio entre 0 y 1", function(){
        expect(typeof numeroRandom()).toBe('number');
        expect(numeroRandom()).toBeGreaterThanOrEqual(0);
        expect(numeroRandom()).toBeLessThan(1);
    })
})
describe("esPositivo(numero)", function () {
    it("Debería de mostrar si es positivo, negativo o false si es igual a 0", function(){
        expect(esPositivo(0)).toBe(false);
        expect(esPositivo(6)).toBe("Es positivo");
        expect(esPositivo(-4)).toBe("Es negativo");
    })
})
describe("combinarNombres(nombre, apellido)", function () {
    it("Debería de mostrar el nombre y apellidos separados por un espacio", function(){
        expect(combinarNombres("Victor", "Sotomayor")).toBe("Victor Sotomayor");
        expect(combinarNombres("Alessandro", "Chinchay")).toBe("Alessandro Chinchay");
    })
})
describe("obtenerSaludo(nombre)", function () {
    it("Debería de mostrar el saludo", function(){
        expect(obtenerSaludo("Victor")).toBe("Hola Victor!");
        expect(obtenerSaludo("Alessandro")).toBe("Hola Alessandro!");
    })
})
describe("obtenerAreaRectangulo(alto, ancho)", function () {
    it("Debería de retornar el area de un rectangulo", function(){
        expect(obtenerAreaRectangulo(8, 16)).toBe(128);
        expect(obtenerAreaRectangulo(15, 30)).toBe(450);
    })
})
describe("retornarPerimetro(lado)", function () {
    it("Debería de retornar el perimetro de un cuadrado", function(){
        expect(retornarPerimetro(5)).toBe(20);
        expect(retornarPerimetro(15)).toBe(60);
    })
})
describe("deEuroAdolar(euro)", function () {
    it("Debería el cambio de euros a dolares", function(){
        expect(deEuroAdolar(200)).toBe(240);
        expect(deEuroAdolar(20)).toBe(24);
    })
})