const { describe, expect, it } = require("@jest/globals");
const calculadora = require("../src/operacoes");

describe("Teste de calculadora", () => {
    it("Operação de some", () => {
        let resultado = calculadora.sum(1, 2);
        expect(resultado).toEqual(3);

        resultado = calculadora.sum(2, 0);
        expect(resultado).toEqual(2);

        resultado = calculadora.sum(-1, 2);
        expect(resultado).toEqual(1);

        resultado = () => calculadora.sum("a", 2);
        expect(resultado).toThrow("Não é um número");

        resultado = () => calculadora.sum(2, "b");

        expect(resultado).toThrow("Não é um número");
    });




    it("Operação de subtração", () => {
        let resultado = calculadora.sub(1, 2);
        expect(resultado).toEqual(-1);

        resultado = calculadora.sub(0, 2);
        expect(resultado).toEqual(-2);

        resultado = calculadora.sub(-4, 2);
        expect(resultado).toEqual(-6);

        resultado = () => calculadora.sub("a", -2);
        expect(resultado).toThrow("Não é um número");

        resultado = () => calculadora.sub(-2, "a");
        expect(resultado).toThrow("Não é um número");
    });



    it("Operação de multiplicação", () => {
        let resultado = calculadora.mul(1, 2);
        expect(resultado).toEqual(2);

        resultado = calculadora.mul(0, 2);
        expect(resultado).toEqual(0);

        resultado = calculadora.mul(-4, 2);
        expect(resultado).toEqual(-8);

        resultado = () => calculadora.sub("a", -2);
        expect(resultado).toThrow("Não é um número");

        resultado = () => calculadora.sub(-2, "a");
        expect(resultado).toThrow("Não é um número");

        resultado = calculadora.mul(0, 0);
        expect(resultado).toEqual(0);

        resultado = calculadora.mul(4, 5);
        expect(resultado).toEqual(20);

        resultado = calculadora.mul(-2, -6);
        expect(resultado).toEqual(12);
    });



    it("Operação de divisão", () => {
        let resultado = calculadora.div(2, 1);
        expect(resultado).toEqual(2);

        resultado = calculadora.div(0, 2);
        expect(resultado).toEqual(0);

        resultado = calculadora.div(-4, 2);
        expect(resultado).toEqual(-2);

        resultado = () => calculadora.div("a", -2);
        expect(resultado).toThrow("Não é um número");

        resultado = () => calculadora.div(-2, "a");
        expect(resultado).toThrow("Não é um número");

        resultado = calculadora.div(10, -5);
        expect(resultado).toEqual(-2);

        resultado = calculadora.div(2, 2);
        expect(resultado).toEqual(1);

        resultado = calculadora.div(-2, -2);
        expect(resultado).toEqual(1);

        //NEW
        resultado = calculadora.div(2, 4);
        expect(resultado).toEqual(0.5);
    });



    it("Operação de raiz", () => {
        let resultado = calculadora.raiz(4, (1 / 2));
        expect(resultado).toEqual(2);

        resultado = calculadora.raiz(0, (1 / 2));
        expect(resultado).toEqual(0);

        resultado = () => calculadora.div("a", (1 / 2));
        expect(resultado).toThrow("Não é um número");

        resultado = () => calculadora.div((1 / 2), "a"); //TESTAR ESSE!!!
        expect(resultado).toThrow("Não é um número");

        //NEW

        resultado = calculadora.raiz(1, (1 / 2));
        expect(resultado).toEqual(1);

        resultado = calculadora.raiz(1, (1 / 3));
        expect(resultado).toEqual(1);

        resultado = calculadora.raiz(8, (1 / 3));
        expect(resultado).toEqual(2);

        resultado = calculadora.raiz(16, (1 / 4));
        expect(resultado).toEqual(2);

        resultado = calculadora.raiz(0, (1 / 4));
        expect(resultado).toEqual(0);
    });




    it("Operação de potencia", () => {
        let resultado = calculadora.raiz(2, 2);
        expect(resultado).toEqual(4);

        resultado = calculadora.raiz(0, 2);
        expect(resultado).toEqual(0);

        resultado = calculadora.raiz(-4, 2);
        expect(resultado).toEqual(16);

        resultado = () => calculadora.div("a", 2);
        expect(resultado).toThrow("Não é um número");

        resultado = () => calculadora.div(2, "a");
        expect(resultado).toThrow("Não é um número");

        //NEW

        resultado = calculadora.raiz(2, 0);
        expect(resultado).toEqual(1);

        resultado = calculadora.raiz(1, 3);
        expect(resultado).toEqual(1);

        resultado = calculadora.raiz(6, 3);
        expect(resultado).toEqual(216);

        resultado = calculadora.raiz(2, 5);
        expect(resultado).toEqual(32);

    });

});