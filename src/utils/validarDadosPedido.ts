import { validarCpf } from "./validadorCpf";

export function validarDadosPedido(pedido: any) {
    if (pedido == null) throw new Error("Pedido inválido");
    if (pedido == undefined) throw new Error("Pedido inválido");
    if (!pedido.cpfCliente) throw new Error("CPF do cliente está inválido");
    if (!validarCpf(pedido.cpfCliente)) throw new Error("CPF do cliente está inválido");
    if (isNaN(pedido.desconto)) throw new Error("O desconto está inválido");
    if (!pedido.produtos || pedido.produtos.length==0) throw new Error("Os produtos não foram informados");
    if ( pedido.produtos.some(function(item:any){
        if (!item.preco || isNaN(item.preco)) return true;
    })
    ) throw new Error("Problema com o preço de alguns produtos");
    if ( pedido.produtos.some(function(item:any){
        if (!item.quantidade || isNaN(item.quantidade)) return true;
    })
    ) throw new Error("Problema com a quantidade de alguns produtos");
}