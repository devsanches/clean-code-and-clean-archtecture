const DIVISOR = 11;
const DIGITO_FIXO = 0;
const DIGITO_RESTO = 2;
export function validarCpf (cpf: string | null | undefined) {
	if (cpf === null || cpf === undefined || cpf.length !== 11) return false;
    if (cpf.split("").every(item => item === cpf[0])) return false;          
    try{  
        let somaPrimeiroDigito, somaSegundoDigito;  
        let primeiroDigitoCalculado, segundoDigitoCalculado, resto;  
        let digito;  
        let digitosCalculadosCpf;  
        somaPrimeiroDigito = somaSegundoDigito = 0;  
        primeiroDigitoCalculado = segundoDigitoCalculado = resto = 0;  
        for (let posicao = 1; posicao < cpf.length -1; posicao++) {
            if (isNaN(parseInt(cpf.substring(posicao -1, posicao)))) throw new Error('Digito não numérico');
            digito = parseInt(cpf.substring(posicao -1, posicao));  							
            somaPrimeiroDigito = somaPrimeiroDigito + ( DIVISOR - posicao ) * digito;                  
            somaSegundoDigito = somaSegundoDigito + ( (DIVISOR+1) - posicao ) * digito;                              
        };                              
        resto = (somaPrimeiroDigito % DIVISOR);                  
        primeiroDigitoCalculado = (resto < DIGITO_RESTO) ? DIGITO_FIXO : DIVISOR - resto;  
        somaSegundoDigito += 2 * primeiroDigitoCalculado;  
        resto = (somaSegundoDigito % DIVISOR);  
        segundoDigitoCalculado = (resto < DIGITO_RESTO) ? DIGITO_FIXO : DIVISOR - resto;                 
        let digitosVerificadoresCpf = cpf.substring(cpf.length-2, cpf.length);  
        digitosCalculadosCpf = "" + primeiroDigitoCalculado + "" + segundoDigitoCalculado;  
        return digitosVerificadoresCpf == digitosCalculadosCpf;
    }catch (e){      
        return false;  
    }
}