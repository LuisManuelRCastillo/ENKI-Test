import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { EnkiService } from '../../../Service/enki.service';
import { Producto } from '../../../Entidades/Producto';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-producto',
  imports: [],
  templateUrl: './listar-producto.component.html',
  styleUrl: './listar-producto.component.css'
})
export class ListarProductoComponent {
 
  constructor( private router:Router, private service:EnkiService){}
  producto: Producto = new Producto();
  productos !: Producto[];

  ngOnInit(): void {
    this.listarProductos();
  }

  listarProductos() {
    this.service.listarPS().subscribe(data => {
      this.productos = data;
    })
  }

  guardarProducto() {
    this.router.navigate(['guardarP']);
  }
  editarProducto(producto: Producto) {
    localStorage.setItem('producto', JSON.stringify(producto));
    this.router.navigate(['editarP']);
  }
  eliminarProducto(producto: Producto) {
    Swal.fire({
      title: `¿Seguro que quiere eliminar el producto ${producto.nombre}?`,
      text: "Esta acción no se puede revertir",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar"
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.eliminarPS(producto.id).subscribe({
          next: (data) => {
            Swal.fire({
              title: "Eliminado",
              text: "El registro se eliminó correctamente",
              icon: "success"
            })
            this.listarProductos();
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
