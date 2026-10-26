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

  ngOnInit(): void {
    this._service.getPersonas().subscribe((response => {
      console.log("Leyendo personas")
      this.personas = response
      this._cdr.detectChanges()
    }))
  }
}
