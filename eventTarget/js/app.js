const mainBox = document.querySelector(".main-box");
const pilt1Box = document.querySelector(".pilt1");
const pilt2Box = document.querySelector(".pilt2");
const pilt3Box = document.querySelector(".pilt3");
const pilt4Box = document.querySelector(".pilt4");
const main = document.querySelector("#main");
const image = document.querySelector("#img");

pilt1Box.addEventListener("click", (event)=>{

    console.log("test");
    const imageSrc = event.target.src;
    main.src = imageSrc;
    event.preventDefault();

});

pilt2Box.addEventListener("click", (event)=>{

    console.log("test");
    const imageSrc = event.target.src;
    main.src = imageSrc;
    event.preventDefault();

});

pilt3Box.addEventListener("click", (event)=>{

    console.log("test");
    const imageSrc = event.target.src;
    main.src = imageSrc;
    event.preventDefault();

});

pilt4Box.addEventListener("click", (event)=>{

    console.log("test");
    const imageSrc = event.target.src;
    main.src = imageSrc;
    event.preventDefault();

});