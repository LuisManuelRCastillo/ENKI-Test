package com.mx.Tareas.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mx.Tareas.Model.Tareas;
import com.mx.Tareas.Service.TareasServiceImp;

@RestController
@RequestMapping(path="/T")

public class TareasAPI {
	@Autowired
	private TareasServiceImp service;

	@GetMapping
	public ResponseEntity<?> listar(){
		List<Tareas> tarea = service.listar();
		if(tarea.isEmpty()) {
			return ResponseEntity.ofNullable("No hay registros en la base de datos");
		}else {
			return ResponseEntity.ok(tarea);
		}
				
	}
	
	@PostMapping
	public ResponseEntity<?> guardar(@RequestBody Tareas tareas){
		try {
			Tareas guardada = service.guardar(tareas);
			if(guardada != null) {
				service.guardar(tareas);
				return ResponseEntity.ok("La tarea se registró correctamente");
			}else {
				return ResponseEntity.status(HttpStatus.FOUND).body("Este registro ya existe en la base de datos");
			}
			
		}catch(IllegalArgumentException e) {
			return ResponseEntity.status(HttpStatus.CONFLICT).build();
		}
	}
	
	@GetMapping(path="/{id}")
	public ResponseEntity<?> buscar(@PathVariable("id") int id){
		Tareas encontrada = service.buscar(id);
		if(encontrada != null) {
			service.buscar(id);
			return ResponseEntity.ok(encontrada);
		}else {
			return ResponseEntity.ofNullable("No existen registros en la base de datos");
		}
	}
	
	@PostMapping(path="/{id}")
	public ResponseEntity<?> eliminar(@PathVariable("id") int id){
		Tareas encontrado = service.buscar(id);
		if(encontrado != null) {
			service.eliminar(id);
			return ResponseEntity.ok("El registro se eliminó correctamente");
		}else {
			return ResponseEntity.ofNullable("El registro no se puede eliminar porque no existe en la base de datos");
		}
	}
	
	@PutMapping
	public ResponseEntity<?> editar(@RequestBody Tareas tareas){
		Tareas encontrada = service.buscar(tareas.getId());
		if(encontrada != null) {
			service.editar(tareas);
			return ResponseEntity.ok("El registro se editó correctamente");
		}else {
			return ResponseEntity.ofNullable("El registro no se puede editar porque no existe en la base de datos");
		}
	}
	
}
