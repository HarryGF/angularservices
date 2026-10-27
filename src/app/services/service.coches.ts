import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { HttpClient } from "@angular/common/http";
import { Coche } from "../models/coche";
import { firstValueFrom } from "rxjs";

@Injectable()
export class ServiceCoches {
    constructor(private _http: HttpClient){}
    urlApi = environment.urlApiCoches

    async getCochesAsync(): Promise<Coche[]> {
        let request = "webresources/coches"
        return firstValueFrom(this._http.get<Coche[]>(this.urlApi + request))
    }
}