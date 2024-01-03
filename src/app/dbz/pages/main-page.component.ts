import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  constructor(private dbzService: DbzService) {
  }

  get characters() {
    return this.dbzService.characters;
  }

  onDeleteCharacterById($event: string) {
    this.dbzService.onDeleteCharacterById($event);
  }

  onNewCharacter($event: Character) {
    this.dbzService.onNewCharacter($event);
  }
}
