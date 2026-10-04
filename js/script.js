document.documentElement.classList.remove('no-js');
const header=document.querySelector('.site-header'),toggle=document.querySelector('.nav-toggle'),menu=document.querySelector('.nav-menu');
const updateHeader=()=>header.classList.toggle('scrolled',scrollY>18);updateHeader();addEventListener('scroll',updateHeader,{passive:true});
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!open));toggle.setAttribute('aria-label',open?'Open menu':'Close menu');menu.classList.toggle('open',!open);document.body.classList.toggle('menu-open',!open)});
menu.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open menu');menu.classList.remove('open');document.body.classList.remove('menu-open')}));
document.querySelector('#current-year').textContent=new Date().getFullYear();
document.querySelectorAll('#print-resume,#footer-print').forEach(button=>button.addEventListener('click',()=>window.print()));
const items=document.querySelectorAll('.reveal');if('IntersectionObserver'in window){const observer=new IntersectionObserver((entries,obs)=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');obs.unobserve(entry.target)}}),{threshold:.12,rootMargin:'0px 0px -35px'});items.forEach(item=>observer.observe(item))}else items.forEach(item=>item.classList.add('visible'));
