"use strict";function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2}return Array.from(arr)}function hasWebpStar(){return regeneratorRuntime.wrap(function(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,hasWebp();case 2:return _context.next=4,removeWebp();case 4:case"end":return _context.stop()}},_marked,this)}var _marked=regeneratorRuntime.mark(hasWebpStar),lazyLoadInstance=new LazyLoad({elements_selector:".lazy"}),webpShow=!0,hasWebp=function(){webpShow=!!document.querySelector("html").classList.contains("webp")},removeWebp=function(){!0===webpShow?[].concat(_toConsumableArray(document.querySelectorAll(".nowebp"))).forEach(function(e){document.querySelector("body").removeChild(e)}):[].concat(_toConsumableArray(document.querySelectorAll(".haswebp"))).forEach(function(e){document.querySelector("body").removeChild(e)})},gen=hasWebpStar();gen.next(),gen.next();