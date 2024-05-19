# 注意
```
SpreadsheetApp.openById('-------------------');
```
というコードで、---------------となっているところにスプレッドシートのURLをそのまま入力しても動きません。
指定されたスプレッドシートのIDと呼ばれる部分を入力してください。（下の画像の下線部）
![image](https://github.com/szkta/Item-transfar-project/assets/124339287/8eb5adf9-2b96-4ed6-9405-f0c330f54435)



# サイトが動作しなくなったときは
もしうまく動作しなかったときは、スプレッドシートと同じ名前のフォルダを開き、その中のファイルの内容をすべてコピーして、Apps Scriptの同じ名前のファイルに貼り付けてください。
もしくは大本のスプレッドシートをコピーし、それをデプロイして利用してください。

デプロイのやり方は以下の通りです。

1.パソコン室のパソコンを使って、デプロイしたいスプレッドシートを開く

2.拡張機能→Apps Scriptをクリックする

3.デプロイ→新しいデプロイをクリックする

4.次のユーザーとして実行を「自分」、アクセスできるユーザーを「全員」に設定したら「デプロイ」をクリック

5.このウェブ アプリケーションを使用するには、データへのアクセスを許可する必要があります、と出るので、「アクセスを承認」をクリック。

6.ポップアップして「Choose an account from kenryo.ed.jp」と出るので、自分の縣陵メールアドレスをクリック。

7.「～～wants to access your Google Account」と出ますが、これは「あなたのアカウントを利用してスプレッドシートに書き込む許可を与えるので正しいかどうか確認してください」という内容なので「Allow」をクリック。
そうすると、デプロイを更新しました、と出るはずです。ウェブアプリと書かれた下のURLが **「専用サイト」のURL** なのでどこかに保存しておいてください。
専用サイトのURLは「デプロイ」→「デプロイを管理」からも確認できます。

# スプレッドシートがうまく機能しなくなったときは
以下にスプレッドシート/シートごとの使用関数を載せるので、書き換えてください。

すべて２行目のデータを表示しています

## Databaseシート
### C列
```
=IFERROR(VLOOKUP(MAXIFS(Data!$A:$A,Data!$B:$B,"登録",Data!$D:$D,A2),Data!$A:$D,3,false),"存在しません")
```

### D列
```
=IFERROR(VLOOKUP(MAXIFS(Data!$A:$A,Data!$B:$B,"搬入",Data!$D:$D,A2),Data!$A:$D,3,false),"移動していません")
```

### E列
```
=IFERROR(VLOOKUP(MAXIFS(Data!$A:$A,Data!$B:$B,"貸出",Data!$D:$D,A2),Data!$A:$D,3,false),"貸し出していません")
```

### F列
```
=IFERROR(VLOOKUP(E2,'責任者'!$A:$B,2,FALSE),"貸し出していません")
```

### G列
```
=IFERROR(IFS(VLOOKUP(MAXIFS(Data!$A:$A,Data!$D:$D,A2),Data!$A:$D,2,false)="貸出","未返却",VLOOKUP(MAXIFS(Data!$A:$A,Data!$D:$D,A2),Data!$A:$D,2,false)="返却","返却済み"),"貸し出していません")
```

### H列
```
=IFERROR(IF(VLOOKUP(MAXIFS(Data!$A:$A,Data!$D:$D,A2),Data!$A:$D,2,false)="搬出","済","未"))
```

## Datatabeシート
### B列
```
=Data!A1
```

### C列
```
=Data!B1
```

### D列（書式なしテキストに設定）
```
=Data!C1
```

### E列
```
=Data!D1
```

### F列
```
=iferror(IFS(COUNTIF($E2,"C*")=1,"生徒用椅子",COUNTIF($E2,"D*")=1,"生徒用机",COUNTIF($E2,"E*")=1,"教卓",COUNTIF($E2,"F*")=1,"パイプ椅子",COUNTIF($E2,"G*")=1,"長机"),"")
```

### G列（書式なしテキストに設定）
```
=IFERROR(VLOOKUP($E2,Database!$A:$D,3,FALSE()),"")
```

## 各教室備品数
### B列
```
=COUNTIFS(Data!$C:$C,$A2,Data!$D:$D,"D*",Data!$B:$B, "登録")
```

### C列
```
=COUNTIFS(Data!$C:$C,$A2,Data!$D:$D,"C*",Data!$B:$B, "登録")
```

## モニター
### B列
```
=COUNTIFS(Data!$C:$C,$A2,Data!$D:$D,"D*")
```

### C列
```
=COUNTIFS(Data!$C:$C,$A2,Data!$D:$D,"C*")
```

### D列
```
=COUNTIF(Data!$C:$C,$A2)-B2-C2
```

### G列
```
=$E2-$B2
```

### H列
```
=$F2-$C2
```

### J列
```
=COUNTIFS(Data!$B:$B,"搬入",Data!$C:$C,$I2,Data!$D:$D, "D*")
```

### K列
```
=COUNTIFS(Data!$B:$B,"搬入",Data!$C:$C,$I2,Data!$D:$D, "C*")
```

### L列
```
=COUNTIFS(Data!$B:$B,"搬入",Data!$C:$C,$I2)-J2-K2
```

### O列
```
=$M2-$J2
```

### P列
```
=$N2-$K2
```

## 各教室からの持ち出し数
### B列
```
=COUNTIFS(Datatable!$G:$G,$A2,Datatable!$F:$F,"生徒用机",Datatable!$B:$B, "搬入")
```

### C列
```
=COUNTIFS(Datatable!$G:$G,$A2,Datatable!$F:$F,"生徒用椅子",Datatable!$C:$C, "搬入")
```

### D列
```
=COUNTIFS(Datatable!$G:$G,$A2,Datatable!$C:$C, "搬入")-B2-C2
```

### G列
```
=$E2-$B2
```

### H列
```
=$F2-$C2
```

### J列
```
=COUNTIFS(Datatable!$G:$G,$A2,Datatable!$F:$F,"生徒用机",Datatable!$D:$D, "搬出")
```

### K列
```
=COUNTIFS(Datatable!$G:$G,$A2,Datatable!$F:$F,"生徒用机",Datatable!$D:$D, "搬出")
```

### L列
```
=COUNTIFS(Datatable!$G:$G,$A2,Datatable!$D:$D, "搬出")-J2-K2
```

### O列
```
=$M2-$J2
```

### P列
```
=$N2-$K2
```

## そのほかのスプレッドシートの関数

## 搬入場所別スプレッドシート

### 場所
```
=IMPORTRANGE("*******","場所!A:A")
```
******* の部分は、物品移動スプレッドシートのURLに逐一書き換えてください。

# おわりに
不明点等あれば気軽に連絡ください。
プロフィールにあるインスタかツイッターまでDMをお送りいただければすぐ答えます。よろしくお願いします。

総務課物品移動担当者より
