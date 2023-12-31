import { Request, Response } from 'express';
import {Tarefa} from '../models/Tarefa'
import { Usuario } from '../models/Usuario';


export class TarefaCtrl{
    private _tarefa:Tarefa
    private _usuario: Usuario;
    private _vetTare: Tarefa[]=[];
    private _nom:string=""
    private _desc:string=""
    private _ciar:string=""
    private _conv:string=""
    private _id:number=3
    private _ordeado:Tarefa[]=[];
    constructor(){
        this._usuario = new Usuario('Joses', 'jose@gmail.com',"jze");
        let id=1
        let nome="comprar pão"
        let descricao="comprar pão doce na padaria 'nosso pão'"
        this._tarefa=new Tarefa(nome,descricao,this._ciar,id,1)
        this._vetTare.push(this._tarefa)
        
         id=2
         nome="Terminar trabalho"
         descricao="treminar trablho de esii"
        this._tarefa=new Tarefa(nome,descricao,this._ciar,id,3)
        this,this._tarefa.setConclu(true)
        this._vetTare.push(this._tarefa)
      //  this._vetTare.constructor()
    }

    criar(req:Request,res:Response){
        res.render('Tarefa/criar')
    }
    criarTarefa(req:Request,res:Response){
        this._nom=req.body.nom;
        this._desc=req.body.descricao
        this._ciar=this._usuario.getNome()
        let importancai=req.body.impotancia
        let limite=this.limiteImpotancia(importancai)
        this._tarefa=new Tarefa(this._nom,this._desc,this._ciar,this._id,limite)
        this._id=this._id+1
        this._vetTare.push(this._tarefa)
        res.redirect('/tarefa/listar')

    }

    AtualizarTarefa(req:Request, res:Response){
        let id=req.body.idC
        let idConv:number=+id
        let i:number
        let tarefa:Tarefa=new Tarefa("","","",0,0)
        for(i = 0;i<this._vetTare.length;i++) {
            if(this._vetTare[i].getId()==idConv){
                //_vetTare2.push(this._vetTare[i])
                tarefa=this._vetTare[i]
            }
        }
         const dados={
            'id':id,
            'nome':tarefa.getNome(),
            'descricao':tarefa.getDesc(),
            'importancia':tarefa.getImportancia(),
            'convidado':tarefa.getConvidado()
        }
        res.render('Tarefa/atualizar',{dados})
       
    }

    Atualizar_Tarefa(req:Request, res:Response){
        this._nom=req.body.nom2;
        this._desc=req.body.descricao2
        let importancai=req.body.impotancia2
        let limite=this.limiteImpotancia(importancai)
        this._conv=req.body.email2
        let id=req.body.idCo
        let i:number
        for(i = 0;i<this._vetTare.length;i++) {
            if(this._vetTare[i].getId()==id){
                this._vetTare[i].setNome(this._nom)
                this._vetTare[i].setDesc(this._desc)
                this._vetTare[i].setImportancia(limite)
                this._vetTare[i].setConvidado(this._conv)
            }
        }
        res.redirect('/tarefa/listar')
    }



    listar(req:Request, res:Response){
        const dados={
            'total':this._vetTare,
            'id':-1
        }
        res.render('Tarefa/lista',{dados})
    }

    listarOrdenada(req:Request, res:Response){
        this.ordemImportancia()
        const dados={
            'total':this._ordeado,
            'id':-1
        }
        res.render('Tarefa/lista',{dados})
    }

    trocaStatus(req:Request, res:Response){
        let id=req.body.id
        let i:number
        this.ApiStautus(id)
        /*
        for(i = 0;i<this._vetTare.length;i++) {
             if(this._vetTare[i].getId()==id){
                this._vetTare[i].setConclu(!this._vetTare[i].getConclu())
             }
         }*/
        //var tarefaTmp=this._vetTare[id]
        //tarefaTmp.setConclu(!tarefaTmp.getConclu())
       // this._vetTare[id]=tarefaTmp
        res.redirect('/tarefa/listar')
    }
    //ciar um metodo de marca se o atual estado

    verificarEstado(req:Request,res:Response){
        let entrada=req.params.id
        let conv:number=+entrada
        let estado=this.ApiStautus(conv)
        let retorno:string
        if(estado==true){
            retorno="concluído"
        }else{
            retorno="não concluído"
        }
        const dados={
            'titulo':"verificar Estado",
            'estado': retorno
        }
        res.render('Tarefa/estado',{dados})
    }

    removerTarefa(req:Request, res:Response){
        let id=req.body.idR
        this.AremoverTarefa(id) 
        res.redirect('/tarefa/listar')
    }

    limiteImpotancia(valor:number){
        if(valor<=1){
            return 1
        }
        else if(valor>=3){
            return 3
        }
        return 2
    }


    ApiStautus(id:number){
        let i:number
        let retorno:string=""
        let ret:boolean=false
        for(i = 0;i<this._vetTare.length;++i) {
            
            if(this._vetTare[i].getId()==id){
                if( this._vetTare[i].getConclu()==false){
                    this._vetTare[i].setConclu(!this._vetTare[i].getConclu())
                    ret= true;
                  //  retorno="concluído"
                    console.log(1)
                }else{
                    this._vetTare[i].setConclu(!this._vetTare[i].getConclu())
                    ret= false;

                    //retorno="não concluído"
                    console.log(0)
                }
                console.log(this._vetTare[i].getConclu())
              
            }
        }/*
        for(i = 0;i<this._vetTare.length;i++) {
            console.log(this._vetTare[i].getId())
             if(this._vetTare[i].getId()==id){
                this._vetTare[i].setConclu(!this._vetTare[i].getConclu())
                if( this._vetTare[i].getConclu()){
                    retorno="concluído"
                }else{
                    retorno="não concluído"
                }
            }
         }*/
        return ret;
    }



    ordemImportancia(){
        let ordem=""
        this._ordeado=[]
        for (let i = 0; i < this._vetTare.length; i++) {
            if(this._ordeado.length>0){
                for (let l = 0; l < this._ordeado.length; l++) {
                   if(this._vetTare[i].getImportancia()>this._ordeado[l].getImportancia()){
                        this._ordeado.push(this._ordeado[this._ordeado.length-1])
                        for (let k = this._ordeado.length-1; k > l; k--) {        
                            this._ordeado[k]=this._ordeado[k--];
                        }
                        this._ordeado[l]=this._vetTare[i]
                        break;
                   }else if(l==this._ordeado.length-1){
                    this._ordeado.push(this._vetTare[i])
                   }
                    
                }
            }
            if(this._ordeado.length==0){
                this._ordeado.push(this._vetTare[i])
            }
           
        }
        for (let i = 0; i < this._ordeado.length; i++) { 
            ordem+=this._ordeado[i].getId()
        }
        return ordem
    }

    AremoverTarefa(id:number){
        for(let i = 0;i<this._vetTare.length;i++) {
            if(this._vetTare[i].getId()==id){
               this._vetTare.splice(i,1)
               return true;
            }
        }
        return false;
    }
  

}