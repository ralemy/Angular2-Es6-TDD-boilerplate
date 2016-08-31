/**
 * Created by ralemy on 8/30/16.
 * testing app wrapper
 */

import {
    TestBed,
    ComponentFixture,
    async
} from "@angular/core/testing";

import {AppComponent} from "./app.component";
import {AppModule} from "./app.module";

describe("App Component", function(){
    "use strict";
    beforeEach(()=> {
        TestBed.configureTestingModule({
            imports: [AppModule]
        });

        this.fixture = TestBed.createComponent(AppComponent);
        this.fixture.detectChanges();
        return this.fixture.whenStable();
    });

    it("Should have a title on the component that is the same as template",async(()=> {
        expect(this.fixture.componentInstance.title)
            .toEqual("Tour of Heroes", "Title should be Tour of Heroes");
        expect(this.fixture.nativeElement.querySelector("h1").textContent)
            .toEqual(this.fixture.componentInstance.title, "Title should be reflected in template");
    }));

    it("Should include Heros component", async(()=>{
        expect(this.fixture.nativeElement.querySelector("ul.heroes")).toBeTruthy();
    }));

});
