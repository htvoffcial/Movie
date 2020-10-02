



countup();

function countup (){
    
    var idc = setTimeout(countup, 1000);
$.ajax({
    type: "POST", //　POSTでも可
    url: "https://smn.glitch.me/App/auth.php", //　送り先
    //　渡したいデータ
    dataType : "json", //　データ形式を指定
    scriptCharset: 'utf-8' //　文字コードを指定
})

  .then(
    function( param ){　 
   if(param=="fhi"){
   }else{

var demo2 = document.getElementById("c");



   var obj = document.getElementById("fav");
  obj.href = "https://cdn.glitch.com/56e8ccb8-0084-421c-9bee-96df876fdde1%2FU2zTF7zJ43M34lH1600593691_1600593754.png?v=1600593834330";
       document.write("<title>認証あり</title><div style='background-color:#bad4d3;'><h3 style='font-family: 'Kosugi Maru', sans-serif;'>認証コードの通知</h3><hr>https://smn.glitch.me/より<br>認証コード:",param,"</div><hr>");
       
        
       document.title="認証コード:"+param;
         
           clearTimeout(idc);

       }
         
       
    },
  
  
    function( XMLHttpRequest, textStatus, errorThrown ){
        console.log( errorThrown ); //　エラー表示
});
}

  
  