function changeHTML(event) {
  event.preventDefault();
  let input = document.querySelector("#html-input");
  let inputvalue = input.value;
  let text = inputvalue.replaceAll("<", "&lt;");
  text = text.replaceAll(">", "&gt;");
  text = text.replaceAll("\n", " <br/> ");
  let newHTML = document.querySelector("#showBox");
  newHTML.innerText = `${text}`;
}
let form = document.querySelector("form");
form.addEventListener("submit", changeHTML);
//
//
//function copyText(event) {
//event.preventDefault();
//  let copyText = document.querySelector("#html-input");
//  console.log(copyText);
//   copyText.select();

//   navigator.clipboard.writeText(copyText.value.toString());
//   alert("Copied the text: " + copyText.value);
// }
// let copyButton = document.querySelector("#copyButton");
//  copyButton.addEventListener("click", copyText);
