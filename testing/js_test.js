// Step 0: What do we want to do?
// Change the color of the text when we move over it; change it back when we move off of it




// Step 1: Get the element we want to listen to and affect and store it away for use
ourText = document.getElementById("text");
ourButton = document.getElementById("mybutton");

theTextInput = document.getElementById("myinput");

theImgDiv = document.getElementById("card");
theImage = document.getElementById("cardimage");


// Each page is called "document"--we want to ask document to do something. That something is get the HTML node with the id "text"
// Then, we'll give that element the name "ourText"




// Step 2: We want to tell ourText that we when a mouse moves over it, it should change its color. We do this by telling ourText to use a specific event listener

ourText.addEventListener("mouseover", onMouseOver);
ourText.addEventListener("mouseout", onMouseOut);
ourButton.addEventListener("click", onClick);



theTextInput.addEventListener("blur", changeText); // blur is when textfield loses focus
theTextInput.addEventListener("change", changeText); // change is when user hits enter


theImgDiv.addEventListener("click", expandImage);
theImage = document.getElementById("cardimage");

// We've now told ourText that it should use an event listener named onMouseOver whenever the mouseover event occurs--Table 21-2, pg. 614




// Step 3: Write the event listener

// expanding image
function expandImage() {
    if (theImgDiv.style.position == "") { //if div has orig value
        theImgDiv.style.position = "absolute";
    theImgDiv.style.top = "100";
    theImgDiv.style.left = "100";
    theImage.style.width = "auto";  // auto width w/o style sheet
}
else {  // make image small again
    theImgDiv.style.position = "";
    theImage.style.width = "100";
}
}



// text field process

function changeText() {
    //get text user entered 
    newtext = theTextInput.value; //tells comp to get new text from user and store it 

    //use text to change text on webapge
    ourText.innerHTML = newtext; //new stuff = what came from textfield
}

// button click

function onClick() {
    theImgDiv.style.display = "block";
    ourText.innerHTML = "I clicked the button";
}
// mouse color change

function onMouseOut() {
    // If we want to return to the default property value, use "" 
    ourText.style.color = "";
    ourText.style.fontSize = "";
}

function onMouseOver() {
    ourText.style.color = "green";
    ourText.style.fontSize = "1.5em";
}

