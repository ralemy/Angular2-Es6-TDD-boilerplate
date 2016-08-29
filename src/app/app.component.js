import {Component} from "@angular/core";
import template from "./app.component.pug";
import styles from "raw-loader!./app.component.css";
import {HeroService} from "./hero/hero.service";

@Component({
    selector: "my-app",
    template: template,
    styles: [styles],
    providers: [HeroService]
})
export class AppComponent {
    constructor(heroService: HeroService) {
        this.title = "Tour of Heros";
        this.selectedHero = null;
        this.heroPromise = heroService.getHeroes().then(heroes=> {
            this.heroes = heroes;
        });
    }

    onSelect(hero) {
        this.selectedHero = hero;
    }
}

