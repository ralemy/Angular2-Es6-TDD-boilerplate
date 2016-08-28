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
import {HeroDetail} from "./hero-detail.component";

describe("Hero Detail",function(){
    "use strict";
    beforeEach(()=> {
        TestBed.configureTestingModule({
            imports: [AppModule]
        });

        this.fixture = TestBed.createComponent(HeroDetail);
        this.fixture.detectChanges();
    });
    it("")
});
