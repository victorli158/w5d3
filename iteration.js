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
