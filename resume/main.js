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

    /* ── Typing animation for name (looping) ── */
    const typedEl = document.querySelector('.typed-text');
    if (typedEl) {
        const FULL_TEXT = 'Isaac Tan';
        const HIGHLIGHT_START = 6; // "Tan" starts at index 6
        const TYPE_SPEED = 120;
        const DELETE_SPEED = 60;
        const PAUSE_AFTER_TYPE = 2000;
        const PAUSE_AFTER_DELETE = 500;

        function render(len) {
            typedEl.innerHTML = '';
            const visible = FULL_TEXT.slice(0, len);
            const normalPart = visible.slice(0, Math.min(len, HIGHLIGHT_START));
            const highlightPart = len > HIGHLIGHT_START ? visible.slice(HIGHLIGHT_START) : '';

            if (normalPart) {
                typedEl.appendChild(document.createTextNode(normalPart));
            }
            if (highlightPart) {
                const span = document.createElement('span');
                span.className = 'highlight';
                span.textContent = highlightPart;
                typedEl.appendChild(span);
            }
        }

        let len = 0;
        let deleting = false;

        function tick() {
            if (!deleting) {
                len++;
                render(len);
                if (len >= FULL_TEXT.length) {
                    deleting = true;
                    setTimeout(tick, PAUSE_AFTER_TYPE);
                } else {
                    setTimeout(tick, TYPE_SPEED);
                }
            } else {
                len--;
                render(len);
                if (len <= 0) {
                    deleting = false;
                    setTimeout(tick, PAUSE_AFTER_DELETE);
                } else {
                    setTimeout(tick, DELETE_SPEED);
                }
            }
        }

        setTimeout(tick, 600);
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
