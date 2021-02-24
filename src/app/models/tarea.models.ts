export class Tarea {

  titulo:string;
  descripcion:string;
  completa:boolean;


  constructor(pTitulo:string='', pDescripcion:string=''){

    this.titulo=pTitulo;
    this.descripcion=pDescripcion;
    //todas las tareas comienzan incompletas
    this.completa=false;


  }
}
