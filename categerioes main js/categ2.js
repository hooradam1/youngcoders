// Navbar
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}
// Dark Mode
let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon','bx-sun');
        document.body.classList.add('active');
    }else{
        darkmode.classList.replace('bx-sun','bx-moon');
        document.body.classList.remove('active');
    }
}

// Scroll Reveal
const sr = ScrollReveal ({
    origin: 'top',
    distance: '40px',
    duration: 2000,
    reset: true
});


sr.reveal(`.home-text, .home-img,
            .about-img, .about-text,
            .box, .s-box,
            .btn, .connect-text,
            .contact-box`, {
    interval: 200
})
/////////////////////////////


function DownloadFile(pdfUrl) {
    const downloadLink = document.createElement('a');
    downloadLink.href = pdfUrl;
    downloadLink.download = "/myfiles/CodersCup_manuel_entry_level.pdf"; 
    // Optional: Set a custom filename
    downloadLink.download = "/myfiles/CodersCup_manuel_Principal_level .pdf"

    downloadLink.style.display = 'none'; // Hide the link for a cleaner experience
  
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }
  
  const button = document.querySelector('.download-pdf');
  button.addEventListener('click', () => {
    const pdfUrl = "https://your-server.com/path/to/myfile.pdf"; // Replace with your actual URL
    DownloadFile(pdfUrl);
  });

  // photo running //
  (function(){
    //main Animation
    function runmanLoad () {
      var num = 1;
      var speed = 80;
      var maxImgCount = 8;
      var $content = $('.running_man');
      var $man = $('.man');
      
    //do the man running after addclass
    $.when(
        $content.addClass('active')
    ).done(function(){
        $man.animate({left: 0}, 1200);
      
        setInterval(function(){
          num = num + 1;
          //back to the first img
          if (num > 0 && num === maxImgCount) {
            num = 1;
          }
          
          //change the img url per 0.08sec
          var newLInk = 'http://www.vicchoutw.com/codepen/images/javascript/running/runman' + num + '.png';
          $man.css({'background-image': 'url(' + newLInk + ')'});
        }, speed)
        
      })
    }
    
    //window preload images
    function addLoadEvent(runmanLoad) {
      var oldonload = window.onload;
      if (typeof window.onload != 'function') { 
          window.onload = runmanLoad;
      } else { 
          window.onload = function() {
            if (oldonload) {
                oldonload();
            }
        runmanLoad();
          }
      }
    }
  
  addLoadEvent(runmanLoad);
  
  })();
  


  //
  ScrollReveal().reveal('#home',{
    delay: 75,
    duration: 1500,
    opacity: 0,
    distance:'40px' ,
    origin: "top",
    reset: true
  });
