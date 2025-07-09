const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

var crsr=document.querySelector(".cursor")
var main = document.querySelector("document")
document.addEventListener("mousemove",function (dets) {
    crsr.style.left=dets.x+20+"px"
    crsr.style.top = dets.y+20+"px"
})





var tl = gsap.timeline({
            scrollTrigger:{
            trigger:".page1 ",
            scroller:".main",
            start:"top 27%",
            end:"top 0",
            scrub:3
        }

    })

tl.to(".page1-part1 h1",{
    x:-25
    
   
},"anim")
tl.to(".page1-part1 h2",{
    x:70
    
   
},"anim")
tl.to(".page1-part1 h3",{
    x:35
    
   
},"anim")
tl.to(".page1-part2 h3",{
    y:30
    
   
},"anim")
tl.to(".page1-part2 h4",{
    y:-32
    
   
},"anim")
tl.to(".nav",{
    opacity:1,
    y:-10, 
    duration:1.4,
    ease:Expo.easeInOut
    
   
},"anim")
tl.to(".page1-part3",{
    opacity:1,
    y:-10, 
    duration:1.4,
    
    ease: Expo.easeInOut
    
    
   
},"anim")