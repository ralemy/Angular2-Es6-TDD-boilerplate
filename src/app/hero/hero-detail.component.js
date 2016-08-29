/**
 * Created by ralemy on 8/27/16.
 * Hero Detail, Section 4 of Angular tutorial, in ES6
 */
import {Component, Input} from "@angular/core";
import template from "./hero-detail.component.pug";

@Component({
    selector: "my-hero-detail",
    template: template
})
export class HeroDetailComponent {
    @Input()
    hero = null;
}

