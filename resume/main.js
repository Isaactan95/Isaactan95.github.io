(() => {
    /* ── Matrix-style rain on background canvas ── */
    const canvas = document.getElementById('bg-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let w, h, cols, drops;
        const FONT_SIZE = 14;
        const CHARS = 'アイウエオカキクケコ01サシスセソタチツテト10ナニヌネノハヒフヘホ'.split('');

        function resize() {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
            cols = Math.floor(w / FONT_SIZE);
            drops = Array.from({ length: cols }, () => Math.random() * -100 | 0);
        }
        resize();
        window.addEventListener('resize', resize);

        function draw() {
            ctx.fillStyle = 'rgba(10,14,23,0.05)';
            ctx.fillRect(0, 0, w, h);
            ctx.fillStyle = '#1f6feb';
            ctx.font = FONT_SIZE + 'px JetBrains Mono, monospace';

            for (let i = 0; i < cols; i++) {
                const char = CHARS[Math.random() * CHARS.length | 0];
                ctx.fillText(char, i * FONT_SIZE, drops[i] * FONT_SIZE);
                if (drops[i] * FONT_SIZE > h && Math.random() > 0.975)
                    drops[i] = 0;
                drops[i]++;
            }
            requestAnimationFrame(draw);
        }
        draw();
    }

    /* ── Scroll-reveal (IntersectionObserver) ── */
    const reveals = document.querySelectorAll('[data-aos]');
    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.classList.add('visible');
                    io.unobserve(e.target);
                }
            });
        }, { threshold: 0.15 });
        reveals.forEach(el => io.observe(el));
    } else {
        reveals.forEach(el => el.classList.add('visible'));
    }

    /* ── Mobile nav toggle ── */
    const toggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (toggle && navLinks) {
        toggle.addEventListener('click', () => navLinks.classList.toggle('open'));
        navLinks.querySelectorAll('a').forEach(a =>
            a.addEventListener('click', () => navLinks.classList.remove('open'))
        );
    }

    /* ── Active nav highlight on scroll ── */
    const sections = document.querySelectorAll('.section, .hero');
    const links = document.querySelectorAll('.nav-links a[href^="#"]');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(s => {
            if (window.scrollY >= s.offsetTop - 120) current = s.id;
        });
        links.forEach(a => {
            a.style.color = a.getAttribute('href') === '#' + current ? '#58a6ff' : '';
        });
    }, { passive: true });
})();
