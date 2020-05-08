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
theImgDiv1 = document.getElementById("card1");
theImage1 = document.getElementById("cardimage1");
theImgDiv1.addEventListener("click", expandImage1);
theImage1 = document.getElementById("cardimage1");

function expandImage1() {
    if (theImgDiv1.style.position == "") {
        theImgDiv1.style.position = "absolute";
        theImgDiv1.style.top = "100";
        theImgDiv1.style.left = "100";
        theImage1.style.width = "auto";
        theImage1.src = "https://rhynep.github.io/CTIS230Assignments/testing/image001.png";
    } 
    else { // makes it small
        theImgDiv1.style.position = "";
        theImage1.style.width = "";
    }
}

// the chariot
theImgDiv2 = document.getElementById("card2");
theImage2 = document.getElementById("cardimage2");
theImgDiv2.addEventListener("click", expandImage2);
theImage2 = document.getElementById("cardimage2");

function expandImage2() {
    if (theImgDiv2.style.position == "") {
        theImgDiv2.style.position = "absolute";
        theImgDiv2.style.top = "100";
        theImgDiv2.style.left = "100";
        theImage2.style.width = "auto";
        theImage2.src = "https://rhynep.github.io/CTIS230Assignments/testing/image005.png";
    } 
    else { // makes it small
        theImgDiv2.style.position = "";
        theImage2.style.width = "";
    }
}

// the moon
theImgDiv3 = document.getElementById("card3");
theImage3 = document.getElementById("cardimage3");
theImgDiv3.addEventListener("click", expandImage3);
theImage3 = document.getElementById("cardimage3");

function expandImage3() {
    if (theImgDiv3.style.position == "") {
        theImgDiv3.style.position = "absolute";
        theImgDiv3.style.top = "100";
        theImgDiv3.style.left = "100";
        theImage3.style.width = "auto";
        theImage3.src = "https://rhynep.github.io/CTIS230Assignments/testing/image007.png";
    } 
    else { // makes it small
        theImgDiv3.style.position = "";
        theImage3.style.width = "";
    }
}


theImgDiv4 = document.getElementById("card4");
theImage4 = document.getElementById("cardimage4");
theImgDiv4.addEventListener("click", expandImage4);
theImage4 = document.getElementById("cardimage4");

function expandImage4() {
    if (theImgDiv4.style.position == "") {
        theImgDiv4.style.position = "absolute";
        theImgDiv4.style.top = "100";
        theImgDiv4.style.left = "100";
        theImage4.style.width = "auto";
        theImage4.src = "https://rhynep.github.io/CTIS230Assignments/testing/image018.png";
    } 
    else { // makes it small
        theImgDiv4.style.position = "";
        theImage4.style.width = "";
    }
}
