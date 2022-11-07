const MissionUtils = require("@woowacourse/mission-utils");
class App {
  play() {

  }

  // 사용자 입력 받기 1 예외처리
  checkExceptionOne(num){
    if(isNan(num)){
      throw new Error("숫자를 입력하세요.");
    }else if(num.charAt(0) === 0 || num.charAt(1) === 0 || num.charAt(2) === 0){
      throw new Error("1-9 사이의 숫자를 3번 입력하세요.");
    } else if(num.charAt(0) === " " || num.charAt(1) === " " || num.charAt(2) === " "){
      throw new Error("공백을 포함하지 않는 숫자를 입력하세요.");
    } else if(num.length !== 3){
      throw new Error("세자리 숫자를 입력하세요.");
    } else if(num.charAt(0) === num.charAt(1)|| num.charAt(0) === num.charAt(2) || num.charAt(1) === num.charAt(2)){
      throw new Error("중복되지 않는 숫자를 입력하세요.");
    } else {
      return 1;
    }
  }
  // 사용자 입력 받기 2 예외처리
  checkExceptionTwo(input){
    if(input === "1" || input === "2"){
      return 1;
    } else {
      throw new Error("1 또는 2를 입력하세요.");
    }
  }

  // 상대방(컴퓨터) 숫자 생성
  getRandomNum(){
    const computer = [];
    while(computer.length < 3){
      const number = MissionUtils.Random.picNumberInRange(1, 9);
      if(!computer.includes(number)){
        computer.push(number);
      }
    }
    return computer.join("");
  }

  //결과 출력
  printResult(strike, ball){
    if(strike === 0 && ball === 0){
      MissionUtils.Console.print('낫싱');
    } else if(ball === 0){
      MissionUtils.Console.print(`${strike}스트라이크`);
    } else if(stirkew === 0){
      MissionUtils.Console.print(`${ball}볼`);
    } else {
      MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
    }
  }

  // 숫자 비교
compareNum(com_num, user_num){
  let strike = 0;
  let ball = 0;

  for(let i = 0; i < 3; i ++){
    let index = com_num.indexOf(user_num.charAt(i));
    if(index === -1){
      continue;
    } else if(index === i){
      strike += 1;
    } else{
      ball += 1;
    }
  }
  this.printResult(strike, ball);
  if(strike === 3){
    return true;
  } else {
    return false;
  }
}



}

module.exports = App;
