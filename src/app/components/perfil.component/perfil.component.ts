import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../../models/perfil';
import { ServiceEmpleados } from '../../services/ServiceEmpleados';


@Component({
  selector: 'app-perfil.component',
  standalone: false,
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css',
})
export class PerfilComponent implements OnInit {
  public empleadoLogado!: Empleado
  constructor(private _router: Router, private _service: ServiceEmpleados){}

  ngOnInit(): void {
    if(!localStorage.getItem("token"))
      this._router.navigate(["/login"]);
    else {
      this._service.getEmpleadoLogado().subscribe(response => {
        this.empleadoLogado = response
      })
    }
  }

}
