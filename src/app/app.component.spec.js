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
            expect(this.fixture.componentInstance.hero).toEqual("Windstorm");
        });
    }));


});
