var first;
$(document).ready(function(){
  var movee = new Audio();
  var checksound = new Audio();
  movee.src = "audio/move2.mp3";
  checksound.src = "audio/check.mp3";
  var rowss = [];
  rowss = $("th");
  for (var rr=0;rr<=rowss.length;rr++){
    var r = rowss[rr];
    var hh = $(r).find("img").attr("class");
    if(hh == "black"){
      $(r).css("pointer-events","none");
    }
    /*else if(hh == "white"){
      $(r).css("pointer-events","auto");
    }*/
        }
  $(".table").click(function(event){
     
    var txt2 = $(".turn").text();
    var txt3 = $(".turn2").text();
    var id = event.target.id;
    var a = document.getElementById(id);
    var i =  $(a).find("img").attr("id");
    var s = $(a).find("img").attr("src");
    var color = $(a).css( "background-color" );
    var b = $(a).find("img").attr("alt");
    var color2 = $(a).find("img").attr("class");
    
    if(color == "rgb(0, 0, 255)" || color=="rgb(255, 0, 0)"){
      var ht = '<div class="pos">'+first+'-'+id+'</div>';
      $(".positions").append(ht);
      movee.play();
          var row = [];
          row = $("th");
          //replace empty in background color orange
          for (var rr=0;rr<=row.length;rr++){ 
            var r = row[rr];
            var hh = $(r).css("background-color");
            
            if (hh == "rgb(0, 0, 255)" || hh=="rgb(255, 0, 0)" || hh=="rgb(255, 165, 0)"){
            $(".turn2").text("");
            if(hh=="rgb(255, 0, 0)"){
              if(color2 !=undefined){
              var div2 = '<div class="vv"><img src="'+s+'" alt="'+b+'" id="" class="'+color2+'"></img></div>';
                 //$(".u").append(div2);
              }
            }
              if( hh=="rgb(255, 165, 0)") {
                $(a).find("img").attr("id",id);
                var q =  $(r).find("img").attr("src");
                var q2 =  $(r).find("img").attr("alt");
                var cls =  $(r).find("img").attr("class");
                var cls5 =  $(r).find("img").attr("id");
                $(a).find("img").attr("alt",q2);
                $(a).find("img").attr("src",q);
                $(a).find("img").attr("class",cls);
                $(a).css({"background-color":""});
                var div = '<div class="vv"><img src="" alt="" id=""></img></div>';
                $(r).html(div);
                // var div2 = '<div class="vv"><img src="'+s+'" alt="'+b+'" id="'+i+'" class="'+color2+'"></img></div>';
                // $(".u").append(div2);
                $(r).css("background-color",);
              }
               $(r).css("background-color","");
             }
            }
            //checking check
            if(txt2 == "white turn"){
              var rows = [];
      rows = $("th");
      for (var rr=0;rr<=rows.length;rr++){
        var r = rows[rr];
        var place = $(r).find("img").attr("id");
        var hh = $(r).find("img").attr("class");
        var hh3 = $(r).find("img").attr("alt");
          if(hh3 == "queen" && hh == "white"){
            var m = place.charAt(1);
            var n = place.charAt(0);
            var array = ["a","b","c","d","e","f","g","h"];
            var pos = array.indexOf(n);
            //bottom
            for (var j=m;j<8;j++){
              var f = parseInt(j)+1;
              var s = place.replace(place.charAt(1),f);
              var l = document.getElementById(s);
              var ch = $(l).find("img").attr("alt");
              var cls = $(l).find("img").attr("class");
              
                if(ch!= "king" && cls == "black"){
                  break;
                }
                else if(ch== "king" && cls == "black") {
                  $(".turn2").text("CHECK !");
                  checksound.play();
                break;
                }
              
             }
            
          //top
        for (var p=m;p>1;p--){
          var f = parseInt(p)-1;
          var s = place.replace(place.charAt(1),f);
          var l = document.getElementById(s);
          var ch = $(l).find("img").attr("alt");
          var cls = $(l).find("img").attr("class");
          if(ch!= "king" && cls == "black"){
            break;
          }
          else if(ch== "king" && cls == "black") {
            $(".turn2").text("CHECK !");
            checksound.play();
          break;
          }
          }
          //right
        for (var right=pos+1;right<8;right++){
          var pos2 = array[right];
          var s = place.replace(place.charAt(0),pos2);
          var l = document.getElementById(s);
          var ch = $(l).find("img").attr("alt");
          var cls = $(l).find("img").attr("class");
          if(ch!= "king" && cls == "black"){
            break;
          }
          else if(ch== "king" && cls == "black") {
            $(".turn2").text("CHECK !");
            checksound.play();
          break;
          }
          }
          //left
          for (var left=pos-1;left>=0;left--){
            var pos2 = array[left];
            var s = place.replace(place.charAt(0),pos2);
            var l = document.getElementById(s);
            var ch = $(l).find("img").attr("alt");
            var cls = $(l).find("img").attr("class");
            if(ch!= "king" && cls == "black"){
              break;
            }
            else if(ch== "king" && cls == "black") {
              $(".turn2").text("CHECK !");
              checksound.play();
            break;
            }
          }
          var poss = pos;
              //bottom right cross
        for(var c2=parseInt(m)+1;c2<=8;c2++){
          for(var cross=poss+1;cross==poss+1;cross++){
            var c3 = array[cross];
            var poss = cross;
            var cc = c3+c2;
            var cross = cross+1;
            var l = document.getElementById(cc);
          }
          var ch = $(l).find("img").attr("alt");
          var cls = $(l).find("img").attr("class");
          if(ch!= "king" && cls == "black"){
            break;
          }
          else if(ch== "king" && cls == "black") {
            $(".turn2").text("CHECK !");
            checksound.play();
          break;
          }
            }
         var poss2 = pos;
              //top right cross
        for(var cc2=parseInt(m)-1;cc2>=1;cc2--){
          for(var cross2=poss2+1;cross2==poss2+1;cross2--){
            var c3 = array[cross2];
            var poss2 = cross2;
            var cc = c3+cc2;
            var cross2 = cross2+1;
            var l = document.getElementById(cc);
          }
          var ch = $(l).find("img").attr("alt");
          var cls = $(l).find("img").attr("class");
          if(ch!= "king" && cls == "black"){
            break;
          }
          else if(ch== "king" && cls == "black") {
            $(".turn2").text("CHECK !");
            checksound.play();
          break;
          }
          }
          var poss3 = pos;
              //top left cross
              for(var c2=parseInt(m)+1;c2<=8;c2++){
                for(var cross=poss3-1;cross==poss3-1;cross--){
                  var c3 = array[cross];
                  var poss3 = cross;
                  var cc = c3+c2;
                  var cross = cross+1;
                  var l = document.getElementById(cc);
                }
                var ch = $(l).find("img").attr("alt");
                var cls = $(l).find("img").attr("class");
                if(ch!= "king" && cls == "black"){
                  break;
                }
                else if(ch== "king" && cls == "black") {
                  $(".turn2").text("CHECK !");
                  checksound.play();
                break;
                }
              }
              var poss4 = pos;
              //bottom left cross
              for(var cc2=parseInt(m)-1;cc2>=1;cc2--){
                for(var cross2=poss4-1;cross2==poss4-1;cross2--){
                  var c3 = array[cross2];
                  var poss4 = cross2;
                  var cc = c3+cc2;
                  var cross2 = cross2+1;
                  var l = document.getElementById(cc);
                  
                }
                var ch = $(l).find("img").attr("alt");
                var cls = $(l).find("img").attr("class");
                if(ch!= "king" && cls == "black"){
                  break;
                }
                else if(ch== "king" && cls == "black") {
                  $(".turn2").text("CHECK !");
                  checksound.play();
                break;
                }
              }
            }
        if(hh3 == "rook" && hh == "white"){
        var m = place.charAt(1);
        var n = place.charAt(0);
        var array = ["a","b","c","d","e","f","g","h"];
        var pos = array.indexOf(n);
        //bottom
        for (var j=m;j<8;j++){
          var f = parseInt(j)+1;
          var s = place.replace(place.charAt(1),f);
          var l = document.getElementById(s);
          var ch = $(l).find("img").attr("alt");
          var cls = $(l).find("img").attr("class");
          if(ch!= "king" && cls == "black"){
            break;
          }
          else if(ch== "king" && cls == "black") {
            $(".turn2").text("CHECK !");
            checksound.play();
          break;
          }
        }
        //top
          for (var p=m;p>1;p--){
            var f = parseInt(p)-1;
            var s = place.replace(place.charAt(1),f);
            var l = document.getElementById(s);
            var ch = $(l).find("img").attr("alt");
            var cls = $(l).find("img").attr("class");
            if(ch!= "king" && cls == "black"){
              break;
            }
            else if(ch== "king" && cls == "black") {
              $(".turn2").text("CHECK !");
              checksound.play();
            break;
            }
            }
            //right
            
          for (var right=pos+1;right<8;right++){
              var pos2 = array[right];
              var s = place.replace(place.charAt(0),pos2);
              var l = document.getElementById(s);
              var ch = $(l).find("img").attr("alt");
              var cls = $(l).find("img").attr("class");
              if(ch!= "king" && cls == "black"){
                break;
              }
              else if(ch== "king" && cls == "black") {
                $(".turn2").text("CHECK !");
                checksound.play();
              break;
              }
              } 
              //left
              for (var left=pos-1;left>=0;left--){
                var pos2 = array[left];
                var s = place.replace(place.charAt(0),pos2);
                var l = document.getElementById(s);
                var ch = $(l).find("img").attr("alt");
                var cls = $(l).find("img").attr("class");
                if(ch!= "king" && cls == "black"){
                  break;
                }
                else if(ch== "king" && cls == "black") {
                  $(".turn2").text("CHECK !");
                  checksound.play();
                break;
                }
                }
          }
        
          if(hh3 == "bishop" && hh == "white"){
        var m = place.charAt(1);
        var n = place.charAt(0);
        var array = ["a","b","c","d","e","f","g","h"];
        var pos = array.indexOf(n);
        var poss = pos;
        //bottom right cross
  for(var c2=parseInt(m)+1;c2<=8;c2++){
    for(var cross=poss+1;cross==poss+1;cross++){
      var c3 = array[cross];
      var poss = cross;
      var cc = c3+c2;
      var cross = cross+1;
      var l = document.getElementById(cc);
    }
    var ch = $(l).find("img").attr("alt");
    var cls = $(l).find("img").attr("class");
    if(ch!= "king" && cls == "black"){
      break;
    }
    else if(ch== "king" && cls == "black") {
      $(".turn2").text("CHECK !");
      checksound.play();
    break;
    }
      }
        var poss2 = pos;
        //top right cross
  for(var cc2=parseInt(m)-1;cc2>=1;cc2--){
    for(var cross2=poss2+1;cross2==poss2+1;cross2--){
      var c3 = array[cross2];
      var poss2 = cross2;
      var cc = c3+cc2;
      var cross2 = cross2+1;
      var l = document.getElementById(cc);
    }
    var ch = $(l).find("img").attr("alt");
    var cls = $(l).find("img").attr("class");
    if(ch== "king" && cls == "black"){
      $(".turn2").text("CHECK !");
      checksound.play();
      break;
      }
    }
        var poss3 = pos;
        //top left cross
        for(var c2=parseInt(m)+1;c2<=8;c2++){
          for(var cross=poss3-1;cross==poss3-1;cross--){
            var c3 = array[cross];
            var poss3 = cross;
            var cc = c3+c2;
            var cross = cross+1;
            var l = document.getElementById(cc);
          }
          var ch = $(l).find("img").attr("alt");
          var cls = $(l).find("img").attr("class");
          if(ch!= "king" && cls == "black"){
            break;
          }
          else if(ch== "king" && cls == "black") {
            $(".turn2").text("CHECK !");
            checksound.play();
          break;
          }
        }
        var poss4 = pos;
        //bottom left cross
        for(var cc2=parseInt(m)-1;cc2>=1;cc2--){
          for(var cross2=poss4-1;cross2==poss4-1;cross2--){
            var c3 = array[cross2];
            var poss4 = cross2;
            var cc = c3+cc2;
            var cross2 = cross2+1;
            var l = document.getElementById(cc);
            
          }
          var ch = $(l).find("img").attr("alt");
          var cls = $(l).find("img").attr("class");
          if(ch!= "king" && cls == "black"){
            break;
          }
          else if(ch== "king" && cls == "black") {
            $(".turn2").text("CHECK !");
            checksound.play();
          break;
          }
        }
          }
          if(hh3 == "king" && hh == "white"){
            var m = place.charAt(1);
            var n = place.charAt(0);
            var array = ["a","b","c","d","e","f","g","h"];
            var pos = array.indexOf(n);
            var poss = pos;
            //bottom
        for (var j=m;j==m;j++){
          var f = parseInt(j)+1;
          var s = place.replace(place.charAt(1),f);
          var l = document.getElementById(s);
          var ch = $(l).find("img").attr("alt");
          var cls = $(l).find("img").attr("class");
          if(ch!= "king" && cls == "black"){
            break;
          }
          else if(ch== "king" && cls == "black") {
            $(".turn2").text("CHECK !");
            checksound.play();
          break;
          }
         }
         //top
        for (var p=m;p>m-1;p--){
          var f = parseInt(p)-1;
          var s = place.replace(place.charAt(1),f);
          var l = document.getElementById(s);
          var ch = $(l).find("img").attr("alt");
          var cls = $(l).find("img").attr("class");
          if(ch!= "king" && cls == "black"){
            break;
          }
          else if(ch== "king" && cls == "black") {
            $(".turn2").text("CHECK !");
            checksound.play();
          break;
          }
          }
        //right
        for (var right=pos+1;right==pos+1;right++){
          var pos2 = array[right];
          var s = place.replace(place.charAt(0),pos2);
          var l = document.getElementById(s);
          var ch = $(l).find("img").attr("alt");
          var cls = $(l).find("img").attr("class");
          if(ch!= "king" && cls == "black"){
            break;
          }
          else if(ch== "king" && cls == "black") {
            $(".turn2").text("CHECK !");
            checksound.play();
          break;
          }
          }
        //left
        for (var left=pos-1;left>pos-2;left--){
          var pos2 = array[left];
          var s = place.replace(place.charAt(0),pos2);
          var l = document.getElementById(s);
          var ch = $(l).find("img").attr("alt");
          var cls = $(l).find("img").attr("class");
          if(ch!= "king" && cls == "black"){
            break;
          }
          else if(ch== "king" && cls == "black") {
            $(".turn2").text("CHECK !");
            checksound.play();
          break;
          }
        }
        var poss = pos;
        //bottom right cross
        for(var c2=parseInt(m)+1;c2==parseInt(m)+1;c2++){
          for(var cross=poss+1;cross==poss+1;cross++){
      var c3 = array[cross];
      var poss = cross;
      var cc = c3+c2;
      var cross = cross+1;
      var l = document.getElementById(cc);
    }
    var ch = $(l).find("img").attr("alt");
    var cls = $(l).find("img").attr("class");
    if(ch!= "king" && cls == "black"){
      break;
    }
    else if(ch== "king" && cls == "black") {
      $(".turn2").text("CHECK !");
      checksound.play();
    break;
    }
        }
        var poss2 = pos;
              //top right cross
        for(var cc2=parseInt(m)-1;cc2>parseInt(m)-2;cc2--){
          for(var cross2=poss2+1;cross2==poss2+1;cross2--){
            var c3 = array[cross2];
            var poss2 = cross2;
            var cc = c3+cc2;
            var cross2 = cross2+1;
            var l = document.getElementById(cc);
          }
          var ch = $(l).find("img").attr("alt");
          var cls = $(l).find("img").attr("class");
          if(ch!= "king" && cls == "black"){
            break;
          }
          else if(ch== "king" && cls == "black") {
            $(".turn2").text("CHECK !");
            checksound.play();
          break;
          }
          }
          var poss3 = pos;
          //top left cross
          for(var c2=parseInt(m)+1;c2==parseInt(m)+1;c2++){
            for(var cross=poss3-1;cross==poss3-1;cross--){
              var c3 = array[cross];
              var poss3 = cross;
              var cc = c3+c2;
              var cross = cross+1;
              var l = document.getElementById(cc);
            }
            var ch = $(l).find("img").attr("alt");
            var cls = $(l).find("img").attr("class");
            if(ch!= "king" && cls == "black"){
              break;
            }
            else if(ch== "king" && cls == "black") {
              $(".turn2").text("CHECK !");
              checksound.play();
            break;
            }
          }
          var poss4 = pos;
              //bottom left cross
              for(var cc2=parseInt(m)-1;cc2>parseInt(m)-2;cc2--){
                for(var cross2=poss4-1;cross2==poss4-1;cross2--){
                  var c3 = array[cross2];
                  var poss4 = cross2;
                  var cc = c3+cc2;
                  var cross2 = cross2+1;
                  var l = document.getElementById(cc);
                  
                }
                var ch = $(l).find("img").attr("alt");
                var cls = $(l).find("img").attr("class");
                if(ch!= "king" && cls == "black"){
                  break;
                }
                else if(ch== "king" && cls == "black") {
                  $(".turn2").text("CHECK !");
                  checksound.play();
                break;
                }
              }
          }
          if(hh3 == "knight" && hh =="white"){
            var m = parseInt(place.charAt(1));
            var n = place.charAt(0);
            var array = ["a","b","c","d","e","f","g","h"];
            var pos = array.indexOf(n);
            //top left1 
        var tl11 = m-2;
        var tl12 = pos-1;
        var sec1 = array[tl12];
        var f1 = sec1 + tl11;
        var l = document.getElementById(f1);
        var ch = $(l).find("img").attr("alt");
        var cls = $(l).find("img").attr("class");
        if(ch!= "king" && cls == "black"){
          
        }
        else if(ch== "king" && cls == "black") {
          $(".turn2").text("CHECK !");
        break;
        }
        //top left2
        var tl21 = m-1;
        var tl22 = pos-2;
        var sec2 = array[tl22];
        var f2 = sec2 + tl21;
        var l = document.getElementById(f2);
        var ch = $(l).find("img").attr("alt");
        var cls = $(l).find("img").attr("class");
        if(ch!= "king" && cls == "black"){
         
        }
        else if(ch== "king" && cls == "black") {
          $(".turn2").text("CHECK !");
          checksound.play();
        break;
        }
        //top right1 
        var tr11 = m-2;
        var tr12 = pos+1;
        var sec3 = array[tr12];
        var f3 = sec3 + tr11;
        var l = document.getElementById(f3);
        var ch = $(l).find("img").attr("alt");
        var cls = $(l).find("img").attr("class");
        if(ch!= "king" && cls == "black"){
         
        }
        else if(ch== "king" && cls == "black") {
          $(".turn2").text("CHECK !");
          checksound.play();
        break;
        }
        //top right2
        var tr21 = m-1;
        var tr22 = pos+2;
        var sec4 = array[tr22];
        var f4 = sec4 + tr21;
        var l = document.getElementById(f4);
        var ch = $(l).find("img").attr("alt");
        var cls = $(l).find("img").attr("class");
        if(ch!= "king" && cls == "black"){
          
        }
        else if(ch== "king" && cls == "black") {
          $(".turn2").text("CHECK !");
          checksound.play();
        break;
        }
        //bottom left1 
        var bl11 = m+2;
        var bl12 = pos-1;
        var sec5 = array[bl12];
        var f5 = sec5 + bl11;
        var l = document.getElementById(f5);
        var ch = $(l).find("img").attr("alt");
        var cls = $(l).find("img").attr("class");
        if(ch!= "king" && cls == "black"){
          
        }
        else if(ch== "king" && cls == "black") {
          $(".turn2").text("CHECK !");
          checksound.play();
        break;
        }
        //bottom left2
        var bl21 = m+1;
        var bl22 = pos-2;
        var sec6 = array[bl22];
        var f6 = sec6 + bl21;
        var l = document.getElementById(f6);
        var ch = $(l).find("img").attr("alt");
        var cls = $(l).find("img").attr("class");
        if(ch!= "king" && cls == "black"){
         
        }
        else if(ch== "king" && cls == "black") {
          $(".turn2").text("CHECK !");
          checksound.play();
        break;
        }
        //bottom right1 
        var br11 = m+1;
        var br12 = pos+2;
        var sec7 = array[br12];
        var f7 = sec7 + br11;
        var l = document.getElementById(f7);
        var ch = $(l).find("img").attr("alt");
        var cls = $(l).find("img").attr("class");
        if(ch!= "king" && cls == "black"){
          
        }
        else if(ch== "king" && cls == "black") {
          $(".turn2").text("CHECK !");
          checksound.play();
        break;
        }
        //bottom right2
        var br21 = m+2;
        var br22 = pos+1;
        var sec8 = array[br22];
        var f8 = sec8 + br21;
        var l = document.getElementById(f8);
        var ch = $(l).find("img").attr("alt");
        var cls = $(l).find("img").attr("class");
        if(ch!= "king" && cls == "black"){
          
        }
        else if(ch== "king" && cls == "black") {
          $(".turn2").text("CHECK !");
          checksound.play();
        break;
        }
          }
          if(hh3 == "pawn" && hh == "white"){
        var m = place.charAt(1);
        var n = place.charAt(0);
        var array = ["a","b","c","d","e","f","g","h"];
        var pos = array.indexOf(n);
        var cc = parseInt(m)-1;
        var crs = pos+1;
        var crs2 = pos-1;
        var crsl = array[crs];
        var crsl2 = array[crs2];
        var dd1 = crsl + cc;
        var dd12 = crsl2 + cc;
        var ll = document.getElementById(dd1);
        var ll2 = document.getElementById(dd12);
        var ddimg = $(ll).find("img").attr("class");
        var ddimg2 = $(ll2).find("img").attr("class");
        var  move = parseInt(m)-1;
          var final = n + move; 
          var l = document.getElementById(final);
          var ch = $(ll).find("img").attr("alt");
          var cls = $(ll2).find("img").attr("alt");
          if(ddimg != ""){
          if(ch!= "king" && ddimg == "black"){
            
          }
           else if(ch== "king" && ddimg == "black") {
            $(".turn2").text("CHECK !");
            checksound.play();
          
          }
        }
         if (ddimg2 != ""){
         if(cls!= "king" && ddimg2 == "black"){
            
          }
           else if(cls== "king" && ddimg2 == "black") {
            $(".turn2").text("CHECK !");
            checksound.play();
          }
          }
        }
        }
            }
            if(txt2 == "black turn"){ 
              var rows = [];
      rows = $("th");
      for (var rr=0;rr<=rows.length;rr++){
        var r = rows[rr];
        var place = $(r).find("img").attr("id");
        var hh = $(r).find("img").attr("class");
        var hh3 = $(r).find("img").attr("alt");
          if(hh3 == "queen" && hh == "black"){
            var m = place.charAt(1);
        var n = place.charAt(0);
        var array = ["a","b","c","d","e","f","g","h"];
        var pos = array.indexOf(n);
        //bottom
        for (var j=m;j<8;j++){
          var f = parseInt(j)+1;
          var s = place.replace(place.charAt(1),f);
          var l = document.getElementById(s);
          var ch = $(l).find("img").attr("alt");
          var cls = $(l).find("img").attr("class");
          if(ch!= "king" && cls == "white" || cls == "black"){
            break;
          }
          else if(ch== "king" && cls == "white") {
            $(".turn2").text("CHECK !");
            checksound.play();
          break;
          }
          }
          //top
        for (var p=m;p>1;p--){
          var f = parseInt(p)-1;
          var s = place.replace(place.charAt(1),f);
          var l = document.getElementById(s);
          var ch = $(l).find("img").attr("alt");
          var cls = $(l).find("img").attr("class");
          if(ch!= "king" && cls == "white" || cls == "black"){
            break;
          }
          else if(ch== "king" && cls == "white") {
            $(".turn2").text("CHECK !");
            checksound.play();
          break;
          }
          }
          //right
        for (var right=pos+1;right<8;right++){
          var pos2 = array[right];
          var s = place.replace(place.charAt(0),pos2);
          var l = document.getElementById(s);
          var ch = $(l).find("img").attr("alt");
          var cls = $(l).find("img").attr("class");
          if(ch!= "king" && cls == "white" || cls == "black"){
            break;
          }
          else if(ch== "king" && cls == "white") {
            $(".turn2").text("CHECK !");
            checksound.play();
          break;
          }
          }
          //left
          for (var left=pos-1;left>=0;left--){
            var pos2 = array[left];
            var s = place.replace(place.charAt(0),pos2);
            var l = document.getElementById(s);
            var ch = $(l).find("img").attr("alt");
            var cls = $(l).find("img").attr("class");
            if(ch!= "king" && cls == "white" || cls == "black"){
              break;
            }
            else if(ch== "king" && cls == "white") {
              $(".turn2").text("CHECK !");
              checksound.play();
            break;
            }
          }
          var poss = pos;
              //bottom right cross
        for(var c2=parseInt(m)+1;c2<=8;c2++){
          for(var cross=poss+1;cross==poss+1;cross++){
            var c3 = array[cross];
            var poss = cross;
            var cc = c3+c2;
            var cross = cross+1;
            var l = document.getElementById(cc);
          }
          var ch = $(l).find("img").attr("alt");
          var cls = $(l).find("img").attr("class");
          if(ch!= "king" && cls == "white" || cls == "black"){
            break;
          }
          else if(ch== "king" && cls == "white") {
            $(".turn2").text("CHECK !");
            checksound.play();
          break;
          }
            }
         var poss2 = pos;
              //top right cross
        for(var cc2=parseInt(m)-1;cc2>=1;cc2--){
          for(var cross2=poss2+1;cross2==poss2+1;cross2--){
            var c3 = array[cross2];
            var poss2 = cross2;
            var cc = c3+cc2;
            var cross2 = cross2+1;
            var l = document.getElementById(cc);
          }
          var ch = $(l).find("img").attr("alt");
          var cls = $(l).find("img").attr("class");
          if(ch!= "king" && cls == "white" || cls == "black"){
            break;
          }
          else if(ch== "king" && cls == "white") {
            $(".turn2").text("CHECK !");
            checksound.play();
          break;
          }
          }
          var poss3 = pos;
              //top left cross
              for(var c2=parseInt(m)+1;c2<=8;c2++){
                for(var cross=poss3-1;cross==poss3-1;cross--){
                  var c3 = array[cross];
                  var poss3 = cross;
                  var cc = c3+c2;
                  var cross = cross+1;
                  var l = document.getElementById(cc);
                }
                var ch = $(l).find("img").attr("alt");
                var cls = $(l).find("img").attr("class");
                if(ch!= "king" && cls == "white" || cls == "black"){
                  break;
                }
                else if(ch== "king" && cls == "white") {
                  $(".turn2").text("CHECK !");
                  checksound.play();
                break;
                }
              }
              var poss4 = pos;
              //bottom left cross
              for(var cc2=parseInt(m)-1;cc2>=1;cc2--){
                for(var cross2=poss4-1;cross2==poss4-1;cross2--){
                  var c3 = array[cross2];
                  var poss4 = cross2;
                  var cc = c3+cc2;
                  var cross2 = cross2+1;
                  var l = document.getElementById(cc);
                  
                }
                var ch = $(l).find("img").attr("alt");
                var cls = $(l).find("img").attr("class");
                if(ch!= "king" && cls == "white" || cls == "black"){
                  break;
                }
                else if(ch== "king" && cls == "white") {
                  $(".turn2").text("CHECK !");
                  checksound.play();
                break;
                }
              }
          }
          if(hh3 == "rook" && hh == "black"){
        var m = place.charAt(1);
        var n = place.charAt(0);
        var array = ["a","b","c","d","e","f","g","h"];
        var pos = array.indexOf(n);
        //bottom
        for (var j=m;j<8;j++){
          var f = parseInt(j)+1;
          var s = place.replace(place.charAt(1),f);
          var l = document.getElementById(s);
          var ch = $(l).find("img").attr("alt");
          var cls = $(l).find("img").attr("class");
          if(ch!= "king" && cls == "white" || cls == "black"){
            break;
          }
          else if(ch== "king" && cls == "white") {
            $(".turn2").text("CHECK !");
            checksound.play();
          break;
          }
        }
        //top
          for (var p=m;p>1;p--){
            var f = parseInt(p)-1;
            var s = place.replace(place.charAt(1),f);
            var l = document.getElementById(s);
            var ch = $(l).find("img").attr("alt");
            var cls = $(l).find("img").attr("class");
            if(ch!= "king" && cls == "white" || cls == "black"){
              break;
            }
            else if(ch== "king" && cls == "white") {
              $(".turn2").text("CHECK !");
              checksound.play();
            break;
            }
            }
            //right
          for (var right=pos+1;right<8;right++){
              var pos2 = array[right];
              var s = place.replace(place.charAt(0),pos2);
              var l = document.getElementById(s);
              var ch = $(l).find("img").attr("alt");
              var cls = $(l).find("img").attr("class");
              if(ch!= "king" && cls == "white" || cls == "black"){
                break;
              }
              else if(ch== "king" && cls == "white") {
                $(".turn2").text("CHECK !");
                checksound.play();
              break;
              }
              }
              //left
              for (var left=pos-1;left>=0;left--){
                var pos2 = array[left];
                var s = place.replace(place.charAt(0),pos2);
                var l = document.getElementById(s);
                var ch = $(l).find("img").attr("alt");
                var cls = $(l).find("img").attr("class");
                if(ch!= "king" && cls == "white" || cls == "black"){
                  break;
                }
                else if(ch== "king" && cls == "white") {
                  $(".turn2").text("CHECK !");
                  checksound.play();
                break;
                }
                }
          }
          if(hh3 == "bishop" && hh == "black"){
        var m = place.charAt(1);
        var n = place.charAt(0);
        var array = ["a","b","c","d","e","f","g","h"];
        var pos = array.indexOf(n);
        var poss = pos;
        //bottom right cross
  for(var c2=parseInt(m)+1;c2<=8;c2++){
    for(var cross=poss+1;cross==poss+1;cross++){
      var c3 = array[cross];
      var poss = cross;
      var cc = c3+c2;
      var cross = cross+1;
      var l = document.getElementById(cc);
    }
    var ch = $(l).find("img").attr("alt");
    var cls = $(l).find("img").attr("class");
    if(ch!= "king" && cls == "white" || cls == "black"){
      break;
    }
    else if(ch== "king" && cls == "white") {
      $(".turn2").text("CHECK !");
      checksound.play();
    break;
    }
      }
        var poss2 = pos;
        //top right cross
  for(var cc2=parseInt(m)-1;cc2>=1;cc2--){
    for(var cross2=poss2+1;cross2==poss2+1;cross2--){
      var c3 = array[cross2];
      var poss2 = cross2;
      var cc = c3+cc2;
      var cross2 = cross2+1;
      var l = document.getElementById(cc);
    }
    var ch = $(l).find("img").attr("alt");
    var cls = $(l).find("img").attr("class");
    if(ch!= "king" && cls == "white" || cls == "black"){
      break;
    }
    else if(ch== "king" && cls == "white") {
      $(".turn2").text("CHECK !");
      checksound.play();
    break;
    }
    }
        var poss3 = pos;
        //top left cross
        for(var c2=parseInt(m)+1;c2<=8;c2++){
          for(var cross=poss3-1;cross==poss3-1;cross--){
            var c3 = array[cross];
            var poss3 = cross;
            var cc = c3+c2;
            var cross = cross+1;
            var l = document.getElementById(cc);
          }
          var ch = $(l).find("img").attr("alt");
          var cls = $(l).find("img").attr("class");
          if(ch!= "king" && cls == "white" || cls == "black"){
            break;
          }
          else if(ch== "king" && cls == "white") {
            $(".turn2").text("CHECK !");
            checksound.play();
          break;
          }
        }
        var poss4 = pos;
        //bottom left cross
        for(var cc2=parseInt(m)-1;cc2>=1;cc2--){
          for(var cross2=poss4-1;cross2==poss4-1;cross2--){
            var c3 = array[cross2];
            var poss4 = cross2;
            var cc = c3+cc2;
            var cross2 = cross2+1;
            var l = document.getElementById(cc);
            
          }
          var ch = $(l).find("img").attr("alt");
          var cls = $(l).find("img").attr("class");
          if(ch!= "king" && cls == "white" || cls == "black"){
            break;
          }
          else if(ch== "king" && cls == "white") {
            $(".turn2").text("CHECK !");
            checksound.play();
          break;
          }
        }
          }
          if(hh3 == "king" && hh == "black"){
            var m = place.charAt(1);
            var n = place.charAt(0);
            var array = ["a","b","c","d","e","f","g","h"];
            var pos = array.indexOf(n);
            var poss = pos;
            //bottom
        for (var j=m;j==m;j++){
          var f = parseInt(j)+1;
          var s = place.replace(place.charAt(1),f);
          var l = document.getElementById(s);
          var ch = $(l).find("img").attr("alt");
          var cls = $(l).find("img").attr("class");
          if(ch!= "king" && cls == "white" || cls == "black"){
            break;
          }
          else if(ch== "king" && cls == "white") {
            $(".turn2").text("CHECK !");
            checksound.play();
          break;
          }
         }
         //top
        for (var p=m;p>m-1;p--){
          var f = parseInt(p)-1;
          var s = place.replace(place.charAt(1),f);
          var l = document.getElementById(s);
          var ch = $(l).find("img").attr("alt");
          var cls = $(l).find("img").attr("class");
          if(ch!= "king" && cls == "white" || cls == "black"){
            break;
          }
          else if(ch== "king" && cls == "white") {
            $(".turn2").text("CHECK !");
            checksound.play();
          break;
          }
          }
        //right
        for (var right=pos+1;right==pos+1;right++){
          var pos2 = array[right];
          var s = place.replace(place.charAt(0),pos2);
          var l = document.getElementById(s);
          var ch = $(l).find("img").attr("alt");
          var cls = $(l).find("img").attr("class");
          if(ch!= "king" && cls == "white" || cls == "black"){
            break;
          }
          else if(ch== "king" && cls == "white") {
            $(".turn2").text("CHECK !");
            checksound.play();
          break;
          }
          }
        //left
        for (var left=pos-1;left>pos-2;left--){
          var pos2 = array[left];
          var s = place.replace(place.charAt(0),pos2);
          var l = document.getElementById(s);
          var ch = $(l).find("img").attr("alt");
          var cls = $(l).find("img").attr("class");
          if(ch!= "king" && cls == "white" || cls == "black"){
            break;
          }
          else if(ch== "king" && cls == "white") {
            $(".turn2").text("CHECK !");
            checksound.play();
          break;
          }
        }
        var poss = pos;
        //bottom right cross
        for(var c2=parseInt(m)+1;c2==parseInt(m)+1;c2++){
          for(var cross=poss+1;cross==poss+1;cross++){
      var c3 = array[cross];
      var poss = cross;
      var cc = c3+c2;
      var cross = cross+1;
      var l = document.getElementById(cc);
    }
    var ch = $(l).find("img").attr("alt");
    var cls = $(l).find("img").attr("class");
    if(ch!= "king" && cls == "white" || cls == "black"){
      break;
    }
    else if(ch== "king" && cls == "white") {
      $(".turn2").text("CHECK !");
      checksound.play();
    break;
    }
        }
        var poss2 = pos;
              //top right cross
        for(var cc2=parseInt(m)-1;cc2>parseInt(m)-2;cc2--){
          for(var cross2=poss2+1;cross2==poss2+1;cross2--){
            var c3 = array[cross2];
            var poss2 = cross2;
            var cc = c3+cc2;
            var cross2 = cross2+1;
            var l = document.getElementById(cc);
          }
          var ch = $(l).find("img").attr("alt");
          var cls = $(l).find("img").attr("class");
          if(ch!= "king" && cls == "white" || cls == "black"){
            break;
          }
          else if(ch== "king" && cls == "white") {
            $(".turn2").text("CHECK !");
            checksound.play();
          break;
          }
          }
          var poss3 = pos;
          //top left cross
          for(var c2=parseInt(m)+1;c2==parseInt(m)+1;c2++){
            for(var cross=poss3-1;cross==poss3-1;cross--){
              var c3 = array[cross];
              var poss3 = cross;
              var cc = c3+c2;
              var cross = cross+1;
              var l = document.getElementById(cc);
            }
            var ch = $(l).find("img").attr("alt");
            var cls = $(l).find("img").attr("class");
            if(ch!= "king" && cls == "white" || cls == "black"){
              break;
            }
            else if(ch== "king" && cls == "white") {
              $(".turn2").text("CHECK !");
              checksound.play();
            break;
            }
          }
          var poss4 = pos;
              //bottom left cross
              for(var cc2=parseInt(m)-1;cc2>parseInt(m)-2;cc2--){
                for(var cross2=poss4-1;cross2==poss4-1;cross2--){
                  var c3 = array[cross2];
                  var poss4 = cross2;
                  var cc = c3+cc2;
                  var cross2 = cross2+1;
                  var l = document.getElementById(cc);
                  
                }
                var ch = $(l).find("img").attr("alt");
                var cls = $(l).find("img").attr("class");
                if(ch!= "king" && cls == "white" || cls == "black"){
                  break;
                }
                else if(ch== "king" && cls == "white") {
                  $(".turn2").text("CHECK !");
                  checksound.play();
                break;
                }
              }
          }
          if(hh3 == "knight" && hh =="black"){
            var m = parseInt(place.charAt(1));
            var n = place.charAt(0);
            var array = ["a","b","c","d","e","f","g","h"];
            var pos = array.indexOf(n);
            //top left1 
        var tl11 = m-2;
        var tl12 = pos-1;
        var sec1 = array[tl12];
        var f1 = sec1 + tl11;
        var l = document.getElementById(f1);
        var ch = $(l).find("img").attr("alt");
        var cls = $(l).find("img").attr("class");
        if(ch!= "king" && cls == "white" || cls == "black"){
         
        }
        else if(ch== "king" && cls == "white") {
          $(".turn2").text("CHECK !");
          checksound.play();
        break;
        }
        //top left2
        var tl21 = m-1;
        var tl22 = pos-2;
        var sec2 = array[tl22];
        var f2 = sec2 + tl21;
        var l = document.getElementById(f2);
        var ch = $(l).find("img").attr("alt");
        var cls = $(l).find("img").attr("class");
        if(ch!= "king" && cls == "white" || cls == "black"){
          
        }
        else if(ch== "king" && cls == "white") {
          $(".turn2").text("CHECK !");
          checksound.play();
        break;
        }
        //top right1 
        var tr11 = m-2;
        var tr12 = pos+1;
        var sec3 = array[tr12];
        var f3 = sec3 + tr11;
        var l = document.getElementById(f3);
        var ch = $(l).find("img").attr("alt");
        var cls = $(l).find("img").attr("class");
        if(ch!= "king" && cls == "white" || cls == "black"){
          
        }
        else if(ch== "king" && cls == "white") {
          $(".turn2").text("CHECK !");
          checksound.play();
        break;
        }
        //top right2
        var tr21 = m-1;
        var tr22 = pos+2;
        var sec4 = array[tr22];
        var f4 = sec4 + tr21;
        var l = document.getElementById(f4);
        var ch = $(l).find("img").attr("alt");
        var cls = $(l).find("img").attr("class");
        if(ch!= "king" && cls == "white" || cls == "black"){
          
        }
        else if(ch== "king" && cls == "white") {
          $(".turn2").text("CHECK !");
          checksound.play();
       
        }
        //bottom left1 
        var bl11 = m+2;
        var bl12 = pos-1;
        var sec5 = array[bl12];
        var f5 = sec5 + bl11;
        var l = document.getElementById(f5);
        var ch = $(l).find("img").attr("alt");
        var cls = $(l).find("img").attr("class");
        if(ch!= "king" && cls == "white" || cls == "black"){
         
        }
        else if(ch== "king" && cls == "white") {
          $(".turn2").text("CHECK !");
          checksound.play();
        break;
        }
        //bottom left2
        var bl21 = m+1;
        var bl22 = pos-2;
        var sec6 = array[bl22];
        var f6 = sec6 + bl21;
        var l = document.getElementById(f6);
        var ch = $(l).find("img").attr("alt");
        var cls = $(l).find("img").attr("class");
        if(ch!= "king" && cls == "white" || cls == "black"){
          
        }
        else if(ch== "king" && cls == "white") {
          $(".turn2").text("CHECK !");
          checksound.play();
        break;
        }
        //bottom right1 
        var br11 = m+1;
        var br12 = pos+2;
        var sec7 = array[br12];
        var f7 = sec7 + br11;
        var l = document.getElementById(f7);
        var ch = $(l).find("img").attr("alt");
        var cls = $(l).find("img").attr("class");
        if(ch!= "king" && cls == "white" || cls == "black"){
          
        }
        else if(ch== "king" && cls == "white") {
          $(".turn2").text("CHECK !");
          checksound.play();
        break;
        }
        //bottom right2
        var br21 = m+2;
        var br22 = pos+1;
        var sec8 = array[br22];
        var f8 = sec8 + br21;
        var l = document.getElementById(f8);
        var ch = $(l).find("img").attr("alt");
        var cls = $(l).find("img").attr("class");
        if(ch!= "king" && cls == "white" || cls == "black"){
         
        }
        else if(ch== "king" && cls == "white") {
          $(".turn2").text("CHECK !");
          checksound.play();
        break;
        }
          }
          if(hh3 == "pawn" && hh == "black"){
        var m = place.charAt(1);
        var n = place.charAt(0);
        var array = ["a","b","c","d","e","f","g","h"];
        var pos = array.indexOf(n);
        var cc = parseInt(m)+1;
        var crs = pos+1;
        var crs2 = pos-1;
        var crsl = array[crs];
        var crsl2 = array[crs2];
        var dd1 = crsl + cc;
        var dd12 = crsl2 + cc;
        var ll = document.getElementById(dd1);
        var ll2 = document.getElementById(dd12);
        var ddimg = $(ll).find("img").attr("class");
        var ddimg2 = $(ll2).find("img").attr("class");
        var  move = parseInt(m)-1;
          var final = n + move; 
          var l = document.getElementById(final);
          var ch = $(ll).find("img").attr("alt");
          var cls = $(ll2).find("img").attr("alt");
          if(ddimg != ""){
            if(ch!= "king" && ddimg == "white"){
              
            }
             else if(ch== "king" && ddimg == "white") {
              $(".turn2").text("CHECK !");
              checksound.play();
            
            }
          }
           if (ddimg2 != ""){
           if(cls!= "king" && ddimg2 == "white"){
              
            }
             else if(cls== "king" && ddimg2 == "white") {
              $(".turn2").text("CHECK !");
              checksound.play();
            
            }
            }
          }
        }
            }
            //pointer events
             if(txt2 == "white turn"){
              $(".turn").text("black turn");
              //$("#a7").css("pointer-events","none");
              var rows = [];
      rows = $("th");
      for (var rr=0;rr<=rows.length;rr++){
        var r = rows[rr];
        var hh = $(r).find("img").attr("class");
        var hh3 = $(r).css("background-color");
        if(hh == "white"){
          $(r).css("pointer-events","none");
        }
        else if(hh == "black"){
          $(r).css("pointer-events","auto");
        }
        /*if(hh == "white" && hh3 =="rgb(255, 0, 0)"){
          $(r).css("pointer-events","auto");
        }*/
            }
          }
            if(txt2 == "black turn"){
              $(".turn").text("white turn");
              var rows = [];
      rows = $("th");
      for (var rr=0;rr<=rows.length;rr++){
        var r = rows[rr];
        var hh = $(r).find("img").attr("class");
        var hh3 = $(r).css("background-color");
        if(hh == "black"){
          $(r).css("pointer-events","none");
        }
        else if(hh == "white"){
          $(r).css("pointer-events","auto");
        }
        /*if(hh == "black" && hh3 =="rgb(255, 0, 0)"){
          $(r).css("pointer-events","auto");
        }*/
            }
              
            }
           
    }
  
  
    else if((color == "rgb(186, 202, 68)" || color=="rgb(118, 150, 86)") && b!= undefined){
      first = id;
      var row = [];
      row = $("th");
      for (var rr=0;rr<=row.length;rr++){
        var r = row[rr];
        var hh = $(r).css("background-color");
        if (hh == "rgb(0, 0, 255)" || hh=="rgb(255, 0, 0)" || hh=="rgb(255, 165, 0)"){
          if( hh=="rgb(255, 0, 0)"){
            $(r).css("background-color","");
            $(r).css("pointer-events","none");
          }
          $(r).css("background-color","");
        }
      }
      
      if(b == "queen"){
        $(a).css({"background-color":"orange"});
        var m = id.charAt(1);
        var n = id.charAt(0);
        var array = ["a","b","c","d","e","f","g","h"];
        var pos = array.indexOf(n);
        //bottom
        for (var j=m;j<8;j++){
        var f = parseInt(j)+1;
        var s = id.replace(id.charAt(1),f);
        var l = document.getElementById(s);
        var ch = $(l).find("img").attr("alt");
        var cls = $(l).find("img").attr("class");
        if(ch==""){
        $(l).css({"background-color":"blue"});
        }
        else {
          if(cls == color2){

            $(l).css({"background-color":""});
            break;
          }
          else {
          $(l).css({"background-color":"red"});
          $(l).css("pointer-events","auto");
          break;
          }
        }
       }
      //top
        for (var p=m;p>1;p--){
          var f = parseInt(p)-1;
          var s = id.replace(id.charAt(1),f);
          var l = document.getElementById(s);
          var ch = $(l).find("img").attr("alt");
          var cls = $(l).find("img").attr("class");
        if(ch== ""){
        $(l).css({"background-color":"blue"});
        }
        else {
          if(cls == color2){
            $(l).css({"background-color":""});
            break;
          }
          else {
          $(l).css({"background-color":"red"});
          $(l).css("pointer-events","auto");
          break;
          }
        }
          }
          //right
        for (var right=pos+1;right<8;right++){
            var pos2 = array[right];
            var s = id.replace(id.charAt(0),pos2);
            var l = document.getElementById(s);
            var ch = $(l).find("img").attr("alt");
            var cls = $(l).find("img").attr("class");
            if(ch==""){
               $(l).css({"background-color":"blue"});
            }
            else {
              if(cls == color2){
                $(l).css({"background-color":""});
                break;
              }
              else {
                 $(l).css({"background-color":"red"});
                 $(l).css("pointer-events","auto");
                 break;
              }
        }
            }
            //left
        for (var left=pos-1;left>=0;left--){
              var pos2 = array[left];
              var s = id.replace(id.charAt(0),pos2);
              var l = document.getElementById(s);
              var ch = $(l).find("img").attr("alt");
              var cls = $(l).find("img").attr("class");
              if(ch==""){
                $(l).css({"background-color":"blue"});
              }
              else {
                if(cls == color2){
                  $(l).css({"background-color":""});
                  break;
                }
                else {
                  $(l).css({"background-color":"red"});
                  $(l).css("pointer-events","auto");
                  break;
                }
              }
            }
              var poss = pos;
              //bottom right cross
        for(var c2=parseInt(m)+1;c2<=8;c2++){
          for(var cross=poss+1;cross==poss+1;cross++){
            var c3 = array[cross];
            var poss = cross;
            var cc = c3+c2;
            var cross = cross+1;
            var l = document.getElementById(cc);
          }
          var ch = $(l).find("img").attr("alt");
          var cls = $(l).find("img").attr("class");
          if(ch==""){
              $(l).css({"background-color":"blue"});
          }
          else {
            if(cls == color2){
                $(l).css({"background-color":""});
                break;
            }
            else {
                 $(l).css({"background-color":"red"});
                 $(l).css("pointer-events","auto");
                break;
                }
              }
            }
              var poss2 = pos;
              //top right cross
        for(var cc2=parseInt(m)-1;cc2>=1;cc2--){
          for(var cross2=poss2+1;cross2==poss2+1;cross2--){
            var c3 = array[cross2];
            var poss2 = cross2;
            var cc = c3+cc2;
            var cross2 = cross2+1;
            var l = document.getElementById(cc);
          }
          var ch = $(l).find("img").attr("alt");
          var cls = $(l).find("img").attr("class");
          if(ch==""){
              $(l).css({"background-color":"blue"});
          }
          else {
             if(cls == color2){
               $(l).css({"background-color":""});
               break;
              }
              else {
                $(l).css({"background-color":"red"});
                $(l).css("pointer-events","auto");
                break;
               }
              }
          }
              var poss3 = pos;
              //top left cross
              for(var c2=parseInt(m)+1;c2<=8;c2++){
                for(var cross=poss3-1;cross==poss3-1;cross--){
                  var c3 = array[cross];
                  var poss3 = cross;
                  var cc = c3+c2;
                  var cross = cross+1;
                  var l = document.getElementById(cc);
                }
                var ch = $(l).find("img").attr("alt");
                var cls = $(l).find("img").attr("class");
                  if(ch==""){
                  $(l).css({"background-color":"blue"});
                  }
                  else {
                    if(cls == color2){
                      $(l).css({"background-color":""});
                      break;
                    }
                    else {
                    $(l).css({"background-color":"red"});
                    $(l).css("pointer-events","auto");
                    break;
                    }
                  }
              }
              var poss4 = pos;
              //bottom left cross
              for(var cc2=parseInt(m)-1;cc2>=1;cc2--){
                for(var cross2=poss4-1;cross2==poss4-1;cross2--){
                  var c3 = array[cross2];
                  var poss4 = cross2;
                  var cc = c3+cc2;
                  var cross2 = cross2+1;
                  var l = document.getElementById(cc);
                  
                }
                var ch = $(l).find("img").attr("alt");
                var cls = $(l).find("img").attr("class");
                  if(ch==""){
                  $(l).css({"background-color":"blue"});
                  }
                  else {
                    if(cls == color2){
                      $(l).css({"background-color":""});
                      break;
                    }
                    else {
                    $(l).css({"background-color":"red"});
                    $(l).css("pointer-events","auto");
                    break;
                    }
                  }
              }
      }
      if(b == "rook"){
        $(a).css({"background-color":"orange"});
        var m = id.charAt(1);
        var n = id.charAt(0);
        var array = ["a","b","c","d","e","f","g","h"];
        var pos = array.indexOf(n);
        //bottom
        for (var j=m;j<8;j++){
        var f = parseInt(j)+1;
        var s = id.replace(id.charAt(1),f);
        var l = document.getElementById(s);
        var ch = $(l).find("img").attr("alt");
        var cls = $(l).find("img").attr("class");
        if(ch==""){
        $(l).css({"background-color":"blue"});
        }
        else {
          if(cls == color2){

            $(l).css({"background-color":""});
            break;
          }
          else {
          $(l).css({"background-color":"red"});
          $(l).css("pointer-events","auto");
          break;
          }
        }
      }
      //top
        for (var p=m;p>1;p--){
          var f = parseInt(p)-1;
          var s = id.replace(id.charAt(1),f);
          var l = document.getElementById(s);
          var ch = $(l).find("img").attr("alt");
          var cls = $(l).find("img").attr("class");
        if(ch== ""){
        $(l).css({"background-color":"blue"});
        }
        else {
          if(cls == color2){
            $(l).css({"background-color":""});
            break;
          }
          else {
          $(l).css({"background-color":"red"});
          $(l).css("pointer-events","auto");
          break;
          }
        }
          }
          //right
        for (var right=pos+1;right<8;right++){
            var pos2 = array[right];
            var s = id.replace(id.charAt(0),pos2);
            var l = document.getElementById(s);
            var ch = $(l).find("img").attr("alt");
            var cls = $(l).find("img").attr("class");
        if(ch==""){
        $(l).css({"background-color":"blue"});
        }
        else {
          if(cls == color2){
            $(l).css({"background-color":""});
            break;
          }
          else {
          $(l).css({"background-color":"red"});
          $(l).css("pointer-events","auto");
          break;
          }
        }
            }
            //left
            for (var left=pos-1;left>=0;left--){
              var pos2 = array[left];
              var s = id.replace(id.charAt(0),pos2);
              var l = document.getElementById(s);
              var ch = $(l).find("img").attr("alt");
              var cls = $(l).find("img").attr("class");
        if(ch==""){
        $(l).css({"background-color":"blue"});
        }
        else {
          if(cls == color2){
            $(l).css({"background-color":""});
            break;
          }
          else {
          $(l).css({"background-color":"red"});
          $(l).css("pointer-events","auto");
          break;
          }
        }
              }
      }
      if(b == "bishop"){
        $(a).css({"background-color":"orange"});
        var m = id.charAt(1);
        var n = id.charAt(0);
        var array = ["a","b","c","d","e","f","g","h"];
        var pos = array.indexOf(n);
        var poss = pos;
        //bottom right cross
  for(var c2=parseInt(m)+1;c2<=8;c2++){
    for(var cross=poss+1;cross==poss+1;cross++){
      var c3 = array[cross];
      var poss = cross;
      var cc = c3+c2;
      var cross = cross+1;
      var l = document.getElementById(cc);
    }
    var ch = $(l).find("img").attr("alt");
    var cls = $(l).find("img").attr("class");
    if(ch==""){
        $(l).css({"background-color":"blue"});
    }
    else {
      if(cls == color2){
          $(l).css({"background-color":""});
          break;
      }
      else {
           $(l).css({"background-color":"red"});
           $(l).css("pointer-events","auto");
          break;
          }
        }
      }
        var poss2 = pos;
        //top right cross
  for(var cc2=parseInt(m)-1;cc2>=1;cc2--){
    for(var cross2=poss2+1;cross2==poss2+1;cross2--){
      var c3 = array[cross2];
      var poss2 = cross2;
      var cc = c3+cc2;
      var cross2 = cross2+1;
      var l = document.getElementById(cc);
    }
    var ch = $(l).find("img").attr("alt");
    var cls = $(l).find("img").attr("class");
    if(ch==""){
        $(l).css({"background-color":"blue"});
    }
    else {
       if(cls == color2){
         $(l).css({"background-color":""});
         break;
        }
        else {
          $(l).css({"background-color":"red"});
          $(l).css("pointer-events","auto");
          break;
         }
        }
    }
        var poss3 = pos;
        //top left cross
        for(var c2=parseInt(m)+1;c2<=8;c2++){
          for(var cross=poss3-1;cross==poss3-1;cross--){
            var c3 = array[cross];
            var poss3 = cross;
            var cc = c3+c2;
            var cross = cross+1;
            var l = document.getElementById(cc);
          }
          var ch = $(l).find("img").attr("alt");
          var cls = $(l).find("img").attr("class");
            if(ch==""){
            $(l).css({"background-color":"blue"});
            }
            else {
              if(cls == color2){
                $(l).css({"background-color":""});
                break;
              }
              else {
              $(l).css({"background-color":"red"});
              $(l).css("pointer-events","auto");
              break;
              }
            }
        }
        var poss4 = pos;
        //bottom left cross
        for(var cc2=parseInt(m)-1;cc2>=1;cc2--){
          for(var cross2=poss4-1;cross2==poss4-1;cross2--){
            var c3 = array[cross2];
            var poss4 = cross2;
            var cc = c3+cc2;
            var cross2 = cross2+1;
            var l = document.getElementById(cc);
            
          }
          var ch = $(l).find("img").attr("alt");
          var cls = $(l).find("img").attr("class");
            if(ch==""){
            $(l).css({"background-color":"blue"});
            }
            else {
              if(cls == color2){
                $(l).css({"background-color":""});
                break;
              }
              else {
              $(l).css({"background-color":"red"});
              $(l).css("pointer-events","auto");
              break;
              }
            }
        }
      }
      if(b == "king"){
        $(a).css({"background-color":"orange"});
        var m = id.charAt(1);
        var n = id.charAt(0);
        var array = ["a","b","c","d","e","f","g","h"];
        var pos = array.indexOf(n);
        var poss = pos;
        //bottom
        for (var j=m;j==m;j++){
          var f = parseInt(j)+1;
          var s = id.replace(id.charAt(1),f);
          var l = document.getElementById(s);
          var ch = $(l).find("img").attr("alt");
          var cls = $(l).find("img").attr("class");
          if(ch==""){
          $(l).css({"background-color":"blue"});
          }
          else {
            if(cls == color2){
  
              $(l).css({"background-color":""});
              break;
            }
            else {
            $(l).css({"background-color":"red"});
            $(l).css("pointer-events","auto");
            break;
            }
          }
         }
         //top
        for (var p=m;p>m-1;p--){
          var f = parseInt(p)-1;
          var s = id.replace(id.charAt(1),f);
          var l = document.getElementById(s);
          var ch = $(l).find("img").attr("alt");
          var cls = $(l).find("img").attr("class");
        if(ch== ""){
        $(l).css({"background-color":"blue"});
        }
        else {
          if(cls == color2){
            $(l).css({"background-color":""});
            break;
          }
          else {
          $(l).css({"background-color":"red"});
          $(l).css("pointer-events","auto");
          break;
          }
        }
          }
        //right
        for (var right=pos+1;right==pos+1;right++){
          var pos2 = array[right];
          var s = id.replace(id.charAt(0),pos2);
          var l = document.getElementById(s);
          var ch = $(l).find("img").attr("alt");
          var cls = $(l).find("img").attr("class");
          if(ch==""){
             $(l).css({"background-color":"blue"});
          }
          else {
            if(cls == color2){
              $(l).css({"background-color":""});
              break;
            }
            else {
               $(l).css({"background-color":"red"});
               $(l).css("pointer-events","auto");
               break;
            }
      }
          }
        //left
        for (var left=pos-1;left>pos-2;left--){
          var pos2 = array[left];
          var s = id.replace(id.charAt(0),pos2);
          var l = document.getElementById(s);
          var ch = $(l).find("img").attr("alt");
          var cls = $(l).find("img").attr("class");
          if(ch==""){
            $(l).css({"background-color":"blue"});
          }
          else {
            if(cls == color2){
              $(l).css({"background-color":""});
              break;
            }
            else {
              $(l).css({"background-color":"red"});
              $(l).css("pointer-events","auto");
              break;
            }
          }
        }
        var poss = pos;
        //bottom right cross
        for(var c2=parseInt(m)+1;c2==parseInt(m)+1;c2++){
          for(var cross=poss+1;cross==poss+1;cross++){
      var c3 = array[cross];
      var poss = cross;
      var cc = c3+c2;
      var cross = cross+1;
      var l = document.getElementById(cc);
    }
    var ch = $(l).find("img").attr("alt");
    var cls = $(l).find("img").attr("class");
    if(ch==""){
        $(l).css({"background-color":"blue"});
    }
    else {
      if(cls == color2){
          $(l).css({"background-color":""});
          break;
      }
      else {
           $(l).css({"background-color":"red"});
           $(l).css("pointer-events","auto");
          break;
          }
        }
        }
        var poss2 = pos;
              //top right cross
        for(var cc2=parseInt(m)-1;cc2>parseInt(m)-2;cc2--){
          for(var cross2=poss2+1;cross2==poss2+1;cross2--){
            var c3 = array[cross2];
            var poss2 = cross2;
            var cc = c3+cc2;
            var cross2 = cross2+1;
            var l = document.getElementById(cc);
          }
          var ch = $(l).find("img").attr("alt");
          var cls = $(l).find("img").attr("class");
          if(ch==""){
              $(l).css({"background-color":"blue"});
          }
          else {
             if(cls == color2){
               $(l).css({"background-color":""});
               break;
              }
              else {
                $(l).css({"background-color":"red"});
                $(l).css("pointer-events","auto");
                break;
               }
              }
          }
          var poss3 = pos;
          //top left cross
          for(var c2=parseInt(m)+1;c2==parseInt(m)+1;c2++){
            for(var cross=poss3-1;cross==poss3-1;cross--){
              var c3 = array[cross];
              var poss3 = cross;
              var cc = c3+c2;
              var cross = cross+1;
              var l = document.getElementById(cc);
            }
            var ch = $(l).find("img").attr("alt");
            var cls = $(l).find("img").attr("class");
              if(ch==""){
              $(l).css({"background-color":"blue"});
              }
              else {
                if(cls == color2){
                  $(l).css({"background-color":""});
                  break;
                }
                else {
                $(l).css({"background-color":"red"});
                $(l).css("pointer-events","auto");
                break;
                }
              }
          }
          var poss4 = pos;
              //bottom left cross
              for(var cc2=parseInt(m)-1;cc2>parseInt(m)-2;cc2--){
                for(var cross2=poss4-1;cross2==poss4-1;cross2--){
                  var c3 = array[cross2];
                  var poss4 = cross2;
                  var cc = c3+cc2;
                  var cross2 = cross2+1;
                  var l = document.getElementById(cc);
                  
                }
                var ch = $(l).find("img").attr("alt");
                var cls = $(l).find("img").attr("class");
                  if(ch==""){
                  $(l).css({"background-color":"blue"});
                  }
                  else {
                    if(cls == color2){
                      $(l).css({"background-color":""});
                      break;
                    }
                    else {
                    $(l).css({"background-color":"red"});
                    $(l).css("pointer-events","auto");
                    break;
                    }
                  }
              }
      }
      if(b == "knight"){
        $(a).css({"background-color":"orange"});
        var m = parseInt(id.charAt(1));
        var n = id.charAt(0);
        var array = ["a","b","c","d","e","f","g","h"];
        var pos = array.indexOf(n);
        //top left1 
        var tl11 = m-2;
        var tl12 = pos-1;
        var sec1 = array[tl12];
        var f1 = sec1 + tl11;
        var l = document.getElementById(f1);
        var ch = $(l).find("img").attr("alt");
        var cls = $(l).find("img").attr("class");
        if(ch==""){
        $(l).css({"background-color":"blue"});
        }
        else {
          if(cls == color2){
            $(l).css({"background-color":""});
            }
          else {
          $(l).css({"background-color":"red"});
          $(l).css("pointer-events","auto");
          }
        }
        //top left2
        var tl21 = m-1;
        var tl22 = pos-2;
        var sec2 = array[tl22];
        var f2 = sec2 + tl21;
        var l = document.getElementById(f2);
        var ch = $(l).find("img").attr("alt");
        var cls = $(l).find("img").attr("class");
        if(ch==""){
        $(l).css({"background-color":"blue"});
        }
        else {
          if(cls == color2){
            $(l).css({"background-color":""});
            }
          else {
          $(l).css({"background-color":"red"});
          $(l).css("pointer-events","auto");
          }
        }
        //top right1 
        var tr11 = m-2;
        var tr12 = pos+1;
        var sec3 = array[tr12];
        var f3 = sec3 + tr11;
        var l = document.getElementById(f3);
        var ch = $(l).find("img").attr("alt");
        var cls = $(l).find("img").attr("class");
        if(ch==""){
        $(l).css({"background-color":"blue"});
        }
        else {
          if(cls == color2){
            $(l).css({"background-color":""});
            }
          else {
          $(l).css({"background-color":"red"});
          $(l).css("pointer-events","auto");
          }
        }
        //top right2
        var tr21 = m-1;
        var tr22 = pos+2;
        var sec4 = array[tr22];
        var f4 = sec4 + tr21;
        var l = document.getElementById(f4);
        var ch = $(l).find("img").attr("alt");
        var cls = $(l).find("img").attr("class");
        if(ch==""){
        $(l).css({"background-color":"blue"});
        }
        else {
          if(cls == color2){
            $(l).css({"background-color":""});
            }
          else {
          $(l).css({"background-color":"red"});
          $(l).css("pointer-events","auto");
          }
        }
        //bottom left1 
        var bl11 = m+2;
        var bl12 = pos-1;
        var sec5 = array[bl12];
        var f5 = sec5 + bl11;
        var l = document.getElementById(f5);
        var ch = $(l).find("img").attr("alt");
        var cls = $(l).find("img").attr("class");
        if(ch==""){
        $(l).css({"background-color":"blue"});
        }
        else {
          if(cls == color2){
            $(l).css({"background-color":""});
            }
          else {
          $(l).css({"background-color":"red"});
          $(l).css("pointer-events","auto");
          }
        }
        //bottom left2
        var bl21 = m+1;
        var bl22 = pos-2;
        var sec6 = array[bl22];
        var f6 = sec6 + bl21;
        var l = document.getElementById(f6);
        var ch = $(l).find("img").attr("alt");
        var cls = $(l).find("img").attr("class");
        if(ch==""){
        $(l).css({"background-color":"blue"});
        }
        else {
          if(cls == color2){
            $(l).css({"background-color":""});
            }
          else {
          $(l).css({"background-color":"red"});
          $(l).css("pointer-events","auto");
          }
        }
        //bottom right1 
        var br11 = m+1;
        var br12 = pos+2;
        var sec7 = array[br12];
        var f7 = sec7 + br11;
        var l = document.getElementById(f7);
        var ch = $(l).find("img").attr("alt");
        var cls = $(l).find("img").attr("class");
        if(ch==""){
        $(l).css({"background-color":"blue"});
        }
        else {
          if(cls == color2){
            $(l).css({"background-color":""});
            }
          else {
          $(l).css({"background-color":"red"});
          $(l).css("pointer-events","auto");
          }
        }
        //bottom right2
        var br21 = m+2;
        var br22 = pos+1;
        var sec8 = array[br22];
        var f8 = sec8 + br21;
        var l = document.getElementById(f8);
        var ch = $(l).find("img").attr("alt");
        var cls = $(l).find("img").attr("class");
        if(ch==""){
        $(l).css({"background-color":"blue"});
        }
        else {
          if(cls == color2){
            $(l).css({"background-color":""});
            }
          else {
          $(l).css({"background-color":"red"});
          $(l).css("pointer-events","auto");
          }
        }
      }
      if(b == "pawn"){
        var pawn = ["a2","b2","c2","d2","e2","f2","g2","h2","a7","b7","c7","d7","e7","f7","g7","h7"]
        $(a).css({"background-color":"orange"});
        var m = id.charAt(1);
        var n = id.charAt(0);
        var array = ["a","b","c","d","e","f","g","h"];
        var pos = array.indexOf(n);
        var CHECK = pawn.indexOf(id);
        if(CHECK != -1){
        if(color2 == "black"){
          var cc = parseInt(m)+1;
        var crs = pos+1;
        var crs2 = pos-1;
        var crsl = array[crs];
        var crsl2 = array[crs2];
        var dd1 = crsl + cc;
        var dd12 = crsl2 + cc;
        var ll = document.getElementById(dd1);
        var ll2 = document.getElementById(dd12);
        var ddimg = $(ll).find("img").attr("class");
        var ddimg2 = $(ll2).find("img").attr("class");
          //front
          for (var front=m;front<=cc;front++){
            var f = parseInt(front)+1;
            var s = id.replace(id.charAt(1),f);
            var l = document.getElementById(s);
            var ch = $(l).find("img").attr("alt");
            var cls = $(l).find("img").attr("class");
          if(ch== ""){
          $(l).css({"background-color":"blue"});
          }
          else {
            if(cls == "black" || cls == "white" ){
              $(l).css({"background-color":""});
              // break;
            }
          }
            if(ddimg != "" && ddimg != "black" && ddimg != undefined){
            $(ll).css({"background-color":"red"});
            $(ll).css("pointer-events","auto");
            }
            if(ddimg2 != "" && ddimg2 != "black" && ddimg2 != undefined){
              $(ll2).css({"background-color":"red"});
              $(ll2).css("pointer-events","auto");
              }
          
            }
        }
        else if(color2 == "white"){
          var cc = parseInt(m)-1;
        var crs = pos+1;
        var crs2 = pos-1;
        var crsl = array[crs];
        var crsl2 = array[crs2];
        var dd1 = crsl + cc;
        var dd12 = crsl2 + cc;
        var ll = document.getElementById(dd1);
        var ll2 = document.getElementById(dd12);
        var ddimg = $(ll).find("img").attr("class");
        var ddimg2 = $(ll2).find("img").attr("class");
          //front
          for (var front=m;front>=cc;front--){
            var f = parseInt(front)-1;
            var s = id.replace(id.charAt(1),f);
            var l = document.getElementById(s);
            var ch = $(l).find("img").attr("alt");
            var cls = $(l).find("img").attr("class");
            if(ch== ""){
              $(l).css({"background-color":"blue"});
              }
              else {
                if(cls == "black" || cls == "white" ){
                  $(l).css({"background-color":""});
                  // break;
                }
              }
                if(ddimg != "" && ddimg != "white" && ddimg != undefined){
                $(ll).css({"background-color":"red"});
                $(ll).css("pointer-events","auto");
                }
                if(ddimg2 != "" && ddimg2 != "white" && ddimg2 != undefined){
                  $(ll2).css({"background-color":"red"});
                  $(ll2).css("pointer-events","auto");
                  }
            }
        }
      }
      else {
        if(color2 == "black"){
          var cc = parseInt(m)+1;
        var crs = pos+1;
        var crs2 = pos-1;
        var crsl = array[crs];
        var crsl2 = array[crs2];
        var dd1 = crsl + cc;
        var dd12 = crsl2 + cc;
        var ll = document.getElementById(dd1);
        var ll2 = document.getElementById(dd12);
        var ddimg = $(ll).find("img").attr("class");
        var ddimg2 = $(ll2).find("img").attr("class");
          var  move = parseInt(m)+1;
          var final = n + move; 
          var l = document.getElementById(final);
          var ch = $(l).find("img").attr("alt");
          var cls = $(l).find("img").attr("class");
          if(ch== ""){
            $(l).css({"background-color":"blue"});
            }
            else {
              if(cls == color2){
                $(l).css({"background-color":""});
                
              }
        }
        if(ddimg != "" && ddimg != "black" && ddimg != undefined){
          $(ll).css({"background-color":"red"});
          $(ll).css("pointer-events","auto");
          }
          if(ddimg2 != "" && ddimg2 != "black" && ddimg2 != undefined){
            $(ll2).css({"background-color":"red"});
            $(ll2).css("pointer-events","auto");
            }
      }
      else if(color2 == "white"){
        var cc = parseInt(m)-1;
        var crs = pos+1;
        var crs2 = pos-1;
        var crsl = array[crs];
        var crsl2 = array[crs2];
        var dd1 = crsl + cc;
        var dd12 = crsl2 + cc;
        var ll = document.getElementById(dd1);
        var ll2 = document.getElementById(dd12);
        var ddimg = $(ll).find("img").attr("class");
        var ddimg2 = $(ll2).find("img").attr("class");
        var  move = parseInt(m)-1;
          var final = n + move; 
          var l = document.getElementById(final);
          var ch = $(l).find("img").attr("alt");
          var cls = $(l).find("img").attr("class");
          if(ch== ""){
            $(l).css({"background-color":"blue"});
            }
            else {
              if(cls == color2){
                $(l).css({"background-color":""});
                
              }
        }
        if(ddimg != "" && ddimg != "white" && ddimg != undefined){
          $(ll).css({"background-color":"red"});
          $(ll).css("pointer-events","auto");
          }
          if(ddimg2 != "" && ddimg2 != "white" && ddimg2 != undefined){
            $(ll2).css({"background-color":"red"});
            $(ll2).css("pointer-events","auto");
            }
      }
        
      }
    }
    if(txt3 == "CHECK !"){
      var rows = [];
        rows = $("th");
        for (var rr=0;rr<=rows.length;rr++){ 
          var r = rows[rr];
          var hh = $(r).css("background-color");
      if(txt2 == "white turn"){
        var r = rows[rr];
var place = $(r).find("img").attr("id");
var hh = $(r).find("img").attr("class");
var hh3 = $(r).find("img").attr("alt");
if(hh3 == "queen" && hh == "black"){
  var che = $(r).css("background-color");
  
  var m = place.charAt(1);
var n = place.charAt(0);
var array = ["a","b","c","d","e","f","g","h"];
var pos = array.indexOf(n);
//bottom
var i = 0;
var r = [];
for (var j=m;j<8;j++){
var f = parseInt(j)+1;
var s = place.replace(place.charAt(1),f);
var l = document.getElementById(s);
        r[i] = s;
var ch = $(l).find("img").attr("alt");
var cls = $(l).find("img").attr("class");
var cllr = $(l).css("background-color");
if(cls == "black"){
  break;
}
else if(ch!= "king" && cls == "white"){
  break;
}
else if(ch== "king" && cls == "white") {
  if(b == "king" && color2 == "white"){
    $(".turn3").text("");
    break;
  }
  else {
  var poss = pos;
  for (var j=m;j<8;j++){
    var f = parseInt(j)+1;
    var s = place.replace(place.charAt(1),f);
    var l = document.getElementById(s);
    var ch = $(l).find("img").attr("alt");
    var cls = $(l).find("img").attr("class");
    var iid = $(l).attr("id");
    var cllr = $(l).css("background-color");
     if (cllr == "rgb(0, 0, 255)"){
      var row = [];
      row = $("th");
      for (var rr=0;rr<=row.length;rr++){
        var r2 = row[rr];
        var hh = $(r2).css("background-color");
        var iid2 = $(r2).attr("id");
         if (hh == "rgb(0, 0, 255)"){
          if( $.inArray(iid2, r) !== -1 ) {
            $(".turn3").text("");
          }
        else {
          $(r2).css("background-color","");
          $(".turn3").text("cant move");
        }
      }
     
    }
  }
      else {
        var row = [];
        row = $("th");
        for (var rr=0;rr<=row.length;rr++){
          var r5 = row[rr];
          var hh = $(r5).css("background-color");
        var iid2 = $(r5).attr("id");
        var red = $(r5).find("img").attr("alt");
        var red2 = $(r5).find("img").attr("class");
         if (hh == "rgb(0, 0, 255)"){
          if( $.inArray(iid2, r) !== -1 ) {
            $(".turn3").text("");
          }
        else {
          $(r5).css("background-color","");
          $(".turn3").text("cant move");
        }
      }
      else if(hh == "rgb(255, 0, 0)"){
        if(red == "queen" && red2 == "black"){
          $(".turn3").text("");
        }
        else {
        $(r5).css("background-color","");
        $(".turn3").text("cant move");
        }
       }
    }
  }
      var row = [];
      row = $("th");
      for (var rr=0;rr<=row.length;rr++){
        var r2 = row[rr];
        var hh = $(r2).css("background-color");
         if (hh == "rgb(0, 0, 255)"){
          $(".turn3").text("");
          break;
          }
          else if(hh == "rgb(255, 0, 0)"){
            $(".turn3").text("");
            break;
          }
          else {
            $(".turn3").text("cant move");
          }
      }
}
}
}
i++;
}
//top
var i = 0;
var r = [];
for (var p=m;p>1;p--){
var f = parseInt(p)-1;
var s = place.replace(place.charAt(1),f);
var l = document.getElementById(s);
r[i] = s;
var ch = $(l).find("img").attr("alt");
var cls = $(l).find("img").attr("class");
var cllr = $(l).css("background-color");
if(cls == "black"){
  break;
}
else if(ch!= "king" && cls == "white"){
  break;
}
else if(ch== "king" && cls == "white") {
  if(b == "king" && color2 == "white"){
    $(".turn3").text("");
    break;
  }
  else {
  var poss = pos;
  for (var p=m;p>1;p--){
    var f = parseInt(p)-1;
var s = place.replace(place.charAt(1),f);
    var l = document.getElementById(s);
    var ch = $(l).find("img").attr("alt");
    var cls = $(l).find("img").attr("class");
    var iid = $(l).attr("id");
    var cllr = $(l).css("background-color");
     if (cllr == "rgb(0, 0, 255)"){
      var row = [];
      row = $("th");
      for (var rr=0;rr<=row.length;rr++){
        var r2 = row[rr];
        var hh = $(r2).css("background-color");
        var iid2 = $(r2).attr("id");
         if (hh == "rgb(0, 0, 255)"){
          if( $.inArray(iid2, r) !== -1 ) {
            $(".turn3").text("");
          }
        else {
          $(r2).css("background-color","");
          $(".turn3").text("cant move");
        }
      }
     
    }
  }
      else {
        var row = [];
        row = $("th");
        for (var rr=0;rr<=row.length;rr++){
          var r5 = row[rr];
          var hh = $(r5).css("background-color");
        var iid2 = $(r5).attr("id");
        var red = $(r5).find("img").attr("alt");
        var red2 = $(r5).find("img").attr("class");
         if (hh == "rgb(0, 0, 255)"){
          if( $.inArray(iid2, r) !== -1 ) {
            $(".turn3").text("");
          }
        else {
          $(r5).css("background-color","");
          $(".turn3").text("cant move");
        }
      }
      else if(hh == "rgb(255, 0, 0)"){
        if(red == "queen" && red2 == "black"){
          $(".turn3").text("");
        }
        else {
        $(r5).css("background-color","");
        $(".turn3").text("cant move");
        }
       }
    }
  }
      var row = [];
      row = $("th");
      for (var rr=0;rr<=row.length;rr++){
        var r2 = row[rr];
        var hh = $(r2).css("background-color");
         if (hh == "rgb(0, 0, 255)"){
          $(".turn3").text("");
          break;
          }
          else if(hh == "rgb(255, 0, 0)"){
            $(".turn3").text("");
            break;
          }
          else {
            $(".turn3").text("cant move");
          }
      }
}
}
}
i++;
}

//right
var i = 0;
var r = [];
for (var right=pos+1;right<8;right++){
var pos2 = array[right];
var s = place.replace(place.charAt(0),pos2);
var l = document.getElementById(s);
r[i] = s;
var ch = $(l).find("img").attr("alt");
var cls = $(l).find("img").attr("class");
var cllr = $(l).css("background-color");
if(cls == "black"){
  break;
}
else if(ch!= "king" && cls == "white"){
  break;
}
else if(ch== "king" && cls == "white") {
  if(b == "king" && color2 == "white"){
    $(".turn3").text("");
    break;
  }
  else {
  var poss = pos;
  for (var right=pos+1;right<8;right++){
    var pos2 = array[right];
var s = place.replace(place.charAt(0),pos2);
    var l = document.getElementById(s);
    var ch = $(l).find("img").attr("alt");
    var cls = $(l).find("img").attr("class");
    var iid = $(l).attr("id");
    var cllr = $(l).css("background-color");
     if (cllr == "rgb(0, 0, 255)"){
      var row = [];
      row = $("th");
      for (var rr=0;rr<=row.length;rr++){
        var r2 = row[rr];
        var hh = $(r2).css("background-color");
        var iid2 = $(r2).attr("id");
         if (hh == "rgb(0, 0, 255)"){
          if( $.inArray(iid2, r) !== -1 ) {
            $(".turn3").text("");
          }
        else {
          $(r2).css("background-color","");
          $(".turn3").text("cant move");
        }
      }
     
    }
  }
      else {
        var row = [];
        row = $("th");
        for (var rr=0;rr<=row.length;rr++){
          var r5 = row[rr];
          var hh = $(r5).css("background-color");
        var iid2 = $(r5).attr("id");
        var red = $(r5).find("img").attr("alt");
        var red2 = $(r5).find("img").attr("class");
         if (hh == "rgb(0, 0, 255)"){
          if( $.inArray(iid2, r) !== -1 ) {
            $(".turn3").text("");
          }
        else {
          $(r5).css("background-color","");
          $(".turn3").text("cant move");
        }
      }
      else if(hh == "rgb(255, 0, 0)"){
        if(red == "queen" && red2 == "black"){
          $(".turn3").text("");
        }
        else {
        $(r5).css("background-color","");
        $(".turn3").text("cant move");
        }
       }
    }
  }
      var row = [];
      row = $("th");
      for (var rr=0;rr<=row.length;rr++){
        var r2 = row[rr];
        var hh = $(r2).css("background-color");
         if (hh == "rgb(0, 0, 255)"){
          $(".turn3").text("");
          break;
          }
          else if(hh == "rgb(255, 0, 0)"){
            $(".turn3").text("");
            break;
          }
          else {
            $(".turn3").text("cant move");
          }
      }
}
}
}
i++;
}
//left
var i = 0;
var r = [];
for (var left=pos-1;left>=0;left--){
  var pos2 = array[left];
  var s = place.replace(place.charAt(0),pos2);
  var l = document.getElementById(s);
  r[i] = s;
  var ch = $(l).find("img").attr("alt");
  var cls = $(l).find("img").attr("class");
  var cllr = $(l).css("background-color");
  if(cls == "black"){
    break;
  }
else if(ch!= "king" && cls == "white"){
  break;
}
else if(ch== "king" && cls == "white") {
  if(b == "king" && color2 == "white"){
    $(".turn3").text("");
    break;
  }
  else {
  var poss = pos;
  for (var left=pos-1;left>=0;left--){
    var pos2 = array[left];
var s = place.replace(place.charAt(0),pos2);
    var l = document.getElementById(s);
    var ch = $(l).find("img").attr("alt");
    var cls = $(l).find("img").attr("class");
    var iid = $(l).attr("id");
    var cllr = $(l).css("background-color");
     if (cllr == "rgb(0, 0, 255)"){
      var row = [];
      row = $("th");
      for (var rr=0;rr<=row.length;rr++){
        var r2 = row[rr];
        var hh = $(r2).css("background-color");
        var iid2 = $(r2).attr("id");
         if (hh == "rgb(0, 0, 255)"){
          if( $.inArray(iid2, r) !== -1 ) {
            $(".turn3").text("");
          }
        else {
          $(r2).css("background-color","");
          $(".turn3").text("cant move");
        }
      }
     
    }
  }
      else {
        var row = [];
        row = $("th");
        for (var rr=0;rr<=row.length;rr++){
          var r5 = row[rr];
          var hh = $(r5).css("background-color");
        var iid2 = $(r5).attr("id");
        var red = $(r5).find("img").attr("alt");
        var red2 = $(r5).find("img").attr("class");
         if (hh == "rgb(0, 0, 255)"){
          if( $.inArray(iid2, r) !== -1 ) {
            $(".turn3").text("");
          }
        else {
          $(r5).css("background-color","");
          $(".turn3").text("cant move");
        }
      }
      else if(hh == "rgb(255, 0, 0)"){
        if(red == "queen" && red2 == "black"){
          $(".turn3").text("");
        }
        else {
        $(r5).css("background-color","");
        $(".turn3").text("cant move");
        }
       }
    }
  }
      var row = [];
      row = $("th");
      for (var rr=0;rr<=row.length;rr++){
        var r2 = row[rr];
        var hh = $(r2).css("background-color");
         if (hh == "rgb(0, 0, 255)"){
          $(".turn3").text("");
          break;
          }
          else if(hh == "rgb(255, 0, 0)"){
            $(".turn3").text("");
            break;
          }
          else {
            $(".turn3").text("cant move");
          }
      }
}
}
}
 i++;
}
var poss = pos;
var i = 0;
var r = [];
    //bottom right cross
for(var c2=parseInt(m)+1;c2<=8;c2++){
for(var cross=poss+1;cross==poss+1;cross++){
  var c3 = array[cross];
  var poss = cross;
  var cc = c3+c2;
  var cross = cross+1;
   l = document.getElementById(cc);
        r[i] = cc;
      }

var ch = $(l).find("img").attr("alt");
var cls = $(l).find("img").attr("class");
var cllr = $(l).css("background-color");
if(cls == "black"){
  break;
}
else if(ch!= "king" && cls == "white"){
  //$(".turn3").text("");
  break;
}

else if(ch== "king" && cls == "white") {
   if(b == "king" && color2 == "white"){
    $(".turn3").text("");
    break;
  }
  else {
  var poss = pos;
  for(var c2=parseInt(m)+1;c2<=8;c2++){
    for(var cross=poss+1;cross==poss+1;cross++){
      var c3 = array[cross];
      var poss = cross;
      var cc = c3+c2;
      var cross = cross+1;
      var l = document.getElementById(cc);
      }
    var ch = $(l).find("img").attr("alt");
    var cls = $(l).find("img").attr("class");
    var iid = $(l).attr("id");
    var cllr = $(l).css("background-color");
     if (cllr == "rgb(0, 0, 255)"){
      var row = [];
      row = $("th");
      for (var rr=0;rr<=row.length;rr++){
        var r2 = row[rr];
        var hh = $(r2).css("background-color");
        var iid2 = $(r2).attr("id");
         if (hh == "rgb(0, 0, 255)"){
          if( $.inArray(iid2, r) !== -1 ) {
            $(".turn3").text("");
          }
        else {
          $(r2).css("background-color","");
          $(".turn3").text("cant move");
        }
      }
     
    }
  }
      else {
        var row = [];
        row = $("th");
        for (var rr=0;rr<=row.length;rr++){
          var r5 = row[rr];
          var hh = $(r5).css("background-color");
        var iid2 = $(r5).attr("id");
        var red = $(r5).find("img").attr("alt");
        var red2 = $(r5).find("img").attr("class");
         if (hh == "rgb(0, 0, 255)"){
          if( $.inArray(iid2, r) !== -1 ) {
            $(".turn3").text("");
          }
        else {
          $(r5).css("background-color","");
          $(".turn3").text("cant move");
        }
      }
      else if(hh == "rgb(255, 0, 0)"){
        if(red == "queen" && red2 == "black"){
          $(".turn3").text("");
        }
        else {
        $(r5).css("background-color","");
        $(".turn3").text("cant move");
        }
       }
    }
  }
      var row = [];
      row = $("th");
      for (var rr=0;rr<=row.length;rr++){
        var r2 = row[rr];
        var hh = $(r2).css("background-color");
         if (hh == "rgb(0, 0, 255)"){
          $(".turn3").text("");
          break;
          }
          else if(hh == "rgb(255, 0, 0)"){
            $(".turn3").text("");
            break;
          }
          else {
            $(".turn3").text("cant move");
          }
      }
}
}
}
i++;

 }
var poss2 = pos;
var i = 0;
var r = [];
    //top right cross
for(var cc2=parseInt(m)-1;cc2>=1;cc2--){
for(var cross2=poss2+1;cross2==poss2+1;cross2--){
  var c3 = array[cross2];
  var poss2 = cross2;
  var cc = c3+cc2;
  var cross2 = cross2+1;
  var l = document.getElementById(cc);
  r[i] = cc;
}
var ch = $(l).find("img").attr("alt");
var cls = $(l).find("img").attr("class");
var cllr = $(l).css("background-color");
if(cls == "black"){
  break;
}
else if(ch!= "king" && cls == "white"){
  //$(".turn3").text("");
  break;
}
else if(ch== "king" && cls == "white") {
  if(b == "king" && color2 == "white"){
    $(".turn3").text("");
    break;
  }
  else {
  var poss2 = pos;
  for(var cc2=parseInt(m)-1;cc2>=1;cc2--){
    for(var cross2=poss2+1;cross2==poss2+1;cross2--){
      var c3 = array[cross2];
  var poss2 = cross2;
  var cc = c3+cc2;
  var cross2 = cross2+1;
  var l = document.getElementById(cc);
      }
    var ch = $(l).find("img").attr("alt");
    var cls = $(l).find("img").attr("class");
    var iid = $(l).attr("id");
    var cllr = $(l).css("background-color");
     if (cllr == "rgb(0, 0, 255)"){
      var row = [];
      row = $("th");
      for (var rr=0;rr<=row.length;rr++){
        var r2 = row[rr];
        var hh = $(r2).css("background-color");
        var iid2 = $(r2).attr("id");
         if (hh == "rgb(0, 0, 255)"){
          if( $.inArray(iid2, r) !== -1 ) {
            $(".turn3").text("");
          }
        else {
          $(r2).css("background-color","");
          $(".turn3").text("cant move");
        }
      }
     
    }
  }
      else {
        var row = [];
        row = $("th");
        for (var rr=0;rr<=row.length;rr++){
          var r5 = row[rr];
          var hh = $(r5).css("background-color");
        var iid2 = $(r5).attr("id");
        var red = $(r5).find("img").attr("alt");
        var red2 = $(r5).find("img").attr("class");
         if (hh == "rgb(0, 0, 255)"){
          if( $.inArray(iid2, r) !== -1 ) {
            $(".turn3").text("");
          }
        else {
          $(r5).css("background-color","");
          $(".turn3").text("cant move");
        }
      }
      else if(hh == "rgb(255, 0, 0)"){
        if(red == "queen" && red2 == "black"){
          $(".turn3").text("");
        }
        else {
        $(r5).css("background-color","");
        $(".turn3").text("cant move");
        }
       }
    }
  }
      var row = [];
      row = $("th");
      for (var rr=0;rr<=row.length;rr++){
        var r2 = row[rr];
        var hh = $(r2).css("background-color");
         if (hh == "rgb(0, 0, 255)"){
          $(".turn3").text("");
          break;
          }
          else if(hh == "rgb(255, 0, 0)"){
            $(".turn3").text("");
            break;
          }
          else {
            $(".turn3").text("cant move");
          }
      }
}
}
}
i++;
}
var poss3 = pos;
var i = 0;
var r = [];
    //top left cross
    for(var c2=parseInt(m)+1;c2<=8;c2++){
      for(var cross=poss3-1;cross==poss3-1;cross--){
        var c3 = array[cross];
        var poss3 = cross;
        var cc = c3+c2;
        var cross = cross+1;
        var l = document.getElementById(cc);
        r[i] = cc;
      }
      var ch = $(l).find("img").attr("alt");
      var cls = $(l).find("img").attr("class");
      var cllr = $(l).css("background-color");
      if(cls == "black"){
        break;
      }
      else if(ch!= "king" && cls == "white"){
        //$(".turn3").text("");
        break;
      }
      else if(ch== "king" && cls == "white") {
        if(b == "king" && color2 == "white"){
          $(".turn3").text("");
          break;
        }
        else {
        var poss3 = pos;
        for(var c2=parseInt(m)+1;c2<=8;c2++){
          for(var cross=poss3-1;cross==poss3-1;cross--){
            var c3 = array[cross];
            var poss3 = cross;
            var cc = c3+c2;
            var cross = cross+1;
            var l = document.getElementById(cc);
            }
          var ch = $(l).find("img").attr("alt");
          var cls = $(l).find("img").attr("class");
          var iid = $(l).attr("id");
          var cllr = $(l).css("background-color");
           if (cllr == "rgb(0, 0, 255)"){
            var row = [];
            row = $("th");
            for (var rr=0;rr<=row.length;rr++){
              var r2 = row[rr];
              var hh = $(r2).css("background-color");
              var iid2 = $(r2).attr("id");
               if (hh == "rgb(0, 0, 255)"){
                if( $.inArray(iid2, r) !== -1 ) {
                  $(".turn3").text("");
                }
              else {
                $(r2).css("background-color","");
                $(".turn3").text("cant move");
              }
            }
           
          }
        }
            else {
              var row = [];
              row = $("th");
              for (var rr=0;rr<=row.length;rr++){
                var r5 = row[rr];
                var hh = $(r5).css("background-color");
              var iid2 = $(r5).attr("id");
              var red = $(r5).find("img").attr("alt");
              var red2 = $(r5).find("img").attr("class");
               if (hh == "rgb(0, 0, 255)"){
                if( $.inArray(iid2, r) !== -1 ) {
                  $(".turn3").text("");
                }
              else {
                $(r5).css("background-color","");
                $(".turn3").text("cant move");
              }
            }
            else if(hh == "rgb(255, 0, 0)"){
              if(red == "queen" && red2 == "black"){
                $(".turn3").text("");
              }
              else {
              $(r5).css("background-color","");
              $(".turn3").text("cant move");
              }
             }
          }
        }
            var row = [];
            row = $("th");
            for (var rr=0;rr<=row.length;rr++){
              var r2 = row[rr];
              var hh = $(r2).css("background-color");
               if (hh == "rgb(0, 0, 255)"){
                $(".turn3").text("");
                break;
                }
                else if(hh == "rgb(255, 0, 0)"){
                  $(".turn3").text("");
                  break;
                }
                else {
                  $(".turn3").text("cant move");
                }
            }
      }
      }
    }
      i++;
    }
    var poss4 = pos;
    var i = 0;
var r = [];
    //bottom left cross
    for(var cc2=parseInt(m)-1;cc2>=1;cc2--){
      for(var cross2=poss4-1;cross2==poss4-1;cross2--){
        var c3 = array[cross2];
        var poss4 = cross2;
        var cc = c3+cc2;
        var cross2 = cross2+1;
        var l = document.getElementById(cc);
        r[i] = cc;
      }
      var ch = $(l).find("img").attr("alt");
      var cls = $(l).find("img").attr("class");
      var cllr = $(l).css("background-color");
      if(cls == "black"){
        break;
      }
      else if(ch!= "king" && cls == "white"){
        //$(".turn3").text("");
        break;
      }
      else if(ch== "king" && cls == "white") {
        if(b == "king" && color2 == "white"){
          $(".turn3").text("");
          break;
        }
        else {
        var poss4 = pos;
        for(var cc2=parseInt(m)-1;cc2>=1;cc2--){
          for(var cross2=poss4-1;cross2==poss4-1;cross2--){
            var c3 = array[cross2];
        var poss4 = cross2;
        var cc = c3+cc2;
        var cross2 = cross2+1;
        var l = document.getElementById(cc);
            }
          var ch = $(l).find("img").attr("alt");
          var cls = $(l).find("img").attr("class");
          var iid = $(l).attr("id");
          var cllr = $(l).css("background-color");
           if (cllr == "rgb(0, 0, 255)"){
            var row = [];
            row = $("th");
            for (var rr=0;rr<=row.length;rr++){
              var r2 = row[rr];
              var hh = $(r2).css("background-color");
              var iid2 = $(r2).attr("id");
               if (hh == "rgb(0, 0, 255)"){
                if( $.inArray(iid2, r) !== -1 ) {
                  $(".turn3").text("");
                }
              else {
                $(r2).css("background-color","");
                $(".turn3").text("cant move");
              }
            }
           
          }
        }
            else {
              var row = [];
              row = $("th");
              for (var rr=0;rr<=row.length;rr++){
                var r5 = row[rr];
                var hh = $(r5).css("background-color");
              var iid2 = $(r5).attr("id");
              var red = $(r5).find("img").attr("alt");
              var red2 = $(r5).find("img").attr("class");
               if (hh == "rgb(0, 0, 255)"){
                if( $.inArray(iid2, r) !== -1 ) {
                  $(".turn3").text("");
                }
              else {
                $(r5).css("background-color","");
                $(".turn3").text("cant move");
              }
            }
            else if(hh == "rgb(255, 0, 0)"){
              if(red == "queen" && red2 == "black"){
                $(".turn3").text("");
              }
              else {
              $(r5).css("background-color","");
              $(".turn3").text("cant move");
              }
             }
          }
        }
            var row = [];
            row = $("th");
            for (var rr=0;rr<=row.length;rr++){
              var r2 = row[rr];
              var hh = $(r2).css("background-color");
               if (hh == "rgb(0, 0, 255)"){
                $(".turn3").text("");
                break;
                }
                else if(hh == "rgb(255, 0, 0)"){
                  $(".turn3").text("");
                  break;
                }
                else {
                  $(".turn3").text("cant move");
                }
            }
      }
    }
      }
      i++;
    }
}
if(hh3 == "rook" && hh == "black"){
  var m = place.charAt(1);
  var n = place.charAt(0);
  var array = ["a","b","c","d","e","f","g","h"];
  var pos = array.indexOf(n);
  //bottom
var i = 0;
var r = [];
for (var j=m;j<8;j++){
var f = parseInt(j)+1;
var s = place.replace(place.charAt(1),f);
var l = document.getElementById(s);
        r[i] = s;
var ch = $(l).find("img").attr("alt");
var cls = $(l).find("img").attr("class");
var cllr = $(l).css("background-color");
if(cls == "black"){
  break;
}
else if(ch!= "king" && cls == "white"){
  break;
}
else if(ch== "king" && cls == "white") {
  if(b == "king" && color2 == "white"){
    var row = [];
        row = $("th");
        for (var rr=0;rr<=row.length;rr++){
          var r2 = row[rr];
          var hh = $(r2).css("background-color");
          var iid2 = $(r2).attr("id");
           if (hh == "rgb(0, 0, 255)"){
            if( $.inArray(iid2, r) !== -1 ) {
              $(r2).css("background-color","");
            }
          else {
            
            $(".turn3").text("");
          }
        }
       
      }
  }
  else {
  var poss = pos;
  for (var j=m;j<8;j++){
    var f = parseInt(j)+1;
    var s = place.replace(place.charAt(1),f);
    var l = document.getElementById(s);
    var ch = $(l).find("img").attr("alt");
    var cls = $(l).find("img").attr("class");
    var iid = $(l).attr("id");
    var cllr = $(l).css("background-color");
     if (cllr == "rgb(0, 0, 255)"){
      var row = [];
      row = $("th");
      for (var rr=0;rr<=row.length;rr++){
        var r2 = row[rr];
        var hh = $(r2).css("background-color");
        var iid2 = $(r2).attr("id");
         if (hh == "rgb(0, 0, 255)"){
          if( $.inArray(iid2, r) !== -1 ) {
            $(".turn3").text("");
          }
        else {
          $(r2).css("background-color","");
          $(".turn3").text("cant move");
        }
      }
     
    }
  }
      else {
        var row = [];
        row = $("th");
        for (var rr=0;rr<=row.length;rr++){
          var r5 = row[rr];
          var hh = $(r5).css("background-color");
        var iid2 = $(r5).attr("id");
        var red = $(r5).find("img").attr("alt");
        var red2 = $(r5).find("img").attr("class");
         if (hh == "rgb(0, 0, 255)"){
          if( $.inArray(iid2, r) !== -1 ) {
            $(".turn3").text("");
          }
        else {
          $(r5).css("background-color","");
          $(".turn3").text("cant move");
        }
      }
      else if(hh == "rgb(255, 0, 0)"){
        if(red == "queen" && red2 == "black"){
          $(".turn3").text("");
        }
        else {
        $(r5).css("background-color","");
        $(".turn3").text("cant move");
        }
       }
    }
  }
      var row = [];
      row = $("th");
      for (var rr=0;rr<=row.length;rr++){
        var r2 = row[rr];
        var hh = $(r2).css("background-color");
         if (hh == "rgb(0, 0, 255)"){
          $(".turn3").text("");
          break;
          }
          else if(hh == "rgb(255, 0, 0)"){
            $(".turn3").text("");
            break;
          }
          else {
            $(".turn3").text("cant move");
          }
      }
}
}
}
i++;
}
//top
var i = 0;
var r = [];
for (var p=m;p>1;p--){
var f = parseInt(p)-1;
var s = place.replace(place.charAt(1),f);
var l = document.getElementById(s);
r[i] = s;
var ch = $(l).find("img").attr("alt");
var cls = $(l).find("img").attr("class");
var cllr = $(l).css("background-color");
if(cls == "black"){
  break;
}
else if(ch!= "king" && cls == "white"){
  break;
}
else if(ch== "king" && cls == "white") {
  if(b == "king" && color2 == "white"){
    var row = [];
        row = $("th");
        for (var rr=0;rr<=row.length;rr++){
          var r2 = row[rr];
          var hh = $(r2).css("background-color");
          var iid2 = $(r2).attr("id");
           if (hh == "rgb(0, 0, 255)"){
            if( $.inArray(iid2, r) !== -1 ) {
              $(r2).css("background-color","");
            }
          else {
            
            $(".turn3").text("");
          }
        }
       
      }
  }
  else {
  var poss = pos;
  for (var p=m;p>1;p--){
    var f = parseInt(p)-1;
var s = place.replace(place.charAt(1),f);
    var l = document.getElementById(s);
    var ch = $(l).find("img").attr("alt");
    var cls = $(l).find("img").attr("class");
    var iid = $(l).attr("id");
    var cllr = $(l).css("background-color");
     if (cllr == "rgb(0, 0, 255)"){
      var row = [];
      row = $("th");
      for (var rr=0;rr<=row.length;rr++){
        var r2 = row[rr];
        var hh = $(r2).css("background-color");
        var iid2 = $(r2).attr("id");
         if (hh == "rgb(0, 0, 255)"){
          if( $.inArray(iid2, r) !== -1 ) {
            $(".turn3").text("");
          }
        else {
          $(r2).css("background-color","");
          $(".turn3").text("cant move");
        }
      }
     
    }
  }
      else {
        var row = [];
        row = $("th");
        for (var rr=0;rr<=row.length;rr++){
          var r5 = row[rr];
          var hh = $(r5).css("background-color");
        var iid2 = $(r5).attr("id");
        var red = $(r5).find("img").attr("alt");
        var red2 = $(r5).find("img").attr("class");
         if (hh == "rgb(0, 0, 255)"){
          if( $.inArray(iid2, r) !== -1 ) {
            $(".turn3").text("");
          }
        else {
          $(r5).css("background-color","");
          $(".turn3").text("cant move");
        }
      }
      else if(hh == "rgb(255, 0, 0)"){
        if(red == "queen" && red2 == "black"){
          $(".turn3").text("");
        }
        else {
        $(r5).css("background-color","");
        $(".turn3").text("cant move");
        }
       }
    }
  }
      var row = [];
      row = $("th");
      for (var rr=0;rr<=row.length;rr++){
        var r2 = row[rr];
        var hh = $(r2).css("background-color");
         if (hh == "rgb(0, 0, 255)"){
          $(".turn3").text("");
          break;
          }
          else if(hh == "rgb(255, 0, 0)"){
            $(".turn3").text("");
            break;
          }
          else {
            $(".turn3").text("cant move");
          }
      }
}
}
}
i++;
}
//right
var i = 0;
var r = [];
for (var right=pos+1;right<8;right++){
var pos2 = array[right];
var s = place.replace(place.charAt(0),pos2);
var l = document.getElementById(s);
r[i] = s;
var ch = $(l).find("img").attr("alt");
var cls = $(l).find("img").attr("class");
var cllr = $(l).css("background-color");
if(cls == "black"){
  break;
}
else if(ch!= "king" && cls == "white"){
  break;
}
else if(ch== "king" && cls == "white") {
  if(b == "king" && color2 == "white"){
    var row = [];
        row = $("th");
        for (var rr=0;rr<=row.length;rr++){
          var r2 = row[rr];
          var hh = $(r2).css("background-color");
          var iid2 = $(r2).attr("id");
           if (hh == "rgb(0, 0, 255)"){
            if( $.inArray(iid2, r) !== -1 ) {
              $(r2).css("background-color","");
            }
          else {
            
            $(".turn3").text("");
          }
        }
       
      }
  }
  else {
  var poss = pos;
  for (var right=pos+1;right<8;right++){
    var pos2 = array[right];
var s = place.replace(place.charAt(0),pos2);
    var l = document.getElementById(s);
    var ch = $(l).find("img").attr("alt");
    var cls = $(l).find("img").attr("class");
    var iid = $(l).attr("id");
    var cllr = $(l).css("background-color");
     if (cllr == "rgb(0, 0, 255)"){
      var row = [];
      row = $("th");
      for (var rr=0;rr<=row.length;rr++){
        var r2 = row[rr];
        var hh = $(r2).css("background-color");
        var iid2 = $(r2).attr("id");
         if (hh == "rgb(0, 0, 255)"){
          if( $.inArray(iid2, r) !== -1 ) {
            $(".turn3").text("");
          }
        else {
          $(r2).css("background-color","");
          $(".turn3").text("cant move");
        }
      }
     
    }
  }
      else {
        var row = [];
        row = $("th");
        for (var rr=0;rr<=row.length;rr++){
          var r5 = row[rr];
          var hh = $(r5).css("background-color");
        var iid2 = $(r5).attr("id");
        var red = $(r5).find("img").attr("alt");
        var red2 = $(r5).find("img").attr("class");
         if (hh == "rgb(0, 0, 255)"){
          if( $.inArray(iid2, r) !== -1 ) {
            $(".turn3").text("");
          }
        else {
          $(r5).css("background-color","");
          $(".turn3").text("cant move");
        }
      }
      else if(hh == "rgb(255, 0, 0)"){
        if(red == "queen" && red2 == "black"){
          $(".turn3").text("");
        }
        else {
        $(r5).css("background-color","");
        $(".turn3").text("cant move");
        }
       }
    }
  }
      var row = [];
      row = $("th");
      for (var rr=0;rr<=row.length;rr++){
        var r2 = row[rr];
        var hh = $(r2).css("background-color");
         if (hh == "rgb(0, 0, 255)"){
          $(".turn3").text("");
          break;
          }
          else if(hh == "rgb(255, 0, 0)"){
            $(".turn3").text("");
            break;
          }
          else {
            $(".turn3").text("cant move");
          }
      }
}
}
}
i++;
}
//left
var i = 0;
var r = [];
for (var left=pos-1;left>=0;left--){
  var pos2 = array[left];
  var s = place.replace(place.charAt(0),pos2);
  var l = document.getElementById(s);
  r[i] = s;
  var ch = $(l).find("img").attr("alt");
  var cls = $(l).find("img").attr("class");
  var cllr = $(l).css("background-color");
  if(cls == "black"){
    break;
  }
else if(ch!= "king" && cls == "white"){
  break;
}
else if(ch== "king" && cls == "white") {
  if(b == "king" && color2 == "white"){
    var row = [];
        row = $("th");
        for (var rr=0;rr<=row.length;rr++){
          var r2 = row[rr];
          var hh = $(r2).css("background-color");
          var iid2 = $(r2).attr("id");
           if (hh == "rgb(0, 0, 255)"){
            if( $.inArray(iid2, r) !== -1 ) {
              $(r2).css("background-color","");
            }
          else {
            
            $(".turn3").text("");
          }
        }
       
      }
  }
  else {
  var poss = pos;
  for (var left=pos-1;left>=0;left--){
    var pos2 = array[left];
var s = place.replace(place.charAt(0),pos2);
    var l = document.getElementById(s);
    var ch = $(l).find("img").attr("alt");
    var cls = $(l).find("img").attr("class");
    var iid = $(l).attr("id");
    var cllr = $(l).css("background-color");
     if (cllr == "rgb(0, 0, 255)"){
      var row = [];
      row = $("th");
      for (var rr=0;rr<=row.length;rr++){
        var r2 = row[rr];
        var hh = $(r2).css("background-color");
        var iid2 = $(r2).attr("id");
         if (hh == "rgb(0, 0, 255)"){
          if( $.inArray(iid2, r) !== -1 ) {
            $(".turn3").text("");
          }
        else {
          $(r2).css("background-color","");
          $(".turn3").text("cant move");
        }
      }
     
    }
  }
      else {
        var row = [];
        row = $("th");
        for (var rr=0;rr<=row.length;rr++){
          var r5 = row[rr];
          var hh = $(r5).css("background-color");
        var iid2 = $(r5).attr("id");
        var red = $(r5).find("img").attr("alt");
        var red2 = $(r5).find("img").attr("class");
         if (hh == "rgb(0, 0, 255)"){
          if( $.inArray(iid2, r) !== -1 ) {
            $(".turn3").text("");
          }
        else {
          $(r5).css("background-color","");
          $(".turn3").text("cant move");
        }
      }
      else if(hh == "rgb(255, 0, 0)"){
        if(red == "queen" && red2 == "black"){
          $(".turn3").text("");
        }
        else {
        $(r5).css("background-color","");
        $(".turn3").text("cant move");
        }
       }
    }
  }
      var row = [];
      row = $("th");
      for (var rr=0;rr<=row.length;rr++){
        var r2 = row[rr];
        var hh = $(r2).css("background-color");
         if (hh == "rgb(0, 0, 255)"){
          $(".turn3").text("");
          break;
          }
          else if(hh == "rgb(255, 0, 0)"){
            $(".turn3").text("");
            break;
          }
          else {
            $(".turn3").text("cant move");
          }
      }
}
}
}
 i++;
}
}
if(hh3 == "bishop" && hh == "black"){
  var m = place.charAt(1);
  var n = place.charAt(0);
  var array = ["a","b","c","d","e","f","g","h"];
  var pos = array.indexOf(n);
  var poss = pos;
var i = 0;
var r = [];
    //bottom right cross
for(var c2=parseInt(m)+1;c2<=8;c2++){
for(var cross=poss+1;cross==poss+1;cross++){
  var c3 = array[cross];
  var poss = cross;
  var cc = c3+c2;
  var cross = cross+1;
   l = document.getElementById(cc);
        r[i] = cc;
      }

var ch = $(l).find("img").attr("alt");
var cls = $(l).find("img").attr("class");
var cllr = $(l).css("background-color");
if(cls == "black"){
  break;
}
else if(ch!= "king" && cls == "white"){
  //$(".turn3").text("");
  break;
}

else if(ch== "king" && cls == "white") {
   if(b == "king" && color2 == "white"){
    var row = [];
        row = $("th");
        for (var rr=0;rr<=row.length;rr++){
          var r2 = row[rr];
          var hh = $(r2).css("background-color");
          var iid2 = $(r2).attr("id");
           if (hh == "rgb(0, 0, 255)"){
            if( $.inArray(iid2, r) !== -1 ) {
              $(r2).css("background-color","");
            }
          else {
            
            $(".turn3").text("");
          }
        }
       
      }
  }
  else {
  var poss = pos;
  for(var c2=parseInt(m)+1;c2<=8;c2++){
    for(var cross=poss+1;cross==poss+1;cross++){
      var c3 = array[cross];
      var poss = cross;
      var cc = c3+c2;
      var cross = cross+1;
      var l = document.getElementById(cc);
      }
    var ch = $(l).find("img").attr("alt");
    var cls = $(l).find("img").attr("class");
    var iid = $(l).attr("id");
    var cllr = $(l).css("background-color");
     if (cllr == "rgb(0, 0, 255)"){
      var row = [];
      row = $("th");
      for (var rr=0;rr<=row.length;rr++){
        var r2 = row[rr];
        var hh = $(r2).css("background-color");
        var iid2 = $(r2).attr("id");
         if (hh == "rgb(0, 0, 255)"){
          if( $.inArray(iid2, r) !== -1 ) {
            $(".turn3").text("");
          }
        else {
          $(r2).css("background-color","");
          $(".turn3").text("cant move");
        }
      }
     
    }
  }
      else {
        var row = [];
        row = $("th");
        for (var rr=0;rr<=row.length;rr++){
          var r5 = row[rr];
          var hh = $(r5).css("background-color");
        var iid2 = $(r5).attr("id");
        var red = $(r5).find("img").attr("alt");
        var red2 = $(r5).find("img").attr("class");
         if (hh == "rgb(0, 0, 255)"){
          if( $.inArray(iid2, r) !== -1 ) {
            $(".turn3").text("");
          }
        else {
          $(r5).css("background-color","");
          $(".turn3").text("cant move");
        }
      }
      else if(hh == "rgb(255, 0, 0)"){
        if(red == "queen" && red2 == "black"){
          $(".turn3").text("");
        }
        else {
        $(r5).css("background-color","");
        $(".turn3").text("cant move");
        }
       }
    }
  }
      var row = [];
      row = $("th");
      for (var rr=0;rr<=row.length;rr++){
        var r2 = row[rr];
        var hh = $(r2).css("background-color");
         if (hh == "rgb(0, 0, 255)"){
          $(".turn3").text("");
          break;
          }
          else if(hh == "rgb(255, 0, 0)"){
            $(".turn3").text("");
            break;
          }
          else {
            $(".turn3").text("cant move");
          }
      }
}
}
}
i++;

 }
var poss2 = pos;
var i = 0;
var r = [];
    //top right cross
for(var cc2=parseInt(m)-1;cc2>=1;cc2--){
for(var cross2=poss2+1;cross2==poss2+1;cross2--){
  var c3 = array[cross2];
  var poss2 = cross2;
  var cc = c3+cc2;
  var cross2 = cross2+1;
  var l = document.getElementById(cc);
  r[i] = cc;
}
var ch = $(l).find("img").attr("alt");
var cls = $(l).find("img").attr("class");
var cllr = $(l).css("background-color");
if(cls == "black"){
  break;
}
else if(ch!= "king" && cls == "white"){
  //$(".turn3").text("");
  break;
}
else if(ch== "king" && cls == "white") {
  if(b == "king" && color2 == "white"){
    var row = [];
        row = $("th");
        for (var rr=0;rr<=row.length;rr++){
          var r2 = row[rr];
          var hh = $(r2).css("background-color");
          var iid2 = $(r2).attr("id");
           if (hh == "rgb(0, 0, 255)"){
            if( $.inArray(iid2, r) !== -1 ) {
              $(r2).css("background-color","");
            }
          else {
            
            $(".turn3").text("");
          }
        }
       
      }
  }
  else {
  var poss = pos;
  for(var cc2=parseInt(m)-1;cc2>=1;cc2--){
    for(var cross2=poss2+1;cross2==poss2+1;cross2--){
      var c3 = array[cross2];
  var poss2 = cross2;
  var cc = c3+cc2;
  var cross2 = cross2+1;
  var l = document.getElementById(cc);
      }
    var ch = $(l).find("img").attr("alt");
    var cls = $(l).find("img").attr("class");
    var iid = $(l).attr("id");
    var cllr = $(l).css("background-color");
     if (cllr == "rgb(0, 0, 255)"){
      var row = [];
      row = $("th");
      for (var rr=0;rr<=row.length;rr++){
        var r2 = row[rr];
        var hh = $(r2).css("background-color");
        var iid2 = $(r2).attr("id");
         if (hh == "rgb(0, 0, 255)"){
          if( $.inArray(iid2, r) !== -1 ) {
            $(".turn3").text("");
          }
        else {
          $(r2).css("background-color","");
          $(".turn3").text("cant move");
        }
      }
     
    }
  }
      else {
        var row = [];
        row = $("th");
        for (var rr=0;rr<=row.length;rr++){
          var r5 = row[rr];
          var hh = $(r5).css("background-color");
        var iid2 = $(r5).attr("id");
        var red = $(r5).find("img").attr("alt");
        var red2 = $(r5).find("img").attr("class");
         if (hh == "rgb(0, 0, 255)"){
          if( $.inArray(iid2, r) !== -1 ) {
            $(".turn3").text("");
          }
        else {
          $(r5).css("background-color","");
          $(".turn3").text("cant move");
        }
      }
      else if(hh == "rgb(255, 0, 0)"){
        if(red == "queen" && red2 == "black"){
          $(".turn3").text("");
        }
        else {
        $(r5).css("background-color","");
        $(".turn3").text("cant move");
        }
       }
    }
  }
      var row = [];
      row = $("th");
      for (var rr=0;rr<=row.length;rr++){
        var r2 = row[rr];
        var hh = $(r2).css("background-color");
         if (hh == "rgb(0, 0, 255)"){
          $(".turn3").text("");
          break;
          }
          else if(hh == "rgb(255, 0, 0)"){
            $(".turn3").text("");
            break;
          }
          else {
            $(".turn3").text("cant move");
          }
      }
}
}
}
i++;
}
var poss3 = pos;
var i = 0;
var r = [];
    //top left cross
    for(var c2=parseInt(m)+1;c2<=8;c2++){
      for(var cross=poss3-1;cross==poss3-1;cross--){
        var c3 = array[cross];
        var poss3 = cross;
        var cc = c3+c2;
        var cross = cross+1;
        var l = document.getElementById(cc);
        r[i] = cc;
      }
      var ch = $(l).find("img").attr("alt");
      var cls = $(l).find("img").attr("class");
      var cllr = $(l).css("background-color");
      if(cls == "black"){
        break;
      }
      else if(ch!= "king" && cls == "white"){
        //$(".turn3").text("");
        break;
      }
      else if(ch== "king" && cls == "white") {
        if(b == "king" && color2 == "white"){
          var row = [];
              row = $("th");
              for (var rr=0;rr<=row.length;rr++){
                var r2 = row[rr];
                var hh = $(r2).css("background-color");
                var iid2 = $(r2).attr("id");
                 if (hh == "rgb(0, 0, 255)"){
                  if( $.inArray(iid2, r) !== -1 ) {
                    $(r2).css("background-color","");
                  }
                else {
                  
                  $(".turn3").text("");
                }
              }
             
            }
        }
        else {
        var poss = pos;
        for(var c2=parseInt(m)+1;c2<=8;c2++){
          for(var cross=poss3-1;cross==poss3-1;cross--){
            var c3 = array[cross];
            var poss3 = cross;
            var cc = c3+c2;
            var cross = cross+1;
            var l = document.getElementById(cc);
            }
          var ch = $(l).find("img").attr("alt");
          var cls = $(l).find("img").attr("class");
          var iid = $(l).attr("id");
          var cllr = $(l).css("background-color");
           if (cllr == "rgb(0, 0, 255)"){
            var row = [];
            row = $("th");
            for (var rr=0;rr<=row.length;rr++){
              var r2 = row[rr];
              var hh = $(r2).css("background-color");
              var iid2 = $(r2).attr("id");
               if (hh == "rgb(0, 0, 255)"){
                if( $.inArray(iid2, r) !== -1 ) {
                  $(".turn3").text("");
                }
              else {
                $(r2).css("background-color","");
                $(".turn3").text("cant move");
              }
            }
           
          }
        }
            else {
              var row = [];
              row = $("th");
              for (var rr=0;rr<=row.length;rr++){
                var r5 = row[rr];
                var hh = $(r5).css("background-color");
              var iid2 = $(r5).attr("id");
              var red = $(r5).find("img").attr("alt");
              var red2 = $(r5).find("img").attr("class");
               if (hh == "rgb(0, 0, 255)"){
                if( $.inArray(iid2, r) !== -1 ) {
                  $(".turn3").text("");
                }
              else {
                $(r5).css("background-color","");
                $(".turn3").text("cant move");
              }
            }
            else if(hh == "rgb(255, 0, 0)"){
              if(red == "queen" && red2 == "black"){
                $(".turn3").text("");
              }
              else {
              $(r5).css("background-color","");
              $(".turn3").text("cant move");
              }
             }
          }
        }
            var row = [];
            row = $("th");
            for (var rr=0;rr<=row.length;rr++){
              var r2 = row[rr];
              var hh = $(r2).css("background-color");
               if (hh == "rgb(0, 0, 255)"){
                $(".turn3").text("");
                break;
                }
                else if(hh == "rgb(255, 0, 0)"){
                  $(".turn3").text("");
                  break;
                }
                else {
                  $(".turn3").text("cant move");
                }
            }
      }
      }
    }
      i++;
    }
    var poss4 = pos;
    var i = 0;
var r = [];
    //bottom left cross
    for(var cc2=parseInt(m)-1;cc2>=1;cc2--){
      for(var cross2=poss4-1;cross2==poss4-1;cross2--){
        var c3 = array[cross2];
        var poss4 = cross2;
        var cc = c3+cc2;
        var cross2 = cross2+1;
        var l = document.getElementById(cc);
        r[i] = cc;
      }
      var ch = $(l).find("img").attr("alt");
      var cls = $(l).find("img").attr("class");
      var cllr = $(l).css("background-color");
      if(cls == "black"){
        break;
      }
      else if(ch!= "king" && cls == "white"){
        //$(".turn3").text("");
        break;
      }
      else if(ch== "king" && cls == "white") {
        if(b == "king" && color2 == "white"){
          var row = [];
              row = $("th");
              for (var rr=0;rr<=row.length;rr++){
                var r2 = row[rr];
                var hh = $(r2).css("background-color");
                var iid2 = $(r2).attr("id");
                 if (hh == "rgb(0, 0, 255)"){
                  if( $.inArray(iid2, r) !== -1 ) {
                    $(r2).css("background-color","");
                  }
                else {
                  
                  $(".turn3").text("");
                }
              }
             
            }
        }
        else {
        var poss = pos;
        for(var cc2=parseInt(m)-1;cc2>=1;cc2--){
          for(var cross2=poss4-1;cross2==poss4-1;cross2--){
            var c3 = array[cross2];
        var poss4 = cross2;
        var cc = c3+cc2;
        var cross2 = cross2+1;
        var l = document.getElementById(cc);
            }
          var ch = $(l).find("img").attr("alt");
          var cls = $(l).find("img").attr("class");
          var iid = $(l).attr("id");
          var cllr = $(l).css("background-color");
           if (cllr == "rgb(0, 0, 255)"){
            var row = [];
            row = $("th");
            for (var rr=0;rr<=row.length;rr++){
              var r2 = row[rr];
              var hh = $(r2).css("background-color");
              var iid2 = $(r2).attr("id");
               if (hh == "rgb(0, 0, 255)"){
                if( $.inArray(iid2, r) !== -1 ) {
                  $(".turn3").text("");
                }
              else {
                $(r2).css("background-color","");
                $(".turn3").text("cant move");
              }
            }
           
          }
        }
            else {
              var row = [];
              row = $("th");
              for (var rr=0;rr<=row.length;rr++){
                var r5 = row[rr];
                var hh = $(r5).css("background-color");
              var iid2 = $(r5).attr("id");
              var red = $(r5).find("img").attr("alt");
              var red2 = $(r5).find("img").attr("class");
               if (hh == "rgb(0, 0, 255)"){
                if( $.inArray(iid2, r) !== -1 ) {
                  $(".turn3").text("");
                }
              else {
                $(r5).css("background-color","");
                $(".turn3").text("cant move");
              }
            }
            else if(hh == "rgb(255, 0, 0)"){
              if(red == "queen" && red2 == "black"){
                $(".turn3").text("");
              }
              else {
              $(r5).css("background-color","");
              $(".turn3").text("cant move");
              }
             }
          }
        }
            var row = [];
            row = $("th");
            for (var rr=0;rr<=row.length;rr++){
              var r2 = row[rr];
              var hh = $(r2).css("background-color");
               if (hh == "rgb(0, 0, 255)"){
                $(".turn3").text("");
                break;
                }
                else if(hh == "rgb(255, 0, 0)"){
                  $(".turn3").text("");
                  break;
                }
                else {
                  $(".turn3").text("cant move");
                }
            }
      }
    }
      }
      i++;
    }
}
if(hh3 =="knight" && hh == "black"){
  var m = parseInt(place.charAt(1));
  var n = place.charAt(0);
  var array = ["a","b","c","d","e","f","g","h"];
  var pos = array.indexOf(n);
  //top left1
  var tl11 = m-2;
  var tl12 = pos-1;
  var sec1 = array[tl12];
  var f1 = sec1 + tl11;
  //top left2
  var tl21 = m-1;
  var tl22 = pos-2;
  var sec2 = array[tl22];
  var f2 = sec2 + tl21;
   //top right1 
   var tr11 = m-2;
   var tr12 = pos+1;
   var sec3 = array[tr12];
   var f3 = sec3 + tr11;  
   //top right2
   var tr21 = m-1;
   var tr22 = pos+2;
   var sec4 = array[tr22];
   var f4 = sec4 + tr21;  
   //bottom left1 
   var bl11 = m+2;
   var bl12 = pos-1;
   var sec5 = array[bl12];
   var f5 = sec5 + bl11;
   //bottom left2
   var bl21 = m+1;
   var bl22 = pos-2;
   var sec6 = array[bl22];
   var f6 = sec6 + bl21; 
   //bottom right1 
   var br11 = m+1;
   var br12 = pos+2;
   var sec7 = array[br12];
   var f7 = sec7 + br11;
   //bottom right2
   var br21 = m+2;
   var br22 = pos+1;
   var sec8 = array[br22];
   var f8 = sec8 + br21;
   var CHECK2 = [f1,f2,f3,f4,f5,f6,f7,f8];
   for (var i=0;i<=CHECK2.length;i++){
       var j = CHECK2[i];
       var ss = document.getElementById(j); 
       var hh4 = $(ss).find("img").attr("alt");
       var hh = $(ss).find("img").attr("class");
       var hh3 = $(ss).css("background-color");
       if (hh4 == "king" && hh == "white"){
        if(b == "king" && color2 == "white"){
          $(".turn3").text("");
          break;
        }
        else {
        var rows = [];
        rows = $("th");
        for (var rr=0;rr<=rows.length;rr++){ 
          var r = rows[rr];
          var place = $(r).find("img").attr("id");
      var hh = $(r).find("img").attr("class");
      var hh3 = $(r).css("background-color");
      var hh4 = $(r).find("img").attr("alt");
      if(hh3 == "rgb(255, 0, 0)" && hh4 =="knight"){
        var m = parseInt(place.charAt(1));
        var n = place.charAt(0);
        var array = ["a","b","c","d","e","f","g","h"];
        var pos = array.indexOf(n);
        //top left1
        var tl11 = m-2;
        var tl12 = pos-1;
        var sec1 = array[tl12];
        var f1 = sec1 + tl11;
        //top left2
        var tl21 = m-1;
        var tl22 = pos-2;
        var sec2 = array[tl22];
        var f2 = sec2 + tl21;
         //top right1 
         var tr11 = m-2;
         var tr12 = pos+1;
         var sec3 = array[tr12];
         var f3 = sec3 + tr11;  
         //top right2
         var tr21 = m-1;
         var tr22 = pos+2;
         var sec4 = array[tr22];
         var f4 = sec4 + tr21;  
         //bottom left1 
         var bl11 = m+2;
         var bl12 = pos-1;
         var sec5 = array[bl12];
         var f5 = sec5 + bl11;
         //bottom left2
         var bl21 = m+1;
         var bl22 = pos-2;
         var sec6 = array[bl22];
         var f6 = sec6 + bl21; 
         //bottom right1 
         var br11 = m+1;
         var br12 = pos+2;
         var sec7 = array[br12];
         var f7 = sec7 + br11;
         //bottom right2
         var br21 = m+2;
         var br22 = pos+1;
         var sec8 = array[br22];
         var f8 = sec8 + br21;
         var CHECK3 = [f1,f2,f3,f4,f5,f6,f7,f8];
         for (var i=0;i<=CHECK3.length;i++){
             var j = CHECK3[i];
             var ss = document.getElementById(j); 
             var hh4 = $(ss).find("img").attr("alt");
             var hh = $(ss).find("img").attr("class");
             var hh3 = $(ss).css("background-color");
             if (hh4 == "king" && hh == "white"){
              $(r).css("background-color","rgb(255, 0, 0)");
              break;
            }
             else {
              $(r).css("background-color","");
             }
            }
        var rowi = [];
        rowi = $("th");
        for (var rr3=0;rr<=rowi.length;rr++){ 
          var r = rowi[rr3];
          var hh3 = $(r).css("background-color");
          if (hh3 == "rgb(0, 0, 255)"){
            $(r).css("background-color","");
            $(".turn3").text("");
          }
        }
      }
      else if (hh3 == "rgb(0, 0, 255)" || hh3 == "rgb(255, 0, 0)"){
        $(r).css("background-color","");
        $(".turn3").text("cant move");
      }
       }
      }
       }
   }
}
if(hh3 =="pawn" && hh == "black"){
  var m = parseInt(place.charAt(1));
  var n = place.charAt(0);
  var array = ["a","b","c","d","e","f","g","h"];
  var pos = array.indexOf(n);
  //posiions
  var cc = parseInt(m)+1;
  var crs = pos+1;
  var crs2 = pos-1;
  var crsl = array[crs];
  var crsl2 = array[crs2];
  var dd1 = crsl + cc;
  var dd12 = crsl2 + cc;
  var ll = document.getElementById(dd1);
  var ll2 = document.getElementById(dd12);
  var ddimg = $(ll).find("img").attr("class");
  var ddimg1 = $(ll).find("img").attr("alt");
  var ddimg2 = $(ll2).find("img").attr("class");
  var ddimg21 = $(ll2).find("img").attr("alt");
  if (ddimg == "white" && ddimg1 == "king" || ddimg2 == "white" && ddimg21 == "king"){
    if(b == "king" && color2 == "white"){
      $(".turn3").text("");
      break;
    }
    else {
      var rows = [];
      rows = $("th");
      for (var rr=0;rr<=rows.length;rr++){ 
        var r = rows[rr];
        var place = $(r).find("img").attr("id");
    var hh = $(r).find("img").attr("class");
    var hh3 = $(r).css("background-color");
    var hh4 = $(r).find("img").attr("alt");
    if(hh3 == "rgb(255, 0, 0)" && hh4 =="pawn"){
      var m = parseInt(place.charAt(1));
  var n = place.charAt(0);
  var array = ["a","b","c","d","e","f","g","h"];
  var pos = array.indexOf(n);
  //position
      var cc = parseInt(m)+1;
  var crs = pos+1;
  var crs2 = pos-1;
  var crsl = array[crs];
  var crsl2 = array[crs2];
  var dd1 = crsl + cc;
  var dd12 = crsl2 + cc;
  var ll = document.getElementById(dd1);
  var ll2 = document.getElementById(dd12);
  var ddimg = $(ll).find("img").attr("class");
  var ddimg1 = $(ll).find("img").attr("alt");
  var ddimg2 = $(ll2).find("img").attr("class");
  var ddimg21 = $(ll2).find("img").attr("alt");
  if (ddimg == "white" && ddimg1 == "king" || ddimg2 == "white" && ddimg21 == "king"){
    }
    else{
      $(r).css("background-color","");
    }
      $(".turn3").text("");
    }
    else if (hh3 == "rgb(0, 0, 255)" || hh3 == "rgb(255, 0, 0)"){
      $(r).css("background-color","");
      $(".turn3").text("cant move");
    }
     }
    }
  }

}
}    
    
else if(txt2 == "black turn"){
 
    }
  }
  }
    }  
});
})