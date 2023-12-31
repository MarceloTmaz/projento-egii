import {UsuarioCtrl} from '../../src/controllers/UsuarioCtrl'
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Usuario } from '../../src/models/Usuario';
const mock = new MockAdapter(axios);
describe('get usuario/email',()=>{
    it('deve retornar o nome do usuario',async()=>{
        const email="tom@gmail.com"
        const usrCtrl=new UsuarioCtrl
        let resultado="Tony"
        //criar rota para teste
        mock.onGet(`http://localhost:3000/usuario/${email}`).reply(200,{
            usuario:resultado,
        })
        let resposta=usrCtrl.ApiEmail("tom@gmail.com")
        console.log(resposta)
        expect(resultado).toEqual(resposta);
    })

    it('deve inbformar que não possivel obter o nome do usuario',async()=>{
        const email="tom@gmail.com"
        const usrCtrl=new UsuarioCtrl
        let resultado="não foi possivel buscar nome"
        //criar rota para teste
        mock.onGet(`http://localhost:3000/usuario/${email}`).reply(200,{
            usuario:resultado,
        })
        let resposta=usrCtrl.ApiEmail("tony@gmail.com")
        console.log(resposta)
        expect(resultado).toEqual(resposta);
    })
})