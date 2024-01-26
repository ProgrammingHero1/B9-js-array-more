//              [7, 6, 5, 4, 3, 2, 1]
const numbers = [1, 2, 3, 4, 5, 6, 7];

// console.log(numbers);
// const reversed = numbers.reverse();
// console.log(reversed);


const rev_numbers = [];

for (const num of numbers) {
    // console.log(num);
    rev_numbers.unshift(num);
}
// console.log(rev_numbers);

const reversed_numbers = [];
for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    reversed_numbers.unshift(num);
}

// decremental for loop
const rev_rev_numbers = []; 
for (let i = numbers.length -1 ; i >=0; i--){
    const num = numbers[i];
    console.log(num);
    rev_rev_numbers.push(num);
}
console.log(rev_rev_numbers);