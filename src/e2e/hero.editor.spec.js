/**
 * Created by ralemy on 8/26/16.
 * end to end testing for hero editor
 */

describe("Hero Editor",()=> {
    "use strict";
    it("Should be at /",() => {
        return browser.get("/").then(()=>browser.getTitle())
            .then((title)=>{
                expect(title).toEqual("this came from pug watched!");
            });
    })
});