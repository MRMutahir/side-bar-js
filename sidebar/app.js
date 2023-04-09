let side = document.querySelector('.side');
let iconBar = document.querySelector('.icon-bar')
let mainNavbar = document.querySelector('.main-Navbar')
console.log(mainNavbar);
side.addEventListener('click', () => {
    mainNavbar.style.display = 'none';
})
mainNavbar.style.display = 'none';
iconBar.addEventListener('click', () => {
    mainNavbar.style.display = 'block';
    mainNavbar.style.background = "green";
    mainNavbar.style.transition = "all 1s ease-in-out";
    mainNavbar.style.translate  = "(-110%)"
    mainNavbar.style.animation=" zoom 2s ease-in-out infinite ";

})