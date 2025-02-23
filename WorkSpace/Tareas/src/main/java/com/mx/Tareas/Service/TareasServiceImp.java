package com.mx.Tareas.Service;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mx.Tareas.Model.Tareas;
import com.mx.Tareas.Repository.ITareaRepository;
@Service
public class TareasServiceImp implements ITareaService {
	
	@Autowired
	private ITareaRepository dao;

	@Override
	public List<Tareas> listar() {
		// TODO Auto-generated method stub
		return dao.findAll();
	}

	@Override
	public Tareas guardar(Tareas tareas) {
		// TODO Auto-generated method stub
		return dao.save(tareas);
	}

	@Override
	public void editar(Tareas tareas) {
		// TODO Auto-generated method stub
		dao.save(tareas);
	}

	@Override
	public void eliminar(int id) {
		// TODO Auto-generated method stub
		dao.deleteById(id);
	}

	@Override
	public Tareas buscar(int id) {
		// TODO Auto-generated method stub
		return dao.findById(id).orElse(null);
	}

}
