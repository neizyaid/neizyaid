// Update year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Mobile menu cloning
const menuBtn = document.getElementById('menuBtn');
const navList = document.getElementById('navList');
const navListMobile = document.getElementById('navListMobile');
if (navList && navListMobile) {
  navListMobile.innerHTML = navList.innerHTML; // clone links
}
if (menuBtn && navListMobile) {
  menuBtn.addEventListener('click', () => navListMobile.classList.toggle('open'));
}

// Close mobile menu after click
if (navListMobile) {
  navListMobile.addEventListener('click', (e) => {
    if (e.target.matches('a')) navListMobile.classList.remove('open');
  });
}

// Scroll spy
const sections = ['home','about','form','login'];
const links = [...document.querySelectorAll('[data-nav]')];
if (sections.length && links.length) {
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach((en)=>{
      if(en.isIntersecting){
        const id = en.target.id;
        links.forEach(a=>a.classList.toggle('active', a.dataset.nav===id));
      }
    })
  },{rootMargin:'-50% 0px -40% 0px', threshold:[0, .25, .5, 1]});
  sections.forEach(id=>{const el=document.getElementById(id); if(el) obs.observe(el)});
}

// Contact form demo
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    alert('Terima kasih! Pesanmu sudah terkirim.');
    e.target.reset();
  });
}

// Login demo
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    alert('Login berhasil');
  });
}

// Back to top visibility
const toTop = document.getElementById('toTop');
if (toTop) {
  window.addEventListener('scroll', ()=>{
    if(window.scrollY > 600) toTop.classList.add('show'); else toTop.classList.remove('show');
  });
  toTop.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));
}
