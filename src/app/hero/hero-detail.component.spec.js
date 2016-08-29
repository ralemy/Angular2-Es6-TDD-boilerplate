/**
 * Created by ralemy on 8/27/16.
 * Testing Hero detail, Angular 2 tutorial, section 4
 */

import {
    TestBed,
    ComponentFixture,
    async
} from "@angular/core/testing";

import {AppModule} from "../app.module";
import {HeroDetailComponent} from "./hero-detail.component";


describe("Hero Detail", function () {
    "use strict";
    beforeEach(()=> {
        TestBed.configureTestingModule({
            imports: [AppModule]
        });

        this.fixture = TestBed.createComponent(HeroDetailComponent);
        this.fixture.detectChanges();
    });

    it("Should be a component", async(()=>
        this.fixture.whenStable().then(()=> {
            expect(this.fixture.componentInstance).toBeDefined();
        })));

    it("Should have the detail template", async(() =>
        this.fixture.whenStable().then(()=> {
            expect(this.fixture.nativeElement.children.length).toEqual(0);
        })));

    it("Should have a hero property", async(()=>
        this.fixture.whenStable().then(()=> {
            expect(this.fixture.componentInstance.hero).toBeDefined();
        })))
});
