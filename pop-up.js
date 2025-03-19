document.addEventListener("DOMContentLoaded", function() {
    const popup1 = document.getElementById("popup-1");
    const popup2 = document.getElementById("popup-2");
    const popup3 = document.getElementById("popup-3");
    const popup4 = document.getElementById("popup-4");
    const popup5 = document.getElementById("popup-5");
    
    const openPopup1Button = document.getElementById("open-popup-1");
    const openPopup2Button = document.getElementById("open-popup-2");
    const openPopup3Button = document.getElementById("open-popup-3");
    const openPopup4Button = document.getElementById("open-popup-4");
    const openPopup5Button = document.getElementById("open-popup-5");
    
    const closePopup1Button = document.getElementById("close-popup-1");
    const closePopup2Button = document.getElementById("close-popup-2");
    const closePopup3Button = document.getElementById("close-popup-3");
    const closePopup4Button = document.getElementById("close-popup-4");
    const closePopup5Button = document.getElementById("close-popup-5");

    openPopup1Button.addEventListener("click", function(event) {
        event.preventDefault();
        popup1.style.display = "flex";
    });

    openPopup2Button.addEventListener("click", function(event) {
        event.preventDefault();
        popup2.style.display = "flex";
    });

    openPopup3Button.addEventListener("click", function(event) {
        event.preventDefault();
        popup3.style.display = "flex";
    });

    openPopup4Button.addEventListener("click", function(event) {
        event.preventDefault();
        popup4.style.display = "flex";
    });

    openPopup5Button.addEventListener("click", function(event) {
        event.preventDefault();
        popup5.style.display = "flex";
    });

    closePopup1Button.addEventListener("click", function() {
        popup1.style.display = "none";
    });

    closePopup2Button.addEventListener("click", function() {
        popup2.style.display = "none";
    });

    closePopup3Button.addEventListener("click", function() {
        popup3.style.display = "none";
    });

    closePopup4Button.addEventListener("click", function() {
        popup4.style.display = "none";
    });

    closePopup5Button.addEventListener("click", function() {
        popup5.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === popup1) {
            popup1.style.display = "none";
        }
        if (event.target === popup2) {
            popup2.style.display = "none";
        }
        if (event.target === popup3) {
            popup3.style.display = "none";
        }
        if (event.target === popup4) {
            popup4.style.display = "none";
        }
        if (event.target === popup5) {
            popup5.style.display = "none";
        }
    });
});