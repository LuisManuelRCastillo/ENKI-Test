import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Usuarios } from '../../../Entidades/Usuarios';
import { Router } from '@angular/router';
import { EnkiService } from '../../../Service/enki.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-guardar-usuarios',
  imports: [FormsModule],
  templateUrl: './guardar-usuarios.component.html',
  styleUrl: './guardar-usuarios.component.css'
})
export class GuardarUsuariosComponent {
  constructor(private router: Router, private service: EnkiService) { }

  usuarios: Usuarios = new Usuarios;

  guardarUsuarioComponent() {
    this.service.guardarUS(this.usuarios).subscribe(data => {
      Swal.fire({

        icon: "success",
        title: "Guardar",
        text: "Usuario " + JSON.stringify(this.usuarios.nombre) + " se agregó correctamente",
        confirmButtonText: 'OK'
      });
      console.log(JSON.stringify(data));
      this.router.navigate(['listarU']);
    }, error => {
      Swal.fire({
        icon: "error",
        title: "Guardar",
        text: "Ocurrio un error al guardar usuario",
        confirmButtonText: "OK"
      });
      console.log(JSON.stringify(error));
    }

    )
  }
}
