let isGameStart = false
let collectCount = 0
let disCollectCount = 0
let calcData = {}
const defaultAvgTime = 3.8
let playTime = 10
let count;


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

const answer = document.getElementById("answer");
const collectCountEl = document.getElementById("collectCount")

answer.addEventListener("keydown", (e) => {
    // エンターキーが押されたときだけ実行
    if (e.key === 'Enter') {
        if (!isGameStart) {
            e.target.value = ""
            window.alert("「開始」ボタンを押してください")
            return
        }
        let maru = document.getElementById("maru");
        let answerNumber = parseInt(e.target.value);

        if (answerNumber === calcData.number1 + calcData.number2) {
            maru.textContent = "◯";

            collectCount++


            collectCountEl.textContent = "正解数：" + collectCount
            soundcorrect.currentTime = 0;
            soundcorrect.play();

            e.target.value = ""; // 入力欄を空にする
            createCalc();        // 次の問題へ

            // ß
        } else {
            disCollectCount++
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
    if (!isGameStart) {
        window.alert(`
            「OK」ボタン押下後にゲームが開始されます
            数式の回答を入力したあとにエンターキーを入力してください

            制限時間:${playTime}秒
        `)
        answer.value = ""
        answer.focus()
        collectCount = 0
        disCollectCount = 0
        createCalc()
        count = playTime
        isGameStart = true
        timer()
    }
})

const timeSet = document.getElementById("timeSet")
timeSet.addEventListener("change", (e) => {
    playTime = parseInt(e.target.value)

})




const timer = () => {
    const timeCounter = document.getElementById("timeCounter")
    timeCounter.textContent = count
    const interVal = setInterval(

        () => {
            count--
            const timeCounter = document.getElementById("timeCounter")
            timeCounter.textContent = count

            userAvgTime = (playTime / collectCount).toFixed(2)


            defaultAvgDif = userAvgTime - defaultAvgTime
            let rank = calcAvg(defaultAvgDif)


            if (count <= 0) {
                clearInterval(interVal)
                isGameStart = false
                timeCounter.textContent = ""
                window.alert(`
終了!
「OK」ボタンを押してスコアを表示`)
                window.alert(`
------------------------------------------------------
■スコア
    制限時間:${playTime}秒

    正解数:${collectCount}
    誤答数:${disCollectCount}
    正答率:${(collectCount / (collectCount + disCollectCount)).toFixed(2) * 100}%
    平均回答時間:${userAvgTime}秒

    総合評価:${rank}
------------------------------------------------------
■一般平均スコア
    平均回答数:${(playTime / defaultAvgTime).toFixed(0)}
    平均正答率:${79}%
                `)
                collectCount = 0
                disCollectCount = 0
                collectCountEl.textContent = ""
            }
        }, 1000)

}



function calcAvg(defaultAvgDif) {
    let rank = "";
    if (defaultAvgDif <= 0 && defaultAvgDif > -0.4) {
        rank = "C+　→平均より少し上です。もう少し上を目指せます"
    } else if (defaultAvgDif <= -0.4 && defaultAvgDif > -0.8) {
        rank = "B-　→そこそこです。中途半端ですね"

    } else if (defaultAvgDif <= -0.8 && defaultAvgDif > -1.2) {
        rank = "B+　→そのくらいで自慢できると思わないでください"

    } else if (defaultAvgDif <= -1.2 && defaultAvgDif > -1.6) {
        rank = "A-　→人に自慢できるくらいのスコアだと思います"

    } else if (defaultAvgDif <= -1.6 && defaultAvgDif > -2.0) {
        rank = "A+　→よくぞここまで…上り詰めましたね"

    } else if (defaultAvgDif <= -2.0 && defaultAvgDif > -2.4) {
        rank = "S-　→ひまなんですか？"

    } else if (defaultAvgDif <= -2.4 && defaultAvgDif > -2.8) {
        rank = "S+　→本当に自分でしましたか？"

    } else if (defaultAvgDif <= -2.8 && defaultAvgDif > -3.2) {
        rank = "S++　→あなたは人間じゃありません"

    } else if (defaultAvgDif <= -3.2 && defaultAvgDif > -3.6) {
        rank = "S+++　→人外…ですが私には一歩及びませんね"
    } else if (defaultAvgDif <= -3.6) {
        rank = "God　→あぁ神よ、私をお救いください"

    } else if (defaultAvgDif > 0 && defaultAvgDif <= 0.4) {
        rank = "C-　→平均くらいです。凡人ですね"
        // c-
    } else if (defaultAvgDif > 0.4 && defaultAvgDif <= 0.8) {
        rank = "D+　→平均よりも少し低いです。頑張りましょう"
        // d+
    } else if (defaultAvgDif > 0.8 && defaultAvgDif <= 1.2) {
        rank = "D-　→足し算がそんなにも難しいですか？"
        // d-
    } else if (defaultAvgDif > 1.2 && defaultAvgDif <= 1.6) {
        rank = "E+　→算数からやり直しましょう"
        //e+
    } else if (defaultAvgDif > 1.6 && defaultAvgDif <= 2.0) {
        rank = "E-　→疲れているんですか？休みましょう"
        //e-
    } else if (defaultAvgDif > 2.0 && defaultAvgDif <= 2.4) {
        rank = "F+　→まぁ、そんな日もありますよね"
        // f+
    } else if (defaultAvgDif > 2.4) {
        rank = "F-　→開始ボタンを押して放置しただけですよね？"
        // f-
    }
    return rank





}

