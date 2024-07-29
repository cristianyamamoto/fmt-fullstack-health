package br.senai.lab365.doctor_registration.exceptions;

import br.senai.lab365.doctor_registration.dtos.ErrorResponse;
import com.fasterxml.jackson.databind.exc.InvalidFormatException;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;


@RestControllerAdvice
public class ErrorHandler {

    @ExceptionHandler(EntityNotFoundException.class)
    public ResponseEntity<Void> handleNotFound(){
        return ResponseEntity.notFound().build();
    }

    @ExceptionHandler(InvalidFormatException.class)
    public ResponseEntity<ErrorResponse> handleInvalidFormat(InvalidFormatException exception){
        ErrorResponse error = new ErrorResponse();
        error.setField(exception.getPath().getFirst().getFieldName());
        error.setMessage(exception.getMessage());
        return ResponseEntity.badRequest().body(error);
    }

    @ExceptionHandler(DuplicateKeyException.class)
    public ResponseEntity<ErrorResponse> handleUniqueCRM(DuplicateKeyException exception){
        ErrorResponse error = new ErrorResponse();
        error.setField("crm");
        error.setMessage(exception.getMessage());
        return ResponseEntity.badRequest().body(error);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorResponse> handleArgumentNotValid(MethodArgumentNotValidException exception){
        ErrorResponse error = new ErrorResponse();
        if(exception.getBindingResult().getFieldError() != null){
            error.setField(exception.getBindingResult().getFieldError().getField());
        }
        error.setMessage(exception.getMessage());
        return ResponseEntity.badRequest().body(error);
    }

}
