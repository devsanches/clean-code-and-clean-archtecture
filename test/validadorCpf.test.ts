import { validarCpf } from "../src/utils/validadorCpf";

test("Deve retornar verdadeiro para um CPF correto", function() {
    const cpf       = "12494215005";
    const validacao = validarCpf(cpf);
    expect(validacao).toBe(true);
});

test("Deve retornar falso para um CPF inválido", function(){
    const cpf = "12494215000";
    const validacao = validarCpf(cpf);
    expect(validacao).toBe(false);
});

test("Deve retornar false para um CPF nulo", function(){
    const cpf = null;
    const validacao = validarCpf(cpf);
    expect(validacao).toBe(false);
});

test("Deve retornar false para um CPF undefined (não definido)", function(){
    const cpf = undefined;
    const validacao = validarCpf(cpf);
    expect(validacao).toBe(false);
});

test("Deve retornar false para um CPF com todos os números iguais", function(){
    const cpf = "11111111111";
    const validacao = validarCpf(cpf);
    expect(validacao).toBe(false);
});

test("Deve retornar false para um CPF com menos de 11 digitos", function(){
    const cpf = "260";
    const validacao = validarCpf(cpf);
    expect(validacao).toBe(false);
});

test("Deve retornar false para um CPF com mais de 11 digitos", function(){
    const cpf = "123456789012345";
    const validacao = validarCpf(cpf);
    expect(validacao).toBe(false);
});

test("Deve retornar false caso aconteça alguma exception", function(){
    const cpf = "12494A15005";
    const validacao = validarCpf(cpf);
    expect(validacao).toBe(false);
});