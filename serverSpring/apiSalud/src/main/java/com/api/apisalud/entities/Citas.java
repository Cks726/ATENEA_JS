package com.api.apisalud.entities;

import com.api.apisalud.utils.Especialidad;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Citas {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Pacientes pacientes;

    @ManyToOne
    private Doctores doctores;

    private Especialidad especialidad;
}
