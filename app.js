const navBtn = document.querySelector('.menu-toggle');
const cursor = document.querySelector('.cursor');
const navLinks = document.querySelectorAll('.nav-link');

// ***********CURSOR HOVER ANIMATION***************

window.addEventListener('mousemove',cursorMove);

function cursorMove(e){
 cursor.style.top = `${e.pageY}px`
 cursor.style.left = `${e.pageX}px`
}

// **********FULL SCREEN NAVIGATION ANIMATION**************

const tl = gsap.timeline({defaults:{duration: 0.55},paused:true,reversed:true});

tl
.from('.navigation-menu',{top: '-100%'})
.to('.nav-overlay',{width: '100%',stagger: 0.1})
.from('.nav-item',{y:'100px',rotate: '10',opacity: '0',stagger : 0.2});

navBtn.addEventListener('click',function(){
    
    if(navBtn.classList.contains('active')){
        tl.timeScale(1.5);
        tl.reverse()
    }
    else{
        tl.timeScale(1);
        tl.play();
    }
     navBtn.classList.toggle('active');

});

navLinks.forEach(function(navLink){
    
    navLink.addEventListener('click',function(){
        
        tl.timeScale(1.5);
        tl.reverse();
        navBtn.classList.remove('active');
    })

    navLink.addEventListener('mouseleave',function(){
        cursor.classList.remove('cursor-active');
        document.body.style.cursor = 'initial';
        
    })

    navLink.addEventListener('mouseover',function(){
        cursor.classList.add('cursor-active');
        document.body.style.cursor = 'none';
    })
})


// loader
$(document).ready(function(){
    setTimeout(function() {
        $('body').addClass('loaded');
        $('#loader-wrapper').css({"width": "0%", "height":"0%"})
    }, 3000);
});