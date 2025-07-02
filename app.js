const menuItem1 = document.getElementById('menuItem1');
const menuItem2 = document.getElementById('menuItem2');
const menuItem3 = document.getElementById('menuItem3');
const menuItem4 = document.getElementById('menuItem4');
const menuItem5 = document.getElementById('menuItem5');
const menuItem6 = document.getElementById('menuItem6');

gsap.from("#menuItem1",
  {
    y: -100,
    duration: 0.3,
    ease: "power2.out"
  }
)
gsap.from(menuItem2,
  {
    y: -100,
    duration: 0.3,
    delay: 0.3,
    ease: "power2.out"
  }
)
gsap.from(menuItem3,
  {
    y: -100,
    duration: 0.3,
    delay: 0.6,
    ease: "power2.out"
  }
)
gsap.from(menuItem4,
  {
    y: -100,
    duration: 0.3,
    delay: 0.9,
    ease: "power2.out"
  }
)
gsap.from(menuItem5,
  {
    y: -100,
    duration: 0.3,
    delay: 1.2,
    ease: "power2.out"
  }
)
gsap.from(menuItem6,
  {
    y: -100,
    duration: 0.3,
    delay: 1.5,
    ease: "power2.out"
  }
)


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
