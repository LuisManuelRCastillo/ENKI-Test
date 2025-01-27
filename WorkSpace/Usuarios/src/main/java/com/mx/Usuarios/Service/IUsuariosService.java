package com.mx.Usuarios.Service;

import java.util.List;

import com.mx.Usuarios.Model.Usuarios;

public interface IUsuariosService {
	public List<Usuarios> listar();
	public Usuarios guardar(Usuarios usuarios);
	public void editar(Usuarios usuarios);
	public void eliminar(int id);
	public Usuarios buscar(int id);

}
