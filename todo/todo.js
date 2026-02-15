

let todo = []

// 追加ボタンクリック処理
const addBtn = document.getElementById("addBtn")
addBtn.addEventListener("click", () => {
    let todoText = document.getElementById("todoText")
    todo.push(todoText.value)
    todoText.value = ""
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











function render() {
    // // ul要素を取得
    const ul = document.getElementById("todos");
    ul.innerHTML = ""
    for (let i = 0; i < todo.length; i++) {
        // liを作成
        let li = document.createElement("li")
        li.classList.add("todoItem")
        // liにテキストを設定
        li.textContent = todo[i]
        // ulにliを追加
        ul.appendChild(li)
    }

}
