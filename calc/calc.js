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

let answer = document.getElementById("answer");

answer.addEventListener("keydown", (e) => {
    // エンターキーが押されたときだけ実行
    if (e.key === 'Enter') {
        let maru = document.getElementById("maru");
        let answerNumber = parseInt(e.target.value);

        if (answerNumber === calcData.number1 + calcData.number2) {
            maru.textContent = "◯";
            e.target.value = ""; // 入力欄を空にする
            createCalc();        // 次の問題へ

            // ß

        } else {
            maru.textContent = "❌️";
            // 不正解のときに入力欄を消すかどうかはお好みで！
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
