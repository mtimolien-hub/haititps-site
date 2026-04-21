/**
 * HaitiTPS Interactive Immigration Trivia Game
 * v2.1.0 — Fixed: reads language from window.HT_i18n
 */
(function(){
'use strict';

var questions=[
  {question:{ht:"Ki fòm ou dwe ranpli pou aplike pou Temporary Protected Status (TPS)?",en:"Which form must you fill out to apply for Temporary Protected Status (TPS)?",fr:"Quel formulaire devez-vous remplir pour demander le TPS ?"},options:{ht:["Fòm I-130","Fòm I-821","Fòm N-400","Fòm I-485"],en:["Form I-130","Form I-821","Form N-400","Form I-485"],fr:["Formulaire I-130","Formulaire I-821","Formulaire N-400","Formulaire I-485"]},correctIndex:1,explanation:{ht:"Fòm I-821 se fòm ofisyèl la pou aplike pou TPS. Li soumèt bay USCIS ansanm ak dokiman sipò yo.",en:"Form I-821 is the official form to apply for TPS. It is submitted to USCIS along with supporting documents.",fr:"Le formulaire I-821 est le formulaire officiel pour demander le TPS."}},
  {question:{ht:"Ki fòm ou bezwen pou jwenn yon Kat Travay (EAD)?",en:"Which form do you need for a Work Permit (EAD)?",fr:"Quel formulaire est nécessaire pour un permis de travail (EAD) ?"},options:{ht:["Fòm I-765","Fòm I-131","Fòm I-821","Fòm I-864"],en:["Form I-765","Form I-131","Form I-821","Form I-864"],fr:["Formulaire I-765","Formulaire I-131","Formulaire I-821","Formulaire I-864"]},correctIndex:0,explanation:{ht:"Fòm I-765 se fòm ou ranpli pou aplike pou oswa renouvle Kat Travay ou (EAD).",en:"Form I-765 is the form to apply for or renew your Work Permit (EAD).",fr:"Le formulaire I-765 est utilisé pour demander ou renouveler votre permis de travail (EAD)."}},
  {question:{ht:"Ki fòm ou dwe ranpli pou vwayaje deyò Etazini ak retounen legalman?",en:"Which form must you file to travel outside the U.S. and return legally?",fr:"Quel formulaire pour voyager hors des États-Unis et revenir légalement ?"},options:{ht:["Fòm I-821","Fòm I-485","Fòm I-131","Fòm N-400"],en:["Form I-821","Form I-485","Form I-131","Form N-400"],fr:["Formulaire I-821","Formulaire I-485","Formulaire I-131","Formulaire N-400"]},correctIndex:2,explanation:{ht:"Fòm I-131 (Advance Parole) pèmèt ou vwayaje deyò Etazini ak retounen legalman. Ou dwe jwenn apwobasyon ANVAN ou vwayaje.",en:"Form I-131 (Advance Parole) allows you to travel outside the U.S. and return legally. You must get approval BEFORE traveling.",fr:"Le formulaire I-131 (Advance Parole) permet de voyager hors des États-Unis et de revenir légalement."}},
  {question:{ht:"Ki fòm ou itilize pou fè petisyon pou yon manm fanmi vin rezidan pèmanan?",en:"Which form do you use to petition for a family member to become a permanent resident?",fr:"Quel formulaire pour parrainer un membre de votre famille ?"},options:{ht:["Fòm I-485","Fòm I-130","Fòm I-765","Fòm I-821"],en:["Form I-485","Form I-130","Form I-765","Form I-821"],fr:["Formulaire I-485","Formulaire I-130","Formulaire I-765","Formulaire I-821"]},correctIndex:1,explanation:{ht:"Fòm I-130 (Petition for Alien Relative) se fòm ki pèmèt yon sitwayen Ameriken oswa rezidan pèmanan fè petisyon pou yon manm fanmi.",en:"Form I-130 (Petition for Alien Relative) allows a U.S. citizen or permanent resident to petition for a family member.",fr:"Le formulaire I-130 permet à un citoyen américain de parrainer un membre de sa famille."}},
  {question:{ht:"Ki fòm ou ranpli pou aplike pou rezidans pèmanan (Green Card) pandan ou nan Etazini?",en:"Which form do you file to apply for permanent residence (Green Card) while in the U.S.?",fr:"Quel formulaire pour demander la résidence permanente (Green Card) aux É.-U. ?"},options:{ht:["Fòm I-130","Fòm N-400","Fòm I-485","Fòm I-131"],en:["Form I-130","Form N-400","Form I-485","Form I-131"],fr:["Formulaire I-130","Formulaire N-400","Formulaire I-485","Formulaire I-131"]},correctIndex:2,explanation:{ht:"Fòm I-485 (Application to Register Permanent Residence or Adjust Status) pèmèt ou aplike pou Green Card san ou pa bezwen kite Etazini.",en:"Form I-485 (Adjustment of Status) allows you to apply for a Green Card without leaving the U.S.",fr:"Le formulaire I-485 permet de demander une Green Card sans quitter les États-Unis."}},
  {question:{ht:"Ki fòm ou ranpli pou aplike pou sitwayènte Ameriken (natiralizasyon)?",en:"Which form do you file to apply for U.S. Citizenship (naturalization)?",fr:"Quel formulaire pour la citoyenneté américaine (naturalisation) ?"},options:{ht:["Fòm I-821","Fòm I-485","Fòm I-765","Fòm N-400"],en:["Form I-821","Form I-485","Form I-765","Form N-400"],fr:["Formulaire I-821","Formulaire I-485","Formulaire I-765","Formulaire N-400"]},correctIndex:3,explanation:{ht:"Fòm N-400 (Application for Naturalization) se fòm ou ranpli pou aplike pou sitwayènte Ameriken. Ou dwe gen Green Card pou omwen 5 an (oswa 3 an si ou marye ak yon sitwayen Ameriken).",en:"Form N-400 (Application for Naturalization) is the form for U.S. Citizenship. You must have had a Green Card for at least 5 years (or 3 years if married to a U.S. citizen).",fr:"Le formulaire N-400 est utilisé pour la citoyenneté américaine. Vous devez avoir une Green Card depuis au moins 5 ans."}},
  {question:{ht:"Depi 2026, ki fòm peman USCIS pa aksepte ankò?",en:"Since 2026, which payment method does USCIS no longer accept?",fr:"Depuis 2026, quel mode de paiement l'USCIS n'accepte-t-il plus ?"},options:{ht:["Kat kredi","Chèk pèsonèl","Money order","Peman elektwonik"],en:["Credit card","Personal check","Money order","Electronic payment"],fr:["Carte de crédit","Chèque personnel","Mandat postal","Paiement électronique"]},correctIndex:1,explanation:{ht:"Depi 2026, USCIS pa aksepte chèk pèsonèl ankò pou peman frè aplikasyon yo. Sèlman peman elektwonik (pay.gov) oswa money order aksepte.",en:"Since 2026, USCIS no longer accepts personal checks for application fees. Only electronic payments (pay.gov) or money orders are accepted.",fr:"Depuis 2026, l'USCIS n'accepte plus les chèques personnels. Seuls les paiements électroniques ou mandats postaux sont acceptés."}},
  {question:{ht:"Lè ou kòmanse yon nouvo travay, ki fòm anplwayè w la dwe ranpli pou verifye ou gen dwa travay?",en:"When starting a new job, which form must your employer fill out to verify work authorization?",fr:"En commençant un nouvel emploi, quel formulaire votre employeur doit-il remplir ?"},options:{ht:["Fòm W-2","Fòm I-9","Fòm I-765","Fòm W-4"],en:["Form W-2","Form I-9","Form I-765","Form W-4"],fr:["Formulaire W-2","Formulaire I-9","Formulaire I-765","Formulaire W-4"]},correctIndex:1,explanation:{ht:"Fòm I-9 (Employment Eligibility Verification) se fòm anplwayè w la dwe ranpli pou verifye ou gen dwa travay legalman nan Etazini. Ou dwe prezante EAD ou oswa lòt dokiman akseptab.",en:"Form I-9 (Employment Eligibility Verification) must be filled out by your employer to verify your work authorization. You must present your EAD or other acceptable documents.",fr:"Le formulaire I-9 doit être rempli par votre employeur pour vérifier votre autorisation de travail."}},
  {question:{ht:"Èske Sagesse Solutions Administratives (SSA) se yon kabinè avoka?",en:"Is Sagesse Solutions Administratives (SSA) a law firm?",fr:"SSA est-il un cabinet d'avocats ?"},options:{ht:["Wi, SSA se yon kabinè avoka","Non, SSA se yon sant sèvis administratif","Wi, SSA gen avoka ki gen lisans","SSA se yon ajans gouvènman"],en:["Yes, SSA is a law firm","No, SSA is an administrative service center","Yes, SSA has licensed attorneys","SSA is a government agency"],fr:["Oui, SSA est un cabinet d'avocats","Non, SSA est un centre de services administratifs","Oui, SSA a des avocats licenciés","SSA est une agence gouvernementale"]},correctIndex:1,explanation:{ht:"SSA se yon sant sèvis administratif — pa yon kabinè avoka. SSA pa bay konsèy legal. Pou ka konplèks, kontakte yon avoka imigrasyon ki gen lisans.",en:"SSA is an administrative service center — not a law firm. SSA does not provide legal advice. For complex cases, contact a licensed immigration attorney.",fr:"SSA est un centre de services administratifs — pas un cabinet d'avocats. Pour les cas complexes, consultez un avocat."}},
  {question:{ht:"Ki sa TPS vle di?",en:"What does TPS stand for?",fr:"Que signifie TPS ?"},options:{ht:["Temporary Permanent Status","Temporary Protected Status","Travel Protection Service","Total Protection System"],en:["Temporary Permanent Status","Temporary Protected Status","Travel Protection Service","Total Protection System"],fr:["Temporary Permanent Status","Temporary Protected Status","Travel Protection Service","Total Protection System"]},correctIndex:1,explanation:{ht:"TPS vle di Temporary Protected Status (Estati Pwoteksyon Tanporè). Li pèmèt sitwayen sèten peyi ki gen kriz (tankou Ayiti) rete ak travay nan Etazini tanporèman.",en:"TPS stands for Temporary Protected Status. It allows nationals of certain crisis-affected countries (like Haiti) to stay and work in the U.S. temporarily.",fr:"TPS signifie Temporary Protected Status (Statut de Protection Temporaire)."}}
];

function getLang(){
  return (window.HT_i18n && window.HT_i18n.getLang) ? window.HT_i18n.getLang() : 'ht';
}

var currentQ=0, score=0, answered=false;

function shuffle(arr){
  var a=arr.slice();
  for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t;}
  return a;
}

var order=shuffle(questions.map(function(_,i){return i;}));

function renderQuestion(){
  var container=document.getElementById('trivia-game');
  if(!container) return;

  if(currentQ>=questions.length){
    var lang=getLang();
    var pct=Math.round((score/questions.length)*100);
    var msgs={
      ht:{perfect:"Ekselan! Ou se yon ekspè imigrasyon!",great:"Trè byen! Ou konnen anpil sou imigrasyon.",good:"Bon travay! Kontinye aprann.",try:"Pa dekouraje! Eseye ankò pou aprann plis."},
      en:{perfect:"Excellent! You're an immigration expert!",great:"Very good! You know a lot about immigration.",good:"Good job! Keep learning.",try:"Don't give up! Try again to learn more."},
      fr:{perfect:"Excellent ! Vous êtes un expert en immigration !",great:"Très bien ! Vous connaissez beaucoup.",good:"Bon travail ! Continuez à apprendre.",try:"Ne vous découragez pas ! Réessayez."}
    };
    var m=msgs[lang]||msgs.ht;
    var msg=pct===100?m.perfect:pct>=70?m.great:pct>=50?m.good:m.try;
    var again={ht:"Rejwe",en:"Play Again",fr:"Rejouer"};
    container.innerHTML='<div class="trivia-score"><h3>'+score+'/'+questions.length+' ('+pct+'%)</h3><p>'+msg+'</p><button class="btn btn-primary" onclick="window.HT_trivia.restart()">'+((again[lang])||again.ht)+'</button></div>';
    return;
  }

  var lang=getLang();
  var q=questions[order[currentQ]];
  var progLabel={ht:"Kesyon",en:"Question",fr:"Question"};
  var html='<div class="trivia-card">';
  html+='<div class="trivia-progress">'+(progLabel[lang]||progLabel.ht)+' '+(currentQ+1)+' / '+questions.length+'</div>';
  html+='<div class="trivia-question">'+q.question[lang]+'</div>';
  html+='<div class="trivia-options">';
  for(var i=0;i<q.options[lang].length;i++){
    html+='<button class="trivia-option" data-index="'+i+'" onclick="window.HT_trivia.answer('+i+')">'+q.options[lang][i]+'</button>';
  }
  html+='</div>';
  html+='<div class="trivia-explanation" id="trivia-explanation">'+q.explanation[lang]+'</div>';
  var nextLabel={ht:"Kesyon Swivan \u2192",en:"Next Question \u2192",fr:"Question Suivante \u2192"};
  html+='<button class="btn btn-blue trivia-next" id="trivia-next" onclick="window.HT_trivia.next()">'+(nextLabel[lang]||nextLabel.ht)+'</button>';
  html+='</div>';
  container.innerHTML=html;
  answered=false;
}

function answerQuestion(idx){
  if(answered) return;
  answered=true;
  var q=questions[order[currentQ]];
  var buttons=document.querySelectorAll('.trivia-option');
  for(var i=0;i<buttons.length;i++){
    buttons[i].disabled=true;
    if(i===q.correctIndex) buttons[i].classList.add('correct');
    if(i===idx && idx!==q.correctIndex) buttons[i].classList.add('wrong');
  }
  if(idx===q.correctIndex) score++;
  var exp=document.getElementById('trivia-explanation');
  if(exp) exp.classList.add('show');
  var nxt=document.getElementById('trivia-next');
  if(nxt) nxt.classList.add('show');
}

function nextQuestion(){
  currentQ++;
  renderQuestion();
}

function restart(){
  currentQ=0;
  score=0;
  order=shuffle(questions.map(function(_,i){return i;}));
  renderQuestion();
}

/* ---- Expose globally so HTML onclick works ---- */
window.HT_trivia={answer:answerQuestion, next:nextQuestion, restart:restart, render:renderQuestion};

/* ---- Auto-init ---- */
function init(){
  if(document.getElementById('trivia-game')){
    renderQuestion();
  }
}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',init);}else{init();}

/* ---- Re-render on language change (preserves game state) ---- */
document.addEventListener('langchange', function(){
  if(document.getElementById('trivia-game')){
    renderQuestion();
  }
});

})();
