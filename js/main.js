/**
 * HaitiTPS Main JavaScript
 * Handles: FAQ accordion, smooth scroll, animations
 */
(function(){
'use strict';

/* FAQ Accordion */
function initFAQ(){
  document.querySelectorAll('.faq-item').forEach(function(item){
    var q=item.querySelector('.faq-question');
    if(!q)return;
    q.addEventListener('click',function(){
      document.querySelectorAll('.faq-item').forEach(function(o){
        if(o!==item&&o.classList.contains('open'))o.classList.remove('open');
      });
      item.classList.toggle('open');
    });
  });
}

/* Scroll animations */
function initAnimations(){
  var observer=new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){e.target.style.opacity='1';e.target.style.transform='translateY(0)'}
    });
  },{threshold:0.1});
  document.querySelectorAll('.service-card,.detail-block,.tps-alert,.faq-item,.contact-info,.contact-form-wrap').forEach(function(el){
    el.style.opacity='0';el.style.transform='translateY(20px)';el.style.transition='opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}

function init(){initFAQ();initAnimations()}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',init)}else{init()}
})();
