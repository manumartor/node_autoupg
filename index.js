/* index.js v.1.0.2 */

module.exports = function(opts){
  /**
   *	Autoupg is a nodejs module to upgrade de source code of others nodejs modules
   *
   * @exports    autoUpg
   * @version    v.1.0.2
   * @author     Manu Martor <manu.martor@gmail.com>
   * @license    Apache-2.0
   * @requires   autoUpg/utils
   * @repository https://github.com/manumartor/node_autoupg.git
   * @website    https://www.npmjs.com/package/node_autoupg
   */
  var that = {};
  
  /** 
   * JSON parsed object with the values of the autoUpg package.json
   *
   * @private
   * @memberof module:autoUpg 
   * @type     {Object}
   */
  var pkg = require('./package.json'); //var privateStaticVar = 'blablabla';
  
  /*
   * Load module:autoUpg/utils and other global static functions
   */
  require('./lib/commons.js'),
  opts = opts || {};

  /**
   * The options values to use when call the run method
   * 
   * @public
   * @type {Object}
   * @property {Object} opts - The opts object
   * @property {Boolean|String} opts.url - String with the url of the repository where search in for new releases. 
   * @property {Boolean|String} opts.type - String with the repository type. Only available: [git]
   * @property {Boolean|String} opts.path - String with the relative path to the source code to upgrade. Default: ./
   * @property {Function} opts.onBeforeRun - Actions that must be executed after de common task and before to executed the upgrade
   **/
  that.opts =  {
    url: false,
    type: false,
    path: false
  };

  /**
   * Run
   *
   * Use {@link autoUpg#validate_opts} to validate de options.
   *
   * @public
   * @requires autoUpg.validate_opts
   * @requires autoUpg.onBeforeRun
   * @requires autoUpg.onAfterRun
   * @param {Object} opts - The configurations options which run the upgrade
   **/
  that.run = function(opts) {
    console.log('=======================================================================================================');
    console.log(pkg.name + ' v.' + pkg.version);
    console.log('---------------------');
    console.log('Initializating nodejs auto upgrader');

    //prepare opts
    var log_str = 'Set opts';
    opts = opts || that.opts;
    that.opts = that.validate_opts(opts, log_str);
    if (!that.opts)
      return false;
    console.logpts('Set opts');

    //execute onBeforeRunMethod
    opts.onBeforeRun = opts.onBeforeRun || null;
    that.onBeforeRun(opts.onBeforeRun, function(){

    });

    console.log('');
    console.log('=======================================================================================================');
  };

  /**
   * Validate opts
   *
   * @param {Object} opts    The configuration options to validate.
   * @param {String} log_str The string text to show in log.
   * @return {Object|Boolean} False if validations fail. Or opts object if all ok.
   **/
  that.validate_opts =  function(opts, log_str){

    //1. validate that opts param exits
    if (typeof opts == 'undefined'){
      return throw_error(log_str, 'Error: opts param is null');
    }

    //2. validate opts.type
    var type_availables = ['git'];
    if (typeof opts.type == 'undefined' || type_availables.indexOf(opts.type) == -1){
      return throw_error(log_str, 'Error: opts.type invalid value');
    }

    //3. validate opt.url in fact of type
    if (typeof opts.url == 'undefined' || !opts.url.match(/(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/)){
      return throw_error(log_str, 'Error: opts.url invalid value');
    }

    if (opts.type == 'git' && opts.url.substr((opts.url.length - 4)) !== '.git' && opts.url.substr(0, 19) !== 'https://github.com/'){
      return throw_error(log_str, 'Error: opts.url for git type invalid value -->' + opts.url);
    }

    //4. validate opt.path
    opts.path = opts.path || './';
    if (opts.path.substr(0, 2) != './'){
      return throw_error(log_str, 'Error: opts.path invalid value');
    }

    //5. check that all the validations are passed
    if (!opts.url || !opts.type || !opts.path){
      return throw_error(log_str, 'Error: opts validations problem');
    }

    return opts;
  };

  /**
   * OnBeforeRun
   **/
  that.onBeforeRun = function(hook, callBack){
    //do a backup of the source code


    //call hook and callback
    callBack = typeof callBack == 'function'? callBack: function(){};
    if (typeof hook == 'function')
      hook(callBack);
    else 
      callBack();
  };

  /**
   * OnAfterRun
   **/
  that.onAfterRun = function(hook, callBack){



    //call hook and callback
    callBack = typeof callBack == 'function'? callBack: function(){};
    if (typeof hook == 'function')
      hook(callBack);
    else 
      callBack();
  };

  /**
   * OnErrorRun
   **/
  that.onErrorRun = function(hook, callBack){


    //call hook and callback
    callBack = typeof callBack == 'function'? callBack: function(){};
    if (typeof hook == 'function')
      hook(callBack);
    else 
      callBack();
  };
  
  return /** @alias module:autoUpg */ that;
}();