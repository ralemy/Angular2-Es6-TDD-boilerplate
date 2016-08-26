/**
 * Created by ralemy on 8/26/16.
 * Unit test for Point Module
 */

import Point from "./Point";

describe("Point Object", ()=> {
    it("Should have a to String function that displays it as a tuple", ()=> {
        expect(new Point(2, 3).toString()).toEqual("(2, 3)");
    });
});
