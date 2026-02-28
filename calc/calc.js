let isGameStart = false
let count = 0
let calcData = {}
createCalc()
// let answer = document.getElementById("answer")
// answer.addEventListener("input", (e) => {
//     let maru = document.getElementById("maru")
//     let answerNumber = parseInt(e.target.value)
//     if (answerNumber == calcData.number1 + calcData.number2) {
//         maru.textContent = "◯"
//         e.target.value = ""
//         createCalc()
//     } else {
//         maru.textContent = "❌️"

//     }

// })



const soundcorrect = new Audio('../audio/Quiz-Ding_Dong02-1(Fast).mp3')
const soundWrong = new Audio('../audio/Quiz-Buzzer02-4(Multi).mp3')

let answer = document.getElementById("answer");

answer.addEventListener("keydown", (e) => {
    // エンターキーが押されたときだけ実行
    if (e.key === 'Enter') {
        let maru = document.getElementById("maru");
        let answerNumber = parseInt(e.target.value);

        if (answerNumber === calcData.number1 + calcData.number2) {
            maru.textContent = "◯";

            soundcorrect.currentTime = 0;
            soundcorrect.play();

            e.target.value = ""; // 入力欄を空にする
            createCalc();        // 次の問題へ

            // ß

        } else {
            maru.textContent = "❌️";
            // 不正解のときに入力欄を消すかどうかはお好みで！

            soundWrong.currentTime = 0;
            soundWrong.play();
        }
    }
});

function createCalc() {
    let number1 = document.getElementById("number1")
    let number2 = document.getElementById("number2")
    calcData.number1 = Math.floor(Math.random() * 100)
    calcData.number2 = Math.floor(Math.random() * 100)

    number1.textContent = calcData.number1
    number2.textContent = calcData.number2
}
let gameStartBtn = document.getElementById("gameStartBtn")
gameStartBtn.addEventListener("click", () => {
    isGameStart = true
})

const timer = setInterval(() => {
    const timeCounter = document.getElementById("timeCounter")
    timeCounter.textContent = count
    count++
    console.log(count)

    if (count > 10) {
        clearInterval(timer)
    }
}, 1000)


