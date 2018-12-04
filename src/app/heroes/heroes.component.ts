import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor() {
    console.log(this.hero);
  }

  ngOnInit() {
    // To perform complex initializations shortly after construction.
    // To set up the component after Angular sets the input properties.
  }

}
