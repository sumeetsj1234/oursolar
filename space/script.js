/* =========================
   SMOOTH NAVIGATION
========================= */
function scrollToSection(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

/* =========================
   HERO TYPING EFFECT
========================= */
const heroText = document.querySelector('.hero h2');
if (heroText) {
    const text = heroText.textContent;
    heroText.textContent = "";
    let i = 0;

    (function type() {
        if (i < text.length) {
            heroText.textContent += text[i++];
            setTimeout(type, 45);
        }
    })();
}

/* =========================
   SCROLL REVEAL
========================= */
const reveals = document.querySelectorAll('.galaxy-card, .fact');

reveals.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(30px)';
});

window.addEventListener('scroll', () => {
    reveals.forEach(el => {
        const rect = el.getBoundingClientRect().top;
        if (rect < window.innerHeight - 120) {
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        }
    });
});

/* =========================
   HUD NOTIFICATION
========================= */
function hud(message) {
    const box = document.createElement('div');
    box.textContent = message;
    box.style.cssText = `
        position:fixed;
        bottom:30px;
        right:30px;
        padding:14px 26px;
        color:#0ff;
        border:1px solid #0ff;
        background:rgba(0,0,0,0.6);
        box-shadow:0 0 40px #0ff;
        z-index:9999;
        animation:fadeHUD 3s forwards;
    `;
    document.body.appendChild(box);
    setTimeout(() => box.remove(), 3000);
}

console.log("🚀 COSMIC SYSTEM ONLINE");
