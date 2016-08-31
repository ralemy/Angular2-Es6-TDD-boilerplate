/**
 * Created by ralemy on 8/30/16.
 * Main app component
 */

import {Component} from "@angular/core";

@Component({
    selector: "my-app",
    template: `
        <h1>{{title}}</h1>
        <my-heroes></my-heroes>
`
})
export class AppComponent {
    constructor() {
        this.title = "Tour of Heroes";
    }
}
