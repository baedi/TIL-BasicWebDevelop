var userInfo = {};

window.onload = function(){
    userInfo = JSON.parse(document.getElementById("default_userinfo").textContent);
    load();
}

function save(){
    userInfo.name = document.getElementById("name").value;
    userInfo.age = document.getElementById("age").value;
}

function load(){
    document.getElementById("name").value = userInfo.name;
    document.getElementById("age").value = userInfo.age;
}

function reset(){
    document.getElementById("name").value = null;
    document.getElementById("age").value = null;
}