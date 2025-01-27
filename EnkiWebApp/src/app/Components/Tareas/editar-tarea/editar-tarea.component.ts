import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EnkiService } from '../../../Service/enki.service';
import { Producto } from '../../../Entidades/Producto';
import { Tarea } from '../../../Entidades/Tarea';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-tarea',
  imports: [FormsModule],
  templateUrl: './editar-tarea.component.html',
  styleUrl: './editar-tarea.component.css'
})
export class EditarTareaComponent {
 constructor(private router: Router, private service: EnkiService) { }

  tarea: Tarea = new Tarea();
  ngOnInit(): void {
    this.buscarTarea();
  }
  buscarTarea() {
    const tareaString = localStorage.getItem('tarea');
    if (tareaString) {
      this.tarea = JSON.parse(tareaString);
      const id = this.tarea.id;
      this.service.buscarTS(id).subscribe(
        (data) => {
          this.tarea = data;
          Swal.fire({
            title: "Editar",
            icon: "success",
            text: "Información cargada",
            showConfirmButton: false,
            timer: 1500,
          });
        }, (error) => {
          Swal.fire({
            icon: "error",
            title: "Editar",
            text: "Ocurrió un error al cargar la información",
            confirmButtonText: "Ok",
          });
        }
      );
    } else {
      Swal.fire({
        icon: "warning",
        title: "Editar",
        text: "No hay información de la tarea",
        confirmButtonText: "Ok",
      });
    }
  }
  editarTarea() {

    this.service.editarTS(this.tarea).subscribe(data => {
      Swal.fire({
        title: "Editar",
        icon: "success",
        text: "La tarea fue editada correctamente",
        showConfirmButton: false,
        timer: 2000
      });
      this.router.navigate(['listarT'])
    })
  }
}
