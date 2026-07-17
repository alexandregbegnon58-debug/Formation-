// ===========================
// ALEX SERVICE DIGITAL
// script.js
// ===========================

// Effet sur la barre de navigation
window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if(window.scrollY > 50){

        nav.style.background = "#003b8e";
        nav.style.boxShadow = "0 5px 20px rgba(0,0,0,.25)";
        nav.style.padding = "15px 5%";
        nav.style.position = "fixed";
        nav.style.top = "0";
        nav.style.left = "0";
        nav.style.width = "100%";
        nav.style.zIndex = "999";

    }else{

        nav.style.background = "transparent";
        nav.style.boxShadow = "none";
        nav.style.padding = "20px 5%";
        nav.style.position = "relative";

    }

});


// Animation des cartes

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

});

cards.forEach(card=>{

    card.style.opacity="0";
    card.style.transform="translateY(60px)";
    card.style.transition="0.7s";

    observer.observe(card);

});


// Défilement fluide

document.querySelectorAll('a[href^="#"]').forEach(link=>{

    link.addEventListener("click",function(e){

        e.preventDefault();

        const cible=document.querySelector(this.getAttribute("href"));

        if(cible){

            cible.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


// Message de bienvenue

window.onload = ()=>{

    console.log("Bienvenue sur Alex Service Digital");

};// ==========================
// Bouton Retour en haut
// ==========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};// ==========================
// Compteurs animés
// ==========================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;

        const increment = Math.ceil(target / 100);

        if(current < target){

            counter.innerText = current + increment;

            setTimeout(updateCounter,20);

        }else{

            counter.innerText = target;

        }

    };

    updateCounter();

});