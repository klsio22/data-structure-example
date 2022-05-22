let elements = [];
let top = -1;
const max = 10;

let push = (number) => {
  if (top < max) {
    top += 1;
    elements[top] = number;
  } else {
    console.log('Full stacks');
  }
};

let isEmpty = () => {
  return top === -1;
};

let pop = () => {
  if (top != -1) {
    let num = elements[top];
    top -= 1;
    return num;
  } else {
    console.log('Empty stacks');
  }
};

/* ------ parte do código que usa a pilha --- */
let rest;
let DecimalNumber = 10;

console.log('Stack Numbers .....')
while (DecimalNumber != 0) {
  rest = parseInt(DecimalNumber % 2);
  push(rest);
  console.log(rest)
  DecimalNumber = parseInt(DecimalNumber / 2);
}

console.log('Unstack numbers .....')

while (!isEmpty()) {
  console.log(pop());
}
