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





