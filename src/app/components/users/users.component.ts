import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: ApiService,
    private snackBar: MatSnackBar,
  ) {
    this.form = this.formBuilder.group({
      nome: [''],
      email: [''],
      cpf: [''],
      senha: [''],
      cargo: [''],
    });
  }

  ngOnInit(): void {
      
  }

  onSubmit() {
    const formValue = this.form.value;
  
    if (formValue.cargo === 'admin') {
      formValue.idCargo = 1; 
    } else if (formValue.cargo === 'funcionario') {
      formValue.idCargo = 2;
    }
  
    this.service.createUser(formValue).subscribe(() => {
      this.snackBar.open('Usuário cadastrado com sucesso!', 'Fechar', {
        duration: 2000,
      });
      this.form.reset();
    }, error => {
      this.snackBar.open('Ocorreu um erro ao cadastrar o usuário.', 'Fechar', {
        duration: 2000,
      });
    });
  }

  onCancel() {
    this.form.reset();
  }
}
