// BEGIN
export default (collection, callback) => {
    collection.forEach(item => {
      callback.call(item);
    });
  };
// END
