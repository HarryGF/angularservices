import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Plantilla } from '../../models/plantilla';
import { ServicePlantilla } from '../../services/service.plantilla';

@Component({
  selector: 'app-plantilla-funcion-multiple-component',
  standalone: false,
  styleUrl: './plantilla-funcion-multiple-component.css',
  templateUrl: './plantilla-funcion-multiple-component.html',
})
export class PlantillaFuncionMultipleComponent implements OnInit{
  @ViewChild("selectFunciones") selectFunciones!: ElementRef; 
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

  async loadPlantilla(): Promise<void> {
    let aux = []
    for(let funcion of this.selectFunciones.nativeElement.options) {
      if(funcion.selected == true) {
        aux.push(funcion.value)
      }
    }
    this.arrayPlantilla = await this._service.getPlantillaFunciones(aux)
    this._cdr.detectChanges()
  }
}
