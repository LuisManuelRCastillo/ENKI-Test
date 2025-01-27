package com.mx.Producto.Service;

import java.util.List;

import com.mx.Producto.Model.Producto;

public interface IProductoService {
	public List<Producto> listar();
	public Producto guardar(Producto producto);
	public void editar(Producto producto);
	public void eliminar(int id);
	public Producto buscar(int id);
	
	

}
