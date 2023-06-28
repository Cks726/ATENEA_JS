package com.api.apisalud.dto;

import com.api.apisalud.utils.Especialidad;
import jakarta.persistence.Column;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import lombok.Data;

import java.io.Serializable;

@Data
public class DtoDoctorAll implements Serializable{

    private long cc;

    private String name;

    private String lastName;


    private String consultorio;


    private String email;


    private Especialidad especialidad;
}
