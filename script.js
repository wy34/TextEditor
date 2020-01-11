/**
 * Done: Update the text in the "Formatted Text" section as a user types in the textarea
 * Done TOGETHER: Add a .bold, .italic classes to "Formatted Text" when the appropriate button is clicked
 * TODO: Add an .underline class to "Formatted Text" when Underline button is clicked
 * TODO: Toggle the align style for "Formatted Text" when the appropriate button is clicked
 */


/**
 * Update the output text as a user types in the textarea
 * HINT: Use the onkeydown function inside HTML
 */
function updateText(){
  // CODE GOES HERE
  let text = document.querySelector("#text-input").value;
  let outputArea = document.querySelector("#text-output");
  outputArea.innerText = text;
}

/**
 * Toggle the bold class for the output text
 * HINT: Use the onclick function insite HTML
 * HINT: Look into using this keyword
 * HINT: Use the classList property
 * HINT: Toggle .active class for the button
 */
function makeBold(elem){
  //CODE GOES HERE
  elem.classList.toggle("active")
  let outputArea = document.querySelector("#text-output");
  outputArea.classList.toggle("bold")
}

/**
 * Toggle the italic class for the output text
 */
function makeItalic(elem){
  elem.classList.toggle("active")
  let outputArea = document.querySelector("#text-output");
  outputArea.classList.toggle("italic")
}

/**
 * Toggle the underline class for the output text
 * HINT: Toggle the .active class for the button
 * HINT: Use the classList property
 * HINT: Use contains, remove, and add functions
 */
function makeUnderline(elem){
  
  //CODE GOES HERE
    let formattedText = document.querySelector("#text-output");
    if (elem.classList.contains("active")) {
      elem.classList.remove("active")
      formattedText.classList.remove("underline")
    } else {
      elem.classList.add("active")
      formattedText.classList.add("underline")
    }
}

/**
 * Toggle the style textAlign attribute
 * Toggle the active state for the align butttons
 * HINT: Use the style property of the element
 * HINT: Make sure to untoggle the active state for all other align buttons
 */
function alignText(elem, alignType){
  // CODE GOES HERE
  elem.classList.toggle("active")
  let outputArea = document.querySelector("#text-output");
  outputArea.classList.toggle("")
}