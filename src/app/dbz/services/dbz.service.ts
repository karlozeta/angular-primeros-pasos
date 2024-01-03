import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from "uuid";

@Injectable({providedIn: 'root'})
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 15000,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500,
    },
    {
      id: uuid(),
      name: 'Trunks',
      power: 15000,
    },
  ];

  onNewCharacter(character: Character) {
    const newChracater: Character = {id: uuid(), ...character};
    this.characters.push(newChracater);
  }

  onDeleteCharacterById(id: string) {
    console.log('MainPage', id);
    this.characters = this.characters.filter(character => character.id !== id)
    console.log(this.characters);
  }

}
