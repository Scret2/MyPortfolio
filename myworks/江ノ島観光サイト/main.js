console.log("main.js!!");

const ATTRIBUTION = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';
const ACCESS_TOKEN = "pk.eyJ1Ijoic2NyZXQ4Mzg1IiwiYSI6ImNsOXhnYmh6NDBhYjEzbnFhZjl6OHEyMWoifQ.YqALksz-tp57KlNzdSEvbA";

// Ready
$(document).ready(() => {
  console.log("Ready!!");
  // 緯度経度データ　座標
  const enosima = [35.30293261192817, 139.48180882480548]; //江ノ島

  // マップを作る
  let map = L.map("mapid").setView(enosima, 16);

  // マーカーを出す
  L.marker(enosima).addTo(map).bindPopup("江ノ島").openPopup();

  // マップの設定
  L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
    attribution: ATTRIBUTION, // 著作権表記
    accessToken: ACCESS_TOKEN, // アクセストークン
    id: "mapbox/streets-v11", // マップの種類
  }).addTo(map);
});
