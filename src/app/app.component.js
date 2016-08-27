import {Component} from "@angular/core";
import template from "./app.component.pug";
import styles from "raw-loader!./app.component.css";

const Heroes = [
    {id: 11, name: "Mr. Nice"},
    {id: 12, name: "Narco"},
    {id: 13, name: "Bombasto"},
    {id: 14, name: "Celeritas"},
    {id: 15, name: "Magneta"},
    {id: 16, name: "RubberMan"},
    {id: 17, name: "Dynama"},
    {id: 18, name: "Dr IQ"},
    {id: 19, name: "Magma"},
    {id: 20, name: "Tornado"}
];

export class Hero {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

@Component({
    selector: "my-app",
    template: template,
    styles: [styles]

})
export class AppComponent {
    constructor() {
        this.title = "Tour of Heros";
        this.hero = new Hero(1, "Windstrom");
        this.heroes = this.initHeroes(Heroes);
    }

    initHeroes(heroes) {
        return heroes.map((h)=> new Hero(h.id, h.name));
    }
}

