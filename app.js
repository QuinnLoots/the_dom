let bodyRef = document.body;
bodyRef.classList.remove("bg-aqua");
bodyRef.classList.add("bg-olive");

let alineaRef = document.getElementById("first-paragraph");
alineaRef.classList.remove("bg-lime");
alineaRef.classList.remove("gray");
alineaRef.classList.add("aqua");

let silverRef = document.getElementsByClassName("bg-silver");
silverRef.classList.add("bg-teal");
silverRef.classList.remove("bg-silver");

let quote = document.getElementsByTagName("blockquote");
quote.classList.add("bg-white");

let query = document.querySelector("my-table");
query.classList.add("bg-purple");
var para = document.querySelectorAll("p");
para.classList.add("shadow");







