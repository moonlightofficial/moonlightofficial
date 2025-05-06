document.addEventListener("DOMContentLoaded", function () {
    const mainButton = document.getElementById("mainButton");
    const popup = document.getElementById("popup");
    
    mainButton.addEventListener("click", () => {

      popup.classList.add("show");
  

      setTimeout(() => {

        document.querySelector('.popup-content h2').textContent = 'ยินดีต้อนรับเข้าสู่ Moonlight Project';
        document.querySelector('.popup-content p').textContent = 'คุณเข้าสู่ระบบสำเร็จแล้ว!';
  
        setTimeout(() => {
          window.open("https://discord.gg/4nyPNqhz8b", "_blank");
        }, 1000);
      }, 2000);
    });
  

    const closePopup = document.getElementById("closePopup");
    if (closePopup) {
      closePopup.addEventListener("click", () => {
        popup.classList.remove("show");
      });
    }
  });
  

  document.addEventListener("DOMContentLoaded", function () {
    const modeToggle = document.getElementById("modeToggle");
    
    if (localStorage.getItem('theme') === 'light') {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
    
    modeToggle.addEventListener("click", () => {

      document.body.classList.toggle('light-mode');
      
      if (document.body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
      } else {
        localStorage.setItem('theme', 'dark');
      }
    });
  });
  
  


  document.addEventListener("DOMContentLoaded", function () {
    const starsContainer = document.querySelector('.stars-container');
    const starCount = 100;
  
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
  
      star.style.top = Math.random() * 100 + 'vh';
      star.style.left = Math.random() * 100 + 'vw';
  
      const size = Math.random() * 1.5 + 0.5;
      star.style.width = size + 'px';
      star.style.height = size + 'px';
  
      const duration = Math.random() * 4 + 2; // 2 - 6s
      star.style.animationDuration = duration + 's';
  
      const delay = Math.random() * 5;
      star.style.animationDelay = delay + 's';
  
      starsContainer.appendChild(star);
    }
  
  });
  
