import { Component } from '@angular/core';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string;
  senha: string;

  constructor(private loginService: LoginService) {
    this.email = '';
    this.senha = '';
  }

  login() {
    const loginData = { email: this.email, senha: this.senha };

    this.loginService.login(loginData).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.error(error);
      }
    );
  }
}