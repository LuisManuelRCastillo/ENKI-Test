package com.mx.Producto.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table
@Data

public class Producto {
	@Id
	private int id;
	private String nombre;
	private double precio;
	

}
