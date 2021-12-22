import { Propietario } from './propie.js';
import { Animal } from './animal.js';
import { Mascota } from './masco.js';

const btn = $('.btn');

btn.on('click', (ev) => {
    ev.preventDefault()
    const propie = $('#propietario').val();
    const tel = $('#telefono').val();
    const direc = $('#direccion').val();
    const masco = $('#nombreMascota').val();
    const tipo = $('select').val();
    const enf = $('#enfermedad').val();
    const resul = $('#resultado')
    if (tipo == 'perro') {
        const perro = new Mascota(propie, direc, tel, tipo, masco, enf);
        console.log(perro);
        resul.html(`
            <li>Nombre Mascota: ${perro.Nombre}</li>
            <li>Enfermedad: ${perro.Enfermedad}</li>
            <li>Especie: ${perro.Tipo}</li>
            <li>${perro.datosPropietario()}</li>`)
    } else if (tipo == 'gato') {
        const gato = new Mascota(propie, direc, tel, tipo, masco, enf);
        console.log(gato);
        resul.html(`
            <li>Nombre Mascota: ${gato.Nombre}</li>
            <li>Enfermedad: ${gato.Enfermedad}</li>
            <li>Especie: ${gato.Tipo}</li>
            <li>${gato.datosPropietario()}</li>`)
    } else if (tipo == 'conejo') {
        const conejo = new Mascota(propie, direc, tel, tipo, masco, enf);
        console.log(conejo);
        resul.html(`
            <li>Nombre Mascota: ${conejo.Nombre}</li>
            <li>Enfermedad: ${conejo.Enfermedad}</li>
            <li>Especie: ${conejo.Tipo}</li>
            <li>${conejo.datosPropietario()}</li>`)
    }
    
})