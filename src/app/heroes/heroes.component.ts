import { HEROES } from './../mock-heroes';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;
  selectedHero: Hero;

  constructor() {
  }

  ngOnInit() {
    // To perform complex initializations shortly after construction.
    // To set up the component after Angular sets the input properties.
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
