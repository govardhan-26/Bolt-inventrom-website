const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.nav-links ul');
const menu_item = document.querySelectorAll('.nav-links ul li a');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

menu_item.forEach((item) => {
    item.addEventListener('click',()=>{
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});