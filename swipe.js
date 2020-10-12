htmlcard='" class="card"><div class="cardDp"><h2 class="cardName">Name</h2></div><div id="buttonContainer"><i class="far fa-times-circle"></i><i class="far fa-check-circle"></i></div></div>';
window.onload = () =>{
    for(var i=1;i<5;i++){
        console.log(i)
        htmlcardid='<div id="'+i+'" class="card"><div class="cardDp"><h2 class="cardName">'+i+'</h2></div><div id="buttonContainer"><i onclick="leftswipe(this)" class="far fa-times-circle"></i><i onclick="rightswipe(this)" class="far fa-check-circle"></i></div></div>';
        document.getElementById("cardsContainer").innerHTML+=htmlcardid;
        document.getElementById(i).style.zIndex=i;
    }
}
const leftswipe = (n) =>{
    console.log(n.parentNode.parentNode)
    n.parentNode.parentNode.style.animation="leftback 1s linear 0s 1 normal forwards";
    
    for(var i=1;i<5;i++){
        j=document.getElementById(i).style.zIndex;
        k=j+1;
        document.getElementById(i).style.zIndex=k;
    }
    n.parentNode.parentNode.style.zIndex="-1";
}
const rightswipe = (n) =>{
    console.log(n.parentNode.parentNode)
    n.parentNode.parentNode.style.animation="rightback 1s linear 0s 1 normal forwards";
    
    for(var i=1;i<5;i++){
        j=document.getElementById(i).style.zIndex;
        k=j+1;
        document.getElementById(i).style.zIndex=k;
    }
    n.parentNode.parentNode.style.zIndex="-1";
}

