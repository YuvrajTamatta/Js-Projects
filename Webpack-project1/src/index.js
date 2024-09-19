const jsSHA = require("jssha");


let inputstring = document.getElementById("inputstring")
let key = document.getElementById("key")
let radio = document.getElementById("radio")
let selectAlgorithm = document.getElementById("selectAlgorithm")
let convert = document.getElementById("convert")
let Output = document.getElementById("Output")



convert.addEventListener("click", ()=>{
  const shaObj = new jsSHA(`${selectAlgorithm.value}`, "TEXT", {
  hmacKey: { value:`${key}`, format: "TEXT" },
});
shaObj.update(`${inputstring.value}`);
  var radiovalue = document.querySelector("input[name='flexRadioDefault']:checked").value
const hmac = shaObj.getHash(`${radiovalue}`);
Output.value=hmac
})

radio.addEventListener('change', (e)=>{
  console.log(e.target.value);
})
function algo(e) {
  let name = e.target.value
  return name

}



