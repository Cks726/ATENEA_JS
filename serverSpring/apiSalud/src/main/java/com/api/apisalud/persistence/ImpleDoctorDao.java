package com.api.apisalud.persistence;

import com.api.apisalud.entities.Doctores;
import org.springframework.data.jpa.repository.JpaRepository;




public interface ImpleDoctorDao extends JpaRepository<Doctores, Long>{
}
