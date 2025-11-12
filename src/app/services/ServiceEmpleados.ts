import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Empleado } from "../models/perfil";
import { environment } from "../../environments/environment.development";

@Injectable()
export class ServiceEmpleados {
    constructor(private _http: HttpClient){}

    getEmpleadoLogado(): Observable<Empleado> {
        let request = "api/Empleados/PerfilEmpleado";
        let header = new HttpHeaders().set("Authorization", "bearer " + localStorage.getItem("token"));
        let url = environment.urlEmpleados + request;
        return this._http.get<Empleado>(url, {headers: header});
    }

    getSubordinados(): Observable<Array<Empleado>> {
        let request = "api/Empleados/Subordinados";
        let header = new HttpHeaders().set("Authorization", "bearer " + localStorage.getItem("token"));
        let url = environment.urlEmpleados + request;
        return this._http.get<Array<Empleado>>(url, {headers: header});
    }
}