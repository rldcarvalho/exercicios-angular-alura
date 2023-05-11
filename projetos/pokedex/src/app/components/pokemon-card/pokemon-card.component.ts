import { Component, Input } from '@angular/core';
import { Pokemon, getPokemonImage, getPokemonNumber } from 'src/model/Interfaces/pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass']
})
export class PokemonCardComponent {
  @Input()
  public pokemon!: Pokemon;

  getPokemonNumber = getPokemonNumber;
  getPokemonImage = getPokemonImage;
}
