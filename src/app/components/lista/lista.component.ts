import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Tarea } from '../../models/tarea.models';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() tareas: Tarea[]

  constructor() { }

  ngOnInit(): void {
  }

  // con el ng class
 onClick(pTarea:Tarea){
    pTarea.completa=!pTarea.completa

 }

 onClickBorrar(indice){
    this.tareas.splice(indice,1)

 }


}
