var prev_array=[];
var urun ;
var ne;
function mainfunc(){
    document.getElementById("prevval").value="--";
}
function output_coin(){
    var num=Math.floor((Math.random()*90)+1);
    if(prev_array.indexOf(num)==-1){
        if(prev_array.length>0){
            document.getElementById("prevval").value=prev_array[(prev_array.length)-1];
        }
        document.getElementById("output").value=num;
        var text = num.toString()
        if(text.length==1){
            first = " single digit "
            second= ""
        }
        else{
            first=" "+text[0]
            second=" "+text[1]
        }
        window.speechSynthesis.speak(new SpeechSynthesisUtterance(first));
        window.speechSynthesis.speak(new SpeechSynthesisUtterance(second));
        window.speechSynthesis.speak(new SpeechSynthesisUtterance(" "+num));
        document.getElementById("num"+num).style.backgroundColor="red";
        document.getElementById("num"+num).style.color="white"
        prev_array.push(num);
    }
    else{
        output_coin();
    }  
    if(prev_array.length==90){
         ne = confirm("Game ended click ok to play again");
        
        if(ne==true){
            
            location.reload();
        }
    } 
}

function slide(){
    document.getElementById("button-div").style.backgroundColor="rgb(109, 156, 109)";
    document.getElementById("autocount-button-off").style.backgroundColor="rgb(0, 82, 0)"
    document.getElementById("autocount-button").style.backgroundColor="rgb(109, 156, 109)"
    urun=setInterval(function(){output_coin()},6000);
       
}
function slideoff(){
    document.getElementById("button-div").style.backgroundColor="rgb(207, 196, 196)";
    document.getElementById("autocount-button").style.backgroundColor="rgb(0, 82, 0)";
    document.getElementById("autocount-button-off").style.backgroundColor="rgb(207, 196, 196)";
    clearInterval(urun)
   
}
