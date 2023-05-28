let tgrm = Telegram.WebApp

tgrm.expand()

tgrm.MainButton.setText("WELCOME")
// tg.MainButton.textColor = "#FFFFFF"
// tg.MainButton.color = "#2cab37"

let item = ""

let card_1 = document.getElementsByClassName("card-1")[0]
let card_6 = document.getElementsByClassName("card-6")[0]
let card_12 = document.getElementsByClassName("card-12")[0]

function chooseSub(sub) {
  if (tgrm.MainButton.isVisible) {
    tgrm.MainButton.hide()
  } else {
    tgrm.MainButton.setText(`U take sub for ${sub} month`)
    item = sub
    tgrm.MainButton.show()
  }
}

card_1.addEventListener("click", () => {
  chooseSub("1")
})

card_6.addEventListener("click", () => {
  chooseSub("6")
})

card_12.addEventListener("click", () => {
  chooseSub("12")
})

window.Telegram.WebView.onEvent("mainButtonClicked", () => {
  tgrm.sendData(item)
})
