import { Component } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from 'src/model/Interfaces/pokemon';
import { Type } from 'src/model/enums/type';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass']
})
export class PokemonListComponent {
  //     image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',


  constructor(
    public pokemonService: PokemonService
  ){}
}
