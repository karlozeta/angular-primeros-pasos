import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  get capaitalizedName() {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeNameHero(): void {
    this.name = 'Spiderman';
  }

  changeAge(): void {
    this.age = 30;
  }
  resetForm() {
    this.name = 'ironman';
    this.age = 45;
  }
}
