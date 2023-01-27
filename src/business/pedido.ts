import { validarDadosPedido } from "../utils/validarDadosPedido";

export function pedido(pedido: any) {
    validarDadosPedido(pedido);
    const totalProdutos = pedido.produtos.reduce((total: number, item: any) => total + (item.preco * item.quantidade),0);
    const descontoPedido =  totalProdutos * (pedido.desconto/100);
    const totalPedido = +(totalProdutos - descontoPedido).toFixed(2);
    return totalPedido;
}