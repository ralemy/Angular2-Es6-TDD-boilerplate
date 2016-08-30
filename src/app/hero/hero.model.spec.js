/**
 * Created by ralemy on 8/28/16.
 * Testing Hero class
 */

import Hero from "./hero.model";

describe("Hero Class", function () {
    "use strict";
    it("Should have an id and a name", ()=> {
        const hero = new Hero(1, "someHero");
        expect(hero.id).toEqual(1, "hero id should be 1");
        expect(hero.name).toEqual("someHero", "hero name should be someHero");
    });
});
