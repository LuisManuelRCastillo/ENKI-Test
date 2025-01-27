package com.mx.Tareas.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table
@Data

public class Tareas {

	@Id
	private int id;
	private String descripcion;
	private int status;
}
