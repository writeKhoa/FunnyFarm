const selectElement = selector => {
    element = document.querySelector(selector)

    if(element) return element;
    else console.log(`Something went, make sure that ${selector} exists or is type correctly.`);
}

const Test = () => {
    console.log('ok');
}

// header 
const body = document.body;
let lastScroll = 0;
const ScrollHeader = () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll == 0) {
        body.classList.remove('scrolldown');
        return;
    } 
    if (currentScroll > lastScroll && !body.classList.contains('scrolldown')) {
        body.classList.remove('scrollup');
        body.classList.add('scrolldown');

    } else if (currentScroll < lastScroll && body.classList.contains('scrolldown')) {
        body.classList.remove('scrolldown')
        body.classList.add('scrollup')
    }
    lastScroll = currentScroll;
}
window.addEventListener('scroll', ScrollHeader)
// menu
const eOpen = selectElement('.menu');
const eMenu = selectElement('.nav__list');
const OpenMenu = () => {
    eMenu.classList.add('active');
    body.classList.add('active-menu');
}
const eClose = selectElement('.off');
const CloseMenu = ()=> {
    eMenu.classList.remove('active');
    body.classList.remove('active-menu');

}
eOpen.addEventListener('click', OpenMenu);
eClose.addEventListener('click', CloseMenu)
// slide img
let i = 0;
const eBtnLeft = selectElement('.slide__btn--left');
const eBtnRight = selectElement('.slide__btn--right');
const eImg = document.querySelectorAll('.slide__img');
const eCircles = document.querySelectorAll('.slide-circle');
const NextImg = ()=> {
    eImg.forEach(e => {
        e.classList.remove('active');
    });
    eCircles.forEach(eCircle => {
        eCircle.classList.remove('active');
    });
    i += 1;
    if(i == eImg.length) i=0;
    eImg[i].classList.add('active');
    eCircles[i].classList.add('active');
}
const PreImg = ()=> {
    eImg.forEach(e => {
        e.classList.remove('active');
    });
    eCircles.forEach(eCircle => {
        eCircle.classList.remove('active');
    });
    i -= 1;
    if(i == -1) i=eImg.length -1;
    eImg[i].classList.add('active');
    eCircles[i].classList.add('active');

}

setInterval(NextImg, 5000);
eBtnLeft.addEventListener('click', PreImg);
eBtnRight.addEventListener('click', NextImg);
// link
const eLinks = document.querySelectorAll('.nav__item a');
eLinks.forEach(eLink =>{
    eLink.addEventListener('click', CloseMenu);
})
// preview cart
const eOpenAddToCarts = document.querySelectorAll('.btn--add-to-cart');
const eClosePreviews = document.querySelectorAll('.close-preview');
const eContainerCartPreview = selectElement('.container-cart-preview');
const eCartPreviews = document.querySelectorAll('.cart-preview');
// open add to cart
eOpenAddToCarts.forEach((e, index)=> {
    e.addEventListener('click', () => {
        console.log(index);
        eContainerCartPreview.classList.add('active');
        eCartPreviews[index].style.display = 'block';
    });
});
// close add to cart
const CloseCartPreview = (e, index)=> {
    e.addEventListener('click', () => {
        eContainerCartPreview.classList.remove('active');
        eCartPreviews[index].style.display = 'none';
    });
}
window.addEventListener('click', (e)=> {
    if(e.target == eContainerCartPreview) {
        eContainerCartPreview.style.display = 'none';
    }
})
eClosePreviews.forEach(CloseCartPreview);
// typing effect
let flagEffect = 0;
const text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem hic, reiciendis atque voluptatem iure nesciunt, natus eaque ipsa illo nobis doloremque obcaecati totam. Consequatur laudantium laboriosam doloremque impedit omnis est!";
const speedEffect = 50;
const TypingEffect = () => {
    if(flagEffect < text.length) {
        document.querySelector('.typing-effect').innerHTML += text.charAt(flagEffect);
    }
    flagEffect++;
    setTimeout(TypingEffect,  speedEffect)
}
window.addEventListener('load', TypingEffect);
// back to top
const eBackToTop = selectElement('.back-to-top');
const BackToTop = ()=> {
    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
const ShowBackToTop = ()=> {
    const eBackToTop = selectElement('.back-to-top');
    if(window.pageYOffset > 100 ) {
        eBackToTop.style.display = 'block';
    } else {
        eBackToTop.style.display = 'none';
    }
}
window.addEventListener('scroll', ShowBackToTop);
eBackToTop.addEventListener('click', BackToTop);