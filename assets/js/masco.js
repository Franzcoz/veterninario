import { Propietario } from './propie.js';
import { Animal } from './animal.js';

export class Mascota extends Animal {
    constructor (nom, dir, tel, tipo, nom2, enf) {
        super (nom, dir, tel, tipo)
        this._nombre2 = nom2;
        this._enfermedad = enf;
    }
    get Nombre () {
        return this._nombre2;
    }
    set Nombre (nv_nom2) {
        this._nombre2 = nv_nom2;
    }
    get Enfermedad () {
        return this._enfermedad;
    }
    set Enfermedad (nv_enf) {
        this._enfermedad = nv_enf;
    }
}