/*jshint eqnull:true, expr:true*/

var _ = { };

(function() {

  /**
   * COLLECTIONS
   * ===========
   *
   * In this section, we'll have a look at functions that operate on collections
   * of values; in JavaScript, a 'collection' is something that can contain a
   * number of values--either an array or an object.
   */

  // Return an array of the first n elements of an array. If n is undefined,
  // return just the first element.
  _.first = function(array, n) {
    if(n === undefined){
      return array[0];
    }
    array.splice(n);
    return array;
  };

  // Like first, but for the last elements. If n is undefined, return just the
  // last element.
  _.last = function(array, n) {
    if(n === undefined){
      return array[array.length-1];
    } else if(n === 0){
      return 0;
    }
    var res = array.splice(-n);
    return res;
  };

  // Call iterator(value, key, collection) for each element of collection.
  // Accepts both arrays and objects.
  _.each = function(collection, iterator) {
    for(var i in collection){
      iterator(collection[i], i, collection);
    }
  };

  // Returns the index at which value can be found in the array, or -1 if value
  // is not present in the array.
  _.indexOf = function(array, target){
    for(var i = 0; i < array.length; i++){
      if(array[i] === target){
        return i;
      }
    }
    return -1;
  }

  // Return all elements of an array that pass a truth test.
  _.filter = function(array, iterator) {
    var res = [];
    for(var i = 0; i < array.length; i++){
      if(iterator(array[i]) === true){
        res.push(array[i]);
      }
    }
    return res;
  };

  // Return all elements of an array that don't pass a truth test.
  _.reject = function(array, iterator) {

    for(var i = 0; i < array.length; i++){
      if(iterator(array[i]) === true){
        array.splice(i,1);
      }
    }
    return array;
  };

  // Produce a duplicate-free version of the array.
  _.uniq = function(arr) {
    arr.sort(function(a,b){
      return a-b;
      });
      for(var i = 0; i < arr.length; i++){
        if(arr[i] === arr[i+1]){
            arr.splice(i,1);
            i--;
        }
    }
    return arr;
  };
    


  // Return the results of applying an iterator to each element.
  _.map = function(array, iterator) {
    for(var i = 0; i < array.length; i++){
      array[i] = iterator(array[i]);
    }
    return array;
  };

  // Takes an array of objects and returns and array of the values of
  // a certain property in it. E.g. take an array of people and return
  // an array of just their ages
  _.pluck = function(array, propertyName) {
    var res = [];
    for(var i = 0; i < array.length; i++){
      res.push(array[i][propertyName]);
    }
    return res;
  };

  // Calls the method named by methodName on each value in the list.
  _.invoke = function(list, methodName, args) {
    var res = [];
    list.forEach(function(elem){
      if(typeof methodName === 'function'){
        res.push(methodName.apply(elem, args));
      }
      else {
        res.push(elem[methodName]());
      }
    });
    return res;
  };

  // Reduces an array or object to a single value by repetitively calling
  // iterator(previousValue, item) for each item. previousValue should be
  // the return value of the previous iterator call.
  _.reduce = function(collection, iterator, initialValue) {
    var accumulator = initialValue || 0;
    if(collection.length === 0) return accumulator;
    return _.reduce(
      collection.slice(1),
      iterator,
      iterator(collection[0], accumulator)
    );
  };

  // Determine if the array or object contains a given value (using `===`).
  _.contains = function(collection, target) {
    for(var i = 0; i < collection.length; i++){
      if(collection[i] === target){
        return true;
      }
    } 
    for(var key in collection){
      if(collection[key] === target){
        return true;
      }
    }
    return false;
    
  };


  // Determine whether all of the elements match a truth test.
  _.every = function(collection, iterator) {
    var count = 0;
    if(collection.length === 0){
      return true;
    }
    if(iterator == undefined){
      iterator = function(){
        count++;
        }
    }
    for(var j=0; j<collection.length; j++){
      if(iterator(collection[j]) == true){
        count++;
      }
    }
    if(count === collection.length){
      return true;
    } 
    return false
  };

  // Determine whether any of the elements pass a truth test. If no iterator is
  // provided, provide a default one
  _.some = function(collection, iterator) {
    iterator = iterator || function(item){
      return !!item;
    };
    for(var i in collection){
      if(iterator(collection[i])){
        return true;
      }
    }
    return false;
  };


  /**
   * OBJECTS
   * =======
   *
   * In this section, we'll look at a couple of helpers for merging objects.
   */

  // Extend a given object with all the properties of the passed in
  // object(s).
  _.extend = function(obj){
    for(var i = 0; i < arguments.length; i++){
      var arg = arguments[i];
      for(var key in arg){
        obj[key] = arg[key]
      }
    }
    return obj;
  };

  // Like extend, but doesn't ever overwrite a key that already
  // exists in obj
  _.defaults = function(obj) {
    for(var i = 1; i < arguments.length; i++){
      var arg = arguments[i];
      for(var key in arg){
        if(!(key in obj)){
          obj[key] = arg[key];
        }
      }
    }
    return obj;
  };


  /**
   * FUNCTIONS
   * =========
   */

  // Return a function that can be called at most one time. Subsequent calls
  // should return the previously returned value.
  _.once = function(func) {
    var result;
    return function() { 
      if(func){
        result = func();
        func = null;
      }
    }
    return result;
	};

  // Memoize an expensive function by storing its results. You may assume
  // that the function takes only one argument and that it is a primitive.
  //
  // Memoize should return a function that when called, will check if it has
  // already computed the result for the given argument and return that value
  // instead if possible.
  _.memoize = function(func) {
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  //
  // The arguments for the original function are passed after the wait
  // parameter. For example _.delay(someFunction, 500, 'a', 'b') will
  // call someFunction('a', 'b') after 500ms
  _.delay = function(func, wait) {
  };



  // Shuffle an array.
  _.shuffle = function(array) {
  };

  // Sort the object's values by a criterion produced by an iterator.
  // If iterator is a string, sort objects by that property with the name
  // of that string. For example, _.sortBy(people, 'name') should sort
  // an array of people by their name.
  _.sortBy = function(collection, iterator) {
  };

  // Zip together two or more arrays with elements of the same index
  // going together.
  //
  // Example:
  // _.zip(['a','b','c','d'], [1,2,3]) returns [['a',1], ['b',2], ['c',3], ['d',undefined]]
  _.zip = function() {
  };

  // Takes a multidimensional array and converts it to a one-dimensional array.
  // The new array should contain all elements of the multidimensional array.
  _.flatten = function(nestedArray, result) {
  };

  // Takes an arbitrary number of arrays and produces an array that contains
  // every item shared between all the passed-in arrays.
  _.intersection = function() {
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
  };

}).call(this);
