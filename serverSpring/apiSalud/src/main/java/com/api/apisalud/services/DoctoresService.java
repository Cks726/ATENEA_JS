package com.api.apisalud.services;

import com.api.apisalud.dto.DtoDoctor;
import com.api.apisalud.dto.DtoDoctorAll;
import com.api.apisalud.entities.Doctores;
import com.api.apisalud.persistence.ImpleDoctorDao;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class DoctoresService {

    @Autowired
    ImpleDoctorDao impleDoctorDao;

    @Autowired
    ModelMapper modelMapper;

    //CREAR DOCTOR
    public void newDoctor (DtoDoctorAll dtoDoctorAll){
        Doctores doctor= modelMapper.map(dtoDoctorAll, Doctores.class);
        Optional<Doctores> existeDoctor = impleDoctorDao.findById(dtoDoctorAll.getCc());
        if(existeDoctor.isPresent()){
            throw new RuntimeException("no se puede guardar, doctor ya con este nombre ya se encuentra registrado");
        }
        impleDoctorDao.save(doctor);
    }


}
