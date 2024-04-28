//プログラム元:https://qiita.com/takatama/items/5ef6b31c4f228f0393e1 .

const SHEET_NAME = 'Data';
const MENU1_SHEET_NAME = '目的';
const MENU2_SHEET_NAME = '場所';


// 選択したメニューの値も送信する
function onScan(text, menu1, menu2) {
  SpreadsheetApp.getActiveSpreadsheet()
    .getSheetByName(SHEET_NAME).appendRow([new Date(), menu1, menu2, text]);
}

// メニュー一覧を取得する
function fetchMenus1() {
  return SpreadsheetApp.getActiveSpreadsheet()
    .getSheetByName(MENU1_SHEET_NAME).getDataRange().getValues().map(row => row[0]);
}
function fetchMenus2() {
  return SpreadsheetApp.getActiveSpreadsheet()
    .getSheetByName(MENU2_SHEET_NAME).getDataRange().getValues().map(row => row[0]);
}

//内容を消去する
function deleteData() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Data"); // Dataシートの名前を適宜変更してください

  // Dataシートの内容を削除
  sheet.clear();
}

function doGet() {
  // HTMLの中で fetchMenus()を呼び出ため、テンプレートを使う
  const html = HtmlService.createTemplateFromFile('index').evaluate();
  html
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setTitle('物品一元管理QRコードリーダー │ 縣陵生徒会')
  return html;
}
