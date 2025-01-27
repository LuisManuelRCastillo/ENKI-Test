import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EnkiService } from '../../../Service/enki.service';
import { Producto } from '../../../Entidades/Producto';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-producto',
  imports: [FormsModule],
  templateUrl: './editar-producto.component.html',
  styleUrl: './editar-producto.component.css'
})
export class EditarProductoComponent {
  constructor(private router: Router, private service: EnkiService) { }

  producto: Producto = new Producto();
  ngOnInit(): void {
    this.buscarProducto();
  }
  buscarProducto() {
    const productoString = localStorage.getItem('producto');
    if (productoString) {
      this.producto = JSON.parse(productoString);
      const id = this.producto.id;
      this.service.buscarPS(id).subscribe(
        (data) => {
          this.producto = data;
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
        text: "No hay información del empleado almacenada",
        confirmButtonText: "Ok",
      });
    }
  }
  editarProducto() {

    this.service.editarPS(this.producto).subscribe(data => {
      Swal.fire({
        title: "Editar",
        icon: "success",
        text: "El empleado fue editado correctamente",
        showConfirmButton: false,
        timer: 2000
      });
      this.router.navigate(['listarP'])
    })
  }

}
