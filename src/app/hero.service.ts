import { MessageService } from './message.service';
import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';

// A provider is something that can create or deliver a service;
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  // The HeroService could get hero data from anywhere—a web service, local storage, or a mock data source.

  constructor(private messageService: MessageService) { }

  // HeroService.getHeroes() must have an asynchronous signature of some kind.
  // It can take a callback. It could return a Promise. It could return an Observable.
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

}