const theme = document.getElementById("theme");
var root = document.querySelector(':root');

var is = localStorage["theme"]

theme.onclick = function(){
    if (is == "dark"){
        root.style.setProperty('--bg', "#f8f8f2");
        root.style.setProperty('--text', "#282a36");
        root.style.setProperty('--bg-nav', "#bbbbbb");
        root.style.setProperty('--red', "#cc0000");
        root.style.setProperty('--orange', "#cd5b00");
        root.style.setProperty('--yellow', "#ffeb00");
        root.style.setProperty('--green', "#19a645");
        root.style.setProperty('--blue', "#0067dd");
        root.style.setProperty('--purple', "#7600e5");
        localStorage["theme"] = "light";
        is = "light";
    }else{
        root.style.setProperty('--bg', "#282a36");
        root.style.setProperty('--text', "#f8f8f2");
        root.style.setProperty('--bg-nav', "#44475a");
        root.style.setProperty('--red', "ff5555");
        root.style.setProperty('--orange', "#ffb86c");
        root.style.setProperty('--yellow', "#f1fa8c");
        root.style.setProperty('--green', "#50fa7b");
        root.style.setProperty('--blue', "#8be9fd");
        root.style.setProperty('--purple', "#bd93f9");
        localStorage["theme"] = "dark";
        is = "dark";
    }
}