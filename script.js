// 質問の内容
const questions = [
  "Q1: 初対面で自分から話しかける？",
  "Q2: 感情より論理で動く？",
  "Q3: 恋は追いかけたい？",
];

// 回答をA/Bで記録する箱
const answers = [];
// 今何問目かを記録！0からスタート
let currentStep = 0;

const startButton = document.getElementById("startButton");
const result = document.getElementById("result");
const startScreen = document.getElementById("startScreen");

// スタートボタンがクリックされたら質問を表示
startButton.addEventListener("click", function () {
  startScreen.style.display = "none"; // 最初の画面を消す
  showQuestion(); // 最初の質問を表示する
});

function showQuestion() {
  const questionText = questions[currentStep]; // 今の質問を取得する
  // 質問文を表示
  result.innerHTML = `
        <p>${questionText}</p>  
        <button onclick="answer('A')">はい</button>
        <button onclick="answer('B')">いいえ</button>
    `;
}

function answer(choice) {
  console.log("選ばれたのは:", choice); // コンソールに表示
  answers.push(choice); // A or B の回答を保存
  currentStep++; // 次の質問に進めるように1足す！

  if (currentStep < questions.length) {
    showQuestion(); // まだ質問がある → 次を表示
  } else {
    showResult(); // もう質問ない → 結果を表示！
  }
}

//質問に全部答え終わったあとに、診断結果を表示するための関数
function showResult() {
  //回答をまとめて文字にする（例："ABA"）
  //.join("")でリストの中身を1つの文字列にまとめる
  const key = answers.join("");
  let resultText = "";

  if (key === "AAA") {
    resultText = `
            <img src="img/永瀬碧.png" alt="永瀬碧ちゃん" style="max-width:300px;"><br>
            <h2>永瀬碧ちゃんタイプ（ENTP）</h2>
            <p>戦略的で賢くて、恋は駆け引き。<br>一歩引いて相手を試すタイプ。</p>
        `;
  } else if (key === "ABA") {
    resultText = `
            <img src="img/長浜広奈.png" alt="長浜広奈ちゃん" style="max-width:300px;"><br>
            <h2>長浜広奈ちゃんタイプ（ENTP）</h2>
            <p>自分勝手に見られがちだけど、実は友達思い。<br>恋は追いかけたい派。</p>
        `;
  } else if (key === "BBA") {
    resultText = `
            <img src="img/大宮芽唯.png" alt="大宮芽唯ちゃん" style="max-width:300px;"><br>
            <h2>大宮芽唯ちゃんタイプ（INFJ）</h2>
            <p>静かで落ち着いた雰囲気の中に強い意志を持っている。<br>共感力のあるミステリアスタイプ。</p>
        `;
  } else if (key === "ABB") {
    resultText = `
            <img src="img/倉八音羽.png" alt="倉八音羽ちゃん" style="max-width:300px;"><br>
            <h2>倉八音羽ちゃんタイプ（ENFJ）</h2>
            <p>穏やかで人当たりがよく、空気を読んで動けるタイプ。<br>優しさと責任感を兼ね備えた、みんなのまとめ役。</p>
        `;
  } else if (key === "AAB") {
    resultText = `
            <img src="img/時田音々.png" alt="時田音々ちゃん" style="max-width:300px;"><br>
            <h2>時田音々ちゃんタイプ（ENFP）</h2>
            <p>好奇心旺盛で感情豊か。<br>自由で楽しいことが好きな、天真爛漫なムードメーカー。</p>
        `;
  } else if (key === "BAA") {
    resultText = `
            <img src="img/古園井寧々.png" alt="古園井寧々ちゃん" style="max-width:300px;"><br>
            <h2>古園井寧々ちゃんタイプ（ISTP）</h2>
      <p>一見クールだけど、芯が強くて行動力バツグン。<br>
      自分のペースを大事にしつつ、困ってる人はそっと助ける優しさも。<br></p>
        `;
  } else if (key === "BBB") {
    resultText = `
            <img src="img/永瀬さら.png" alt="永瀬さらちゃん" style="max-width:300px;"><br>
            <h2>永瀬さらちゃんタイプ（ESFJ）</h2>
            <p>面倒見がよくて、誰に対してもやさしいしっかり者。<br>相手を思いやりながら、自然とリードしていけるタイプ。</p>
        `;
  } else if (key === "BAB") {
    resultText = `
            <img src="img/相場星音.png" alt="相場星音ちゃん" style="max-width:300px;"><br>
            <h2>相場星音ちゃんタイプ（ISFP）</h2>
            <p>静かでおっとりした雰囲気だけど、芯のある優しさを持った感性派。<br>相手にそっと寄り添えるナチュラル癒し系。</p>
        `;
  }

  result.innerHTML = resultText; //診断結果を、画面の指定の場所に表示してる
}
