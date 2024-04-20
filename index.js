ScrollReveal().reveal('#s1',{
    delay: 75,
    duration: 1500,
    opacity: 0,
    distance:'40px' ,
    origin: "top",
    reset: true
  });
  
  ScrollReveal().reveal('#s1-team',{
    delay: 75,
    duration: 1500,
    opacity: 0,
    distance:'40px' ,
    origin: "top",
    reset: true
  });


  ScrollReveal().reveal('#s2',{
    delay: 125,
    duration: 1500,
    opacity: 0,
    distance: '40px',
    origin:"top",
    reset: true
  });
  

  ScrollReveal().reveal('#s2-Gallery',{
    delay: 125,
    duration: 1500,
    opacity: 0,
    distance:'40px' ,
    origin: "top",
    reset: true
  });



  ScrollReveal().reveal('#s3',{
    delay: 175,
    duration: 1500,
    opacity: 0,
    distance:'40px' ,
    origin: "bottom",
    reset: true
  });


  ScrollReveal().reveal('#s4',{
    delay: 225,
    duration: 1500,
    opacity: 0,
    distance:'40px' ,
    origin: "top",
    reset: true
  });

  ScrollReveal().reveal('#s5',{
    delay: 225,
    duration: 1500,
    opacity: 0,
    distance: '40px',
    origin: "bottom",
    reset: true
  });


  ScrollReveal().reveal('#s6',{
    delay: 275,
    duration: 1500,
    opacity: 0,
    distance: '40px',
    origin: "top",
    reset: true
  });


  ScrollReveal().reveal('#s6-1',{
    delay: 275,
    duration: 1500,
    opacity: 0,
    distance: '40px',
    origin: "bottom",
    reset: true
  });

  
  ScrollReveal().reveal('#s6-2',{
    delay: 275,
    duration: 1500,
    opacity: 0,
    distance: '40px',
    origin: "bottom",
    reset: true
  });


  ScrollReveal().reveal('#s6-pic',{
    delay: 275,
    duration: 1500,
    opacity: 0,
    distance: '40px',
    origin: "top",
    reset: true
  });




  ScrollReveal().reveal('#s7',{
    delay: 325,
    duration: 1500,
    opacity: 0,
    distance: '40px',
    origin: "top",
    reset: true
  });

  ScrollReveal().reveal('#s8',{
    delay: 375,
    duration: 1500,
    opacity: 0,
    distance: "40px",
    origin: "top",
    reset: true
  });

  
  ScrollReveal().reveal('#s9',{
    delay: 425,
    duration: 1500,
    opacity: 0,
    distance: "40px",
    origin: "bottom",
    reset: true
  });

  ScrollReveal().reveal('#s10',{
    delay: 450,
    duration: 1500,
    opacity: 0,
    distance: "40px",
    origin: "top",
    reset: true
  });
  //new 
  // Check If There's Local Storage Color Option
let mainColors = localStorage.getItem("color_option");

// If There's Color Item In Local Storage
if (mainColors !== null) {

  // console.log('Local Storage Is Not Empty You Can Set It On Root Now');
  // console.log(localStorage.getItem("color_option"));

  document.documentElement.style.setProperty('--main-color', mainColors);

  // Remove Active Class From All Colors List Item
  document.querySelectorAll(".colors-list li").forEach(element => {

    element.classList.remove("active");

    // Add Active Class On Element With Data-Color === Local Storage Item
    if (element.dataset.color === mainColors) {

      // Add Active Class
      element.classList.add("active");

    }

  });

}

// Random Background Option
let backgroundOption = true;

// Variable To Control The Background Interval
let backgroundInterval;

// Check If There's Local Storage Random Background Item
let backgroundLocalItem = localStorage.getItem("background_option");

// Check If Random Background Local Storage Is Not EMpty
if (backgroundLocalItem !== null) {

  // Remove Active Class From All Spans
  document.querySelectorAll(".random-backgrounds span").forEach(element => {

    element.classList.remove("active");

  });

  if (backgroundLocalItem === 'true') {

    backgroundOption = true;

    document.querySelector(".random-backgrounds .yes").classList.add("active");

  } else {

    backgroundOption = false;

    document.querySelector(".random-backgrounds .no").classList.add("active");

  }

}

