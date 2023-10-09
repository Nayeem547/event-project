
. Write the correct answer from the following options and give an explanation (2-5 lines).
1.  let greeting;
greetign = {};
console.log(greetign);
A: {}
B: ReferenceError: greetign is not defined
C: undefined
Answer :  B: ReferenceError: greetign is not defined
Explanation: There is a typographical error in the code. greetign is used instead of greeting, which means greeting is never declared or assigned a value. This results in a ReferenceError because greetign is not defined.






2. Write the correct answer from the following options and give an explanation (2-5 lines).
function sum(a, b) {
  return a + b;
}

sum(1, "2");
A: NaN
B: TypeError
C: "12"
D: 3

 Answer :  C: "12"
Explanation: JavaScript performs type coercion when using the + operator with different data types. In this case, the function sum concatenates the string "1" and the string "2," resulting in the string "12."




3. Write the correct answer from the following options and give an explanation (2-5 lines).
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
A: ['🍕', '🍫', '🥑', '🍔']
B: ['🍝', '🍫', '🥑', '🍔']
C: ['🍝', '🍕', '🍫', '🥑', '🍔']
D: ReferenceError

Answer :   A: ['🍕', '🍫', '🥑', '🍔']
Explanation: The code assigns the value of food[0], which is "🍕," to info.favoriteFood. Changing the value of info.favoriteFood to "🍝" does not affect the original food array. Therefore, food remains unchanged, and the output is ['🍕', '🍫', '🥑', '🍔'].



4. Write the correct answer from the following options and give an explanation (2-5 lines).
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
A: Hi there,
B: Hi there, undefined
C: Hi there, null
D: ReferenceError

Answer :   B: Hi there, undefined
Explanation: The sayHi function expects a name argument, but when it is called without any arguments (sayHi()), name is undefined. Therefore, the function returns "Hi there, undefined."



5. Write the correct answer from the following options and give an explanation (2-5 lines).
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
A: 1
B: 2
C: 3
D: 4


Answer  :  : A: 1
Explanation: The forEach method iterates over the nums array and increments the count variable when a truthy value (num) is encountered. Only the value 1 (which is truthy) is present in the nums array, so count is incremented once, resulting in a value of 1.