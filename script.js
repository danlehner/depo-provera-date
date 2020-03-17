document.addEventListener('touchstart', function addtouchclass(e) { 
  document.documentElement.classList.add('can-touch') 
  document.removeEventListener('touchstart', addtouchclass, false) 
}, false)

console.log("hi");

const sendBox = $("#send-button"); 
const printBox = $("#print-box"); 
const errorBox = $("#error-box"); 

sendBox.on("click", function() {
let dateFieldVal = $("#date-field").val();
 if (!dateFieldVal) {
  errorBox.html(`<p>Please enter a date</p>`); 
  printBox.html("");
} else {
let beginDate = Date.parse(`${dateFieldVal}`).addDays(77).toString("MMMM dS");
let endDate = Date.parse(`${dateFieldVal}`).addDays(91).toString("MMMM dS");
printBox.html(`<p>The next shot should be administered between <u>${beginDate}</u> and <u>${endDate}</u></p>`);
errorBox.html("")
sendBox.blur(); 
}
})






