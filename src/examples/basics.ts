// Explicit Types
function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
greet('Maddison', new Date());

// Infered Types
let msg = 'hello there!';
