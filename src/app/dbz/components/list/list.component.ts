import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunk',
      power: 15000,
    },
    {
      name: 'Krilin',
      power: 15000,
    },
  ];

  @Output()
  onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacterById(id?: string) {
    if (!id) {
      return;
    }
    console.log('Delete character', {id});
    this.onDelete.emit(id);
  }
}
