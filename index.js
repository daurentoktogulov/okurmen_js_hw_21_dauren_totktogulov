const hw1 = ['apple', 'banana', 'pineapple', 'strawberry'];

console.log(hw1.indexOf('apple'));
console.log(hw1.indexOf('pineapple'));
console.log(hw1.indexOf('strawberry'));


const hw2 = [1, 3, 5]
console.log(Array.isArray([1, 3, 5]));
console.log(Array.isArray('[]'));


const hw3 = ['Fire', 'Dauren', 'Water'];

console.log(hw3.join(' , '));


const hw4 = ['a', 'b', 'c', 'd', 'e', 'f'];
const enter = hw4.keys();

for (const key of enter) {
  console.log(key);
}


const hw5 = ['Eagl', 'Tiger', 'Penguin', 'Dodo', 'lion', 'Dolphin'];

console.log(hw5.lastIndexOf('dolphin'));
console.log(hw5.lastIndexOf('lion'));
console.log(hw5.lastIndexOf('Dodo'));
console.log(hw5.lastIndexOf('Penguin'));


console.log(Array.of('footbol', 'volleybol', 'basketbol', 'tennis'));


const hw7 = [
    [4, 5],
    [2, 3],
    [0, 1],
  ];
  
  const r = hw7.reduceRight((accumulator, currentValue) =>
    accumulator.concat(currentValue),
  );
  
  console.log(r);


const hw8 = [100, 200, 300];
const firstE = hw8.shift();

console.log(hw8);
console.log(firstE);


const hw9 = [3, 2, 1];
console.log(hw9);

const reversed = hw9.toReversed();
console.log(reversed);


const hw10 = [100, 11, 22, 2];
const sorted = hw10.toSorted((a, b) => a - b);
console.log(sorted);
console.log(hw10);


const hw11 = ["Mar", "Apr", "May"];
const months = hw11.toSpliced(0, 0 ,"Jan", "Feb");

console.log(months);