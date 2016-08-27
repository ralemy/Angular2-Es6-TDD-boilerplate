/**
 * Created by ralemy on 8/26/16.
 * testing the app component
 */

import {
    TestBed,
    ComponentFixture,
    async
} from "@angular/core/testing";

import {provide} from "@angular/core";

import {AppComponent, Hero} from "./app.component";
import {AppModule} from "./app.module";

let fixture = null;
describe("App Component", function () {
    "use strict";

    beforeEach(()=> {
        TestBed.configureTestingModule({
            imports: [AppModule]
        });

        this.fixture = TestBed.createComponent(AppComponent);
    });

    it("Should have a title", async(()=> {
        this.fixture.whenStable().then(()=> {
            expect(this.fixture.componentInstance.title).toEqual("Tour of Heros");
        });
    }));

    it("Should have a hero", async(()=> {
        this.fixture.whenStable().then(()=> {
            expect(this.fixture.componentInstance.hero).toBeDefined();
        });
    }));

    it("Should have two child elements, h1 and h2, with the title and hero name", async(()=> {
        this.fixture.whenStable().then(()=> {
            const element = this.fixture.nativeElement,
                component = this.fixture.componentInstance;
            this.fixture.detectChanges();

            expect(element.children.length).toEqual(4,
                "Should have at least two children");
            expect(element.children[0].tagName).toEqual("H1",
                "First child should be H1 tag");
            expect(element.children[1].tagName).toEqual("H2",
                "Second child should be H2 tag");
            expect(element.children[0].textContent).toEqual(component.title,
                "First element should contain the title");
            expect(element.children[1].textContent).toMatch(new RegExp(`${component.hero.name}\\s*details!`),
                "Second element is the header for hero details");
            expect(element.children[2].textContent).toMatch(new RegExp(`id:\\s*${component.hero.id}`),
                "Third element should contain hero id");
            expect(element.children[3].textContent).toMatch(new RegExp(`name:\\s*${component.hero.name}`),
                "Fourth element should contain hero name");
        });
    }));
});

describe("Hero Class", function () {
    "use strict";
    it("Should have an id and a name", ()=> {
        const hero = new Hero(1,"someHero");
        expect(hero.id).toEqual(1, "hero id should be 1");
        expect(hero.name).toEqual("someHero","hero name should be someHero");
    });
});
