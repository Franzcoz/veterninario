import { Propietario } from './propie.js';

export class Animal extends Propietario {
    constructor (nom, dir, tel, tipo) {
        super (nom,  dir, tel)
        this._tipo = tipo;
    }
    get Tipo () {
        return this._tipo;
    }
}