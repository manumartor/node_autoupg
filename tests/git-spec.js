/* test/git-spec.js v.1.0.2 */

var autoUpg = require('./../index.js');

xdescribe('Git upgrade test', function(){
	
	describe('Opts test', function(){
    //test a correct git call
		
		it('Is url opts setted ok with url end in .git', function(){
			autoUpg.run({
				url: "http://martor.es/node_autoupg/node_autoupg.git", 
				type: "git"
			});
			expect(autoUpg.opts.url).not.toBe(false);
    });
		
		it('Is url opts setted ok with url that start with https://github.com/', function(){
			autoUpg.run({
				url: "https://github.com/manumartor/node_autoupg", 
				type: "git"
			});
			expect(autoUpg.opts.url).not.toBe(false);
    });	  
	});
	
	
	
});