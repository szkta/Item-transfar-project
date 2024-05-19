// 以下データ結合---------------
// ---------------------------

// 全データ取得
function appendDataFromAllSheet() {
  deleteData();
  appendDataFrom3tou1kai();
  appendDataFrom311room();
  appendDataFromLLroom();
  appendDataFromPilotis();
  appendDataFromMatome();
}

//内容を消去する
function deleteData() {
  var SS = SpreadsheetApp.openById('1KOEJ53WvULm_O968Wl04DVbDsPrXlmMSLE41wmbH3jY');
  const SheetName = 'Data';// 対象シートを指定
  var sheet = SS.getSheetByName(SheetName); 

  // 内容を削除
  sheet.clear();
}
//内容を取得する
function appendDataFrom3tou1kai() {
  // データを取得する元のスプレッドシートを開く
  var sourceSpreadsheet = SpreadsheetApp.openById('1dzHYteRZMz8fmaN-86JwknLIeI7q2cpRAQbakblnFNc');
  
  // データを取得するシートを取得
  var sourceSheet = sourceSpreadsheet.getSheetByName('Data');
  
  // データを格納する先のスプレッドシートを開く
  var destinationSpreadsheet = SpreadsheetApp.openById('1KOEJ53WvULm_O968Wl04DVbDsPrXlmMSLE41wmbH3jY');
  
  // データを格納する先のシートを取得
  var destinationSheet = destinationSpreadsheet.getSheetByName('Data');
  
  // 転記先のシートの最終行を取得
  var lastRow = destinationSheet.getLastRow();
  
  // データを取得する範囲を取得
  var sourceRange = sourceSheet.getDataRange();
  
  // 取得したデータの値を取得
  var sourceValues = sourceRange.getValues();
  
  // 転記先のシートにデータを書き込む
  for (var i = 0; i < sourceValues.length; i++) {
    var row = lastRow + i + 1;
    destinationSheet.getRange(row, 1, 1, sourceValues[i].length).setValues([sourceValues[i]]);
  }
}

function appendDataFrom311room() {
  // データを取得する元のスプレッドシートを開く
  var sourceSpreadsheet = SpreadsheetApp.openById('1c7CiNA1KYtHr5WbySeeOj7mcIam-qrMuMacxdX_1laM');
  
  // データを取得するシートを取得
  var sourceSheet = sourceSpreadsheet.getSheetByName('Data');
  
  // データを格納する先のスプレッドシートを開く
  var destinationSpreadsheet = SpreadsheetApp.openById('1KOEJ53WvULm_O968Wl04DVbDsPrXlmMSLE41wmbH3jY');
  
  // データを格納する先のシートを取得
  var destinationSheet = destinationSpreadsheet.getSheetByName('Data');
  
  // 転記先のシートの最終行を取得
  var lastRow = destinationSheet.getLastRow();
  
  // データを取得する範囲を取得
  var sourceRange = sourceSheet.getDataRange();
  
  // 取得したデータの値を取得
  var sourceValues = sourceRange.getValues();
  
  // 転記先のシートにデータを書き込む
  for (var i = 0; i < sourceValues.length; i++) {
    var row = lastRow + i + 1;
    destinationSheet.getRange(row, 1, 1, sourceValues[i].length).setValues([sourceValues[i]]);
  }
}

function appendDataFromLLroom() {
  // データを取得する元のスプレッドシートを開く
  var sourceSpreadsheet = SpreadsheetApp.openById('15YLD-mABnFYcGN793exRN02BxsH3SMrMeqC41UaqtnQ');
  
  // データを取得するシートを取得
  var sourceSheet = sourceSpreadsheet.getSheetByName('Data');
  
  // データを格納する先のスプレッドシートを開く
  var destinationSpreadsheet = SpreadsheetApp.openById('1KOEJ53WvULm_O968Wl04DVbDsPrXlmMSLE41wmbH3jY');
  
  // データを格納する先のシートを取得
  var destinationSheet = destinationSpreadsheet.getSheetByName('Data');
  
  // 転記先のシートの最終行を取得
  var lastRow = destinationSheet.getLastRow();
  
  // データを取得する範囲を取得
  var sourceRange = sourceSheet.getDataRange();
  
  // 取得したデータの値を取得
  var sourceValues = sourceRange.getValues();
  
  // 転記先のシートにデータを書き込む
  for (var i = 0; i < sourceValues.length; i++) {
    var row = lastRow + i + 1;
    destinationSheet.getRange(row, 1, 1, sourceValues[i].length).setValues([sourceValues[i]]);
  }
}