// Click On Toggle Settings Gear
document.querySelector(".toggle-settings .fa-gear").onclick = function () {

  // Toggle Class Fa-spin For Rotation on Self
  this.classList.toggle("fa-spin");

  // Toggle Class Open On Main Settings Box
  document.querySelector(".settings-box").classList.toggle("open");
  
};

// Switch Colors
const colorsLi = document.querySelectorAll(".colors-list li");

// Loop On All List Items
colorsLi.forEach(li => {

  // Click On Every List Items
  li.addEventListener("click", (e) => {

    // Set Color On Root
    document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

    // Set Color On Local Storage
    localStorage.setItem("color_option", e.target.dataset.color);

    handleActive(e);

  });

});

// Switch Random Background Option
const randomBackEl = document.querySelectorAll(".random-backgrounds span");

// Loop On All Spans
randomBackEl.forEach(span => {

  // Click On Every Span
  span.addEventListener("click", (e) => {

    handleActive(e);

    if (e.target.dataset.background === 'yes') {

      backgroundOption = true;

      randomizeImgs();

      localStorage.setItem("background_option", true);

    } else {

      backgroundOption = false;

      clearInterval(backgroundInterval);

      localStorage.setItem("background_option", false);

    }

  });

});




// Select Landing Page Element
let landingPage = document.querySelector(".landing-page");

// Get Array Of Imgs
let imgsArray = ["landing1.jpg", "landing2.jpg", "landing3.jpg", "landing4.jpg", "landing5.jpg"];

// Function To Randomize Imgs
function randomizeImgs() {

  if (backgroundOption === true) {

    backgroundInterval = setInterval(() => {

      // Get Random Number
      let randomNumber = Math.floor(Math.random() * imgsArray.length);
    
      // Change Background Image Url 
      landingPage.style.backgroundImage = 'url("imgs/' + imgsArray[randomNumber] + '")';
    
    }, 10000);

  }

}

randomizeImgs();

// Select All Bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullet");

// Select All Links
const allLinks = document.querySelectorAll(".links a");

function scrollToSomewhere(elements) {

  elements.forEach(ele => {

    ele.addEventListener("click", (e) => {

      e.preventDefault();

      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior:'smooth'
      });

    });

  });

}

scrollToSomewhere(allBullets);
scrollToSomewhere(allLinks);

// Handle Active State
function handleActive(ev) {

  // Remove Active Class From All Childrens
  ev.target.parentElement.querySelectorAll(".active").forEach(element => {

    element.classList.remove("active");

  });

  // Add Active Class On Self
  ev.target.classList.add("active");

}

let bulletsSpan = document.querySelectorAll(".bullets-option span");

let bulletsContainer = document.querySelector(".nav-bullets");

let bulletLocalItem = localStorage.getItem("bullets_option");

if (bulletLocalItem !== null) {

  bulletsSpan.forEach(span => {

    span.classList.remove("active");

  });

  if (bulletLocalItem === 'block') {

    bulletsContainer.style.display = 'block';

    document.querySelector(".bullets-option .yes").classList.add("active");

  } else {

    bulletsContainer.style.display = 'none';

    document.querySelector(".bullets-option .no").classList.add("active");

  }

}

bulletsSpan.forEach(span => {

  span.addEventListener("click", (e) => {

    if (span.dataset.display === 'show') {

      bulletsContainer.style.display = 'block';

      localStorage.setItem("bullets_option", 'block');

    } else {

      bulletsContainer.style.display = 'none';

      localStorage.setItem("bullets_option", 'none');

    }

    handleActive(e);

  });

});

// Reset Button
document.querySelector(".reset-options").onclick = function () {

  // localStorage.clear();
  localStorage.removeItem("color_option");
  localStorage.removeItem("background_option");
  localStorage.removeItem("bullets_option");

  // Reload Window
  window.location.reload();

};




