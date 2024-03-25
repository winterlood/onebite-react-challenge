let user = {
  name: "이정환",
  age: 27,
  hobbies: ["노래", "테니스"],
};

// 단락 평가를 이용하여 첫 번째 취미 출력
console.log(
  "첫번째 취미 :",
  userProfile.hobbies[0] || "취미가 없습니다."
);
console.log(userProfile.hobbies[1] || "취미가 없습니다.");
console.log(userProfile.hobbies[2] || "취미가 없습니다.");
console.log(userProfile.hobbies[3] || "취미가 없습니다.");
