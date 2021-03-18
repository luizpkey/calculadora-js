
describe("Suite de teste de subtração", function(){
    var Calculadora=require("../../src/js/calculadora");
    it('deve retornar 8 para os valores 13 e 5', function(){
        expect(Calculadora.subtrair(13,5)).toEqual(8);
    });

    it("deve retornar 12 para os valores '9' e '-3' em modo texto", function(){
        expect(Calculadora.subtrair('9','-3')).toEqual(12);
    });

    it('deve retornar 2.75 para os valores 5 e 2.25', function(){
        expect(Calculadora.subtrair(5,2.25)).toEqual(2.75);
    });

    it('deve retornar 0 quando parametro 1 inválido', function(){
        expect(Calculadora.subtrair(undefined,3)).toEqual(0);
    });

    it('deve retornar 0 quando parametro 2 inválido', function(){
        expect(Calculadora.subtrair(3,undefined)).toEqual(0);
    });
});
