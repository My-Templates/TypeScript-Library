(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.sampleLibrary = factory());
})(this, (function () { 'use strict';

  function sampleLibrary() {
      return "Hello World!";
  }

  return sampleLibrary;

}));
//# sourceMappingURL=library.js.map
