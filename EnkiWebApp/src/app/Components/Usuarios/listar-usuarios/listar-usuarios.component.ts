import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EnkiService } from '../../../Service/enki.service';
import { Usuarios } from '../../../Entidades/Usuarios';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-usuarios',
  imports: [],
  templateUrl: './listar-usuarios.component.html',
  styleUrl: './listar-usuarios.component.css'
})
export class ListarUsuariosComponent {

  constructor( private router:Router, private service:EnkiService){}
  usuario: Usuarios = new Usuarios();
  usuarios !: Usuarios[];

  ngOnInit(): void {
    this.listarUsuarios();
  }

  listarUsuarios() {
    this.service.listarUS().subscribe(data => {
      this.usuarios = data;
    })
  }

  guardarUsuarios() {
    this.router.navigate(['guardarU']);
  }
  editarUsuarios(usuarios: Usuarios) {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    this.router.navigate(['editarU']);
  }
  eliminarUsuarios(usuarios: Usuarios) {
    Swal.fire({
      title: `¿Seguro que quiere eliminar el usuario ${usuarios.nombre}?`,
      text: "Esta acción no se puede revertir",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar"
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.eliminarUS(usuarios.id).subscribe({
          next: (data) => {
            Swal.fire({
              title: "Eliminado",
              text: "El registro se eliminó correctamente",
              icon: "success"
            })
            this.listarUsuarios();
          },
          error: (err) => {
            Swal.fire("Error", "El usuario no se pudo eliminar", "error");
            console.error(err);
          }
        });
      } else if (result.isDenied) {
        Swal.fire("La eliminación fue cancelada", "", "info");
      }
    });
  }
}
