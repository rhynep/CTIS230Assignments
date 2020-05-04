myitem = document.getElementById("firsttest"); // gets element by id
myitem.addEventListener("click", onClick);     // adds event listener so click causes the color to change

function onClick() {                // function added to make color change on click
    myitem.style.color = "green";
    myitem.style.fontSize = "2em";
}
myitem = document.getElementById("firsttest"); // adds event listener: changing text color
myitem.addEventListener('mouseout', onMouseOut);

function onMouseOut() {
    myitem.style.color = "";
    myitem.style.fontSize = "";
}




// the button: changes color of p - store manager job description
thebutton = document.getElementById("thebutton");
otheritem = document.getElementById("buttontest");

thebutton.addEventListener("click", onButtonClick);

function onButtonClick() {
otheritem.style.color="red";
}



// the second button: button 2 - ul - changes color of fashion panel
thebutton2 = document.getElementById("thebutton2");
otheritem = document.getElementById("buttontest2");

thebutton2.addEventListener("click", onButtonClick);
function onButtonClick() {
    otheritem.style.color="magenta";
}



// input box 
textentry = document.getElementById('myinput');
myinput.addEventListener("change", onChange);

function onChange() {
    newtext = myinput.value;
    otheritem.innerHTML = newtext;
}

