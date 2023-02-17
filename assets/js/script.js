const navbarUl = document.querySelector('.navbar-ul');
const bars = document.getElementById('navbar-bars');
bars.addEventListener('click', () => {
    navbarUl.classList.toggle('active');
})
window.addEventListener('scroll', () => {
    navbarUl.classList.remove('active');  
})


// nav active
const aTag = document.querySelectorAll('.a-tag');
aTag.forEach(check => {
    check.addEventListener('click', (e) => {
        aTag.forEach(check2 => {
            check2.classList.remove("active");
        })
        e.target.classList.add('active');
    })
})



