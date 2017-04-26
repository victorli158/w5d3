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

// console.log(r_sum([1, 3, 5, 4]));

function exp1(base, power) {
  if (power === 0) {
    return 1;
  }
  return base * exp1(base, power - 1);
}

// console.log(exp1(5, 3));

function exp2(base, power) {
  if (power === 0) {
    return 1;
  }
  if (power === 1) {
    return base;
  }
  if (power % 2 === 0) {
    let sqrt = exp2(base, (power / 2));
    return sqrt * sqrt;
  }
  else {
    let sqrt = exp2(base, (power - 1) / 2);
    return base * sqrt * sqrt;
  }
}

// console.log(exp2(2, 5));

function i_fibo(n) {
  const fibs = [1, 1];
  if (n === 1) {
    return [1];
  }
  if (n === 2) {
    return fibs;
  }
  while (fibs.length < n) {
    fibs.push(fibs[fibs.length - 2] + fibs[fibs.length - 1]);
  }

  return fibs;
}
// 
// console.log(i_fibo(10));
