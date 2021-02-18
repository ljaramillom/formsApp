import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: [ , [Validators.required, Validators.minLength(3)] ],
    favoritos: this.fb.array([
      [ 'Lindsey Stirling', Validators.required ],
      [ 'Enya', Validators.required ]
    ], Validators.required)
  });

  nuevoArtista: FormControl = this.fb.control('', Validators.required);

  get favoritosArr() {
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { }

  validarCampo(campo: string) {
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }

  agregarFavorito() {
    if(this.nuevoArtista.invalid) {return;}
    // 1ra forma
    // this.favoritosArr.push(new FormControl(this.nuevoArtista.value, Validators.required));
    // 2da forma
    this.favoritosArr.push(this.fb.control(this.nuevoArtista.value, Validators.required));
    this.nuevoArtista.reset();
  }

  
  eliminar(index: number) {
    this.favoritosArr.removeAt(index);
  }

  guardar() {
    if(this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }

}
