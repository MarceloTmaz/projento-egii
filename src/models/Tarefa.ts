import {Request, Response} from 'express'

export class Tarefa{
    private _nome:string;
    private _descricao:string
    private _criador:string
    private _convidado:string=""
    private _conclui:boolean=false
    private _id=-1;
    private _importancia:number
    constructor(nome:string, descri:string, criador:string,id:number,importancia:number){
        this._descricao=descri
        this._nome=nome
        this._criador=criador
        this._id=id
        this._importancia=importancia
    }
    getImportancia(): number {
        return this._importancia;
    }
    setImportancia(novaImportancia: number) {
        this._importancia = novaImportancia;
    }
    getId(): number {
        return this._id;
    }
    setId(novoid: number) {
        this._id = novoid;
    }

    getNome(): string {
        return this._nome;
    }
    setNome(novoNome: string) {
        this._nome = novoNome;
    }

    getCriado(): string {
        return this._criador;
    }
    setCriador(criador: string) {
        this._criador = criador;
    }

    getDesc(): string {
        return this._descricao;
    }
    setDesc(descri: string) {
        this._descricao = descri;
    }

    getConvidado(): string {
        return this._convidado;
    }
    setConvidado(novoConvidado: string) {
        this._convidado = novoConvidado;
    }

    getConclu(): boolean {
        return this._conclui;
    }
    setConclu(estado: boolean) {
        this._conclui = estado;
    }



}