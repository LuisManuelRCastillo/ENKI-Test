import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EnkiService } from '../../../Service/enki.service';
import { Producto } from '../../../Entidades/Producto';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-guardar-producto',
  imports: [FormsModule],
  templateUrl: './guardar-producto.component.html',
  styleUrl: './guardar-producto.component.css'
})
export class GuardarProductoComponent {
  constructor(private router: Router, private service: EnkiService) { }

  producto: Producto = new Producto;

  guardarProductoComponent() {
    this.service.guardarPS(this.producto).subscribe(data => {
      Swal.fire({

        icon: "success",
        title: "Guardar",
        text: "Producto " + JSON.stringify(this.producto.nombre) + " se agregó correctamente",
        confirmButtonText: 'OK'
      });
      console.log(JSON.stringify(data));
      this.router.navigate(['listarProd']);
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
