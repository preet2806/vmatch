var nav;
window.onload = () => {
    nav=window.innerWidth;
    console.log(nav);
    if(nav<600)
    {
        document.getElementById("selection").innerHTML+='<a onclick="swipemode()">Swipe</a>';
        document.getElementById("switch").innerHTML+='<a id="modeswitch" onclick="matchmode()">< matches</a>';
    }
}
const swipemode = () => {
    document.getElementById("sidebar").style.opacity='0';
    document.getElementById("sidebar").style.zIndex='-1';
    document.getElementById("cardsContainer").style.zIndex='1';
};
const matchmode = () => {
    document.getElementById("sidebar").style.opacity='1';
    document.getElementById("sidebar").style.zIndex='1';
    document.getElementById("cardsContainer").style.zIndex='-1';
};
const signupDiv = () => {
    
    document.getElementById("welcomeBody").style.opacity=0.3;
    document.getElementById("navbar").style.opacity=0.3;
    document.getElementById("container").innerHTML = '<div id="signupContainer"><div class="icon"><i class="fas fa-feather-alt"></i></div><form id="signupForm"><label>Email-address</label><input onfocusout="outon(this)" onfocus="focuson(this)" type="email" class="signupElement"><label for="mobile">Mobile number</label><input onfocusout="outon(this)" onfocus="focuson(this)" name="mobile" type="text" class="signupElement"><p>already a user? <a onclick="loginDiv()">login</a></p><button id="signupButton" type="submit" class="but"><a href="signup.html"><span class="button-helper"></span>go</a></button></form></div>';
    document.getElementById("container").style.width = '20vw';
    document.getElementById("container").style.height = '60vh';
    document.getElementById("closebtn").style.display = 'flex';
    if(nav<600){
        document.getElementById("container").style.width = '60vw';
        document.getElementById("container").style.height = '60vh';
    }
};
const loginDiv = () => {  
    document.getElementById("welcomeBody").style.opacity=0.3;  
    document.getElementById("container").innerHTML = '<div id="loginContainer"><div class="icon"><i class="fas fa-feather-alt"></i></div><form id="signupForm"><label>Email-address</label><input onfocusout="outon(this)" onfocus="focuson(this)" type="email" class="signupElement"><label>Password</label><input onfocus="focuson(this)" onfocusout="outon(this)" type="password" class="loginElement"><p>new user? <a onclick="signupDiv()">signup</a></p><button href="account.html" id="loginButton" type="submit" class="but"><a href="account.html"><span class="button-helper"></span>go</a></button></form></div>';
    document.getElementById("container").style.width = '20vw';
    document.getElementById("container").style.height = '60vh';
    if(nav<600){
        document.getElementById("container").style.width = '60vw';
        document.getElementById("container").style.height = '60vh';
    }
};
const removeAlert = () => {
    
    document.getElementById("welcomeBody").style.opacity=1;
    document.getElementById("navbar").style.opacity=1;
    document.getElementById("container").innerHTML = '';
    document.getElementById("container").style.width = '0px';
    document.getElementById("container").style.height = '0px';
    document.getElementById("closebtn").style.display = 'none';

};
const matchesDisplay = () => {
    document.getElementById("matches").className= 'highlight';
    document.getElementById("messages").className= 'noclass';
    document.getElementById("container").innerHTML= '<div id="matchContainer"></div>';
    for(var i=0;i<7;i++)
    {
        htmlstring='<div class="match" onclick="goToChat()"><img src="chili.jpg" class="matchDp"><h4 class="matchName">name</h4></div>';
        matchContainer.innerHTML += htmlstring;
    }

};
const messagesDisplay = () => {
    document.getElementById("matches").className= 'noclass';
    document.getElementById("messages").className= 'highlight';
    document.getElementById("container").innerHTML= '<div id="messageContainer"></div>';

    for(var i=0;i<7;i++)
    {
        htmlstring='<div class="message" onclick="goToChat()"><img src="chili.jpg" class="messageDp"><h4 class="messageName">na,e</h4></div>';
        messageContainer.innerHTML += htmlstring;
    }

};
const goToChat = () => {
    document.getElementById("chat").innerHTML='<div id="chatBox"><div id="userDetails"><button onclick="goBack()" id="goBackButton"><div class="but">back</div></button><img id="userDp" src="chili.jpg"><h2 id="userName">name</h2></div><div id="chatWindow"><div id="sendDiv"><input id="sendMessage" type="text"><button id="send"><div class="but">send</div></button></div></div></div>';
};
const goBack = () => {
    document.getElementById("chat").innerHTML='<div id="selection"><a onclick="matchesDisplay()" id="matches">matches</a><a onclick="messagesDisplay()" id="messages">messages</a></div><div id=container></div>'
    if(nav<600)
    {
        document.getElementById("selection").innerHTML+='<a onclick="swipemode()">Swipe</a>';
    }
}
const focuson = (n) =>{
    n.previousElementSibling.style.transform='translateY(10px)' ;
    n.previousElementSibling.style.fontSize='15px' 
}
const outon = (n) =>{
    if(n.value==''){
        n.previousElementSibling.style.transform='translateY(40px)' ;
        n.previousElementSibling.style.fontSize='20px'  
    }
    
    console.log(n.value);
}





