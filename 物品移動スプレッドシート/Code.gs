//プログラム元:https://qiita.com/takatama/items/5ef6b31c4f228f0393e1

const SHEET_NAME = '保存先';// 読み取ったQRコードのデータを保存するシートを指定.
const MENU1_SHEET_NAME = '目的';// 左側のメニューに表示される内容を記述したシートを指定.
const MENU2_SHEET_NAME = '場所';// 右側のメニューに表示される内容を記述したシートを指定.


// 各スプレッドシートから読み取り履歴取得
// Dataシート消去後各搬入場所→総合
function appendDataFromAllSheet() {
  deleteData();
  appendDataFrom3tou1kai();
  appendDataFrom311room();
  appendDataFromLLroom();
  appendDataFromPilotis();
  appendDataToDataSheet();
}


// 選択したメニューの値を送信する.
// text,menu1,menu2はindex.html内の値.
// new Date()は読み取った日時.
function onScan(text, menu1, menu2) {
  SpreadsheetApp.getActiveSpreadsheet()
    .getSheetByName(SHEET_NAME).appendRow([new Date(), menu1, menu2, text]);
}

// メニュー一覧を取得する
// 基本変更しない.
function fetchMenus1() {
  return SpreadsheetApp.getActiveSpreadsheet()
    .getSheetByName(MENU1_SHEET_NAME).getDataRange().getValues().map(row => row[0]);
}
function fetchMenus2() {
  return SpreadsheetApp.getActiveSpreadsheet()
    .getSheetByName(MENU2_SHEET_NAME).getDataRange().getValues().map(row => row[0]);
}

// 基本変更しない.
// .setTitleのところで、サイトのタイトルを指定する.
function doGet() {
  // HTMLの中で fetchMenus()を呼び出ため、テンプレートを使う
  const html = HtmlService.createTemplateFromFile('index').evaluate();
  html
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setTitle('物品一元管理QRコードリーダー │ 縣陵生徒会')
  return html;
}

