import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';


@Injectable({
  providedIn: 'root'
})
export class PresupuestosService {
  presupuestoService: any;
  presupuestosService: any;
  constructor(private db: AngularFireDatabase) { }

  postPresupuesto(presupuesto: any) {
    const newpres = JSON.stringify(presupuesto);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.db.database.ref().child("presupuesto").push(presupuesto);

  }
  /*
    Para mostrar los presupuestos
  */
  getPresupuestos() {
    return this.db.database.ref().child("presupuesto").get();
  }
  /*
    Para coger los presupuesto por id 
  */
  getPresupuesto(id$: string) {

    return this.db.database.ref().child("presupuesto").child(id$).get();
  }
  /*
    Para borrar los presupuesto por id 
  */
  

  putPresupuesto(presupuesto: any, id$: string) {
    const newpre = JSON.stringify(presupuesto);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.db.database.ref().child("presupuesto").child(id$).push(presupuesto);
  }

  

  

}
