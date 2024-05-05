// loading()で任意のスプレッドシートのデータを格納します。
// URLの入れ方がわからない場合は以下のサイトを参照.
// https://qiita.com/setonao/items/ba6810c77930ab122c00#1-openbyidid

function loading() {
    var ss = SpreadsheetApp.openById("1KOEJ53WvULm_O968Wl04DVbDsPrXlmMSLE41wmbH3jY");// 物品移動スプレッドシートのURLを指定.
    //上の""内を新しい物品移動スプレッドシートのURLのdとeditに挟まれた部分に置き換える。
    var listss = ss.getSheetByName("Database");// 検索するシートを指定。基本書き換えない。
    //最終行を調べる
    var lastrow = listss.getLastRow();
    //2行1列目から最終行6列目までを検索対象に入れる。
    var list = listss.getRange(2, 1, lastrow-1, 6).getValues();

    return list;
}

// 基本変更しない.
// .setTitleのところで、サイトのタイトルを指定する.
function doGet() {
  // HTMLの中で fetchMenus()を呼び出ため、テンプレートを使う
  const html = HtmlService.createTemplateFromFile('index').evaluate();
  html.addMetaTag('viewport', 'width=device-width, initial-scale=1');
  html.setTitle('物品検索サイト │ 縣陵生徒会');
  return html;
}
