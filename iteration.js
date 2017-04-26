function factors(num) {
  const facs = [];
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      facs.push(i);
    }
  }
  for (let i = 0; i < facs.length; i++) {
    console.log(facs[i]);
  }
}

// factors(9);

function bubbleSort(arr) {
  let sorted = false;
  while (sorted === false) {
    sorted = true;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        sorted = false;
      }
    }
  }
  return arr;
}

// let unsorted = [5, 3, 6, 7, 2, 4];
// console.log(bubbleSort(unsorted));

function substrings(string) {
  const result = [];
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length + 1; j++) {
      result.push(string.slice(i, j));
    }
  }
  return result;
}

// console.log(substrings("cat"));
