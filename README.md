# clean-code-and-clean-archtecture
Repositório para o curso de Clean Code e Clean Archtecture - @rodrigobranas

# executar os testes
```
yarn test
ou
npx jest
```

# executar a API
```
yarn dev
ou
npx ts-node src/api/index.ts
```

# Foi utilizado o Postman para chamada aos métodos da API
```
POST
http://localhost:3000/pedido

BODY
{
    "cpfCliente":"12494215005",
    "desconto":5.0,
    "produtos":[
        {
            "descricao": "Produto 1","quantidade":3,"preco":4.76
        }
    ]
}
```
