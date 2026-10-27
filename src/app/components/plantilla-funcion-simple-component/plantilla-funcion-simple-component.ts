import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Plantilla } from '../../models/plantilla';
import { ServicePlantilla } from '../../services/service.plantilla';

@Component({
  selector: 'app-plantilla-funcion-simple-component',
  standalone: false,
  styleUrl: './plantilla-funcion-simple-component.css',
  templateUrl: './plantilla-funcion-simple-component.html',
})
export class PlantillaFuncionSimpleComponent implements OnInit{
  public arrayFunciones !: Array<String>
  public arrayPlantilla!: Array<Plantilla>

  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: ServicePlantilla
  ){}

  async ngOnInit(): Promise<void> {
    this.arrayFunciones = await this._service.getFunciones()
    this._cdr.detectChanges()
  }

  async loadPlantilla(funcion: string): Promise<void> {
    this.arrayPlantilla = await this._service.getPlantilla(funcion)
    this._cdr.detectChanges()
  }
}
