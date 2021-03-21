import preslovi from "@pionir/preslovljivac-js";
let btnCopy = document.getElementById("btnCopy");
let slova1 = document.getElementById("brojac1");
let slova = document.getElementById("brojac");
let btnDelete = document.getElementById("btnDelete");
let txt = document.getElementById("preslovi");
let txt1 = document.getElementById("preslovljeni");
let cir = document.getElementById("cir");
let lat = document.getElementById("lat");
let broj = document.getElementById("reci");
let broj1 = document.getElementById("reci1");
let btn = document.getElementById("btn");
let content = document.getElementById("dropdown-content");
let btnDark = document.getElementById("box");
let theme;
let themelink = document.getElementById("theme-link");
let red = document.getElementById("red1");

function darkmode() {
  red.classList.add("dark1");
  txt.classList.add("dark2");
  txt1.classList.add("dark3");
  cir.classList.add("darkfont");
  lat.classList.add("darkfont");
  slova.classList.add("darkfont");
  slova1.classList.add("darkfont");
  reci.classList.add("darkfont");
  reci1.classList.add("darkfont");
  btnDelete.classList.add("fill");
  btnCopy.classList.add("fill");
  sessionStorage.setItem('theme', 'dark'); 
  btnDark.checked=true;
}
function lightmode(){
  red.classList.remove("dark1");
  txt.classList.remove("dark2");
  txt1.classList.remove("dark3");
  cir.classList.remove("darkfont");
  lat.classList.remove("darkfont");
  slova.classList.remove("darkfont");
  slova1.classList.remove("darkfont");
  reci.classList.remove("darkfont");
  reci1.classList.remove("darkfont");
  sessionStorage.setItem('theme', 'light'); 
  btnDark.checked=false;
}

if (localStorage.getItem("theme") == "dark") {
  darkmode();
} else {
 lightmode();
}
btnDark.addEventListener("change", () => {
  if (btnDark.checked) {
    darkmode();
  } else {
    lightmode();
  }
});


btn.addEventListener("click", () => {
  if (content.style.display === "") {
    content.classList.add("show");
  } else {
    content.classList.remove("show");
  }
});
btnCopy.addEventListener("click", (event) => {
  presl = document.getElementById("preslovljeni");
  presl.select();
  document.execCommand("Copy");
});

txt.addEventListener("keyup", function (e) {
  /*console.log("changed")*/
  if (e.target.value.length > 0) {
    btnDelete.classList.add("show");
    btnCopy.classList.add("show");
    let preslovljeno = preslovi(e.target.value);
    txt1.value = preslovljeno;
    let karakteri = e.target.value.split("");
    let karakteri1 = txt1.value.split("");
    slova.innerText = "Карактера: " + karakteri.length;
    slova1.innerText = "Карактера:" + karakteri1.length;
    let text = txt.value;
    let numWords = 0;
    for (let i = 0; i < text.length; i++) {
      let currentCharacter = text[i];
      if (currentCharacter == " ") {
        numWords += 1;
      }
    }
    reci.innerText = "Речи: " + numWords;
    reci1.innerText = "Речи: " + numWords;
    slova.classList.add("show");
    slova1.classList.add("show");
    cir.classList.add("show");
    lat.classList.add("show");
    reci.classList.add("show");
    reci1.classList.add("show");
  } else {
    btnCopy.classList.remove("show");
    btnDelete.classList.remove("show");
    slova.classList.remove("show");
    slova1.classList.remove("show");
    cir.classList.remove("show");
    lat.classList.remove("show");
    reci.classList.remove("show");
    reci1.classList.remove("show");
    content.classList.remove("show");
  }
});

btnDelete.addEventListener("click", function () {
  this.classList.remove("show");
  btnCopy.classList.remove("show");
  txt.value = "";
  txt1.value = "";
  slova.classList.remove("show");
  slova1.classList.remove("show");
  cir.classList.remove("show");
  lat.classList.remove("show");
  reci.classList.remove("show");
  reci1.classList.remove("show");
  content.classList.remove("show");
});

txt.addEventListener("keyup", (event) => {
  const re = /[.!?]/;
  const numOfSentences = event.target.value.split(re);
  if (numOfSentences.length > 2) {
    txt.classList.add("fontSize");
    txt1.classList.add("fontSize");
  } else {
    txt.classList.remove("fontSize");
    txt1.classList.remove("fontSize");
    content.classList.remove("show");
  }
});
