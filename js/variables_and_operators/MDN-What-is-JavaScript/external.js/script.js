// I am a comment and this is a JavaScript file

function createParagraph() {
    const para = document.createElement("p");
    para.textContent = "You clicked the button!";
    document.body.appendChild(para);
  }
  
  const buttons = document.querySelectorAll("button");
  
  for (const button of buttons) {
    button.addEventListener("click", createParagraph);
  }
  
/* I am also a comment however I'm multiple lines long

this is the second line 

and the third line

*/
