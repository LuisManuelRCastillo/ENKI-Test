package com.mx.Tareas.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mx.Tareas.Model.Tareas;

public interface ITareaRepository extends JpaRepository<Tareas, Integer> {

}
