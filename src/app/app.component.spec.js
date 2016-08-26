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

import {AppComponent} from "./app.component";
import {AppModule} from "./app.module";

let fixture = null;
describe("App Component", function () {
//    "use strict";

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
            expect(this.fixture.componentInstance.hero).toEqual("Windstrom");
        });
    }));

    it("Should have two child elements, h1 and h2, with the title and hero name", async(()=> {
        this.fixture.whenStable().then(()=> {
            const element = this.fixture.nativeElement,
                component = this.fixture.componentInstance;
            this.fixture.detectChanges();

            expect(element.children.length).toEqual(2,
                "Should have two children");
            expect(element.children[0].tagName).toEqual("H1",
                "First child should be H1 tag");
            expect(element.children[1].tagName).toEqual("H2",
                "Second child should be H2 tag");
            expect(element.children[0].textContent).toEqual(component.title,
                "First element should contain the title");
            expect(element.children[1].textContent).toMatch(new RegExp(`^\\s*${component.hero}`),
                "Second element should start with hero's name");
        });
    }));
});
