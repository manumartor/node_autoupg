/* tests/ini-spec.js v.1.0.2 */
var autoUpg = require('./../index.js');

describe("Initial load module test", function () {
  
  it("Is autoUpg loaded", function () {
    expect(autoUpg).toBeDefined();
  });
  
  it('Is autoUpg a object', function(){
    expect(typeof autoUpg).toBe('object');
  });
  
  it('Exists in autoUpg the run method', function(){
    expect(typeof autoUpg.run).toBe('function');
  });
});