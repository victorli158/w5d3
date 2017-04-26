function range(start, end) {
  if (end < start) {
    return [];
  }

  let result = [start];
  result = result.concat(range(start + 1, end));

  return result;
}


let r1 = range(2, 5);
console.log(r1);
