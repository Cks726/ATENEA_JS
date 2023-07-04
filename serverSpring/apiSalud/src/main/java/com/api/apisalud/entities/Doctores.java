package com.api.apisalud.entities;

import com.api.apisalud.utils.Especialidad;
import jakarta.persistence.*;
import lombok.Data;
@Data
@Entity
public class Doctores{
    @Id
    @Column(name = "cc")
    private long cc;
    @Column(name = "name")
    private String name;
    @Column(name = "lastname")
    private String lastName;

    @Column(name = "consultorio")
    private String consultorio;

    @Column(name = "email")
    private String email;

    @Enumerated(EnumType.STRING)
    private Especialidad especialidad;

}
