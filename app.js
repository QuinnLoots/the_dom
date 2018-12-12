let bodyRef = document.body;
bodyRef.classList.remove("bg-aqua");
bodyRef.classList.add("bg-olive");

let alineaRef = document.getElementById("first-paragraph");
alineaRef.classList.remove("bg-lime");
alineaRef.classList.remove("gray");
alineaRef.classList.add("aqua");


let silverRef = document.getElementsByClassName("bg-silver");

for (let i = 0; i < silverRef.length; i++) {
    silverRef[i].classList.add("bg-teal");
    silverRef[i].classList.remove("bg-silver");
}


let quote = document.getElementsByTagName("blockquote");
for (let i = 0; i < quote.length; i++) {
   quote[i].classList.add("bg-white");
}


let query = document.querySelector("#my-table");
query.classList.add("bg-purple");
var para = document.querySelectorAll("p");
for (let i = 0; i < para.length; i++) {
    para[i].classList.add("shadow");
}



let pres = document.getElementsByTagName("pre");
for (let i = 0; i < pres.length; i++) {
    pres[i].style.color = "red";
    pres[i].style.backgroundColor = "blue";
    pres[i].style.borderBottom = "3px solid red";

}

let heads = document.getElementsByTagName("h3")[0];
heads.innerHTML="<em>Italic title ! yeah !</em>";



let headers = document.getElementsByTagName("h2")[0];
headers.innerHTML="<strong>HTML doesn't work !</strong>";

let list = document.getElementsByTagName("ul")[0];
let li = document.createElement("li");
  li.innerHTML=("My best friend is <a href='http://www.google.com'>Google</a>");
  list.appendChild(li);

  var link = document.querySelectorAll("li a")[0];
  link.style.color="green";

let liste = document.getElementsByTagName("ol")[0];
let kinderen = liste.children;
let lengte = kinderen.length;
for (var i = 0; i < lengte; i++) {
    liste.removeChild(kinderen[0]);
}



let array =  ["Silent Teacher","Code Monkey", "CodeCombat"];
let linkarray = ["http://silentteacher.toxicode.fr/","https://www.playcodemonkey.com/","https://codecombat.com/"];
for (var i = 0; i < array.length; i++) {
    let entry = document.createElement("li");
    let a = document.createElement("a");
    a.textContent = array[i];
    a.setAttribute('href', linkarray[i]);
    entry.appendChild(a);
    liste.appendChild(entry);
}

















