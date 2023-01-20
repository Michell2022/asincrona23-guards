import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenServiceService } from 'src/app/services/auten-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  public formLogin!: FormGroup;


  usernameIn = '';
  passwordIn = '';


  constructor(private formBuilder: FormBuilder, private router:Router, private autService:AutenServiceService) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      userInput: ['',
        [
          Validators.required,
          Validators.maxLength(15)
        ]
      ],
      password: ['',
        [
          Validators.required,
          Validators.minLength(6)
        ]
      ]
    })
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

  // MI FUNCION VALIDAR
  validar(): void {
    if (this.usernameIn === 'michell' && this.passwordIn === '123456') {
      this.autService.login({username: this.usernameIn, password: this.passwordIn});
      
      // MENSAJE SI EL USUARIO Y CONTRASEÑA SON CORRECTOS
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      Toast.fire({
        icon: 'success',
        title: 'Iniciando sesión...'
      })
      this.router.navigate(['/formulario']);
      
    } else {
      // MENSAJE DE ERROR SI LOS DATOS INGRESADOS SON INCORRECTOS
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'warning',
        title: 'Error, usuario no registrado...'
      })
    }

  }

}
