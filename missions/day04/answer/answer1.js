const person = { name: "이정환" };

if (!("hobby" in person)) {
  person["hobby"] = ["테니스", "노래", "요리"];
}

console.log(person.hobby);
