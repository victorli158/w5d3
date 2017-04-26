function uniq(arr) {
  const uniqArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (uniqArr.includes(arr[i]) === false) {
      uniqArr.push(arr[i]);
    }
  }

  return uniqArr;
}

// console.log(uniq([1,2,3,1,3,2,4,3]));

function twoSum(arr) {
  const pairs = [];

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        pairs.push([i, j]);
      }
    }
  }

  return pairs;
}

// console.log(twoSum([-1, 0, 2, -2, 1]));

function transpose(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let row = [];
    for (let j = 0; j < arr[0].length; j++) {
      row.push(arr[j][i]);
    }
    result.push(row);
  }
  return result;
}

const rows = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ];

// console.log(transpose(rows));
