import express from 'express';
import { Request, Response } from 'express';
import { pedido } from '../business/pedido';

const app = express();
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.json({mensagem: 'API está online'});
});

app.post('/pedido', (req: Request, res: Response) => { 
    const valorTotal = pedido(req.body);
    res.json({totalpedido: valorTotal});
});

app.listen(3000, function(){
    console.log('API rodando na porta 3000');
});