package br.senai.lab365.doctor_registration.mappers;

import br.senai.lab365.doctor_registration.dtos.DoctorRequest;
import br.senai.lab365.doctor_registration.models.DoctorModel;

public class DoctorMapper {
    private DoctorMapper(){}

    public static DoctorModel map(DoctorRequest request){
        if (request == null) return null;
        DoctorModel target = new DoctorModel();
        target.setNome(request.getNome());
        target.setCrm(request.getCrm());
        target.setDataNascimento(request.getDataNascimento());
        target.setTelefone(request.getTelefone());
        target.setEspecialidade(request.getEspecialidade());
        return target;
    }

    public static DoctorModel updateMap(DoctorRequest request, DoctorModel doctor){
        if (request == null) return null;
        doctor.setNome(request.getNome());
        doctor.setCrm(request.getCrm());
        doctor.setDataNascimento(request.getDataNascimento());
        doctor.setTelefone(request.getTelefone());
        doctor.setEspecialidade(request.getEspecialidade());
        return doctor;
    }
}
