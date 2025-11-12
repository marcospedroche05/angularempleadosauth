import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../../services/AuthService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login.component',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  @ViewChild("cajaname") cajaname!: ElementRef;
  @ViewChild("cajapassword") cajapassword!: ElementRef;
  private token!: string;
  constructor(private _auth: AuthService, private _router: Router) { }

  iniciarSesion() {
    let userName = this.cajaname.nativeElement.value;
    let password = this.cajapassword.nativeElement.value;
    this._auth.login(userName, password).subscribe(response => {
      this.token = response.response;
      console.log(this.token)
      localStorage.setItem('token', this.token);
      this._router.navigate(["/perfil"]).then(() => window.location.reload())
    })
  }
}
