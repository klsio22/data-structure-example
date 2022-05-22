let values = [5, 8, 10, 22, 45, 50, 61, 78, 89, 122];

let search = (number) => {
  for (i = 0; i < 6; i++) {
    if (number == values[i]) {
      return i;
    }
  }
  return -1;
};

let searchBinary = (number) => {
  let start, middle, end, nSteps;
  start = 0;
  end = 9;
  nSteps = 0;
  while (start <= end) {
    middle = parseInt((start + end) / 2);
    nSteps = nSteps + 1;
    console.log(middle)
    if (number === values[middle]) {
      console.log(`achei em ${nSteps} passos`);
      return middle;
    } else {
      if (number > values[middle]) start = middle + 1;
      else end = middle - 1;
    }
  }
  console.log(`não encontrei ${nSteps} passos`)
  return -1;
};

// using our search tool

/* console.log('Posição do valor ' + search(10));
console.log('Posição do valor ' + search(50)); */

console.log(searchBinary(10));
console.log();
console.log(searchBinary(122));
