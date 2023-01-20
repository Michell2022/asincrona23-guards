import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  
  toggle!:boolean;
  numero1!:string;
  numero2!:string;
  resultado!:string;
 

  verificar() {
    if(this.numero2 == "" || this.numero1 == ""){
      this.toggle = false;

      this.resultado = "";
    }
  }

  ejecutarSuma(){

    if(this.toggle){
      const resul = parseInt(this.numero1)  + parseInt(this.numero2);
      this.resultado = resul.toString();
    }else{
      this.resultado = "";
    }
 
  }

}
