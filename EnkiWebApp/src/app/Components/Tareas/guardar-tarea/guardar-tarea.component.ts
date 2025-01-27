import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EnkiService } from '../../../Service/enki.service';
import { Tarea } from '../../../Entidades/Tarea';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-guardar-tarea',
  imports: [FormsModule],
  templateUrl: './guardar-tarea.component.html',
  styleUrl: './guardar-tarea.component.css'
})
export class GuardarTareaComponent {
  constructor(private router: Router, private service: EnkiService) { }

  tarea: Tarea = new Tarea;

  guardarTareaComponent() {
    this.service.guardarTS(this.tarea).subscribe(data => {
      Swal.fire({

        icon: "success",
        title: "Guardar",
        text: "Tarea " + JSON.stringify(this.tarea.descripcion) + " se agregó correctamente",
        confirmButtonText: 'OK'
      });
      console.log(JSON.stringify(data));
      this.router.navigate(['listarT']);
    }, error => {
      Swal.fire({
        icon: "error",
        title: "Guardar",
        text: "Ocurrio un error al guardar producto",
        confirmButtonText: "OK"
      });
      console.log(JSON.stringify(error));
    }

    )
  }
}
