import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Tarea } from 'src/app/models/tarea.models';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  //?01
  @Output() tareaCreada :EventEmitter<Tarea>

  nuevaTarea:Tarea

  constructor() {
    // se inicializa en falso
    this.nuevaTarea=new Tarea()
     //?02
    this.tareaCreada= new EventEmitter();
  }

  ngOnInit(): void {
  }

  onClick(){
     //?03
    this.tareaCreada.emit(this.nuevaTarea);
    //limpiar campos
    this.nuevaTarea=new Tarea()


  }

}
