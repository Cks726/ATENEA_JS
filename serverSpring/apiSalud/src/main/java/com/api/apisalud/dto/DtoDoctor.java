package com.api.apisalud.dto;

import lombok.Data;

import java.io.Serializable;

@Data
public class DtoDoctor implements Serializable {
    private String name;

    private String lastName;


    private String consultorio;


    private String email;
}
