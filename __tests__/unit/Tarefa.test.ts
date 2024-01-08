import {TarefaCtrl} from '../../src/controllers/TarefaCtrl'
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Tarefa } from '../../src/models/Tarefa';
const mock = new MockAdapter(axios);

describe('Tarefas',()=>{
    let trfCtrl=new TarefaCtrl;
    it('tarefa deve ser criada corretamente',()=>{
        let tarefa=new Tarefa("Projeto de engenharia de software","Terminar o projeto comecado anteriomente", "João",3,3)
        
        expect(tarefa.getNome()).toBe("Projeto de engenharia de software")
        expect(tarefa.getDesc()).toBe("Terminar o projeto comecado anteriomente")
        expect(tarefa.getCriado()).toBe("João")
        expect(tarefa.getId()).toBe(3)

    })
   

    it('Tarefas deve ser orndenadas de grau de importancia',()=>{
        let receber=trfCtrl.ordemImportancia()
        let esperado="21"
        expect(receber).toBe(esperado)
    })

    
    it('Tarefas solicitada deve ser removida',()=>{
        
        let receber=trfCtrl.AremoverTarefa(1)
        let esperado=true
        expect(receber).toBe(esperado)
    })

    it('Deve retonar Importancia como 1 como valor minimo',()=>{
        let receber = trfCtrl.limiteImpotancia(1)
        let esperado=1
        expect(receber).toBe(esperado)
    })
    it('Deve retonar Importancia como 3 como valor maximo',()=>{
        let receber = trfCtrl.limiteImpotancia(3)
        let esperado=3
        expect(receber).toBe(esperado)
    })
    it('Deve retonar Importancia como 1 por receber valor inferior',()=>{
        let receber = trfCtrl.limiteImpotancia(0)
        let esperado=1
        expect(receber).toBe(esperado)
    })
    it('Deve retonar Importancia como 3 por receber valor superior',()=>{
        let receber = trfCtrl.limiteImpotancia(4)
        let esperado=3
        expect(receber).toBe(esperado)
    })
    it('Deve retonar Importancia como 2 por receber valor medio',()=>{
        let receber = trfCtrl.limiteImpotancia(2)
        let esperado=2
        expect(receber).toBe(esperado)
    })
    

})