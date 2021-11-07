import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { PresupuestosService } from 'src/app/servicios/presupuestos.service';

@Component({
  selector: 'app-presupuestos',
  templateUrl: './presupuestos.component.html',
  styleUrls: ['./presupuestos.component.css']
})
export class PresupuestosComponent implements OnInit {
  presupuestos: any[] = [];
  constructor(private presupuestosService: PresupuestosService ,private db: AngularFireDatabase) { 

    this.presupuestosService.getPresupuestos().then(data =>{
      const presupuestos = data.val();
      for(const id$ in presupuestos){
        const p = presupuestos[id$];
        p.id$ = id$;
        this.presupuestos.push(presupuestos[id$]);
      }
    })
  }

  ngOnInit(): void {
  }
  eliminarPresupuesto(id$:any) {
    this.delPresupuesto(id$).then(()=>{
      this.presupuestosService.getPresupuestos();
    });

    
  
  }

    delPresupuesto(id$:string){
      return this.db.database.ref().child("presupuesto").child(id$).remove();
    }
}
