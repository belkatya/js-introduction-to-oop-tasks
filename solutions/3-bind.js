// BEGIN
export default (obj, fn) => {
    return function(...args) {
      return fn.apply(obj, args);
    };
  };
// END