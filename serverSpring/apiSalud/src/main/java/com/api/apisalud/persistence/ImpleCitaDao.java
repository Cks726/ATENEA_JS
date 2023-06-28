package com.api.apisalud.persistence;

import com.api.apisalud.entities.Citas;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImpleCitaDao extends JpaRepository <Citas, Long>{
}
