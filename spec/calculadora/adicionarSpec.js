
describe("Suite de teste de adição", function(){
    var Calculadora=require("../../src/js/calculadora");
    it('deve retornar 8 para os valores 5 e 3', function(){
        expect(Calculadora.adicionar(5,3)).toEqual(8);
    });

    it("deve retornar 6 para os valores '9' e '-3' em modo texto", function(){
        expect(Calculadora.adicionar('9','-3')).toEqual(6);
    });

    it('deve retornar 7.25 para os valores 5 e 2.25', function(){
        expect(Calculadora.adicionar(5,2.25)).toEqual(7.25);
    });

    it('deve retornar 0 quando parametro 1 inválido', function(){
        expect(Calculadora.adicionar(undefined,3)).toEqual(0);
    });

    it('deve retornar 0 quando parametro 2 inválido', function(){
        expect(Calculadora.adicionar(3,undefined)).toEqual(0);
    });
});
