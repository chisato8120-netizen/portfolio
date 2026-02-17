let calcData = {}
createCalc()
let answer = document.getElementById("answer")
answer.addEventListener("input", (e) => {
    let maru = document.getElementById("maru")
    let answerNumber = parseInt(e.target.value)
    if (answerNumber == calcData.number1 + calcData.number2) {
        maru.textContent = "◯"
        e.target.value = ""
        createCalc()
    } else {
        maru.textContent = "❌️"

    }

})

function createCalc() {
    let number1 = document.getElementById("number1")
    let number2 = document.getElementById("number2")
    calcData.number1 = Math.floor(Math.random() * 1000)
    calcData.number2 = Math.floor(Math.random() * 1000)

    number1.textContent = calcData.number1
    number2.textContent = calcData.number2
}
