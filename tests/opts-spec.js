/* tests/opts-spec.js v.1.0.2 */
var autoUpg = require('./../index.js'), 
		log_str = 'Opts test';

describe('Opts test', function(){
  
  describe('Validate empty call test', function(){
    
    it('Is opts values still false', function(){
      opts = autoUpg.validate_opts({}, log_str);
      expect(opts).toBe(false);
    });
  });
	
	describe('Bad opts.type validation test', function(){
    it('Is opts.type value still false', function(){
			opts = autoUpg.validate_opts({
				url: "noturl", 
				type: "notgit"
			}, log_str);
      expect(opts).toBe(false);
    });
	});
  
  describe('Bad opts.url validations tests', function(){
    //test a call with bad opts values
    it('Is opts.url value still false with noturl', function(){
			opts = autoUpg.validate_opts({
				url: "noturl", 
				type: "git"
			}, log_str);
      expect(opts).toBe(false);
    });
		
		it('Is opts.url value still false with http:', function(){
			opts = autoUpg.validate_opts({
				url: "http:", 
				type: "git"
			}, log_str);
      expect(opts).toBe(false);
    });
		
		it('Is opts.url value still false with http::', function(){
			opts = autoUpg.validate_opts({
				url: "http::", 
				type: "git"
			}, log_str);
      expect(opts).toBe(false);
    });
		
		it('Is opts.url value still false with http:www', function(){
			opts = autoUpg.validate_opts({
				url: "http:www", 
				type: "git"
			}, log_str);
      expect(opts).toBe(false);
    });
		
		it('Is opts.url value still false with http://', function(){
			opts = autoUpg.validate_opts({
				url: "http://", 
				type: "git"
			}, log_str);
      expect(opts).toBe(false);
    });
		
		it('Is opts.url value still false with http://martor.es for git type', function(){
			opts = autoUpg.validate_opts({
				url: "http://martor.es", 
				type: "git"
			}, log_str);
      expect(opts).toBe(false);
    });
  });
	
	describe('Bad opts.path validations tests', function(){
		it('Is opts.path value still false with ../ for git type', function(){
			opts = autoUpg.validate_opts({
				url: "https://github.com/manumartor/node_autoupg", 
				type: "git",
				path: "../"
			}, log_str);
      expect(opts).toBe(false);
    });
		
		it('Is opts.path value still false with / for git type', function(){
			opts_rs = autoUpg.validate_opts({
				url: "https://github.com/manumartor/node_autoupg", 
				type: "git",
				path: "/"
			}, 'Opts test');
      expect(opts_rs).toBe(false);
    });
	});
  
  describe('Correct opts values test', function(){
		var opts_ok = {
			url: "https://github.com/manumartor/node_autoupg", 
			type: "git",
			path: "./"
		};
		
		it('Is opts.type setted ok', function(){
			opts_rs = autoUpg.validate_opts(opts_ok, log_str);
			expect(opts_rs.type).toBeDefined();
			expect(opts_rs.type).not.toBe(false);
		});
		
		it('Is opts.url setted ok', function(){
			expect(opts_rs.url).toBeDefined();
			expect(opts_rs.url).not.toBe(false);
		});
		
		it('Is opts.path setted ok', function(){
			expect(opts_rs.path).toBeDefined();
			expect(opts_rs.path).not.toBe(false);
		});
	});
	
});