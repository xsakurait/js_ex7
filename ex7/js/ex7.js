let img_num; //画像枚数
let img, cap; //画像配列
let img_path = "./img/"; //画像ファイルのパスをファイル名と分離
let count, mod_num; //クリックのカウント数、　カウントを画像枚数で割った剰余
let imgObj, capObj; //imgタグ,figcaptionタグのオブジェクト
let bttnObj, resetObj; //ボタン、リセットのオブジェクト
let crimgObj = [],
let recapObj = [];
// 画像のファイル配列
let img_file = ["Text.png", "Building.png", "BRIDGE.png", "BOAT.png"];
let img_alt = [
  "Photo of Text",
  "Photo of Building",
  "Photo of BRIDGE",
  "Photo of BOAT",
]; //alt要素の配列
let img_cap = ["Text", "Building", "BRIDGE", "BOAT"]; //figcapの配列

imgObj = document.getElementById("fig-img");
capObj = document.getElementById("fig-cap");
bttnObj = document.getElementById("change");
resetObj = document.getElementById("reset");

// 画像枚数をファイル名設定から取得
img_num = img_file.length; //length=配列の長さ取得メソッド,(Cはlen(配列)関数)
console.log("img_num=", img_num); //確認用ログ出力

count = 0;

function change() {
  mod_num = count % img_num;
  imgObj.src = img_path + img_file[mod_num];
  imgObj.alt = img_alt[mod_num];
  capObj.innerHTML = img_cap[mod_num];
}

function bttn() {
  count = count + 1;
  console.log("count =", count);
  change();
}

function reset() {
  count = 0;
  change();
}

// ボタンオブジェクトにクリックアクションと動作関数を割り当て
bttnObj.addEventListener(
  "click",
  function () {
    bttn();
  },
  false
);

resetObj.addEventListener(
  "click",
  function () {
    reset();
  },
  false
);
