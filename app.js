import preslovi from "@pionir/preslovljivac-js";

let el = document.getElementById('preslovi');

el.addEventListener("keyup", (event) => {
    let preslovljeno = preslovi(event.target.value)
    let elm = document.getElementById('preslovljeni')
    elm.value = preslovljeno
    var temp = el.value;
    var count = (temp) ? (temp.match(/[\s]+/g) || []).length + 1 : 0;
})



