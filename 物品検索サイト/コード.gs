//loading()で任意のスプレッドシートのデータを格納します。
function loading() {
    var ss = SpreadsheetApp.openById("1KOEJ53WvULm_O968Wl04DVbDsPrXlmMSLE41wmbH3jY");
    //上の""内を新しい物品移動スプレッドシートのURLのdとeditに挟まれた部分に置き換える。
    var listss = ss.getSheetByName("Database");
    //最終行を調べる
    var lastrow = listss.getLastRow();
    //ここでは2行1列目最終行6列目までを二次元配列に入れています。
    var list = listss.getRange(2, 1, lastrow-1, 6).getValues();

    return list;
}

function doGet() {
  // HTMLの中で fetchMenus()を呼び出ため、テンプレートを使う
  const html = HtmlService.createTemplateFromFile('index').evaluate();
  html.addMetaTag('viewport', 'width=device-width, initial-scale=1');
  html.setTitle('物品検索サイト │ 縣陵生徒会');
  return html;
}
