console.log("main.js!!");
let weatherCodes =
  // Ready
  $(document).ready(() => {
    console.log("Ready!!");
    //210000　岐阜県
    const option = { responseType: "blob" };
    axios.get("https://www.jma.go.jp/bosai/forecast/data/forecast/210000.json", option).then((res) => {
      // 通信が成功した場合
      console.log("通信成功!!");
      console.log(res); // データそのもの
      res.data
        .text()
        .then((str) => {
          let arr = JSON.parse(str); // JSONオブジェクトに変換
          axios.get("./trans.JSON", option).then((ress) => {
            ress.data.text().then((strr) => {
              let tr = JSON.parse(strr);
              console.log(arr); // データ確認
              console.log(arr[0]); //0番目のデータ
              console.log(arr[0]["publishingOffice"]); //0番目のデータ
              console.log(arr[0]["reportDatetime"]); //0番目のデータ
              //東京地方のデータを抜き取る

              //美濃地方の天気データをHTMLに表示
              $("#mino_weather").append(arr[0]["timeSeries"][0]["areas"][0]["weathers"][0], "<br>");
              $("#mino_weather").append(arr[0]["timeSeries"][0]["areas"][0]["winds"][0], "<br>");
              let wcode = arr[0]["timeSeries"][0]["areas"][0]["weatherCodes"][0];
              
              weatherCodes = $("#mino_weather").append(`<img src="images/` + tr[wcode] + `">`);
              $("#myportfolio").css("color", "#ff8c00");
              if (Math.floor(wcode / 100) == 2) {
                //くもり
                console.log(wcode);
                $("body").css("background-image", 'url("./images/weather_2.jpg")');
                $("body").css("color", "#666");
                $("#myportfolio").css("color", "#666");
              } else if (Math.floor(wcode / 100) == 3) {
                //雨
                $("body").css("background-image", 'url("./images/weather_3.jpg")');
                $("#myportfolio").css("color", "#fff");
              } else if (Math.floor(wcode / 100) == 4) {
                //雪
                $("body").css("background-image", 'url("./images/weather_4.jpg")');
                $("#myportfolio").css("color", "#666");
              }

              let now = new Date();
              let Month = now.getMonth() + 1;
              let Day = now.getDate();
              let Hour = now.getHours();
              let Min = now.getMinutes();
              $("#date").text(Month + "月" + Day + "日" + Hour + ":" + Min);

              //$(".mino_weather").append((arr[0]["timeSeries"][0]["areas"][0]["area"]["name"]),"<br>");
            });
          });
        })
        .catch((err) => {
          // 通信が失敗した場合
          console.log("通信失敗...");
          console.log(err); // エラー内容
        });
    });
  });
