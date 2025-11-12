import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
  public sesion = false;

  constructor(private _router: Router){}

  ngOnInit(): void {
    if(localStorage.getItem("token")){
      this.sesion = true;
    }
    
  }

  cerrarSesion(): void {
    localStorage.setItem("token", "");
    this._router.navigate(["/"]).then(() => window.location.reload())
  }
}
