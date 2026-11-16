document.addEventListener("DOMContentLoaded", () => {
    // Referencias a elementos del DOM
    const loginScreen = document.getElementById("login-screen");
    const mainMenu = document.getElementById("main-menu");
    const loginBtn = document.getElementById("loginBtn");
    const btnBackLogin = document.getElementById("btn-back-login");
    const soundClick = document.getElementById("sound-click");
    const menuContainer = document.querySelector(".menu-container");
    const menuCards = document.querySelectorAll(".menu-card");

    // Función para reproducir sonido de forma segura (sin bloquear si no existe el mp3)
    function playClickSound() {
        if (soundClick) {
            soundClick.currentTime = 0;
            soundClick.play().catch(() => {
                // Evita errores en consola si el navegador bloquea el audio o falta el archivo
            });
        }
    }

    // =========================================
    // BOTÓN: ROMPER EL SELLO (Entrar al menú)
    // =========================================
    if (loginBtn) {
        loginBtn.addEventListener("click", () => {
            playClickSound();

            // Ocultar pantalla del sello
            loginScreen.style.display = "none";

            // Mostrar menú principal
            mainMenu.style.display = "flex";
            
            // Pequeño retraso para activar la opacidad y animación en cascada
            setTimeout(() => {
                mainMenu.style.opacity = "1";
                if (menuContainer) menuContainer.classList.add("animate-in");

                menuCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add("show");
                    }, index * 150);
                });
            }, 50);
        });
    }

    // =========================================
    // BOTÓN: ABANDONAR ARCHIVO (Volver al sello)
    // =========================================
    if (btnBackLogin) {
        btnBackLogin.addEventListener("click", () => {
            playClickSound();

            mainMenu.style.opacity = "0";

            setTimeout(() => {
                mainMenu.style.display = "none";
                
                // Reiniciar animaciones de las tarjetas para la próxima vez
                if (menuContainer) menuContainer.classList.remove("animate-in");
                menuCards.forEach(card => card.classList.remove("show"));

                // Volver a mostrar pantalla inicial
                loginScreen.style.display = "flex";
            }, 500);
        });
    }
});