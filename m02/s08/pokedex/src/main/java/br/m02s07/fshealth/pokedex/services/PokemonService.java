package br.m02s07.fshealth.pokedex.services;

import br.m02s07.fshealth.pokedex.repositories.PokemonRepository;
import org.springframework.stereotype.Service;

@Service
public class PokemonService {

    private final PokemonRepository repository;

    public PokemonService(PokemonRepository pokemonRepository){
        this.repository = pokemonRepository;
    }

    public void resgisterSeen(){
        repository.save(map);
    }
}
