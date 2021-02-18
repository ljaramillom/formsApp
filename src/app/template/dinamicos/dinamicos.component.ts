import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  @ViewChild('miFormulario') miFormulario!: NgForm;
  nuevoArtista: string = '';
  persona: Persona = {
    nombre: 'Lizet',
    favoritos: [
      {
        id: 1, nombre: 'Lindsey Stirling'
      },
      {
        id: 2, nombre: 'Enya'
      },
      {
        id: 3, nombre: 'Sean Paul'
      }
    ]
  }

  guardar() {
    console.log('formulario almacenado exitosamen!');
  }

  eliminar(index: number) {
    this.persona.favoritos.splice(index, 1);
  }

  agregarArtista() {
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoArtista
    }

    this.persona.favoritos.push({ ...nuevoFavorito });
    this.nuevoArtista = '';
  }

}
