//繰り返し分（while)
// 複雑な条件処理を組み合わせたい場合はwhile文を使う
var count = 0;
while(count <3){
    count = count + 1;
    
    // alert("while文のテスト" + count + "回目のループです");

}
// 繰り返し文（for)
// ループさせたい回数が事前にわかってる場合はfor文を使う
for (var i=0; i<3; i++) {
// alert("for文のテキスト"　+ i + "回目のループです")

}

// 繰り返し（for文と配列を組み合わせた応用例)
var player_hand = ["グー","チョキ","パー"];
for (var i = 0; i <player_hand.length; i++) {
    // alert(player_hand[i]);
}

// 条件分岐（if分）
var judge = -1;
if(judge>0){
    // alert("judgeは正の数です")

}else if(judge ==0){
    // alert("judgeは０です")
}else if(judge<0){
    // alert("judgeは負の数です")
}else{
    // alert("judgeは数字ではありません")
}

// 色んな言語のこんにちはを表示する関数
function hello(language){
    var message ="";

    if(language ==1){
        message="사랑해（サランへ）";
    } else if(language ==2){
        message="돼지（テジ）";

    } else if(language ==3){
        message="싫어（シロ）";
    } else if(language ==4){
        message="재미（チェミ）";
    } else if(language ==5){
        message="학교（ハッキョ）";
    } else if(language ==6){
        message="먹기（モギ）";
    } else if(language ==7){
        message="바다（パダ）";
    } else if(language ==8){
        message="겨울（キョウル）";
    }else{
        message="想定されていない引数です";
    }
    alert(message);

}