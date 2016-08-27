import {Component} from "@angular/core";
import template from "./app.component.pug";


export class Hero {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

@Component({
    selector: "my-app",
    template: template
})
export class AppComponent {
    constructor() {
        this.title = "Tour of Heros";
        this.hero = new Hero(1, "Windstrom");
    }
}

