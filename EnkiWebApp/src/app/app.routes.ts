import { RouterModule, Routes } from '@angular/router';
import { ListarProductoComponent } from './Components/Productos/listar-producto/listar-producto.component';
import { EditarProductoComponent } from './Components/Productos/editar-producto/editar-producto.component';
import { GuardarProductoComponent } from './Components/Productos/guardar-producto/guardar-producto.component';
import { ListarTareaComponent } from './Components/Tareas/listar-tarea/listar-tarea.component';
import { EditarTareaComponent } from './Components/Tareas/editar-tarea/editar-tarea.component';
import { GuardarTareaComponent } from './Components/Tareas/guardar-tarea/guardar-tarea.component';
import { ListarUsuariosComponent } from './Components/Usuarios/listar-usuarios/listar-usuarios.component';
import { EditarUsuariosComponent } from './Components/Usuarios/editar-usuarios/editar-usuarios.component';
import { GuardarUsuariosComponent } from './Components/Usuarios/guardar-usuarios/guardar-usuarios.component';



export const routes: Routes = [
    

    {path: 'listarP', component: ListarProductoComponent},
    {path: 'editarP', component: EditarProductoComponent},
    {path: 'guardarP', component: GuardarProductoComponent},

    {path: 'listarT', component: ListarTareaComponent},
    {path: 'editarT', component: EditarTareaComponent},
    {path: 'guardarT', component: GuardarTareaComponent},

    {path: 'listarU', component: ListarUsuariosComponent},
    {path: 'editarU', component: EditarUsuariosComponent},
    {path: 'guardarU', component: GuardarUsuariosComponent},

];
