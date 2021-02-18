import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  // 1ra forma (sin FormBuilder)
  // miFormulario: FormGroup = new FormGroup({
  //   'nombre': new FormControl('RTX 4080ti'),
  //   'precio': new FormControl(10),
  //   'existencias': new FormControl(5),
  // });

  // 2da forma (con FormBuilder)
  miFormulario: FormGroup;

  constructor(private fb: FormBuilder) {
   }

   ngOnInit() {
    this.createForm();
     this.miFormulario.reset({
       nombre: 'RTX 4080ti',
       precio: 1600,
     })
   }

   createForm() {
    this.miFormulario = this.fb.group({
      // formControlName: [ 'valorPorDefecto', [Validadores sincronos], Validadores asincronos ]
      nombre: [ , [Validators.required, Validators.minLength(3)] ],
      precio: [ , [Validators.required, Validators.min(0)] ],
      existencias: [ , [Validators.required, Validators.min(0)] ],
    });
   }

   validarCampo(campo: string) {
     return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
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
