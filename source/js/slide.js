const image = document.querySelector(".mySlide");

const imgSrcs = ['./source/bg-img/integrify-33.jpg', './source/bg-img/integrify-36.jpg', './source/bg-img/integrify-40.jpg'];

let count = 0;

setInterval(() => {   
    count % 2 ? image.setAttribute("src", imgSrcs[0])
    : count % 3 ? image.setAttribute("src", imgSrcs[1]) 
    : image.setAttribute("src", imgSrcs[2])
    count++;
}, 3000);