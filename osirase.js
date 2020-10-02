



countup();

function countup (){
    var idc = setTimeout(countup, 1000);
    
$.ajax({
    type: "POST", //　POSTでも可
    url: "https://smn.glitch.me/App/ms.php", //　送り先
    //　渡したいデータ
    dataType : "json", //　データ形式を指定
    scriptCharset: 'utf-8' //　文字コードを指定
})

  .then(
    function( param ){　 
    
    
    
    
    
   if(param==""){
   }else{
    Push.create(param);
var demo2 = document.getElementById("c");


   
       document.write("<div style='background-color:#bad4d3;'><h3 style='font-family: 'Kosugi Maru', sans-serif;'>お知らせ受信</h3><hr>https://smn.glitch.me/の管理者よりメッセージがあります<br>内容:", param,"</div><hr>");
       
       
       
         
           clearTimeout(idc);
       }
         
       
    },
  
  
    function( XMLHttpRequest, textStatus, errorThrown ){
        console.log( errorThrown ); //　エラー表示
});
}

  
  