import { Usuario } from "../../src/models/Usuario"
import {UsuarioCtrl} from '../../src/controllers/UsuarioCtrl'

describe('Teste do usuario',()=>{
    
    it('usuario deve ser criado corretamente',()=>{
        let usuario=new Usuario("João","joao@gmail.com","jao")

        expect(usuario.getNome()).toBe("João")
        expect(usuario.getEmail()).toBe("joao@gmail.com")
        expect(usuario.getNick()).toBe("jao")
    })

    it('não deve permitir a troca de nick',()=>{
       
        const usrCtrl=new UsuarioCtrl
        let resultado = usrCtrl.Nick("luu")

        expect(resultado).toBe(false)
    })
})