import should from 'should';
import fs from 'fs';

const jsdom = require("jsdom");
const myLibrary = fs.readFileSync(require.resolve("../src/script.js"), { encoding: "utf-8" });
var window;

describe('some test suite', function(){
  beforeEach(() => {
    const document = jsdom.jsdom();
    window = document.defaultView;

    const scriptEl = document.createElement("script");
    scriptEl.textContent = myLibrary;
    document.body.appendChild(scriptEl);
  });
  it('should fail', function(done){
    should.equal(2, 1);
    done();
  });
  it("should do the right thing", () => {
    let calculator = new window.Calculator();
    console.log(`CALCULATOR====> ${window.Calculator}`)
    should.exist(calculator);
  });
  it('should return the correct global from the source', function(done){
    console.log(`SOME DATA====> ${window.someData}`);
    should.equal(window.someData, 1);
    done();
  });
});
