/**
 * Created by ralemy on 8/28/16.
 * Service for Heros, Section 5 of tutorial
 */

import {Injectable} from "@angular/core";
import Hero from "./hero.model";
import {Heroes} from "./mock-data";

@Injectable()
export class HeroService {
    getHeroes() {
        return Promise.resolve(this.fromJson(Heroes));
    }

    fromJson(jsonArray) {
        return jsonArray.map ? jsonArray.map(m=> new Hero(m.id, m.name)) : [];
    }
}
