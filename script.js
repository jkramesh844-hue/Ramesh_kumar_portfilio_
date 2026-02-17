document.getElementById("contactForm").addEventListener("submit",function(e){
  e.preventDefault();
  alert("Message sent successfully 🚀");
  this.reset();
});



// typing effect


const texts = ["Web Developer", "Frontend Developer", "Fullstack Developer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){
  if(count === texts.length){
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typing").textContent = letter;

  if(letter.length === currentText.length){
    count++;
    index = 0;
  }
  setTimeout(type, 200);
})();

const sections = document.querySelectorAll(".section");

window.addEventListener("scroll",()=>{
  sections.forEach(sec=>{
    const top = sec.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      sec.classList.add("show");
    }
  });
});

const skillCards = document.querySelectorAll(".skill-card");

window.addEventListener("scroll",()=>{
  skillCards.forEach(card=>{
    const top = card.getBoundingClientRect().top;
    if(top < window.innerHeight - 80){
      card.classList.add("show");
    }
  });
});


// ==============Go to top========================

let topBtn = document.getElementById("topBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

topBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};