function appendDataFromPilotis() {
  // データを取得する元のスプレッドシートを開く
  var sourceSpreadsheet = SpreadsheetApp.openById('102fwHdDQrA0Wekhil-GkMb62Rk2g14L5NW2-o8sFnq4');
  
  // データを取得するシートを取得
  var sourceSheet = sourceSpreadsheet.getSheetByName('Data');
  
  // データを格納する先のスプレッドシートを開く
  var destinationSpreadsheet = SpreadsheetApp.openById('1KOEJ53WvULm_O968Wl04DVbDsPrXlmMSLE41wmbH3jY');
  
  // データを格納する先のシートを取得
  var destinationSheet = destinationSpreadsheet.getSheetByName('Data');
  
  // 転記先のシートの最終行を取得
  var lastRow = destinationSheet.getLastRow();
  
  // データを取得する範囲を取得
  var sourceRange = sourceSheet.getDataRange();
  
  // 取得したデータの値を取得
  var sourceValues = sourceRange.getValues();
  
  // 転記先のシートにデータを書き込む
  for (var i = 0; i < sourceValues.length; i++) {
    var row = lastRow + i + 1;
    destinationSheet.getRange(row, 1, 1, sourceValues[i].length).setValues([sourceValues[i]]);
  }
}

function appendDataFromMatome() {
  // データを取得する元のスプレッドシートを開く
  var sourceSpreadsheet = SpreadsheetApp.openById('1KOEJ53WvULm_O968Wl04DVbDsPrXlmMSLE41wmbH3jY');
  
  // データを取得するシートを取得
  var sourceSheet = sourceSpreadsheet.getSheetByName('保存先');
  
  // データを格納する先のシートを取得
  var destinationSheet = sourceSpreadsheet.getSheetByName('Data');
  
  // 転記先のシートの最終行を取得
  var lastRow = destinationSheet.getLastRow();
  
  // データを取得する範囲を取得
  var sourceRange = sourceSheet.getDataRange();
  
  // 取得したデータの値を取得
  var sourceValues = sourceRange.getValues();
  
  // 転記先のシートにデータを書き込む
  for (var i = 0; i < sourceValues.length; i++) {
    var row = lastRow + i + 1;
    destinationSheet.getRange(row, 1, 1, sourceValues[i].length).setValues([sourceValues[i]]);
  }
}

// 以降物品データ消去するプログラム-----------------
// ----------------------------------------------

// 全データ消去
function clearAllData() {
  clearDataof_3tou1kai();
  clearDataof_311room();
  clearDataof_LLroom();
  clearDataof_Pilotis();
  clearDataof_Matome();
}

// 3棟1階消去
function clearDataof_3tou1kai() {
  // 別のスプレッドシートを開く
  var spreadsheet = SpreadsheetApp.openById('1dzHYteRZMz8fmaN-86JwknLIeI7q2cpRAQbakblnFNc');

  // "Data"シートを取得
  var sheet = spreadsheet.getSheetByName('Data');

  // すべての値をクリア
  sheet.clear();
}
// 311消去
function clearDataof_311room() {
  // 別のスプレッドシートを開く
  var spreadsheet = SpreadsheetApp.openById('1c7CiNA1KYtHr5WbySeeOj7mcIam-qrMuMacxdX_1laM');

  // "Data"シートを取得
  var sheet = spreadsheet.getSheetByName('Data');

  // すべての値をクリア
  sheet.clear();
}
// LL教室消去
function clearDataof_LLroom() {
  // 別のスプレッドシートを開く
  var spreadsheet = SpreadsheetApp.openById('15YLD-mABnFYcGN793exRN02BxsH3SMrMeqC41UaqtnQ');

  // "Data"シートを取得
  var sheet = spreadsheet.getSheetByName('Data');

  // すべての値をクリア
  sheet.clear();
}
// ピロティ消去
function clearDataof_Pilotis() {
  // 別のスプレッドシートを開く
  var spreadsheet = SpreadsheetApp.openById('102fwHdDQrA0Wekhil-GkMb62Rk2g14L5NW2-o8sFnq4');

  // "Data"シートを取得
  var sheet = spreadsheet.getSheetByName('Data');

  // すべての値をクリア
  sheet.clear();
}
// まとめ消去
function clearDataof_Matome() {
  // 別のスプレッドシートを開く
  var spreadsheet = SpreadsheetApp.openById('1KOEJ53WvULm_O968Wl04DVbDsPrXlmMSLE41wmbH3jY');

  // "Data"シートを取得
  var sheet1 = spreadsheet.getSheetByName('Data');
  var sheet2 = spreadsheet.getSheetByName('保存先');

  // すべての値をクリア
  sheet1.clear();
  sheet2.clear();
}


function doGet() {
  // HTMLの中で fetchMenus()を呼び出ため、テンプレートを使う
  const html = HtmlService.createTemplateFromFile('index').evaluate();
  html
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setTitle('物品データ消去/結合 │ 縣陵生徒会')
  return html;
}
