import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { RelatoriosComponent } from './pages/relatorios/relatorios.component';
import { AccountComponent } from './pages/account/account.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: AccountComponent },
  { path: 'registro-de-horas', component: RegistroComponent },
  { path: 'relatorio-de-horas', component: RelatoriosComponent },
  { path: '', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
