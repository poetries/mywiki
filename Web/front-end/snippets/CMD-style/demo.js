"use strict";
// 支持 CMD 规范的模块
!(function(global, factory) {
  if (typeof module === 'object' && module.exports === 'object') {
    module.exports = factory(require('jQuery'));
  } else {
    var exports = factory(window.jQuery);
    for (var key in exports) {
      global[key] = exports[key];
    }
  }
})(window ? window : this, function($) {
  var defaultParams = {
    name: 'Joel',
    job: 'FE Develop'
  }
  var greetFn = function(params) {
    console.log('I\'m %s. My Job is %s!', (params && params.name)  || defaultParams.name, (params && params.job) || defaultParams.job);
  };
  return {
    greetFn: greetFn
  }
});
