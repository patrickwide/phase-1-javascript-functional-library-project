function myEach(collection, callback) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      callback(collection[i]);
    }
  } else {
    for (const key in collection) {
      callback(collection[key]);
    }
  }
  return collection;
}

function myMap(arr, callback) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Expected an array");
  }

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }

  return result;
}

function myReduce(collection, callback, initialValue) {
  let acc = initialValue;
  myEach(collection, function (element) {
    if (acc === undefined) {
      acc = element;
    } else {
      acc = callback(acc, element, collection);
    }
  });
  return acc;
}

function myFilter(arr, callback) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}

function mySize(collection) {
  if (Array.isArray(collection)) {
    return collection.length;
  } else {
    return Object.keys(collection).length;
  }
}

function myFirst(collection) {
  if (Array.isArray(collection)) {
    return collection[0];
  } else {
    return collection[Object.keys(collection)[0]];
  }
}

function myLast(collection) {
  if (Array.isArray(collection)) {
    return collection[collection.length - 1];
  } else {
    const keys = Object.keys(collection);
    return collection[keys[keys.length - 1]];
  }
}

function myValues(obj) {
  if (typeof obj !== "object" || obj === null) {
    throw new TypeError("myValues called on non-object");
  }

  const values = [];
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      values.push(obj[key]);
    }
  }
  return values;
}

function myKeys(obj) {
  if (typeof obj !== "object" || obj === null) {
    throw new TypeError("myKeys called on non-object");
  }

  const keys = [];
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      keys.push(key);
    }
  }
  return keys;
}

function myFind(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return arr[i];
    }
  }
  return undefined;
}
