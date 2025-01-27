import { Component } from '@angular/core';
import { Usuarios } from '../../../Entidades/Usuarios';
import { Router } from '@angular/router';
import { EnkiService } from '../../../Service/enki.service';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-usuarios',
  imports: [FormsModule],
  templateUrl: './editar-usuarios.component.html',
  styleUrl: './editar-usuarios.component.css'
})
export class EditarUsuariosComponent {
constructor(private router: Router, private service: EnkiService) { }

  usuarios: Usuarios = new Usuarios();
  ngOnInit(): void {
    this.buscarUsuario();
  }
  buscarUsuario() {
    const usuarioString = localStorage.getItem('usuarios');
    if (usuarioString) {
      this.usuarios = JSON.parse(usuarioString);
      const id = this.usuarios.id;
      this.service.buscarUS(id).subscribe(
        (data) => {
          this.usuarios = data;
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
  editarUsuarios() {

    this.service.editarUS(this.usuarios).subscribe(data => {
      Swal.fire({
        title: "Editar",
        icon: "success",
        text: "El usuario fue editado correctamente",
        showConfirmButton: false,
        timer: 2000
      });
      this.router.navigate(['listarU'])
    })
  }
}
