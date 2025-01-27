import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../Entidades/Producto';
import { Tarea } from '../Entidades/Tarea';
import { Usuarios } from '../Entidades/Usuarios';

@Injectable({
  providedIn: 'root'
})
export class EnkiService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:9000'

  listarPS(){
    return this.http.get<Producto[]>(this.url+"/P");
  }
  guardarPS(producto : Producto){
    return this.http.post<String>(this.url + "/P", producto,{responseType: "text" as "json"});
  }
  editarPS(producto : Producto){
    return this.http.put<String>(this.url + "/P", producto,{responseType: "text" as "json"});
  }
  buscarPS(id : number){
    return this.http.get<Producto>(`${this.url}/P/${id}`);
  }
  eliminarPS(id : number){
    return this.http.post<string>(`${this.url}/P/${id}`,id,{responseType: "text" as "json"});
  }

  listarTS(){
    return this.http.get<Tarea[]>(this.url+"/T");
  }
  guardarTS(tarea : Tarea){
    return this.http.post<String>(this.url + "/T", tarea,{responseType: "text" as "json"});
  }
  editarTS(tarea : Tarea){
    return this.http.put<String>(this.url + "/T", tarea,{responseType: "text" as "json"});
  }
  buscarTS(id : number){
    return this.http.get<Tarea>(`${this.url}/T/${id}`);
  }
  eliminarTS(id : number){
    return this.http.post<string>(`${this.url}/T/${id}`,id,{responseType: "text" as "json"});
  }

  listarUS(){
    return this.http.get<Usuarios[]>(this.url+"/U");
  }
  guardarUS(usuarios : Usuarios){
    return this.http.post<String>(this.url + "/U", usuarios,{responseType: "text" as "json"});
  }
  editarUS(usuarios : Usuarios){
    return this.http.put<String>(this.url + "/U", usuarios,{responseType: "text" as "json"});
  }
  buscarUS(id : number){
    return this.http.get<Usuarios>(`${this.url}/U/${id}`);
  }
  eliminarUS(id : number){
    return this.http.post<string>(`${this.url}/U/${id}`,id,{responseType: "text" as "json"});
  }
}
