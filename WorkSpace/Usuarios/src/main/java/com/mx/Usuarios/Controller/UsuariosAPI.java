package com.mx.Usuarios.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mx.Usuarios.Model.Usuarios;
import com.mx.Usuarios.Service.UsuariosServiceImp;

@RestController
@RequestMapping(path="/U")



public class UsuariosAPI {
	@Autowired
	private UsuariosServiceImp service;
	

	
	@GetMapping
	public ResponseEntity<?> listar(){
		List<Usuarios> usr = service.listar();
		if(usr.isEmpty()) {
			return ResponseEntity.ofNullable("No  hay registros en la base de datos");
		}else {
			return ResponseEntity.ok(usr);
		}
	}
	
	@PostMapping
	public ResponseEntity<?> guardar(@RequestBody Usuarios usuarios){
		try {
			Usuarios guardado = service.guardar(usuarios);
			if(guardado != null) {
				service.guardar(usuarios);
				return ResponseEntity.ok("Se agregó correctamente");
			}else {
				return ResponseEntity.status(HttpStatus.FOUND).body("Este registro ya existe en la base de datos");
			}
		}catch(IllegalArgumentException e ){
			return ResponseEntity.status(HttpStatus.CONFLICT).build();
		}
		
	}
	
	@GetMapping(path="/{id}")
	public ResponseEntity<?> buscar(@PathVariable("id") int id){
		Usuarios encontrado = service.buscar(id);
		if(encontrado != null) {
			return ResponseEntity.ok(encontrado);
		}else {
			return ResponseEntity.ofNullable("No se encontraron registros");
		}
	}
	@PostMapping(path="/{id}")
	public ResponseEntity<?> eliminar(@PathVariable("id") int id){
		Usuarios encontrado = service.buscar(id);
		if(encontrado != null) {
			service.eliminar(id);
			return ResponseEntity.ok("Se eliminó correctamente");
		}else {
			return ResponseEntity.ofNullable("No se puede eliminar porque el registro no existe en la base de datps");
		}
	}
	
	@PutMapping
	public ResponseEntity<?> editar(@RequestBody Usuarios usuarios){
		Usuarios encontrado = service.buscar(usuarios.getId());
		if(encontrado !=  null) {
			service.editar(usuarios);
			return ResponseEntity.ok("El registro se editó correctamente");
		}else {
			return ResponseEntity.ofNullable("El registro no se puede eliminar porque no existe en la base de datos");
		}
	}

}
