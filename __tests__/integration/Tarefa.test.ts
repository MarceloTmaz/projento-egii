import {TarefaCtrl} from '../../src/controllers/TarefaCtrl'
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Tarefa } from '../../src/models/Tarefa';

const mock = new MockAdapter(axios);


describe('POST tarefa/status',()=>{

    

    it('deve retornar concluído',async()=>{
        const id=1
        const status="concluído"
        mock.onPost(`http://localhost:3000/tarefa/${id}`).reply(200, {
            tarefa:status
        });

        let esperado =true
        const tarefa=new TarefaCtrl()
        const resultado=await tarefa.ApiStautus(id)

        expect(resultado).toEqual(esperado);
    })

    it('deve retornar não concluído',async()=>{
        const id=2
        const status="não concluído"
        mock.onPost(`http://localhost:3000/tarefa/${id}`).reply(200, {
            tarefa:status
        });

        let esperado =false

        const tarefa=new TarefaCtrl()
        const resultado=await tarefa.ApiStautus(id)

        expect(resultado).toEqual(esperado);
    })
})