// Handle Active State
function handleActive(ev) {

  // Remove Active Class From All Childrens
  ev.target.parentElement.querySelectorAll(".active").forEach(element => {

    element.classList.remove("active");

      // Add Active Class On Self
  ev.target.classList.add("active");

  });}














const hizmetlerLink = document.getElementById("hizmetler-link");
const hizmetMenu = document.getElementById("hizmetmenu");
const eticaret = document.getElementById("eticaret")
const eticaretMenu = document.getElementById("eticaretMenu");
const projelerLink = document.querySelector("#projelerLink");
const projeMenu = document.getElementById("projemenu");
const arrowIcon = hizmetlerLink.querySelector(".arrow");
const arrowIconProjects = projelerLink.querySelector(".arrow");
const menuBarCheckBox = document.getElementById("menu-bar");
const menuicon = document.getElementById("menuicon");



menuBarCheckBox.addEventListener("change", function () {
    if (menuBarCheckBox.checked) {
        menuicon.textContent="close";
    } else {
        menuicon.textContent="menu";
    }
});


hizmetlerLink.addEventListener("click", function (e) {
    projeMenu.style.display = "none";
    arrowIconProjects.classList.remove("open");

    e.preventDefault();
    hizmetMenu.style.display = hizmetMenu.style.display === "block" ? "none" : "block";
    arrowIcon.classList.toggle("open");
    e.stopPropagation();
});


eticaret.addEventListener("click", (e) => {
    e.preventDefault();
    eticaretMenu.style.display = eticaretMenu.style.display === "block" ? "none" : "block";


})


hizmetMenu.addEventListener("click", function (e) {
    e.stopPropagation();
});

eticaret.addEventListener("click", function (e) {
    e.stopPropagation();
});


projelerLink.addEventListener("click", function (e) {
   
    e.preventDefault();
    projeMenu.style.display = projeMenu.style.display === "block" ? "none" : "block";
    arrowIconProjects.classList.toggle("open");
    e.stopPropagation();
    hizmetMenu.style.display = "none";
    arrowIcon.classList.remove("open");

})


document.addEventListener("click", function () {
    hizmetMenu.style.display = "none";
    eticaretMenu.style.display = "none";
    arrowIcon.classList.remove("open");
    arrowIconProjects.classList.remove("open");
    projeMenu.style.display = "none";
});

//start our team js 

const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];
let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;
// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);
// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});
// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});
// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");
// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});
const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}
const dragging = (e) => {
    if(!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}
const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}
const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }
    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}
const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 2500 ms
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);


                          //main gallery pop up overlay //


             

// Create Popup With The Image
let ourGallery = document.querySelectorAll(".gallery1 img");

ourGallery.forEach(img => {

  img.addEventListener('click', (e) => {

    // Create Overlay Element
    let overlay = document.createElement("div");

    // Add Class To Overlay
    overlay.className = 'popup-overlay';

    // Append Overlay To The Body
    document.body.appendChild(overlay);

    // Create The Popup Box
    let popupBox = document.createElement("div");

    // Add Class To The Popup Box
    popupBox.className = 'popup-box';

    if (img.alt !== null) {

      // Create Heading
      let imgHeading = document.createElement("h3");

      // Create text For Heading
      let imgText = document.createTextNode(img.alt);

      // Append The Text To The Heading
      imgHeading.appendChild(imgText);

      // Append The Heading To The Popup Box
      popupBox.appendChild(imgHeading);

    }

    // Create The Image
    let popupImage = document.createElement("img");

    // Set Image Source
    popupImage.src = img.src;

    // Add Image To Popup Box
    popupBox.appendChild(popupImage);

    // Append The Popup Box To Body
    document.body.appendChild(popupBox);

    // Create The Close Span
    let closeButton = document.createElement("span");

    // Create The Close Button Text
    let closeButtonText = document.createTextNode("X");

    // Append Text To Close Button
    closeButton.appendChild(closeButtonText);

    // Add Class To Close Button
    closeButton.className = 'close-button';

    // Add Close Button To The Popup Box
    popupBox.appendChild(closeButton);

  });

});

