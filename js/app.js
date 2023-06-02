let tg = window.Telegram.WebApp

tg.expand()

tg.MainButton.textColor = "#FFFFFF"
tg.MainButton.color = "#2cab37"

let btnPressed = false

let card_1 = document.getElementsByClassName("card-1")[0]
let card_6 = document.getElementsByClassName("card-6")[0]
let card_12 = document.getElementsByClassName("card-12")[0]

function chooseSub(sub) {
  if (tg.MainButton.isVisible) {
    tg.MainButton.hide()
  } else {
    item = sub

    switch (sub) {
      case "standart":
        item = 1
        break
      case "xtra":
        item = 2
        break
      case "premium":
        item = 3
        break
      default:
        break
    }

    tg.MainButton.setText(`U take ${item}} sub`)
    item = sub
    tg.MainButton.show()
  }
}

card_1.addEventListener("click", () => {
  chooseSub("standart")
})

card_6.addEventListener("click", () => {
  chooseSub("xtra")
})

card_12.addEventListener("click", () => {
  chooseSub("premium")
})

window.Telegram.WebView.onEvent("main_button_pressed", () => {
  tg.sendData(item)
})
