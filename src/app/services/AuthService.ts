import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class AuthService {
    public url = environment.urlEmpleados + "Auth/Login";
    public token!: string

    constructor(private _http: HttpClient, private _router: Router){}

    login(name: string, password: string): Observable<any> {
        return this._http.post(this.url, {userName: name, password: password});
    }
}