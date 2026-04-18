/**
 * HaitiTPS Main JavaScript
 * Handles: mobile menu, FAQ accordion, scroll animations
 * v2.1.0
 */
(function(){
'use strict';

/* Mobile Menu Toggle */
function initMobileMenu(){
  var toggle=document.querySelector('.menu-toggle');
  var nav=document.querySelector('.main-nav');
  if(!toggle||!nav) return;
  toggle.addEventListener('click',function(){
    nav.classList.toggle('active');
    var expanded=nav.classList.contains('active');
    toggle.setAttribute('aria-expanded',expanded);
    toggle.innerHTML=expanded?'\u2715':'\u2630';
  });
  var navLinks=nav.querySelectorAll('a');
  for(var i=0;i<navLinks.length;i++){
    navLinks[i].addEventListener('click',function(){
      if(window.innerWidth<=992){
        nav.classList.remove('active');
        toggle.setAttribute('aria-expanded','false');
        toggle.innerHTML='\u2630';
      }
    });
  }
}

/* FAQ Accordion */
function initFAQ(){
  var items=document.querySelectorAll('.faq-item');
  for(var i=0;i<items.length;i++){
    (function(item){
      var q=item.querySelector('.faq-question');
      if(!q) return;
      q.addEventListener('click',function(){
        for(var j=0;j<items.length;j++){
          if(items[j]!==item && items[j].classList.contains('open')){
            items[j].classList.remove('open');
          }
        }
        item.classList.toggle('open');
      });
    })(items[i]);
  }
}

/* Scroll Animations */
function initAnimations(){
  if(!('IntersectionObserver' in window)) return;
  var observer=new IntersectionObserver(function(entries){
    for(var i=0;i<entries.length;i++){
      if(entries[i].isIntersecting){
        entries[i].target.style.opacity='1';
        entries[i].target.style.transform='translateY(0)';
      }
    }
  },{threshold:0.1});
  var els=document.querySelectorAll('.service-card,.detail-block,.tps-alert,.faq-item,.contact-info,.contact-form-wrap,.trivia-card');
  for(var i=0;i<els.length;i++){
    els[i].style.opacity='0';
    els[i].style.transform='translateY(20px)';
    els[i].style.transition='opacity 0.5s ease, transform 0.5s ease';
    observer.observe(els[i]);
  }
}

function init(){
  initMobileMenu();
  initFAQ();
  initAnimations();
}

if(document.readyState==='loading'){
  document.addEventListener('DOMContentLoaded',init);
}else{
  init();
}
})();
