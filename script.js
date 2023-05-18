//
// ChatGPTを貼り付けましたが、理解できなかったため使うのをやめました。
// let playerScore = 0;
// let computerScore = 0;

// const buttons = document.querySelectorAll("button");
// const playerScoreDisplay = document.querySelector("#player-score");
// const computerScoreDisplay = document.querySelector("#computer-score");
// const gameResultDisplay = document.querySelector("#game-result");

// // *********************************************
// const buttonA = document.querySelector("#buttonA");
// const buttonB = document.querySelector("#buttonB");
// const buttonC = document.querySelector("#buttonC");

// const jankenButton = document.querySelector("#janken");
// const scoreDisplay = document.querySelector("#score");
// 

// グーが押されたら
buttonA.addEventListener("click", function() {
  const button = 1;
  console.log(button,"←あなたはグー");
  const num = Math.ceil(Math.random()*3) 
  console.log(num,"←コンピューターの選択は")

  if (num == 1){
    $("h3").html ("グー");
    $("h4").html ("引き分け");
    }
  if (num == 2){
    $("h3").html ("チョキ");
    $("h4").html ("あなたの勝ち！");
    clapSound1.play();     // 拍手(いろいろ試してなった。2時間ほどかかった)
    }
    if (num == 3){
    $("h3").html ("パー");
    $("h4").html ("あなたの負け。。");
    clapSound2.play(); 
    } 
    })


// チョキが押されたら
buttonB.addEventListener("click", function() {
  const button = 2;
  console.log(button,"←あなたはチョキ");
  const num = Math.ceil(Math.random()*3) 
  console.log(num,"←コンピューターの選択は")

  if (num == 1){
    $("h3").html ("グー");
    $("h4").html ("あなたの負け。。");
    clapSound3.play(); 
    }
  if (num == 2){
    $("h3").html ("チョキ");
    $("h4").html ("引き分け");
    }
  if (num == 3){
    $("h3").html ("パー");
    $("h4").html ("あなたの勝ち！");
    clapSound1.play();  
    } 
});

// パーが押されたら
buttonC.addEventListener("click", function() {
  const button = 3;
  console.log(button,"←あなたはパー");
  const num = Math.ceil(Math.random()*3) 
  console.log(num,"←コンピューターの選択は")
  
  if (num == 1){
    $("h3").html ("グー");
    $("h4").html ("あなたの勝ち！");
    clapSound1.play();     // 拍手(いろいろ試してなった。他の音の選択方法がわからなかった。2時間ほどかかった)
    }
  if (num == 2){
    $("h3").html ("チョキ");
    $("h4").html ("あなたの負け。。");
    clapSound3.play(); 
    }
  if (num == 3){
    $("h3").html ("パー");
    $("h4").html ("引き分け");
    } 
});


// document使う　カウントアップできない*************
$(document).ready(function() {
    const jankenButton = $("#janken");
    const scoreDisplay = $("#score");
  
    let score = 0;
  
    jankenButton.on("click", function() {
      
      score++;
      scoreDisplay.text(score);
// ***************************************************

    });
  });
  
