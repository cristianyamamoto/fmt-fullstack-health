package br.senai.lab365.doctor_registration.repositories;

import br.senai.lab365.doctor_registration.models.DoctorModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DoctorRepository extends JpaRepository<DoctorModel, Long> {

}
