package com.api.apisalud.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

import java.util.Date;

@Data
@Entity
public class Pacientes {
    @Id
    @Column(name = "cc")
    private long cc;
    @Column(name = "name")
    private String name;
    @Column(name = "lastname")
    private String lastName;

    @Column(name = "date")
    private Date date;

    @Column(name = "phone")
    private String phone;

}
