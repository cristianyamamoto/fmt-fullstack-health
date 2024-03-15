import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login = {
    usuario: '',
    senha: ''
  };

  constructor(private router: Router){

  }

  entrar(){
    if(this.login.usuario && this.login.senha){
      console.log(this.login);
      this.router.navigate(['/home']);
    }
  }
  
}
