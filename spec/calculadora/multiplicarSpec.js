
describe("Suite de teste de multiplicação", function(){
    var Calculadora=require("../../src/js/calculadora");
    it('deve retornar 15 para os valores 5 e 3', function(){
        expect(Calculadora.multiplicar(5,3)).toEqual(15);
    });

    it("deve retornar -27 para os valores '9' e '-3' em modo texto", function(){
        expect(Calculadora.multiplicar('9','-3')).toEqual(-27);
    });

    it('deve retornar 11.25 para os valores 5 e 2.25', function(){
        expect(Calculadora.multiplicar(5,2.25)).toEqual(11.25);
    });

    it('deve retornar 0 quando parametro 1 inválido', function(){
        expect(Calculadora.multiplicar(undefined,3)).toEqual(0);
    });

    it('deve retornar 0 quando parametro 2 inválido', function(){
        expect(Calculadora.multiplicar(3,undefined)).toEqual(0);
    });
});
