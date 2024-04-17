import { Component, OnInit } from '@angular/core';
import { RegistroDeHoras } from '../../model/user';
import { RegistroDeHorasService } from '../../service/registro.service';

@Component({
  selector: 'app-registro-de-horas',
  templateUrl: './registro-de-horas.component.html',
  styleUrl: './registro-de-horas.component.scss'
})
export class RegistroDeHorasComponent implements OnInit {
  registro!: RegistroDeHoras;

  constructor(private registroDeHorasService: RegistroDeHorasService) { }

  ngOnInit(): void {
  }

  iniciarRegistro(): void {
    const usuarioId = 7;
    this.registroDeHorasService.iniciarRegistro(usuarioId).subscribe(
      registro => this.registro = registro,
      error => console.error(error)
    );
  }

  finalizarRegistro(): void {
    if (this.registro && this.registro.id) {
      this.registroDeHorasService.finalizarRegistro(this.registro.id).subscribe(
        registro => this.registro = registro,
        error => console.error(error)
      );
    }
  }
}
