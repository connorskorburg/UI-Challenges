
let hamburger = document.getElementById('hamburger');
let mobileNav = document.getElementById('mobile-nav');


hamburger.addEventListener('click', () => {
    if (mobileNav.style.display != 'block'){
        mobileNav.style.display = 'block';
    } else {
        mobileNav.style.display = 'none';
    }
})