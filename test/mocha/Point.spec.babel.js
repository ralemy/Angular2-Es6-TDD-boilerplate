/**
 * Created by ralemy on 8/23/16.
 * Unit testing Point class
 */

import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import Point from "../../src/es6/Point";

chai.use(chaiAsPromised);
const expect = chai.expect,
    assert = chai.assert;

describe("The Point Class",  ()=>{
    it("Should have a toString representation",()=>{
        var point = new Point(2,4);
        expect(point.toString()).to.equal("(2, 4)");
    });
});
