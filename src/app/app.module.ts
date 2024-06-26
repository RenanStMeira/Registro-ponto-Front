import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './components/users/users.component';
import { ApiService } from './service/api.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { LoginService } from './service/login.service';
import { RegistroDeHorasComponent } from './components/registro-de-horas/registro-de-horas.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { RelatoriosComponent } from './pages/relatorios/relatorios.component';
import { RelatoriosHotasComponent } from './components/relatorios-hotas/relatorios-hotas.component';
import { FormatDurationPipe } from './format-duration.pipe';
import { AccountComponent } from './pages/account/account.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    RegistroDeHorasComponent,
    RegistroComponent,
    RelatoriosComponent,
    RelatoriosHotasComponent,
    FormatDurationPipe,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
  ],
  providers: [
    LoginService,
    ApiService,
    provideAnimationsAsync()
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }