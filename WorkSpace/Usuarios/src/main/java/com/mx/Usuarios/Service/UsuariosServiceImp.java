package com.mx.Usuarios.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mx.Usuarios.Model.Usuarios;
import com.mx.Usuarios.Repository.IUsuariosRepository;

@Service

public class UsuariosServiceImp implements IUsuariosService{
	@Autowired
	private IUsuariosRepository dao;
	

	@Override
	public List<Usuarios> listar() {
		// TODO Auto-generated method stub
		return dao.findAll();
	}

	@Override
	public Usuarios guardar(Usuarios usuarios) {
		// TODO Auto-generated method stub
		return dao.save(usuarios);
	}

	@Override
	public void editar(Usuarios usuarios) {
		// TODO Auto-generated method stub
		dao.save(usuarios);
	}

	@Override
	public void eliminar(int id) {
		// TODO Auto-generated method stub
		dao.deleteById(id);
	}

	@Override
	public Usuarios buscar(int id) {
		// TODO Auto-generated method stub
		return dao.findById(id).orElse(null);
	}

}
