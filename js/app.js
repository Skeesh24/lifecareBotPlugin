let tg = window.Telegram.WebApp

tg.expand()

tg.MainButton.textColor = "#FFFFFF"
tg.MainButton.color = "#2cab37"

let btnPressed = false
let item = ""

let card_1 = document.getElementsByClassName("card-1")[0]
let card_6 = document.getElementsByClassName("card-6")[0]
let card_12 = document.getElementsByClassName("card-12")[0]

const onClose = () => console.log(window)

function chooseSub(sub) {
  btnPressed = !btnPressed
  if (btnPressed) {
    tg.MainButton.hide()
  } else {
    tg.MainButton.setText(`U take sub for ${sub} month`)
    tg = sub
    tg.MainButton.show()
  }
}

card_1.addEventListener("click", () => {
  tg.sendData("1")
})

card_6.addEventListener("click", () => {
  tg.sendData("6")
})

card_12.addEventListener("click", () => {
  tg.sendData("12")
})

window.Telegram.WebView.onEvent("main_button_pressed", () => {
  tg.MainButton.setText("TEST")
})
