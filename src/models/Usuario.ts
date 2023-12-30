import { Request, Response } from 'express';

export class Usuario {
    private _nome: string;
    private _email: string;
    private _nick:string
    constructor(nome: string, email:string,nick:string) {
      this._nome = nome;
      this._email = email;
      this._nick=nick
    }
  

    getNome(): string {
      return this._nome;
    }
    
    setNome(novoNome: string) {
      this._nome = novoNome;
    }
    getNick(): string {
      return this._nick;
    }
    setNick(novoNick: string) {
      this._nick = novoNick;
    }
    getEmail(): string {
      return this._email;
    }
  
    setEmail(novoEmail: string) {
      this._email = novoEmail;
    }
  }
  