import preslovi from "@pionir/preslovljivac-js";
let btnCopy = document.getElementById('btnCopy');
let slova1=document.getElementById('brojac1');
let slova=document.getElementById('brojac');
let btnDelete = document.getElementById('btnDelete');
let txt = document.getElementById('preslovi');
let txt1 = document.getElementById('preslovljeni');
let cir=document.getElementById('cir');
let lat=document.getElementById('lat');
let broj=document.getElementById('reci');
let broj1=document.getElementById('reci1');

btnCopy.addEventListener('click', (event) => {
  presl=document.getElementById('preslovljeni');
  presl.select();
  document.execCommand('Copy')
});


txt.addEventListener("keyup", function (e) {
 /*console.log("changed")*/
  if (e.target.value.length > 0) {
    btnDelete.classList.add("show");
    btnCopy.classList.add("show");
    let preslovljeno = preslovi(e.target.value);
    txt1.value = preslovljeno;
   let karakteri= e.target.value.split('');
   slova.innerText='број карактера:'+karakteri.length ;
   slova1.innerText='број карактера:'+karakteri.length;  
    let text=txt.value;
   let numWords=0;
   for(let i=0;i<text.length;i++){
     let currentCharacter=text[i];
     if(currentCharacter== " "){
       numWords+=1
     }
   }
   reci.innerText='број речи:'+numWords;
   reci1.innerText='број речи:'+numWords;
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
  }
});
