import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() {
    }

  ngOnInit() {
    // To perform complex initializations shortly after construction.
    // To set up the component after Angular sets the input properties.
  }

}
