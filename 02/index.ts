const leituraEscrita = require('../01/index')

type Endereco = {
    cep: number,
    rua: string,
    complemento?: string,
    bairro: string,
    cidade: string
}

type Usuario = {
    nome: string,
    email: string,
    cpf: number,
    profissao?: string,
    endereco: Endereco | null
}

const cadastrarUsuario = (dados: Usuario): Usuario => {
    const bd = leituraEscrita.lerArquivo() as Usuario[];    
    bd.push(dados)
    leituraEscrita.escreverArquivo(bd)
    return dados
}

const listarUsuario = (): Usuario[] => {
    return leituraEscrita.lerArquivo() as Usuario[];    
}

cadastrarUsuario({
    nome : 'gadac',
    email: 'fandanguin@mail',
    cpf: 12345678912,
    endereco: {
        cep: 12345678,
        rua: 'eldorado',
        bairro: 'eldorado',
        cidade: 'serra'
    }
})

console.log(listarUsuario());
