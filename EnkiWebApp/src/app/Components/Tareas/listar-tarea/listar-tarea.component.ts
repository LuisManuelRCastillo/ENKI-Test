import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EnkiService } from '../../../Service/enki.service';
import { Tarea } from '../../../Entidades/Tarea';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-tarea',
  imports: [],
  templateUrl: './listar-tarea.component.html',
  styleUrl: './listar-tarea.component.css'
})
export class ListarTareaComponent {

  constructor( private router:Router, private service:EnkiService){}
  tarea: Tarea = new Tarea();
  tareas !: Tarea[];

  ngOnInit(): void {
    this.listarTareas();
  }

  listarTareas() {
    this.service.listarTS().subscribe(data => {
      this.tareas = data;
    })
  }

  guardarTarea() {
    this.router.navigate(['guardarT']);
  }
  editarTarea(tarea: Tarea) {
    localStorage.setItem('tarea', JSON.stringify(tarea));
    this.router.navigate(['editarT']);
  }
  eliminarTarea(tarea: Tarea) {
    Swal.fire({
      title: `¿Seguro que quiere eliminar la tarea ${tarea.descripcion}?`,
      text: "Esta acción no se puede revertir",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar"
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.eliminarTS(tarea.id).subscribe({
          next: (data) => {
            Swal.fire({
              title: "Eliminado",
              text: "El registro se eliminó correctamente",
              icon: "success"
            })
          },
          error: (err) => {
            Swal.fire("Error", "El producto no se pudo eliminar", "error");
            console.error(err);
          }
        });
      } else if (result.isDenied) {
        Swal.fire("La eliminación fue cancelada", "", "info");
      }
    });
  }
}
