//ポップアップ広告を取得
const popup = document.querySelector(".popup");
//ポップアップ広告の閉じるボタンを取得
const popupClose = document.querySelector(".popup-close");
//body要素を取得
const body = document.body;
//表示位置を指定（下記はbody要素の真中辺り）
const position = body.clientHeight / 2;

//スクロールされた場合の処理
window.addEventListener("scroll", () => {
  //スクロール位置を取得
  let scrollY = window.scrollY;
  //ポップアップ広告の表示フラグを取得
  let popupFlag = sessionStorage.getItem("open");

  //スクロール量が表示位置以上であれば
  if (!popupFlag && position < scrollY) {
    //ポップアップ広告表示
    popup.classList.add("open");
    //ポップアップ広告の表示フラグを表示済みに設定
    sessionStorage.setItem("open", true);
  }

  //popupがopenのclassを持っていれば
  if (popup.classList.contains("open")) {
    //bodyのスクロールバーを非表示
    body.style.overflowY = "hidden";
  } else {
    //bodyのスクロールバーを表示
    body.style.overflowY = "auto";
  }
});

//ポップアップ広告の閉じるボタンがクリックされた場合の処理
popupClose.addEventListener("click", () => {
  //openのclassを削除
  popup.classList.remove("open");
  //bodyのスクロールバーを表示
  body.style.overflowY = "auto";
});
