function linearSearch(object, thingToFind) {
  for (let i = 0; i < object.length; i++) {
    if (object[i].name === thingToFind) {
      return i;
    }
  }
  return "did not find";
}
let arr = [4, 2, 8, 1, 3, 7, 5];
let students = [
  { id: 1, name: "Alice", age: 20 },
  { id: 2, name: "Bob", age: 21 },
  { id: 3, name: "Charlie", age: 22 },
  { id: 4, name: "David", age: 19 },
  { id: 5, name: "Eve", age: 20 },
];

console.log(linearSearch(students, "bob"));
