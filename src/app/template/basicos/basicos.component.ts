import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;
  initForm = {
    producto: 'RWX 2490T',
    precio: 0,
    existencias: 10
  }

  constructor() {}

  ngOnInit(): void {}

  // guardar(miFormulario: NgForm){ //2da forma
  guardar() {
    console.log(this.miFormulario);
    this.miFormulario.resetForm({
      precio: 0,
      existencias: 0
    });
  }

  nombreValido() {
    return this.miFormulario?.controls.producto?.invalid &&
      this.miFormulario?.controls.producto?.touched;
  }

  
  precioValido() {
    return this.miFormulario?.controls.precio?.touched &&
      this.miFormulario?.controls.precio?.value < 0;
  }
}
