
describe("Suite de teste de divisão", function(){
    var Calculadora=require("../../src/js/calculadora");
    it('deve retornar 5 para os valores 15 e 3', function(){
        expect(Calculadora.dividir(15,3)).toEqual(5);
    });

    it("deve retornar -3 para os valores '9' e '-3' em modo texto", function(){
        expect(Calculadora.dividir('9','-3')).toEqual(-3);
    });

    it('deve retornar 2 para os valores 5 e 2.5', function(){
        expect(Calculadora.dividir(5,2.5)).toEqual(2);
    });

    it('deve retornar erro quando divisão por zero', function(){
        expect(Calculadora.dividir(15,0)).not.toEqual(Infinity);
        expect(Calculadora.dividir(15,0)).toEqual('Erro');
    });

    it('deve retornar 0 quando parametro 1 inválido', function(){
        expect(Calculadora.dividir(undefined,3)).toEqual(0);
    });

    it('deve retornar 0 quando parametro 2 inválido', function(){
        expect(Calculadora.dividir(3,undefined)).toEqual(0);
    });
});
