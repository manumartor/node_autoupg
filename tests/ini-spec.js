/* tests/ini-spec.js v.1.0.2 */

describe("Initial load module test", function () {
  var autoUpg = require('./../index.js');
  
  it("Is autoUpg loaded", function () {
    expect(autoUpg).toBeDefined();
  });
  
  it('Is autoUpg a object', function(){
    expect(typeof autoUpg).toBe('object');
  });
  
  it('In autoUpg exists start method', function(){
    expect(typeof autoUpg.start).toBe('function');
  });
});