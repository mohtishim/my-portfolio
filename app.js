// gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: ".section1",
  start: "top top",
  endTrigger: "footer",
  end: "bottom 100%",
  toggleClass: { targets: "#navbar", className: "fixed" },
  onEnter: () => {
    document.querySelector("#navbar img").src = "./Images/logo white.png";
    gsap.from(".fixed", {
      duration: 1,
      y: "-200",
      ease: "power4.out",
    });
  },
  onLeaveBack: () => {
    document.querySelector("#navbar img").src = "./Images/ohtishim.png";
  },
});

gsap.from(".sec2div1", {
  scrollTrigger: {
    trigger: ".section2",
    start: "top 50%",
  },
  duration: 1.5,
  y: "-100%",
  // ease: 'bounce',
  opacity: 0,
});

gsap.from("#dpDiv", {
  scrollTrigger: {
    trigger: ".section2",
    start: "top 50%",
  },
  duration: 1.5,
  // ease: "bounce",
  // rotation: -360,
  y: "100px",
  opacity: 0,
});

gsap.from(".sec2div3", {
  scrollTrigger: {
    trigger: ".section2",
    start: "top 50%",
  },
  duration: 1.5,
  // ease:"bounce",
  // rotation: 360,
  y: "100px",
  opacity: 0,
});

gsap.to(".menuItem1", {
  y: 0,
  opacity: 1,
  duration: 0.6,
  ease: "bounce",
  stagger: 0.2,
});

gsap.from(".digits", {
  scrollTrigger: {
    trigger: ".section3",
    start: "top 60%",
  },

  textContent: 0,
  duration: 1,
  ease: Power1.easeIn,
  snap: { textContent: 1 },
});

document.querySelectorAll(".card").forEach((card) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 50%",
      toggleActions: "play none none none",
    },
    duration: 1,
    opacity: 0,
    y: "100px",
  });
});

let textHeading = document.getElementById("textHeading");

let text1 = "MERN stack developer...";
let text2 = "Experienced Frontend Developer...";

let looping = () => {
  let index = 0;
  let loopingText1 = setInterval(() => {
    textHeading.innerHTML += text1[index];
    index++;

    if (index === text1.length) {
      clearInterval(loopingText1);

      setTimeout(() => {
        let removingText1 = setInterval(() => {
          textHeading.innerHTML = textHeading.innerHTML.slice(0, -1);

          if (textHeading.innerHTML.length === 0) {
            clearInterval(removingText1);
            setTimeout(() => {
              index = 0;
              let loopingText2 = setInterval(() => {
                textHeading.innerHTML += text2[index];
                index++;
                if (index === text2.length) {
                  clearInterval(loopingText2);
                  setTimeout(() => {
                    let removingText2 = setInterval(() => {
                      textHeading.innerHTML = textHeading.innerHTML.slice(
                        0,
                        -1
                      );
                      if (textHeading.innerHTML.length === 0) {
                        clearInterval(removingText2);
                        setTimeout(() => {
                          looping();
                        }, 2000);
                      }
                    }, 100);
                  }, 2000);
                }
              }, 100);
            }, 2000);
          }
        }, 100);
      }, 2000);
    }
  }, 100);
};

looping();

// Feedback

let btn01 = document.getElementById("btn01");
let btn02 = document.getElementById("btn02");
let btn03 = document.getElementById("btn03");
let btn04 = document.getElementById("btn04");
let allBtns = [btn01, btn02, btn03, btn04];
let feedback = document.getElementsByClassName("feedbacks");

function movingFb2() {
  allBtns.map((e, i) => {
    e.classList.remove("btnOrange");
  });
  btn02.className = "btnOrange";
  gsap.to(".feedbacks", {
    duration: 1,
    x: "-25%",
  });
}

function movingFb3() {
  allBtns.map((e, i) => {
    e.classList.remove("btnOrange");
  });
  btn03.className = "btnOrange";
  gsap.to(".feedbacks", {
    duration: 1,
    x: "-50%",
  });
}

function movingFb4() {
  allBtns.map((e, i) => {
    e.classList.remove("btnOrange");
  });
  btn04.className = "btnOrange";
  gsap.to(".feedbacks", {
    duration: 1,
    x: "-75%",
  });
}

function movingFb1() {
  allBtns.map((e, i) => {
    e.classList.remove("btnOrange");
  });
  btn01.className = "btnOrange";
  gsap.to(".feedbacks", {
    duration: 1,
    x: "0%",
  });
}

function startFeedbackMotion() {
  setTimeout(() => {
    movingFb2();
    setTimeout(() => {
      movingFb3();
      setTimeout(() => {
        movingFb4();
        setTimeout(() => {
          movingFb1();
          startFeedbackMotion();
        }, 8000);
      }, 8000);
    }, 8000);
  }, 8000);
}

startFeedbackMotion();


// console.log(faqAns);

let faqAns = document.querySelectorAll('.faqAns');
let btns = document.querySelectorAll('.faqBtn');

function showFaq(a) {
  btns.forEach((e,i)=>{
  e.innerHTML = '<i class="fa-solid fa-plus orange"></i>';
  e.setAttribute("onclick", "showFaq(this)");
})
  faqAns.forEach((e,i)=>{
  e.style.display = 'none';
})

  a.innerHTML = '<i class="fa-solid fa-minus orange"></i>';
  a.setAttribute("onclick", "hideFaq(this)");
  a.parentElement.parentElement.lastElementChild.style.display = 'block';
}

function hideFaq(a){
  a.innerHTML = '<i class="fa-solid fa-plus orange"></i>';
  a.setAttribute("onclick", "showFaq(this)");
  a.parentElement.parentElement.lastElementChild.style.display = 'none';
}
