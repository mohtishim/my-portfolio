// gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: ".section1", 
  start: "top top",
  endTrigger:".section3",
  end:'top top',
  toggleClass: { targets: "#navbar", className: "fixed" },
  onEnter: () =>{
    document.querySelector('#navbar img').src= "./Images/logo white.png"
    gsap.from('.fixed',{
    duration:1,
    y:"-200",
    ease:'power4.out'
})
},
onLeaveBack: ()=>{
    document.querySelector('#navbar img').src= './Images/ohtishim.png'
}
})
 
gsap.from('.sec2div1', {
    scrollTrigger: {
        trigger: '.section2',
        top: 'top 30%',
    },
    duration: 1.5,
    y: '100%',
    ease: 'bounce',
    // opacity: 0,
})

gsap.from('#dpDiv',{
    scrollTrigger:{
        trigger: ".section2",
        start: "top 30%"},
    duration: 1.5,
    // ease: "bounce",
    rotation: -360,
    x:"-100%",
    opacity:0
}
)

gsap.from('.sec2div3',{
    scrollTrigger:{
        trigger:".section2",
        start:"top 30%"
    },
    duration: 1.5,
    // ease:"bounce",
    rotation: 360,
    x:"100%",
    opacity:0
})


gsap.from(".menuItem1",
  {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "bounce",
    stagger: 0.2
  }
)

gsap.from('.digits', {
    scrollTrigger:{
        trigger:'.section3',
        start:'top 60%'
    },
    
  textContent: 0,
  duration: 1,
  ease: Power1.easeIn,
  snap: { textContent: 1 }
});




let textHeading = document.getElementById('textHeading');

let text1 = "MERN stack developer...";
let text2 = "Experienced Frontend Developer..."

let looping = ()=>{
    let index = 0;
    let loopingText1 = setInterval(() =>{
        textHeading.innerHTML += text1[index];
        index++;
        
        if(index === text1.length){
            clearInterval(loopingText1);
    
            setTimeout(()=>{
                let removingText1 = setInterval(() =>{
                    textHeading.innerHTML = textHeading.innerHTML.slice(0, -1);
    
                    if (textHeading.innerHTML.length === 0) {
                        clearInterval(removingText1);
                        setTimeout(()=>{
                            index = 0;
                            let loopingText2 = setInterval(()=>{
                            textHeading.innerHTML += text2[index];
                            index++;
                            if (index === text2.length){
                                clearInterval(loopingText2);
                                setTimeout(()=>{
                                    let removingText2 = setInterval(() => {
                                        textHeading.innerHTML = textHeading.innerHTML.slice(0,-1)
                                        if(textHeading.innerHTML.length === 0){
                                            clearInterval(removingText2);
                                            setTimeout(()=>{
                                                looping();
                                            }, 2000)
                                        }
                                    }, 100);
                                }, 2000)
                            }
                            }, 100)
                        }, 2000)
                        
                    }
                    },100)
            }, 2000)
    
        }
    },100)

}

looping();

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('show');
//       entry.target.classList.remove('hidden');
//     }
//   });
// });

// const elements = document.querySelectorAll('.hexagon');

// elements.forEach(el => observer.observe(el));

// navbar 

// const navbar = document.getElementById('navbar');


// window.addEventListener('scroll', () => {
  // Get bottom position of banner relative to viewport
//   const bannerBottom = navbar.getBoundingClientRect().bottom;

//   if (bannerBottom <= 0) {
//     navbar.classList.add('fixed');
//   } else {
//     navbar.classList.remove('fixed');
//   }
// });
