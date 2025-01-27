package com.mx.Producto.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mx.Producto.Model.Producto;
import com.mx.Producto.Repository.IProductoRepository;

@Service
public class ProductoServiceImp implements IProductoService{
	@Autowired
	private IProductoRepository dao;

	@Override
	public List<Producto> listar() {
		// TODO Auto-generated method stub
		return dao.findAll();
	}

	@Override
	public Producto guardar(Producto producto) {
		// TODO Auto-generated method stub
		return dao.save(producto);
	}

	@Override
	public void editar(Producto producto) {
		// TODO Auto-generated method stub
		dao.save(producto);
	}

	@Override
	public void eliminar(int id) {
		// TODO Auto-generated method stub
		dao.deleteById(id);
	}

	@Override
	public Producto buscar(int id) {
		// TODO Auto-generated method stub
		return dao.findById(id).orElse(null);
	}

}
