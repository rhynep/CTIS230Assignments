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
otheritem2 = document.getElementById("buttontest2");

thebutton2.addEventListener("click", onButtonClick2);
function onButtonClick2() {
    otheritem2.style.color="magenta";
}



// input box 
textentry = document.getElementById('myinput');
myinput.addEventListener("change", onChange);

function onChange() {
    newtext = myinput.value;
    otheritem.innerHTML = newtext;
}


// adding more interaction: dark mode button
darkmodebutton = document.getElementById("darkmodebutton");
otheritem3 = document.getElementById("getdarkmode");

darkmodebutton.addEventListener("click", onButtonClick3)
function onButtonClick3() {
    otheritem3.style.backgroundColor = "black";
}


// adding javascript expansion image views
// the star
theImgDiv = document.getElementById("card");
theImage = document.getElementById("cardimage");
theImgDiv.addEventListener("click", expandImage);
theImage = document.getElementById("cardimage");

function expandImage() {
    if (theImgDiv.style.position == "") {
        theImgDiv.style.position = "absolute";
        theImgDiv.style.top = "100";
        theImgDiv.style.left = "100";
        theImage.style.width = "auto";
        theImage.src = "https://rhynep.github.io/CTIS230Assignments/testing/image017.png";
    } 
    else { // makes it small
        theImgDiv.style.position = "";
        theImage.style.width = "";
    }
}

// the hierophant
theImgDiv = document.getElementById("card1");
theImage = document.getElementById("cardimage1");
theImgDiv.addEventListener("click", expandImage1);
theImage = document.getElementById("cardimage1");

function expandImage1() {
    if (theImgDiv.style.position == "") {
        theImgDiv.style.position = "absolute";
        theImgDiv.style.top = "100";
        theImgDiv.style.left = "100";
        theImage.style.width = "auto";
        theImage.src = "https://rhynep.github.io/CTIS230Assignments/testing/image017.png";
    } 
    else { // makes it small
        theImgDiv.style.position = "";
        theImage.style.width = "";
    }
}

// the chariot
theImgDiv = document.getElementById("card2");
theImage = document.getElementById("cardimage2");
theImgDiv.addEventListener("click", expandImage2);
theImage = document.getElementById("cardimage2");

function expandImage2() {
    if (theImgDiv.style.position == "") {
        theImgDiv.style.position = "absolute";
        theImgDiv.style.top = "100";
        theImgDiv.style.left = "100";
        theImage.style.width = "auto";
        theImage.src = "https://rhynep.github.io/CTIS230Assignments/testing/image017.png";
    } 
    else { // makes it small
        theImgDiv.style.position = "";
        theImage.style.width = "";
    }
}

// the moon
theImgDiv = document.getElementById("card3");
theImage = document.getElementById("cardimage3");
theImgDiv.addEventListener("click", expandImage);
theImage = document.getElementById("cardimage3");

function expandImage() {
    if (theImgDiv.style.position == "") {
        theImgDiv.style.position = "absolute";
        theImgDiv.style.top = "100";
        theImgDiv.style.left = "100";
        theImage.style.width = "auto";
        theImage.src = "https://rhynep.github.io/CTIS230Assignments/testing/image017.png";
    } 
    else { // makes it small
        theImgDiv.style.position = "";
        theImage.style.width = "";
    }
}


theImgDiv = document.getElementById("card4");
theImage = document.getElementById("cardimage4");
theImgDiv.addEventListener("click", expandImage);
theImage = document.getElementById("cardimage4");

function expandImage() {
    if (theImgDiv.style.position == "") {
        theImgDiv.style.position = "absolute";
        theImgDiv.style.top = "100";
        theImgDiv.style.left = "100";
        theImage.style.width = "auto";
        theImage.src = "https://rhynep.github.io/CTIS230Assignments/testing/image017.png";
    } 
    else { // makes it small
        theImgDiv.style.position = "";
        theImage.style.width = "";
    }
}
