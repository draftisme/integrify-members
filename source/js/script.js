const output = document.getElementById("output");
const memberIMG = document.getElementById("member-img");
const memberInfo = document.getElementById("member-info");
const memberName = document.getElementById("header-name");
const memberBody = document.getElementById("member-body");

function createMember(member){
    //IMAGE OF MEMBER -----------------------
    const img = `
    <img src="./source/Photo wall/${member.src}" alt=${member.alt} >
    `;
    memberIMG.innerHTML = img;
    //INFO OF MEMBER ------------------------
    const name = `
        <h1>${member.firstName} ${member.lastName}</h1>
    `;
    memberName.innerHTML = name;
    const info = `
        <p>Title: ${member.title}</p>
        <p>Nationality: ${member.nationality}</p>
        <p>Skills: ${member.skills.map(val => {return val;}).join(', ')}</p>
        <p>Why a software developer: ${member.whySofterDeveloper}</p>
        <p>Vision: ${member.longTermVision}</p>
        <p>Motivation: ${member.motivatesMe}</p>
        <p>Favorite quote: ${member.favoriteQuote}</p>
        <p>Date join: ${member.joinedOn}</p>
    `;             
    memberBody.innerHTML = info;
}

let countImg = 0;

if(data.length){
    createMember(data[countImg]);
}

function go(){
    countImg === data.length ? countImg = 0 
    : countImg++
    countImg < data.length ? createMember(data[countImg])
    : go()
}

function toggleShow(){
    memberInfo.classList.toggle("hide");
}