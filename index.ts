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

export {
    Endereco,
    Usuario    
}