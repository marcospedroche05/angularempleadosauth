import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomeComponent } from './components/home.component/home.component';
import { LoginComponent } from './components/login.component/login.component';
import { PerfilComponent } from './components/perfil.component/perfil.component';
import { SubordinadosComponent } from './components/subordinados.component/subordinados.component';
import { MenuComponent } from './components/menu.component/menu.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/AuthService';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { ServiceEmpleados } from './services/ServiceEmpleados';

@NgModule({
  declarations: [
    App,
    HomeComponent,
    LoginComponent,
    PerfilComponent,
    SubordinadosComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    provideHttpClient(),
    provideBrowserGlobalErrorListeners(),
    AuthService,
    ServiceEmpleados
  ],
  bootstrap: [App]
})
export class AppModule { }
