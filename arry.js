const arr = ["김성용", "짱구", "마이멜로디"];
arr.push("해피캣");
console.log(arr); // "김성용","짱구", "마이멜로디","해피캣"

arr.pop();
console.log(arr); //"김성용","짱구", "마이멜로디"

arr.unshift("쿠로미");
console.log(arr); //"쿠로미", "김성용","짱구", "마이멜로디"

arr.shift();
console.log(arr); //"김성용", "짱구", "마이멜로디"

//만약에 arr 에 쿠로미가 없으면 실행시켜라
//부정 연산자를 통해 쿠로미가 없으면 false -> true로 바꾸어서 조건문 실행

if (!arr.includes("쿠로미")) {
  arr.push("쿠로미");
}
console.log(arr);
console.log(arr.indexOf("마이멜로디")); //-> 데이터를 찾을때 사용됨, 2   -> arr에 마이멜로디 인덱스가 몇 번이니!
console.log(arr.indexOf("짝귀")); //-1

if (arr.indexOf("쿠로미") < 0) {
  arr.push("쿠로미");
}
console.log(arr);

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];
const arr3 = arr1.concat(arr2);
console.log(arr3); // 1,2,3,4,5,6,7,8

const apart = ["짱구", "오수", "신혼부부", "훈이", "스펀지밥", "징징이"];
//apart.slice(start,end)
//start --> 3,5로 하면 훈이부터 징징이 직전까지 자름   -> 훈이(3)랑 스펀지밥(4)
//start -> index
// end  -> index+1
const arr4 = apart.slice(3, 5);
//end 는 생략이 가능하며 end 가 없을 경우 마지막까지 모두 가지고 옵니다
//start 부터 마지막 인덱스까지
console.log(arr4);

const arr5 = apart.slice(-3, -1);
console.log(arr5); // 훈이(-3), 스펀지밥(-2)
//-를 붙이면 마지막 인덱스부터 -1로 계산해야함!

//apart.splice(start, count, item)
apart.splice(3, 2, "hayoung");
console.log(apart);

const phone = "010-1234-1234";
phone.split(""); //['0','1','0','1','2','3',  ...]
phone.split("-"); // ['010', '1234', '1234']
console.log(phone);
const hashedphone = splitphone[0] + "****" + splitphone[2]; // 010****1234
splitphone[1] = "****"; //['010' , '****' , '1234']
console.log(splitphhone.join("-")); //010-****=1234

//split()  ->()안에 들어간 요소를 기준을 자름  -> 배열화
//join()   ->()안에 들어간 요소를 배열의 요소 사이에 넣기  -> 문자열화
