import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, Validator } from '@angular/forms';

// 2da forma
import { nombreApellidoPattern, emailPattern, validarUsuario } from '../../../shared/validator/validaciones';
// 1ra forma
import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.validatorService.nombreApellidoPattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidatorService]],
    username: ['', [Validators.required, this.validatorService.validarUsuario]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password_confirm: ['', [Validators.required]],
  }, {
    validators: [this.validatorService.camposIguales('password', 'password_confirm')]
  });

  get emailErrorMsg(): string {
    const errors = this.miFormulario.get('email')?.errors;
    if(errors?.required){
      return 'Campo obligatorio';
    } else if (errors?.pattern) {
      return 'Formato inválido';
    } else {
      return 'El correo electrónico ya ha sido registrado';
    }
  }

  constructor(private fb: FormBuilder,
              private validatorService: ValidatorService,
              private emailValidatorService: EmailValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Lizet Jaramillo M',
      email: 'jaramillo.lizet@email.com',
      username: 'lizjaram',
      password: '123456',
      password_confirm: '123456'
    })
  }

  validarCampo(value: string) {
    return this.miFormulario.get(value)?.invalid && this.miFormulario.get(value)?.touched;
  }

  submitForm() {
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }

}
