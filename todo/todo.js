// import { calcCoin } from "../cmd/cmd";

let todo = [
]
getServerResponse()
// 追加ボタンクリック処理
const addBtn = document.getElementById("addBtn")
addBtn.addEventListener("click", () => {

    let todoText = document.getElementById("todoText")
    let todoText2 = document.getElementById("todoText2")

    if (todoText.value.trim() == "" && todoText2.value.trim == "") {
        window.alert("タイトルが入力されていません")
        return
    }
    const now = new Date()

    let todoItem = {
        title: todoText.value,
        description: todoText2.value,
        date: now.toLocaleString('ja-JP')
    }


    todo.push(todoItem)
    todoText.value = ""
    todoText2.value = ""
    render()
})

// 全削除ボタンクリック処理
const allClearBtn = document.getElementById("allClearBtn")
allClearBtn.addEventListener("click", () => {
    todo = []
    render()

})
// 最後ボタンクリック処理
const lastRemove = document.getElementById("lastRemove")
lastRemove.addEventListener("click", () => {
    todo.pop()
    render()

})











// 最後ボタンクリック処理
const getWeather = document.getElementById("getWeather")
// getWeather.addEventListener("click", getServerResponse)


async function getServerResponse() {
    let weatherIcon = document.getElementById("weatherIcon")
    let url = "https://api.open-meteo.com/v1/forecast?latitude=60.419&longitude=170.9919&daily=weather_code&start_date=2026-02-16&end_date=2026-02-16"
    const response = await fetch(url)
    const data = await response.json()
    const weatherCode = data.daily.weather_code[0]
    console.log(weatherCode)
    switch (weatherCode) {
        case 3:
            weatherIcon.classList.add("sun")
            // console.log("晴れ、曇り、一部曇り")

            break;

        case 71:
            weatherIcon.classList.add("snow")
            // console.log("降雪量: 微雪、中雪、大雪")
            break;

        default:
            break;
    }
}







function render() {
    // // ul要素を取得
    const ul = document.getElementById("todos");
    ul.innerHTML = ""
    for (let i = 0; i < todo.length; i++) {

        // liとliの中身を作成
        let li = document.createElement("li")
        let p1 = document.createElement("p")
        let p2 = document.createElement("p")
        let p3 = document.createElement("p")




        // liにクラス追加(CSS適用のため)
        li.classList.add("todoItem")
        // p1に表示テキストを追加
        p1.textContent = "タイトル：" + todo[i].title

        // p2に表示テキストを追加
        p2.textContent = "詳細；" + todo[i].description

        // p3に表示テキストを追加
        p3.textContent = "追加した日時 ;" + todo[i].date
        // liにp1,p2を追加
        li.append(p1, p2, p3);

        // liにテキストを設定
        // ulにliを追加
        ul.appendChild(li)
    }

}

