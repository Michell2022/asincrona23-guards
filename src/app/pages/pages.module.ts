import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreakingComponent } from './breaking/breaking.component';
import { FormularioComponent } from './formulario/formulario.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    BreakingComponent,
    FormularioComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
