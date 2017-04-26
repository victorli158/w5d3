function myEach(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i]);
  }
  return arr;
}

// let arr = [1, 2, 3];
// let cb = function(num) {
//   console.log(2 * num);
// };
//
// myEach(arr, cb);


function myMap(arr, cb) {
  const newArr = [];
  // for (let i = 0; i < arr.length; i++) {
  const map = function (num) {
    newArr.push(cb(num));
  };
  myEach(arr, map);

  return newArr;
}

// let arr = [1, 2, 3];
// let cb = function(num) {
//   return 2 * num;
// };
//
// console.log(myMap(arr, cb));


function myInject(arr, cb) {
  let accum = arr[0];

  myEach(arr.slice(1), function (el) {
    accum = cb(accum, el);
  });

  return accum;
}


let arr = [1, 2, 3, 4, 5];
let cb = function(accum, el) {
  return accum * el;
};

console.log(myInject(arr, cb));
