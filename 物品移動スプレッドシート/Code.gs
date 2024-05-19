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

// これ以降外部スプレッドシートからのデータ追加に関するやつ

//内容を消去する
function deleteData() {
  const anotherSheetName = 'Data';// 対象シートを指定
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(anotherSheetName); 

  // 内容を削除
  sheet.clear();
}

function appendDataFrom3tou1kai() {
  // 別スプレッドシートのURLとシート名を入力
  const anotherSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1dzHYteRZMz8fmaN-86JwknLIeI7q2cpRAQbakblnFNc/edit#gid=0';
  const anotherSheetName = 'Data';// データをまとめるシートを指定

  // Dataシートを取得
  const dataSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Data');

  // 別スプレッドシートのデータを取得
  const anotherSheet = SpreadsheetApp.openByUrl(anotherSpreadsheetUrl).getSheetByName(anotherSheetName);
  const anotherDataRange = anotherSheet.getDataRange();
  const anotherValues = anotherDataRange.getValues();

  // 別スプレッドシートのデータを追記
  for (const row of anotherValues) {
    dataSheet.appendRow(row);
  }
}

function appendDataFrom311room() {
  // 別スプレッドシートのURLとシート名を入力
  const anotherSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1c7CiNA1KYtHr5WbySeeOj7mcIam-qrMuMacxdX_1laM/edit#gid=0';
  const anotherSheetName = 'Data';// データをまとめるシートを指定

  // Dataシートを取得
  const dataSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Data');

  // 別スプレッドシートのデータを取得
  const anotherSheet = SpreadsheetApp.openByUrl(anotherSpreadsheetUrl).getSheetByName(anotherSheetName);
  const anotherDataRange = anotherSheet.getDataRange();
  const anotherValues = anotherDataRange.getValues();

  // 別スプレッドシートのデータを追記
  for (const row of anotherValues) {
    dataSheet.appendRow(row);
  }
}

function appendDataFromLLroom() {
  // 別スプレッドシートのURLとシート名を入力
  const anotherSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/15YLD-mABnFYcGN793exRN02BxsH3SMrMeqC41UaqtnQ/edit#gid=0';
  const anotherSheetName = 'Data';// データをまとめるシートを指定

  // Dataシートを取得
  const dataSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Data');

  // 別スプレッドシートのデータを取得
  const anotherSheet = SpreadsheetApp.openByUrl(anotherSpreadsheetUrl).getSheetByName(anotherSheetName);
  const anotherDataRange = anotherSheet.getDataRange();
  const anotherValues = anotherDataRange.getValues();

  // 別スプレッドシートのデータを追記
  for (const row of anotherValues) {
    dataSheet.appendRow(row);
  }
}

function appendDataFromPilotis() {
  // 別スプレッドシートのURLとシート名を入力
  const anotherSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/102fwHdDQrA0Wekhil-GkMb62Rk2g14L5NW2-o8sFnq4/edit#gid=0';
  const anotherSheetName = 'Data';// データをまとめるシートを指定

  // Dataシートを取得
  const dataSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Data');

  // 別スプレッドシートのデータを取得
  const anotherSheet = SpreadsheetApp.openByUrl(anotherSpreadsheetUrl).getSheetByName(anotherSheetName);
  const anotherDataRange = anotherSheet.getDataRange();
  const anotherValues = anotherDataRange.getValues();

  // 別スプレッドシートのデータを追記
  for (const row of anotherValues) {
    dataSheet.appendRow(row);
  }
}

function appendDataToDataSheet() {
  // シート名を取得
  const sourceSheetName = "保存先"; // 保存先シートの名前
  const targetSheetName = "Data"; // Dataシートの名前

  // シートを取得
  const sourceSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sourceSheetName);
  const targetSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(targetSheetName);

  // 保存先シートの最終行を取得
  const lastRow = sourceSheet.getLastRow();

  // A列からD列のデータを取得
  const sourceDataRange = sourceSheet.getRange(1, 1, lastRow, 4); // 1行目から最終行まで、A列からD列を取得
  const sourceValues = sourceDataRange.getValues();

  // Dataシートの最終行を取得
  const targetLastRow = targetSheet.getLastRow();

  // Dataシートへの書き込み範囲を指定
  const targetDataRange = targetSheet.getRange(targetLastRow + 1, 1, sourceValues.length, sourceValues[0].length);

  // 保存先シートのデータをDataシートに追記
  targetDataRange.setValues(sourceValues);
}
