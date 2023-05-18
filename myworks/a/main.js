// Ready
$(document).ready(() => {
  let now = new Date();
  console.log(now);
  let Month = now.getMonth() + 1; //月を取得
  let Day = now.getDate(); //日を取得
  let befMonth = Month + 11; //12月
  let befDay = Day + 30; //31日
  let Hour = now.getHours(); //時間を取得
  let Min = now.getMinutes(); //分を取得

  console.log(now);
  $("#date").append(Month + "月" + Day + "日" + Hour + ":" + Min);
  //25日の0時0分になったらアニメーションを開始する
  doAnimation("#date_before", "animate__hinge"); // flip
  // Animation
  //第一引数: ID,第二引数: アニメーションクラス名
  //指定したエレメントをアニメーションさせる関数s
  function doAnimation(id, type) {
    const elem = $(id);
    elem.addClass("animate__animated");
    elem.addClass(type);
    elem.on("animationend", () => {
      elem.off("animationend");
      elem.removeAttr("class");
      elem.css("display", "none");
    });
  }
  //1月1日の０時０分になったときに実行される
  if (Math.floor(Day) == 1 && Math.floor(Month) == 1 && Math.floor(Hour) == 0 && Math.floor(Min) == 0) {
    $("#date_before").css("color", "#fff");
    let day_after = $("#date_before").append(befMonth + "月" + befDay + "日");
  }
  if (Math.floor(Day) == 1 && Math.floor(Month) == 1) {
    $("body").css("background-image", 'url("./images/newyear.jpg")');
    $("#date").css("color", "#a9a9a9");
    $("#date").append("<p>HAPPY NEW YEAR</p>");
  }
});
