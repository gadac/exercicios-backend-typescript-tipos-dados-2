import {lerArquivo, escreverArquivo} from "../01/index";
import { Usuario, Endereco } from "../index"

const detalharUsuario = (cpf:number): Usuario => {
    const bd = lerArquivo() as Usuario[]
    const usuario = bd.find(usuario =>{
        return usuario.cpf === cpf
    })
    if (!usuario) {
        throw new Error('Usuário não encontrado')
    }

    return usuario;
} 



const atualizarUsuario = (cpf:number, dados:Usuario): Usuario => {
    const bd = lerArquivo() as Usuario[]
    const usuario = bd.find(usuario =>{     //isso é uma referência do objeto e não um objeto novo
        return usuario.cpf === cpf
    })
    if (!usuario) {
        throw new Error('Usuário não encontrado')
    }

    Object.assign(usuario, dados);

    escreverArquivo(bd)
    return usuario
}

atualizarUsuario(12345678912,{
    nome : 'gadac22',
    email: 'fandanguin@mail',
    cpf: 12345678912,    
    endereco: {
        cep: 12345678,
        rua: 'eldorado',
        complemento: 'Ap',
        bairro: 'laranjeiras',
        cidade: 'serra'
    }
})