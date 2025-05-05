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
  

    document.getElementById("closePopup").addEventListener("click", () => {
      popup.classList.remove("show");
    });
  });
  
