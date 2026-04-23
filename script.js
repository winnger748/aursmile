(function() {
    // ---------- 1. INTERSECTION OBSERVER (SMOOTH SCROLL REVEAL FADE-UP) ----------
    const fadeElements = document.querySelectorAll('.as-fade-up');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('as-visible');
          observer.unobserve(entry.target); // once revealed, stop observing
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
    
    fadeElements.forEach(el => observer.observe(el));
    
    // ---------- 2. GLASS FORM SIMPLE TOAST / ALERT (Demo) ----------
    const glassSubmit = document.getElementById('glassSubmitBtn');
    if (glassSubmit) {
      glassSubmit.addEventListener('click', (e) => {
        e.preventDefault();
        const name = document.getElementById('glassName')?.value.trim() || 'Гость';
        const phone = document.getElementById('glassPhone')?.value.trim() || 'не указан';
        alert(`Спасибо, ${name}! Мы свяжемся с вами по номеру ${phone} в ближайшее время.`);
        // optional clear
        if(document.getElementById('glassName')) document.getElementById('glassName').value = '';
        if(document.getElementById('glassPhone')) document.getElementById('glassPhone').value = '';
      });
    }
    
    // Header phone button alert (just demo)
    const callBtn = document.getElementById('callBtn');
    if(callBtn) {
      callBtn.addEventListener('click', () => {
        alert('Нажмите для звонка: +7 (495) 555-23-44');
      });
    }
    
    // secondary buttons
    const onlineBtns = document.querySelectorAll('.as-phone-btn');
    onlineBtns.forEach(btn => {
      if(btn.innerText.includes('Записаться онлайн')) {
        btn.addEventListener('click', () => {
          alert('Форма записи доступна в разделе Hero. Оставьте контакт!');
        });
      }
    });
    
    // Additional subtle styling: dynamic header shadow on scroll
    const header = document.querySelector('.as-header');
    window.addEventListener('scroll', () => {
      if(window.scrollY > 20) {
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.02)';
      } else {
        header.style.boxShadow = 'none';
      }
    });
    
    // IntersectionObserver also for additional dynamic if needed
    console.log('AuraSmile: ultra-premium landing, glassmorphism, grayscale hover, scroll-reveal ready');
  })();