const {
    devolverPrimerElemento,
    obtenerLargoDelArray,
    incrementarPorUno,
    agregarItemAlComienzoDelArray,
    arrayContiene,
    agregarNumeros,
    multiplicarArgumentos,
    cuentoElementos,
    todosIguales,
    mesesDelAño,
    mayorACien,
    breakStatement,
    
    
    } = require("./index4.js");

    describe('devolverPrimerElemento(arr)', function() {
        it('debe devolver el primer elemento del array', function() {
          expect(devolverPrimerElemento([10, 10, 16, 12])).toBe(10);
          expect(devolverPrimerElemento([97, 100, 80, 55, 72, 94])).toBe(97);
        });
      });
      describe('obtenerLargoDelArray(arr)', function() {
        it('debe devolver la longitud de la matriz', function() {
          expect(obtenerLargoDelArray([10, 10, 16, 12])).toBe(4);
          expect(obtenerLargoDelArray([97, 100, 80, 55, 72, 94])).toBe(6);
          
        });
      });
      describe('incrementarPorUno(arr)', function() {
        it('debería devolver la matriz con cada valor incrementado en uno', function() {
          expect(incrementarPorUno([9, 10, 11, 12])).toEqual([10, 11, 12, 13]);
          
        });
      });
      describe('agregarItemAlComienzoDelArray(arr, item)', function() {
        it('debe devolver la matriz con el elemento agregado al frente', function() {
          expect(agregarItemAlComienzoDelArray([10, 10, 16, 12], 10)).toEqual([10, 10, 10, 16, 12]);
          expect(agregarItemAlComienzoDelArray([97, 100, 80, 55, 72, 94], 'okey')).toEqual(['okey', 97, 100, 80, 55, 72, 94]);
          expect(agregarItemAlComienzoDelArray([], true)).toEqual([true]);
        });
      });
      describe('arrayContiene(arr, item)', function() {
        it('debería devolver verdadero si la matriz contiene el elemento', function() {
          expect(arrayContiene([10, 10, 16, 12], 10)).toBe(true);
          expect(arrayContiene([97, 100, 80, 55, 72, 94], 'Hola')).toBe(false);
          expect(arrayContiene([], true)).toBe(false);
        });
      });
      describe('agregarNumeros(numbers)', function() {
        it('debe sumar todos los números de la matriz y devolver la suma', function() {
          expect(agregarNumeros([10, 10])).toBe(20);
          expect(agregarNumeros([97, 10])).toBe(107);
        });
      });
      describe('multiplicarArgumentos()', function () {
        it('debe devolver el producto de todos los argumentos', function () {
          const product = multiplicarArgumentos(5, 5);
          expect(product).toBe(25);  
        });
      });
      describe('cuentoElementos(arreglo)', function() {
        it('debe devolver un contador con el total de números mayores que 18', function() {
          expect(cuentoElementos([10, 10, 18, 21])).toBe(1);
          expect(cuentoElementos([97, 100, 190, 5, 7, 9])).toBe(3);
        });
      });
      describe('todosIguales(arreglo)', function() {
        it('debe devolver verdadero si todos los elementos de la matriz son iguales y falso de lo contrario', function() {
          expect(todosIguales([20, 20, 20, 20 ])).toBe(true);
          expect(todosIguales([100, 100, 190, 9])).toBe(false);
        });
      });
      describe('mesesDelAño(array)', function() {
        it('debe devolver una nueva matriz con los meses solicitados', function() {
          var meses = ["Marzo", "Diciembre", "Abril", "Junio", "Julio", "Noviembre", "Enero", "Mayo", "Febrero"];
          var mes = ["Marzo", "Diciembre", "Julio", "Noviembre"];
          expect(mesesDelAño(meses)).toEqual(["Marzo", "Noviembre", "Enero"]);
          expect(mesesDelAño(mes)).toEqual("No se encontraron los meses pedidos");
        });
      });
      describe('mayorACien(array)', function() {
        it('debería devolver una matriz con valores mayores que 100', function() {
          var integers = [100, 4, 56, 78, 200, 120, 7, 160, 148, 22];
          expect(mayorACien(integers)).toEqual([200, 120, 160, 148]);
        });
      });
      describe('breakStatement(numero)', function() {
        it('debe devolver una matriz con los valores resultantes de sumar 2 en cada iteración', function() {
          expect(breakStatement(50)).toEqual([52, 54, 56, 58, 60, 62, 64, 66, 68, 70]);
        });
        it('debe detener la ejecución si el valor de la suma y el número de iteración coinciden', function() {
          expect(breakStatement(-4)).toEqual('Se interrumpió la ejecución');
        });
      });
     