const alertMessage = function () {
  alert("クリックしたね")
}

// 関数を登録
button.onclick = alertMessage
const inputText = document.getElementById("input-text")
const inputDate = document.getElementById("input-date")

const logValue = function (e) {
  console.log(e)
}

inputText.oninput = logValue
inputDate.oninput = logValue
