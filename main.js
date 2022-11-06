let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let num3 = document.getElementById('num3');
let num4 = document.getElementById('num4');
let num5 = document.getElementById('num5');
let num6 = document.getElementById('num6');
let num7 = document.getElementById('num7');
let num8 = document.getElementById('num8');
let num9 = document.getElementById('num9');
let num10 = document.getElementById('num10');
let total = document.getElementById('total');
let div = document.getElementById("div");
let menu = document.getElementById("menu22");
let x = document.getElementById("x");

function get_total() {


    let result = ((+num1.value + +num2.value + +num3.value + +num4.value + +num5.value +
        +num6.value + +num7.value + +num8.value + +num9.value + +num10.value) / 10);
    total.innerHTML = result;
}


// ssencoed 

function closee() {

    if (div.style.display === "none") {
        div.style.display = "block";
    } else {
        div.style.display = "none";

    }
}

// thirrrdd

function menuee() {

    if (menu.style.display === "none") {
        menu.style.display = "block";
        menu.style.top = "50px";
    } else {
        menu.style.display = "none";

    }


}
function nooo() {
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";


    }
}


//night mode

let mainn = document.getElementById("main");
let nightt = document.getElementById("nightmode");


function night() {
    if (mainn.style.backgroundColor === "white") {
        nightt.innerHTML = "Morning Mode";
        mainn.style.backgroundColor = "black";
        mainn.style.color = "white";
    } else {
        nightt.innerHTML = "Night Mode";
        mainn.style.backgroundColor = "white";
        mainn.style.color = "black";
    }
}




// formm 
let err = document.getElementById("err");
let username = document.getElementById("name");
let phone = document.getElementById("phonee");
let email = document.getElementById("mail1");
let text = "";

function bsss() {
    if (isNaN(phone.value) || phone.value.length != 11) {
        text = "please Enter a valid phone";
        err.innerHTML = text;
        return false;


    }
    else if (username.value.length < 5) {
        text = "Name should be more than 5 charcters";
        err.innerHTML = text;
        return false;


    } else if (email.value.indexOf("@") == -1) {
        text = "please Enter a valid Email";
        err.innerHTML = text;
        return false;


    } else {
        alert("Done");
        return true;
    }
}



// clock



function showtime() {
    let date = new Date();
    let hrs = date.getHours();
    let minss = date.getMinutes();
    let sec = date.getSeconds();

    let clock = hrs + ":" + minss + ":" + sec;
    if (hrs  < 10 && sec < 10 && minss < 10) {

        let hrs1 = "0" + hrs + ":" + "0"  + minss + ":"+ "0" + sec;
 

        document.getElementById("displayClock").innerHTML = hrs1;
        setTimeout(showtime, 1000);

    } else if (hrs  < 10 && sec < 10){
        let hrs2 = "0" + hrs + ":"  + minss + ":"+ "0" + sec;

        document.getElementById("displayClock").innerHTML = hrs2;
        setTimeout(showtime, 1000);
    

    }else if (hrs < 10){
        let hrs3 = "0" + hrs + ":"  + minss + ":" + sec;

        document.getElementById("displayClock").innerHTML = hrs3;
        setTimeout(showtime, 1000);

    }
    else if (minss < 10){
        let hrs4 =  + hrs + ":" + "0" + minss + ":" + sec;

        document.getElementById("displayClock").innerHTML = hrs4;
        setTimeout(showtime, 1000);

    }else if (sec < 10){
        let hrs5 =   hrs + ":"  + minss + ":" + "0"+ sec;

        document.getElementById("displayClock").innerHTML = hrs5;
        setTimeout(showtime, 1000);

    }else{
        document.getElementById("displayClock").innerHTML = clock;
        setTimeout(showtime, 1000);
    }





} showtime()
