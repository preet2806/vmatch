const signupDiv = () => {
    
    document.getElementById("title").style.opacity=0.4;
    document.getElementById("titlep").style.opacity=0.4;
    document.getElementById("container").innerHTML = '<div id="signupContainer"><div class="icon"><i class="fas fa-feather-alt"></i></div><form id="signupForm"><h3>Enter your email-address</h3><input type="email" class="signupElement"><h3>Enter your mobile number</h3><input type="number" class="signupElement"><p>already a user? <a onclick="loginDiv()">login</a></p><button onclick=window.open("signup.html") id="signupButton" type="submit">go</button></form></div>';
    
};
const loginDiv = () => {
     
    document.getElementById("title").style.opacity=0.4;
    document.getElementById("titlep").style.opacity=0.4;
    document.getElementById("container").innerHTML = '<div id="loginContainer"><div class="icon"><i class="fas fa-feather-alt"></i></div><form id="loginForm"><h3>Enter your email-address</h3><input type="email" class="signupElement"><h3>Enter your password</h3><input type="password" class="signupElement"><p>new user? <a onclick="signupDiv()">Signup</a></p><button id="loginButton" onclick=window.open("account.html")>go</button></form></div>';

};
const removeAlert = () => {
    
    document.getElementById("signupBody").style.opacity=1;
    
    document.getElementById("container").innerHTML = '';

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
    document.getElementById("chat").innerHTML='<div id="chatBox"><div id="userDetails"><button onclick="goBack()" id="goBackButton">back</button><img id="userDp" src="chili.jpg"><h2 id="userName">name</h2></div><div id="chatWindow"><div id="sendDiv"><input id="sendMessage" type="text"><button id="send">send</button></div></div></div>';
};
const goBack = () => {
    document.getElementById("chat").innerHTML='<div id="selection"><a onclick="matchesDisplay()" id="matches">matches</a><a onclick="messagesDisplay()" id="messages">messages</a></div><div id=container></div>'
}






