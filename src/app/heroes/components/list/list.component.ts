import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames = ['Batman', 'Superman', 'Spiderman', 'Ironman', 'Hulk'];
  public deleteHero?: string;

  removeLastHero() {
    this.deleteHero = this.heroNames.pop();
    console.log(this.deleteHero);
  }

}
