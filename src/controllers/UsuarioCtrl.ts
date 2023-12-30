import { Request, Response } from 'express';
import { Usuario } from '../models/Usuario';

export class UsuarioCtrl{
    private _usuario: Usuario;
    private _titulo: string;
    private _nicks:string[]=["luu"]
    constructor(){
        this._usuario = new Usuario('Luciana', 'luziana@gmail.com',"luu");
        this._titulo = 'perfil';
    }
    
    perfil(req: Request, res: Response){
        const dados = {
            'titulo': this._titulo,
            'nome': this._usuario.getNome(),
            'email': this._usuario.getEmail(),
            'nick':this._usuario.getNick()
        };

        res.render('Usuario/perfil', {dados});
    }

    atualizar(req: Request, res: Response){
        const dados = {
            'titulo': this._titulo + ' Atualizar dados',
        };
        res.render('Usuario/atualizar', {dados});
    }

    dadosatualizados(req: Request, res: Response){
        let nome=req.body.nome
        let email=req.body.email
        let nick=req.body.nick
        let controle=this.Nick(nick)
        if(controle==true){
            this._usuario.setNome(nome);
            this._usuario.setEmail(email);
            const dados = {
                'titulo': this._titulo,
                'nome': nome,
                'email': email,
                'nick':nick
            };
            res.render('Usuario/perfil', {dados});
        }else{
            const dados = {
                'titulo': this._titulo + ' Atualizar dados',
            };
            res.render('Usuario/atualizar', {dados});
        }
    }

    rotaEmail(req:Request,res:Response){
      
        let email=req.params.email3
        console.log(email)
        let usuario=this.ApiEmail(email)

        res.render('Usuario/nomeEmail',{usuario})

    }


    ApiEmail(email:string):string{
        if(email=="tom@gmail.com"){
            return "Tony"
        }
        return "não foi possivel buscar nome"
    }

    Nick(novoNick:string){
        if(novoNick.length>2){
            for (let index = 0; index < this._nicks.length; index++) {     
                if(this._nicks[index]==novoNick){
                    return false
                }
            }
    
            this._usuario.setNick(novoNick)
            this._nicks.push(novoNick)
            return true
        }else{
           return false 
        }

    }


}