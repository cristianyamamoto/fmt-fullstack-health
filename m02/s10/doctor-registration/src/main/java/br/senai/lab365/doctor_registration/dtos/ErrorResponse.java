package br.senai.lab365.doctor_registration.dtos;

import org.springframework.validation.FieldError;

public class ErrorResponse {
    private String field;
    private String message;

    public ErrorResponse() {}

    public ErrorResponse(FieldError fieldError) {
        this.field = fieldError.getField();
        this.message = fieldError.getDefaultMessage();
    }

    public String getField() {
        return field;
    }

    public void setField(String field) {
        this.field = field;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