// Close Popup
document.addEventListener("click", function (e) {

  if (e.target.className == 'close-button') {

    // Remove The Current Popup
    e.target.parentNode.remove();

    // Remove Overlay
    document.querySelector(".popup-overlay").remove();

  }

});

             

//Question and answer//

let questions = document.querySelectorAll(".question")
let icons = document.querySelectorAll(".Icon")
let parags = document.querySelectorAll(".des")
icons.forEach((icon) => {
    icon.addEventListener("click", (e) => {
        if (!icon.classList.contains("rotate")) {
            icon.classList.add("rotate")
            e.currentTarget.parentElement.nextElementSibling.classList.remove("hide")
        } else {
            icon.classList.remove("rotate")
            e.currentTarget.parentElement.nextElementSibling.classList.add("hide")
        }
    })
})


//2024 teams gallery //
const sliderContainer = document.querySelector(".slider-container");
const slideRight = document.querySelector(".right-slide");
const slideLeft = document.querySelector(".left-slide");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
const slidesLength = slideRight.querySelectorAll("div").length;

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex > slidesLength - 1) activeSlideIndex = 0;
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) activeSlideIndex = slidesLength - 1;
  }
  slideRight.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;
  slideLeft.style.transform = `translateY(${
    activeSlideIndex * sliderHeight
  }px)`;
};

upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));


// on spot task //

'use strict';
const tabs = document.querySelectorAll('[data-id]');
const contents = document.querySelectorAll('[data-content]');
let id = 0;

tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
        tabs[id].classList.remove('active');
        tab.classList.add('active');
        id = tab.getAttribute('data-id');
        contents.forEach(function (box) {
            box.classList.add('hidea');
            if (box.getAttribute('data-content') == id){
                box.classList.remove('hidea');
                box.classList.add('showa');
            }
        });
    });
});
 /// sponsor
 const ACTIVE_CLASS = "block--active";
 const TRANSITION_CLASS = "block--transition";
 
 const getTransforms = (a, b) => {
   const scaleY = a.height / b.height;
   const scaleX = a.width / b.width;
 
   // dividing by 2 centers the transform since the origin
   // is centered not top left
   const translateX = a.left + a.width / 2 - (b.left + b.width / 2);
   const translateY = a.top + a.height / 2 - (b.top + b.height / 2);
 
   // nothing particularly clever here, just using the
   // translate amount to estimate a rotation direction/amount.
   // ends up feeling pretty natural to me.
   const rotate = translateX;
 
   return [
     `translateX(${translateX}px)`,
     `translateY(${translateY}px)`,
     `rotate(${rotate}deg)`,
     `scaleY(${scaleY})`,
     `scaleX(${scaleX})`
   ].join(" ");
 };
 
 const animate = (block, transforms, oldTransforms) => {
   block.style.transform = transforms;
   block.getBoundingClientRect(); // force redraw
   block.classList.add(TRANSITION_CLASS);
   block.style.transform = oldTransforms;
   block.addEventListener(
     "transitionend",
     () => {
       block.removeAttribute("style");
     },
     { once: true }
   );
 };
 
 [...document.querySelectorAll(".block")].forEach(block => {
   const buttonForBlock = block.querySelector(".block-content__button");
   block.addEventListener("click", event => {
     if (
       block.classList.contains(ACTIVE_CLASS) &&
       event.target !== buttonForBlock
     ) {
       return;
     }
 
     block.classList.remove(TRANSITION_CLASS);
     const inactiveRect = block.getBoundingClientRect();
     const oldTransforms = block.style.transform;
 
     block.classList.toggle(ACTIVE_CLASS);
     const activeRect = block.getBoundingClientRect();
     const transforms = getTransforms(inactiveRect, activeRect);
 
     animate(block, transforms, oldTransforms);
   });
 });


 "use strict";

const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", DisplayContent);
DisplayContent();

function DisplayContent() {
  const TriggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const topBox = box.getBoundingClientRect().top;

    if (topBox < TriggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
//new sponsor section 





/*location */


