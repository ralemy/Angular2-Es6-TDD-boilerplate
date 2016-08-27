/**
 * Created by ralemy on 8/26/16.
 * end to end testing for hero editor
 */

describe("Hero Editor", ()=> {
    "use strict";

    beforeEach(()=>browser.get("/"));

    it("Should be at /", () =>
        browser.getTitle()
            .then((title)=> {
                expect(title).toEqual("this came from pug watched!");
            })
    );

    it("Should have a list of heroes", () =>
        expect(element.all(by.css("ul.heroes>li")).count()).toBe(10)
    );

    it("Should not have an input for hero's name before selecting a hero", ()=>
        expect(element(by.css("input.heroName")).isPresent()).toBeFalsy("Input element should be absent")
    );

    it("Should have an input for hero's name", ()=>
        element.all(by.css("ul.heroes>li")).get(5).click()
            .then(()=>
                expect(element(by.css("input.heroName")).isPresent()).toBeTruthy("Input element is not present")
            ));

    it("Should change title with changing of hero's name", ()=>
        element.all(by.css("ul.heroes>li")).get(5).click()
            .then(()=> {
                const input = element(by.css("input.heroName"));
                input.clear()
                    .then(()=> input.sendKeys("Some New Hero Name"))
                    .then(()=>element(by.css("h2")).getText())
                    .then((newName)=> expect(newName).toMatch(/^\s*Some New Hero Name/))
            }));

});