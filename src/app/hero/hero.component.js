import {Component, OnInit} from "@angular/core";
import template from "./hero.component.pug";
import styles from "raw-loader!./hero.component.css";
import {HeroService} from "./hero.service";

@Component({
    selector: "my-heroes",
    template: template,
    styles: [styles],
    providers: [HeroService]
})
export class HeroComponent implements OnInit {
    constructor(heroService: HeroService) {
        this.title = "Tour of Heros";
        this.selectedHero = null;
        this.heroService = heroService;
    }

    onSelect(hero) {
        this.selectedHero = hero;
    }

    ngOnInit() {
        this.heroPromise = this.heroService.getHeroes().then(heroes=> {
            this.heroes = heroes;
        });
    }
}
