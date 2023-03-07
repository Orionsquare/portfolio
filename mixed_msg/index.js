//to set the current date (this program is correct)
const monthEl = document.getElementById("month");
const dayEl = document.getElementById("day");
const yearEl = document.getElementById("year");

function updateCalendar(){
    let m = new Date().getMonth() +1;
    let d = new Date().getDate();
    let y = new Date().getUTCFullYear();

    d = d<10 ? "0" + d : d;
    m = m<10 ? "0" + m : m;

    monthEl.innerText = m;
    dayEl.innerText = d;
    yearEl.innerText = y;
    
}
updateCalendar();
// the above is correct

const quotes =["You are beautiful in so many ways.", "A smile can say a thousand words without making a sound.", "Happiness is always just round the corner!", "Spend time on yourself because you are worth it!", "You come first because you are important!", "It is never too late to be what you might have been.", "Yesterday is in the past, always live in the present."]
      
let btn = document.querySelector("#Qbtn");
let quote = document.querySelector(".quote");

btn.addEventListener("click", function(){
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random];
});