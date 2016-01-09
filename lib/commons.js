/* lib/commons.js v.1.0.2 */

/**
 * AutoUpg utils module
 *
 * @module autoUpg/utils
 */

// initialize vars
s = {error: 'error', done: 'done'};


// personalize throw error
throw_error = function (str, err){
	console.errorpts(str + ' ' + err);
	console.logpts(str, s.error); 
	return false;
};


// personalized console methods
console.logpts = function(str, rst) {
  if (str == null || str === ''){
    throw 'Error in console.logpts: empty input str param';
  }
  
  var pts = 70,
      ptsleft = (pts - str.length);
   str = '   ' + str + ' ...',
   rst = rst || s.done;
  
  if (ptsleft > 0){
    for (var i = 0; i < ptsleft; i++){
      str += '.';
    }
  }{}
  
  console.log(str + ' ' + rst);
};
console.errorpts = function (str){
  console.error('   ' + str);
};