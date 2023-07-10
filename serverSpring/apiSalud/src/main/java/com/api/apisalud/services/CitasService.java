package com.api.apisalud.services;

import com.api.apisalud.dto.DtoCitaEspecialidad;
import com.api.apisalud.entities.Citas;
import com.api.apisalud.entities.Doctores;
import com.api.apisalud.persistence.ImpleCitaDao;
import com.api.apisalud.persistence.ImpleDoctorDao;
import com.api.apisalud.persistence.ImplePacienteDao;
import com.api.apisalud.utils.Especialidad;
import jakarta.persistence.EntityNotFoundException;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;


import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CitasService {

    @Autowired
    ImpleDoctorDao impleDoctorDao;

    @Autowired
    ImplePacienteDao implePacienteDao;

    @Autowired
    ImpleCitaDao impleCitaDao;

    @Autowired
    ModelMapper modelMapper;

    //CREAR CITAS POR EL NOMBRE DEL DOCTOR
    public void crearCita(Citas citas) {
        Optional<Doctores> optionalDoctor = impleDoctorDao.findById(citas.getDoctores().getCc());
        Doctores doctor = optionalDoctor.orElseThrow(() -> new EntityNotFoundException("Doctor no encontrado"));
        citas.setDoctores(doctor);
        impleCitaDao.save(citas);
    }

    //CONSULTAR CITAS POR ESPECIALIDAD
    public List<DtoCitaEspecialidad> getCitasByEspecialidad(String nombreEspecialidad) {
        Especialidad especialidad = Especialidad.valueOf(nombreEspecialidad.toUpperCase());
        List<Citas> citas = impleCitaDao.findByEspecialidad(especialidad);
        List<DtoCitaEspecialidad> dtoCitaEspecialidad = citas.stream()
                .map(cita -> modelMapper.map(cita, DtoCitaEspecialidad.class))
                .collect(Collectors.toList());

        return dtoCitaEspecialidad;
    }



}
