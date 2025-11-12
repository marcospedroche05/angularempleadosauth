import { Component, OnInit } from '@angular/core';
import { ServiceEmpleados } from '../../services/ServiceEmpleados';
import { Empleado } from '../../models/perfil';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subordinados.component',
  standalone: false,
  templateUrl: './subordinados.component.html',
  styleUrl: './subordinados.component.css',
})
export class SubordinadosComponent implements OnInit {
  public empleadoLogado!: Empleado;
  public subordinados!: Array<Empleado>;
  constructor(private _service: ServiceEmpleados, private _router: Router){}
  
  ngOnInit(): void {
    if(!localStorage.getItem("token"))
      this._router.navigate(["/login"]);
    else {
      this._service.getEmpleadoLogado().subscribe(response => {
        this.empleadoLogado = response
      })
      this._service.getSubordinados().subscribe(response => {
        this.subordinados = response
      })
    }  
  }

}
