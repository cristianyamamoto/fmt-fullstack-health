package br.m02s07.fshealth.pokedex.controllers;

import br.m02s07.fshealth.pokedex.dtos.PokemonCapturedRequest;
import br.m02s07.fshealth.pokedex.dtos.PokemonSeenRequest;
import br.m02s07.fshealth.pokedex.services.PokemonService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/pokemon")
public class PokemonController {

    private final PokemonService service;

    public PokemonController(PokemonService pokemonService){
        this.service = pokemonService;
    }

    @PostMapping("/seen")
    @ResponseStatus(HttpStatus.CREATED)
    public void registerSeen(@Valid @RequestBody PokemonSeenRequest pokemonSeenRequest){
        service.registerSeen(pokemonSeenRequest);

    }

    @PostMapping("/captured")
    @ResponseStatus(HttpStatus.CREATED)
    public void registerCaptured(@Valid @RequestBody PokemonCapturedRequest pokemonCapturedRequest){
        service.registerCaptured(pokemonCapturedRequest);
    }
}
