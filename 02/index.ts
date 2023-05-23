import {lerArquivo, escreverArquivo} from "../01/index";
import { Usuario, Endereco } from "../index"

const cadastrarUsuario = (dados: Usuario): Usuario => {
    const bd = lerArquivo() as Usuario[];    
    bd.push(dados)
    escreverArquivo(bd)
    return dados
}

const listarUsuario = (): Usuario[] => {
    return lerArquivo() as Usuario[];    
}

// cadastrarUsuario({
//     nome : 'gadac',
//     email: 'fandanguin@mail',
//     cpf: 12345678912,
//     endereco: {
//         cep: 12345678,
//         rua: 'eldorado',
//         bairro: 'eldorado',
//         cidade: 'serra'
//     }
// })

cadastrarUsuario({
    nome : 'victor',
    email: 'dr.victor@mail',
    cpf: 23456789123,
    endereco: {
        cep: 12345678,
        rua: 'eldorado',
        bairro: 'serrasede',
        cidade: 'serra'
    }
})

console.log(listarUsuario());
