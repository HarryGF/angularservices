import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom, Observable } from "rxjs";
import { Persona } from "../models/persona";
import { Global } from "../../Global";
import { environment } from "../../environments/environment.development";

@Injectable()
export class ServicePersonas {
    urlApi = environment.urlApiPersonas
    constructor(private _http: HttpClient) {
    }

    getPersonas(): Observable<any> {
        return this._http.get(this.urlApi)
    }

    getPersonasPromise(): Promise<any> {
        let promise = new Promise((resolve) => {
            this._http.get(this.urlApi).subscribe((response) => {
                resolve(response)
            })
        })
        return promise
    }

    async getPersonasAsync(): Promise<Persona[]> {
        return firstValueFrom(this._http.get<Persona[]>(this.urlApi))
    }

}