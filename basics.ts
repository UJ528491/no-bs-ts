let userName: string = "Jack";
let hasLoggedIn: boolean = true;

hasLoggedIn += " Herrington";
console.log(hasLoggedIn);

let myNumber: number = 10;

let myRegex: RegExp = /foo/;

const names: string[] = userName.split(" ");
const myValue: Array<number> = [1, 2, 3, "abc"];

interface Person {
  first: string;
  last: string;
}
const myPerson: Person = {
  first: "Jack",
  last: "Herrington",
};

const ids: Record<number, string> = {
  10: "a",
  20: "b",
};
ids[30] = "c";

if (ids[30] === "d") {
}

for (let i = 0; i < 10; i++) {
  console.log(i);
}
[1, 2, 3].forEach(v => console.log(v));
const out: number = [4, 5, 6].map(v => {
  v * 10;
});
