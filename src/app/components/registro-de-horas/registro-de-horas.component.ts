import { Component, OnInit } from '@angular/core';
import { RegistroDeHoras } from '../../model/user';
import { RegistroDeHorasService } from '../../service/registro.service';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-registro-de-horas',
  templateUrl: './registro-de-horas.component.html',
  styleUrls: ['./registro-de-horas.component.scss']
})
export class RegistroDeHorasComponent implements OnInit {
  registro!: RegistroDeHoras;
  usuarioLogado: any;

  constructor(
    private registroDeHorasService: RegistroDeHorasService,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.loginService.getUsuarioLogado().subscribe(usuario => {
      this.usuarioLogado = usuario;
    });
  }

  iniciarRegistro(): void {
    if (!this.usuarioLogado || !this.usuarioLogado.id) {
      alert('Nenhum usuário logado.');
      return;
    }

    this.registroDeHorasService.iniciarRegistro(this.usuarioLogado.id).subscribe(
      registro => this.registro = registro,
      error => {
        console.error(error);
        alert('Erro ao iniciar registro. Por favor, tente novamente.');
      }
    );
  }

  finalizarRegistro(): void {
    if (this.registro && this.registro.id) {
      this.registroDeHorasService.finalizarRegistro(this.registro.id).subscribe(
        registro => this.registro = registro,
        error => {
          console.error(error);
          alert('Erro ao finalizar registro. Por favor, tente novamente.');
        }
      );
    }
  }
}