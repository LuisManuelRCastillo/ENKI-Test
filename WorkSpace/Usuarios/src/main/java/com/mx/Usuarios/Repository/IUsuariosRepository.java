package com.mx.Usuarios.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mx.Usuarios.Model.Usuarios;

@Repository

public interface IUsuariosRepository extends JpaRepository<Usuarios, Integer>{

}
