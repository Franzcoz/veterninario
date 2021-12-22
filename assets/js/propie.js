export class Propietario {
    constructor (nom, dir, tel) {
        this._nombre = nom;
        this._direccion = dir;
        this._telefono = tel;
    }
    datosPropietario () {
        let datos = `El nombre del propietario es ${this._nombre}, su dirección es ${this._direccion} y su teléfono es ${this._telefono}`;
        return datos;
    }
}