import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../../model/user';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {
  usuarios$: Observable<Usuario[]>;

  constructor(
    private apiService: ApiService,

  ) {
    this.usuarios$ = this.apiService.list();
  }


  ngOnInit(): void {
      
  }
}
