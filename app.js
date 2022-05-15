const navSlide = () => {
    const menu = document.querySelector('.burger');
    const nav = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-list li');

    menu.addEventListener('click', ()=> {
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
            }
        });

        menu.classList.toggle('toggle');
    });
    
}


function pageContent() {
    const text = document.querySelector('#my-id');

    if (text.style.display === 'block') {
        text.style.display = 'none'; 
    } else {
        text.style.display = 'block';
    }

} 


function init() {
    let query = window.matchMedia("(max-width: 768px)");
    if (query.matches) {
        document.querySelector('.home-page-text').style.display = 'block';
    } else {
        document.querySelector('.home-page-text').style.display = 'flex';
    }
}

document.addEventListener('DOMContentLoaded', init)


pageContent();

navSlide();



const tl = gsap.timeline({defaults: {duration: 1, ease: 'power1.out'}})

tl.fromTo('#ani_1', {x: -200, opacity: 0}, {x:0, opacity:1, duration: 1.5})
tl.fromTo('#ani_2', {y: 100, opacity: 0}, {opacity: 1, y:0})
tl.fromTo('#ani_3', {opacity: 0, scale: 0}, {opacity: 1, scale: 1, ease:"elastic.out(1, 0.4)", duration: 3})
tl.fromTo('#ani_3', {scale: 1}, {scale: 1.1, y:-15,  yoyo: true, repeat: -1, duration: 0.7})
