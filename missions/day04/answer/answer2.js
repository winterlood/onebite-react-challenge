function register(user) {
  const name = user.name;
  const type = user.job || "게스트";
  const email = user.email || "미등록";

  console.log(
    `회원가입 완료! ${name}님은 [${type}]이며 이메일은 [${email}]입니다`
  );
}

register({
  name: "이정환",
});
a;
