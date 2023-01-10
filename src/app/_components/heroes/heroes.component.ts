import { Component, OnInit } from "@angular/core";
import { Hero } from "@app/_models";
import { HeroService } from "@app/_services";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  // Az itt megadott metódusok a komponens 
  // betöltésekor automatikusan meghívódnak
  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}
