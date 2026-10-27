import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ServicePersonas } from '../../services/service.persona';
import { Persona } from '../../models/persona';

@Component({
  selector: 'app-persona-api-component',
  standalone: false,
  styleUrl: './persona-api-component.css',
  templateUrl: './persona-api-component.html',
})
export class PersonaApiComponent implements OnInit{
  public personas!: Array<Persona>

  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: ServicePersonas
  ){}

  async ngOnInit(): Promise<void> {
    
    this._service.getPersonas().subscribe({
      next: (response) => {
        console.log("Leyendo personas")
        this.personas = response
        this._cdr.detectChanges()
      }, error: (error) => {
        console.error("Error en el Api", error)
      }
    })
    /*
    this._service.getPersonasPromise().then((response) => {
    this.personas = response
    this._cdr.detectChanges()
    }) .catch((error: any) => {
      console.error("Error en el Api", error)
    })
    try {
      this.personas = await this._service.getPersonasAsync()
    this._cdr.detectChanges()      
    } catch(error) {
      console.error("Error en el Api", error)
    }
    */
  }
}
