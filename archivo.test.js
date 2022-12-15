const {
    edad,
   nombre,
   nuevoBool,
   nuevaResta,
   nuevaMultiplicacion,
   nuevoModulo,
    
} = require("./index.js");


describe('edad',function(){
    it("Debe ser un numero", function(){
        expect(typeof edad).toBe('number');
    })
})
describe('nombre',function(){
    it("Debe ser un string", function(){
        expect(typeof nombre).toBe('string')

    });

});

describe('nuevoBool',function(){
    it("Debe ser un Boleano", function(){
        expect(typeof nuevoBool).toString()

    });

});

describe('nuevaResta',function(){
    it("Debe ser igual de varibales", function(){
        expect(typeof nuevaResta).not.toBe("5")

    });

});


describe('nuevaMultiplicacion',function(){
    it("Debe ser igual de variables", function(){
        expect(typeof nuevaMultiplicacion).not.toBe("40")

    });

});


describe('nuevoModulo',function(){
    it("Debe ser igual de variables", function(){
        expect(typeof nuevoModulo).not.toBe("1")

    });

});
