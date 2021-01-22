import preslovi from "@pionir/preslovljivac-js";

/*el.addEventListener("keyup", (event) => {
    let preslovljeno = preslovi(event.target.value)
    let elm = document.getElementById('preslovljeni')
    elm.value = preslovljeno
    var temp = el.value;
    var count = (temp) ? (temp.match(/[\s]+/g) || []).length + 1 : 0;
}) */

const presl = document.getElementById("preslovljeni");
const btnCopy = document.getElementById("btnCopy");
btnCopy.onclick = function () {
  presl.select();
  document.execCommand("Copy");
};
const clear = document.getElementById("btnDelete");
let txt = document.getElementById("preslovi");
let txt1 = document.getElementById("preslovljeni");
clear.onclick = function () {
  txt.value = "";
  txt1.value = "";
};
const btnDelete = document.getElementById("btnDelete");
txt.addEventListener("keyup", function (e) {
  console.log("changed")
  if (e.target.value.length > 0) {
    btnDelete.classList.add("show");
    btnCopy.classList.add("show");
    let preslovljeno = preslovi(e.target.value);
    txt1.value = preslovljeno;
  } else {
    btnCopy.classList.remove("show");
    btnDelete.classList.remove("show");
  }
});
btnDelete.addEventListener("click", function () {
  this.classList.remove("show");
  btnCopy.classList.remove("show");
});
/*detektuj da li imaš jednu ili dve rečenice ako imaš dve, smanji tekst*/

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
