package com.mx.Usuarios.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table
@Data

public class Usuarios {

	@Id
	private int id;
	private String nombre;
	private String correo;
	private String mensaje;
}
