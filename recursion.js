function range(start, end) {
  if (end < start) {
    return [];
  }

  let result = [start];
  result = result.concat(range(start + 1, end));

  return result;
}


// let r1 = range(2, 5);
// console.log(r1);


function i_sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

// console.log(i_sum([1,3,5,4]));

function r_sum(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + r_sum(arr.slice(1));
}

console.log(r_sum([1, 3, 5, 4]));
