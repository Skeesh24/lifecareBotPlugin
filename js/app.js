let tg = window.Telegram.WebApp

tg.expand()

tg.MainButton.setText("WELCOME")
tg.MainButton.textColor = "#FFFFFF"
tg.MainButton.color = "#2cab37"

let item = ""

let card_1 = document.getElementsByClassName("card-1")[0]
let card_6 = document.getElementByClassName("card-6")[0]
let card_12 = document.getElementByClassName("card-12")[0]

function chooseSub(sub) {
  if (tg.MainButton.isVisible) {
    tg.MainButton.hide()
  } else {
    tg.MainButton.setText(`U take sub for ${sub} month`)
    item = sub
    tg.MainButton.show()
  }
}

card_1.addEventListener("click", () => {
  chooseSub(1)
})

card_6.addEventListener("click", () => {
  chooseSub(6)
})

card_12.addEventListener("click", () => {
  chooseSub(12)
})

window.Telegram.WebView.onEvent("mainButtonClicked", () => {
  tg.sendData(item)
})
