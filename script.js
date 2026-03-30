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
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
