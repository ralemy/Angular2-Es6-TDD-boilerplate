/**
 * Created by ralemy on 8/28/16.
 * Testing Hero service, Section 5 of Angular 2 tutorial.
 */

import {Inject, Injectable, ReflectiveInjector} from "@angular/core";

import {HeroService} from "./hero.service";
import {Heroes} from "./mock-data";
import Hero from "./hero";

class UsefulService {
    constructor(){
        this.somevalue = "service1";
    }
}

class NeedsService {
    constructor(@Inject("UsefulService") service){this.service = service;}
}


describe("Hero Service", function () {
    "use strict";

    it("Should be able to see if a class is Injectable", () =>{
        var injector = ReflectiveInjector.resolveAndCreate([{provide:"UsefulService", useClass:UsefulService},NeedsService]);
        console.log("needs ", injector.get(NeedsService).service.somevalue);
    });

    it("Should be an Injectable class with method getHeroes", ()=> {
        const service = new HeroService();
        console.log(service.toString());
        console.log(HeroService.toString());
        expect(service.getHeroes).toBeDefined();
    });

    it("Should have a source of mocks for Heroes", ()=> {
        expect(Heroes.length).toEqual(10, "It should have 10 mocked heroes");
        Heroes.forEach((h, i)=> {
            expect(h.id).toBeDefined(`object should have an Id, ${h} at ${i}`);
            expect(h.name).toBeDefined(`object should have a name, ${h} at ${i}`);
            expect(h.name.toString().trim().length).toBeGreaterThan(0, "object name should be non empty string");
        });
    });

    it("Should have a method for mapping an array of Json objects to an array of Heroes", () => {
        const service = new HeroService();
        expect(service.fromJson)
            .toBeDefined("It should have a function for mapping");
        const HeroObjects = service.fromJson(Heroes);
        expect(HeroObjects.length)
            .toEqual(Heroes.length, "Map should return the same number of objects");
        HeroObjects.forEach((h, i)=> {
            expect(h instanceof Hero)
                .toBeTruthy(`Hero ${h} at ${i} is not an instance of Hero class`);
        });
    });

    it("Should return the Heroes array in a promise from the getHeroes method", ()=> {
        const service = new HeroService();
        const heroes = service.getHeroes();
        expect(heroes instanceof Promise).toBeTruthy("get heroes should return a promise");
        return heroes.then((heroObjects)=> {
            heroObjects.forEach((h, i)=> {
                expect(h instanceof Hero)
                    .toBeTruthy(`Hero ${h} at ${i} is not an instance of Hero class`);
            });
        });
    });

});