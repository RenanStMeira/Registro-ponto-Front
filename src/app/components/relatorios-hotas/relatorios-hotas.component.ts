import { Component, OnInit } from '@angular/core';
import { RelatorioDeHoras } from '../../model/user';
import { RelatorioDeHorasService } from '../../service/relatorio.service';

@Component({
  selector: 'app-relatorios-hotas',
  templateUrl: './relatorios-hotas.component.html',
  styleUrl: './relatorios-hotas.component.scss'
})
export class RelatoriosHotasComponent implements OnInit {
  relatorios!: RelatorioDeHoras[];

  constructor(private relatorioDeHorasService: RelatorioDeHorasService) { }

  ngOnInit(): void {
    this.buscarTodosRelatorios();
  }

  buscarTodosRelatorios(): void {
    this.relatorioDeHorasService.buscarTodosRelatorios().subscribe(
      relatorios => this.relatorios = relatorios,
      error => console.error(error)
    );
  }
}
