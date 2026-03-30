// สคริปต์สำหรับเพื่อให้เว็บเลื่อนแบบ Smooth 
// และลูกเล่นอื่นๆ เล็กน้อย

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// เพิ่มลูกเล่นให้กับแถบนำทางเมื่อเลื่อนลงมา
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
        navbar.style.background = 'rgba(13, 17, 23, 0.95)';
    } else {
        navbar.style.boxShadow = 'none';
        navbar.style.background = 'rgba(13, 17, 23, 0.85)';
    }
});
