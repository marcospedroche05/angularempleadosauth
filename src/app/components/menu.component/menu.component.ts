import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
  public sesion = false;

  ngOnInit(): void {
    if(localStorage.getItem("token")){
      this.sesion = true;
    }
    
  }

  cerrarSesion(): void {
    localStorage.setItem("token", "");
    window.location.reload();
  }
}
