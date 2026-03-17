document.addEventListener("DOMContentLoaded", function(){

/* ============================= */
/* DARK MODE TOGGLE */
/* ============================= */

const themeToggle = document.getElementById("theme-toggle");

if(themeToggle){

if(localStorage.getItem("theme") === "dark"){
document.body.classList.add("dark-mode");
}

themeToggle.addEventListener("click", function(){

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){
localStorage.setItem("theme","dark");
}else{
localStorage.setItem("theme","light");
}

});

}

/* ============================= */
/* CHATBOT */
/* ============================= */

const chatToggle = document.getElementById("chat-toggle");
const chatbox = document.getElementById("chatbox");
const chatInput = document.getElementById("chat-input");
const chatMessages = document.getElementById("chat-messages");
const sendBtn = document.getElementById("send-btn");

function sendMessage(){

let userText = chatInput.value.trim();

if(userText === "") return;

chatMessages.innerHTML += `<p class="user">${userText}</p>`;

let msg = userText.toLowerCase();
let reply = "Thanks for your message! Our travel advisors will help you plan your trip.";

if(msg.includes("family"))
reply = "JourneyWell Tours specializes in family-friendly vacations including Caribbean resorts, Disney trips, and cruise vacations.";

if(msg.includes("price") || msg.includes("cost"))
reply = "Most family vacations range between $4000 and $5500 depending on destination and travel season.";

if(msg.includes("insurance"))
reply = "We help families choose travel insurance to protect against cancellations and medical emergencies.";

if(msg.includes("destination"))
reply = "Popular family destinations include the Caribbean, Disney parks, and cruise vacations.";

if(msg.includes("consult"))
reply = "You can contact us through the Contact page to schedule a personalized travel consultation.";

setTimeout(()=>{

chatMessages.innerHTML += `<p class="bot">${reply}</p>`;
chatMessages.scrollTop = chatMessages.scrollHeight;

},500);

chatInput.value="";

}

if(chatToggle){

chatToggle.addEventListener("click", function(){

chatbox.style.display =
chatbox.style.display === "flex" ? "none" : "flex";

});

}

if(sendBtn){
sendBtn.addEventListener("click", sendMessage);
}

if(chatInput){

chatInput.addEventListener("keypress", function(e){

if(e.key === "Enter"){
sendMessage();
}

});

}

/* ============================= */
/* SCROLL TO TOP BUTTON */
/* ============================= */

const scrollBtn = document.getElementById("scrollTopBtn");

if(scrollBtn){

window.addEventListener("scroll", function(){

if(window.scrollY > 400){
scrollBtn.style.display = "block";
}else{
scrollBtn.style.display = "none";
}

});

scrollBtn.addEventListener("click", function(){

window.scrollTo({
top:0,
behavior:"smooth"
});

});

}

});