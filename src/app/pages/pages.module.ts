import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreakingComponent } from './breaking/breaking.component';
import { FormularioComponent } from './formulario/formulario.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


@NgModule({
  declarations: [
    BreakingComponent,
    FormularioComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    RouterLink,
    RouterLinkActive
  ],
  exports: [
    FormularioComponent,
    HomeComponent,
    LoginComponent
  ]
})
export class PagesModule { }
