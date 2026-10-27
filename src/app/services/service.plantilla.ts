import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from "rxjs";
import { Plantilla } from "../models/plantilla";

@Injectable()
export class ServicePlantilla {
    constructor(private _http: HttpClient){}
    urlApi = environment.urlApiPlantilla

    async getFunciones(): Promise<String[]> {
        let request = "api/Plantilla/Funciones"
        return firstValueFrom(this._http.get<String[]>(this.urlApi + request))
    }

    async getPlantilla(funcion: string): Promise<Plantilla[]> {
        let request = "api/Plantilla/PlantillaFuncion/" + funcion
        return firstValueFrom(this._http.get<Plantilla[]>(this.urlApi + request))
    }

    async getPlantillaFunciones(funciones: Array<string>): Promise<Plantilla[]> {
        let content = ""
        for(let fun of funciones) {
            content += "funcion=" + fun + "&"
        }
        content = content.substring(0, content.length -1)
        let request = "api/Plantilla/PlantillaFunciones?" + content
        return firstValueFrom(this._http.get<Plantilla[]>(this.urlApi + request))

    }
}