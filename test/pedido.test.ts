import { pedido } from "../src/business/pedido";

test("Deve retornar uma exception se o pedido estiver nulo", function(){
    const pedidoCriado = null;
    expect(() => pedido(pedidoCriado)).toThrow("Pedido inválido");
});

test("Deve retornar uma exception se o pedido estiver indefinido", function(){
    const pedidoCriado = null;
    expect(() => pedido(pedidoCriado)).toThrow("Pedido inválido");
});

test("Deve retornar uma exception se não foi informado o CPF do cliente", function(){
    const pedidoCriado = {
        'produtos':[],
        'desconto':0
    };
    expect(() => pedido(pedidoCriado)).toThrow("CPF do cliente está inválido");
});

test("Deve retornar uma exception se o CPF do cliente está inválido", function(){
    const pedidoCriado = {
        'cpfCliente': '111',
        'produtos':[],
        'desconto':0
    };
    expect(() => pedido(pedidoCriado)).toThrow("CPF do cliente está inválido");
});

test("Deve retornar uma exception se o desconto não foi informado ou não é um número", function(){
    const pedidoCriado = {
        'cpfCliente': '12494215005',
        'produtos':[]
    };
    expect(() => pedido(pedidoCriado)).toThrow("O desconto está inválido");
});

test("Deve retornar uma exception se não existir a relação de produtos ou estiver vazia", function(){
    const pedidoCriado = {
        'cpfCliente': '12494215005',
        'desconto': 0.0
    };
    expect(() => pedido(pedidoCriado)).toThrow("Os produtos não foram informados");
});

test("Deve retornar uma exception se algum dos produtos não estiver com o preço ou não for númerico", function(){
    const pedidoCriado = {
        'cpfCliente': '12494215005',
        'desconto': 0.0,
        'produtos':[
            {'descricao':'Produto 1','quantidade':2.0,'preco':'A'},
        ]
    };
    expect(() => pedido(pedidoCriado)).toThrow("Problema com o preço de alguns produtos");
});

test("Deve retornar uma exception se algum dos produtos não estiver com a quantidade ou não for númerica", function(){
    const pedidoCriado = {
        'cpfCliente': '12494215005',
        'desconto': 0.0,
        'produtos':[
            {'descricao':'Produto 1','quantidade':'A','preco':3.0},
        ]
    };
    expect(() => pedido(pedidoCriado)).toThrow("Problema com a quantidade de alguns produtos");
});

test("Verifica se o total do pedido esta sendo calculado corretamente", function(){
    const pedidoCriado = {
        'cpfCliente': '12494215005',
        'desconto': 0.0,
        'produtos':[
            {'descricao':'Produto 1','quantidade':1.0,'preco':3.0},
            {'descricao':'Produto 1','quantidade':2.0,'preco':3.5}
        ]
    };
    expect(pedido(pedidoCriado)).toBe(10.0);
});

test("Verifica se o total do pedido esta sendo calculado corretamente com o desconto", function(){
    const pedidoCriado = {
        'cpfCliente': '12494215005',
        'desconto': 12.7,
        'produtos':[
            {'descricao':'Produto 1','quantidade':2.0,'preco':3.2},
            {'descricao':'Produto 1','quantidade':2.0,'preco':3.5}
        ]
    };
    expect(pedido(pedidoCriado)).toBe(11.7);
});