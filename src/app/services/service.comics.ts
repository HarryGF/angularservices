import { Comic } from "../models/comic"
import { Injectable } from "@angular/core"

@Injectable()
export class ServiceComics {
    getComics(): any {
        let path = "./assets/comics.json"
        fetch(path).then(response => response.json())
        .then((data: any[]) => {
            let arrayComics = []
            for(let elem of data) {
                let comic: Comic = new Comic(elem.nombre, elem.imagen, elem.descripcion)
                this.arrayComics.push(comic)
            }
            return arrayComics
        })
    }
}