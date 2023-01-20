import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{

  public formLogin!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      name: ['',
      [
        Validators.required,
        Validators.minLength(10)
      ]
    ],
    apellidos:['',
      [
        Validators.required,
        Validators.minLength(10)
      ]
    ],
      email: ['',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(250),
          // emailValidator()
        ]
      ],
      password: ['',
        [
          Validators.required,
          Validators.minLength(10)
        ]
      ]
    })
  }

  get name() {
    return this.formLogin.get('name')!;
  }

  get apellidos() {
    return this.formLogin.get('apellidos')!;
  }

  get email() {
    return this.formLogin.get('email')!;
  }

  get password() {
    return this.formLogin.get('password')!;
  }


  public validate(): void {
    if (this.formLogin.invalid) {
      for (const control of Object.keys(this.formLogin.controls)) {
        this.formLogin.controls[control].markAsTouched();
      }
      return;
    }
  }

  // LISTO PARA REGISTRAR UN NUEVO USUARIO.
  send(): any {
    console.log('DATOS:', this.formLogin.value);
    // OBTENGO LOS VALORES DE LOS CAMPOS DEL FORMULARIO Y LOS GUARDO EN MI VARIABLE.
    const datin = [(this.formLogin.value)];

    //ENVIO LOS DATOS POR MEDIO DE LOCALSTORAGE.
    localStorage.setItem('newRegistro', JSON.stringify(datin))

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Felicidades, usuario registrado',
      showConfirmButton: false,
      timer: 1500
    })
  }

}
