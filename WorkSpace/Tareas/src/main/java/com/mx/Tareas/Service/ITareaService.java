package com.mx.Tareas.Service;

import java.util.List;

import com.mx.Tareas.Model.Tareas;

public interface ITareaService {
	public List<Tareas> listar();
	public Tareas guardar(Tareas tareas);
	public void editar(Tareas tareas);
	public void eliminar(int id);
	public Tareas buscar(int id);
	

}
