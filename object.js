//자바스크립트의 빌트인 객체
const hayoung = {
  age: 20,
  height: 160,
  hobby: "코딩",
};

//객체 '하영'은 property(key, value) 로 이루어져있음
//객체이 key와 valuse를 따로 확인할때 사용함

// Object.values(hayoung);
// Object.keys(hayoung);

console.log(Object.values(hayoung)); // 20, 160, 코딩
console.log(Object.keys(hayoung)); // age, height, hobby

//다차원 배열형태 반환
//배열 안에 요소로 배열이 존재
console.log(Object.entries(hayoung)[0][0]);
