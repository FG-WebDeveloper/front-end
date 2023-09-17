const nav_bar = document.getElementsByClassName('nav-bar')[0];
console.log(nav_bar);


document.addEventListener('scroll' ,()=>{

    if (window.scrollY>5){
        nav_bar.classList.add('scrolled');
    }
    else {
        nav_bar.classList.remove('scrolled');
    }

})