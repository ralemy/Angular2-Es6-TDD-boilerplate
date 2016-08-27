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
        this.fixture.detectChanges();
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

            expect(element.children.length).toEqual(6,
                "Should have at least two children");
            expect(element.children[0].tagName).toEqual("H1",
                "First child should be H1 tag");
            expect(element.children[3].tagName).toEqual("H2",
                "Fourth child should be H2 tag");
            expect(element.children[0].textContent).toEqual(component.title,
                "First element should contain the title");
            expect(element.children[3].textContent).toMatch(new RegExp(`${component.hero.name}\\s*details!`),
                "Fourth element is the header for hero details");
            expect(element.children[4].textContent).toMatch(new RegExp(`id:\\s*${component.hero.id}`),
                "Fifth element should contain hero id");
        });
    }));

    it("Should have an input to change the Hero's name", async(()=> {
        this.fixture.whenStable().then(()=> {
            this.nameInput = this.fixture.nativeElement.querySelector("input#heroName");
            expect(this.nameInput).toBeTruthy(
                "There should be an input element for hero's name");
            expect(this.nameInput.value).toEqual(this.fixture.componentInstance.hero.name,
                "The input element value should be the hero's name");
        });
    }));

    it("Should have an array of heros", async(()=>
        this.fixture.whenStable().then(()=> {
            const cmp = this.fixture.componentInstance;
            expect(cmp.heroes).toBeDefined("component should have a list of heroes");
            expect(cmp.heroes.length).toEqual(10, "heroes list should have 10 members");
            cmp.heroes.map((h, i)=> {
                expect(h instanceof Hero).toBeTruthy(`member ${i} is not a Hero instance. ${h}`)
            });
        })));

    it("Should have one list item per hero", async(()=>
        this.fixture.whenStable().then(()=> {
            const ul = this.fixture.nativeElement.querySelector("ul.heroes");
            const li = Array.prototype.slice.call(
                this.fixture.nativeElement.querySelectorAll("ul.heroes>li"));
            const cmp = this.fixture.componentInstance;
            expect(ul).toBeTruthy("There should be an unnumbered list for heroes");
            expect(li.length).toEqual(cmp.heroes.length, "there should be one li for each hero");
            li.forEach((li, i)=> {
                expect(li.querySelector("span.badge"))
                    .toBeTruthy(`hero ${i} has to have a span for id`);
                expect(li.querySelector("span.badge").textContent.trim())
                    .toEqual(cmp.heroes[i].id.toString(), `hero ${i} had wrong id displayed`);
                expect(li.textContent)
                    .toMatch(cmp.heroes[i].name, `hero ${i} has wrong name displayed`);
            });
        })));

    it("should have correct styling of hero items", async(()=>
        this.fixture.whenStable().then(()=> {
            const hero = this.fixture.nativeElement.querySelector("ul.heroes>li");
            const win = hero.ownerDocument.defaultView ||hero.ownerDocument.parentWindow;
            const styles = win.getComputedStyle(hero);
            expect(styles["cursor"]).toEqual("pointer", "cursor should be pointer on hero");
            expect(styles["borderRadius"]).toEqual("4px", "borderRadius should be 4px");
        })));

    it("should have a click handler for hero items",async(()=>
        this.fixture.whenStable().then(()=>{
            const cmp = this.fixture.componentInstance;
            expect(cmp.onSelect).toBeDefined("should have a click handler for heros");
            spyOn(cmp,"onSelect").and.callThrough();
            this.fixture.nativeElement.querySelectorAll("ul.heroes li")[5].click();
            expect(cmp.onSelect).toHaveBeenCalledWith(cmp.heroes[5]);
            expect(cmp.hero).toEqual(cmp.heroes[5], "click on hero should change hero");
            this.fixture.detectChanges();
            return this.fixture.whenStable();
        }).then(()=>{
            expect(this.fixture.nativeElement.querySelector("h2").textContent)
                .toMatch(this.fixture.componentInstance.heroes[5].name,
                "changing hero should change the detail section");
        })
    ));


});

describe("Hero Class", function () {
    "use strict";
    it("Should have an id and a name", ()=> {
        const hero = new Hero(1, "someHero");
        expect(hero.id).toEqual(1, "hero id should be 1");
        expect(hero.name).toEqual("someHero", "hero name should be someHero");
    });
});
