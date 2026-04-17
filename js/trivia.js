/**
 * HaitiTPS Interactive Immigration Trivia Game
 * Trilingual quiz on USCIS policies
 */
(function(){
'use strict';
var questions=[
  {question:{ht:"Ki fòm ou dwe ranpli pou aplike pou Temporary Protected Status (TPS)?",en:"Which form must you fill out to apply for Temporary Protected Status (TPS)?",fr:"Quel formulaire devez-vous remplir pour demander le TPS ?"},options:{ht:["Fòm I-130","Fòm I-821","Fòm N-400","Fòm I-485"],en:["Form I-130","Form I-821","Form N-400","Form I-485"],fr:["Formulaire I-130","Formulaire I-821","Formulaire N-400","Formulaire I-485"]},correctIndex:1,explanation:{ht:"Fòm I-821 se fòm ofisyèl la pou aplike pou TPS. Li soumèt bay USCIS ansanm ak dokiman sipò yo.",en:"Form I-821 is the official form to apply for TPS. It is submitted to USCIS along with supporting documents.",fr:"Le formulaire I-821 est le formulaire officiel pour demander le TPS."}},
  {question:{ht:"Ki fòm ou bezwen pou jwenn yon Kat Travay (EAD)?",en:"Which form do you need for a Work Permit (EAD)?",fr:"Quel formulaire est nécessaire pour un permis de travail (EAD) ?"},options:{ht:["Fòm I-765","Fòm I-131","Fòm I-821","Fòm I-864"],en:["Form I-765","Form I-131","Form I-821","Form I-864"],fr:["Formulaire I-765","Formulaire I-131","Formulaire I-821","Formulaire I-864"]},correctIndex:0,explanation:{ht:"Fòm I-765 se fòm ou ranpli pou aplike pou oswa renouvle Kat Travay ou (EAD).",en:"Form I-765 is the form to apply for or renew your Work Permit (EAD).",fr:"Le formulaire I-765 est utilisé pour demander ou renouveler votre permis de travail (EAD)."}},
  {question:{ht:"Ki fòm ou dwe ranpli pou vwayaje deyò Etazini ak retounen legalman?",en:"Which form must you file to travel outside the U.S. and return legally?",fr:"Quel formulaire devez-vous remplir pour voyager hors des États-Unis et revenir légalement ?"},options:{ht:["Fòm I-821","Fòm I-485","Fòm I-131","Fòm N-400"],en:["Form I-821","Form I-485","Form I-131","Form N-400"],fr:["Formulaire I-821","Formulaire I-485","Formulaire I-131","Formulaire N-400"]},correctIndex:2,explanation:{ht:"Fòm I-131 (Advance Parole) pèmèt ou vwayaje deyò Etazini ak retounen legalman. Ou dwe jwenn apwobasyon ANVAN ou vwayaje.",en:"Form I-131 (Advance Parole) allows you to travel outside the U.S. and return legally. You must get approval BEFORE traveling.",fr:"Le formulaire I-131 (Advance Parole) permet de voyager hors des États-Unis et de revenir légalement."}},
  {question:{ht:"Ki fòm ou itilize pou fè petisyon pou yon manm fanmi vin rezidan pèmanan?",en:"Which form do you use to petition for a family member to become a permanent resident?",fr:"Quel formulaire utilisez-vous pour parrainer un membre de votre famille ?"},options:{ht:["Fòm I-485","Fòm I-130","Fòm I-765","Fòm I-821"],en:["Form I-485","Form I-130","Form I-765","Form I-821"],fr:["Formulaire I-485","Formulaire I-130","Formulaire I-765","Formulaire I-821"]},correctIndex:1,explanation:{ht:"Fòm I-130 (Petition for Alien Relative) se fòm yon sitwayen oswa rezidan pèmanan itilize pou fè petisyon pou yon manm fanmi.",en:"Form I-130 (Petition for Alien Relative) is used by a U.S. citizen or permanent resident to petition for a family member.",fr:"Le formulaire I-130 est utilisé par un citoyen américain ou résident permanent pour parrainer un membre de la famille."}},
  {question:{ht:"Ki fòm ou ranpli pou aplike pou sitwayènte Ameriken (natiralizasyon)?",en:"Which form do you fill out to apply for U.S. citizenship (naturalization)?",fr:"Quel formulaire remplissez-vous pour la citoyenneté américaine ?"},options:{ht:["Fòm I-485","Fòm I-821","Fòm I-130","Fòm N-400"],en:["Form I-485","Form I-821","Form I-130","Form N-400"],fr:["Formulaire I-485","Formulaire I-821","Formulaire I-130","Formulaire N-400"]},correctIndex:3,explanation:{ht:"Fòm N-400 se aplikasyon pou natiralizasyon. Ou dwe gen Green Card pou omwen 5 an (oswa 3 an si marye ak sitwayen Ameriken).",en:"Form N-400 is the application for naturalization. You must have had a Green Card for at least 5 years (or 3 years if married to a U.S. citizen).",fr:"Le formulaire N-400 est la demande de naturalisation. Vous devez avoir une Green Card depuis au moins 5 ans."}},
  {question:{ht:"Èske SSA (Sagesse Solutions Administratives) se yon kabinè avoka?",en:"Is SSA (Sagesse Solutions Administratives) a law firm?",fr:"SSA (Sagesse Solutions Administratives) est-il un cabinet d'avocats ?"},options:{ht:["Wi, SSA se yon kabinè avoka","Non, SSA se yon sant sèvis administratif","Wi, SSA gen avoka ki gen lisans","SSA se yon ajans gouvènman"],en:["Yes, SSA is a law firm","No, SSA is an administrative service center","Yes, SSA has licensed attorneys","SSA is a government agency"],fr:["Oui, SSA est un cabinet d'avocats","Non, SSA est un centre de services administratifs","Oui, SSA a des avocats agréés","SSA est une agence gouvernementale"]},correctIndex:1,explanation:{ht:"SSA se yon sant sèvis administratif — PA yon kabinè avoka. Nou ede prepare ak soumèt fòm yo, men nou PA bay konsèy legal. Pou ka konplèks, kontakte yon avoka imigrasyon.",en:"SSA is an administrative service center — NOT a law firm. We help prepare and submit forms, but do NOT provide legal advice. For complex cases, contact an immigration attorney.",fr:"SSA est un centre de services administratifs — PAS un cabinet d'avocats. Nous aidons à préparer et soumettre les formulaires, mais ne fournissons PAS de conseils juridiques."}},
  {question:{ht:"Depi 2026, ki metòd peman USCIS pa aksepte ankò?",en:"Since 2026, which payment method does USCIS no longer accept?",fr:"Depuis 2026, quel mode de paiement l'USCIS n'accepte-t-il plus ?"},options:{ht:["Kat kredi","Lòd peman (money order)","Chèk pèsonèl","Peman elektwonik"],en:["Credit card","Money order","Personal check","Electronic payment"],fr:["Carte de crédit","Mandat postal","Chèque personnel","Paiement électronique"]},correctIndex:2,explanation:{ht:"Depi 2026, USCIS pa aksepte chèk pèsonèl ankò. Ou ka itilize lòd peman (money order), kat kredi/debi, oswa peman elektwonik.",en:"Since 2026, USCIS no longer accepts personal checks. You can use money orders, credit/debit cards, or electronic payments.",fr:"Depuis 2026, l'USCIS n'accepte plus les chèques personnels. Vous pouvez utiliser des mandats, cartes de crédit/débit, ou paiements électroniques."}},
  {question:{ht:"Kisa ki pwoteje TPS Ayiti pou kounye a (Avril 2026)?",en:"What currently protects Haiti TPS (April 2026)?",fr:"Qu'est-ce qui protège actuellement le TPS Haïti (avril 2026) ?"},options:{ht:["Yon nouvo lwa Kongrè a","Yon lòd yon jij federal","Yon aksyon egzekitif prezidan an","Anyen — TPS la fini"],en:["A new law by Congress","A federal court order","A presidential executive action","Nothing — TPS has ended"],fr:["Une nouvelle loi du Congrès","Une ordonnance d'un tribunal fédéral","Une action exécutive présidentielle","Rien — le TPS est terminé"]},correctIndex:1,explanation:{ht:"Yon jij federal nan Washington D.C. te bay yon lòd pou bloke tèminazon TPS la (Miot et al. v. Trump). Kou Siprèm lan gen odyans oral sou dosye sa a.",en:"A federal judge in Washington D.C. issued a stay blocking the TPS termination (Miot et al. v. Trump). The Supreme Court has oral arguments on this case.",fr:"Un juge fédéral à Washington D.C. a émis une ordonnance bloquant la fin du TPS (Miot et al. v. Trump). La Cour suprême a des audiences orales sur cette affaire."}},
  {question:{ht:"Kilè yon anplwayè dwe verifye Fòm I-9 pou yon nouvo anplwaye?",en:"When must an employer verify Form I-9 for a new employee?",fr:"Quand un employeur doit-il vérifier le formulaire I-9 pour un nouvel employé ?"},options:{ht:["Nan premye jou travay la","Nan 3 jou apre premye jou travay la","Nan 30 jou apre","Nenpòt lè"],en:["On the first day of work","Within 3 days of the first day of work","Within 30 days","Anytime"],fr:["Le premier jour de travail","Dans les 3 jours suivant le premier jour de travail","Dans les 30 jours","N'importe quand"]},correctIndex:1,explanation:{ht:"Anplwayè yo dwe verifye Fòm I-9 nan 3 jou apre premye jou travay yon nouvo anplwaye. EAD ou a se yon dokiman akseptab pou I-9.",en:"Employers must verify Form I-9 within 3 business days of a new employee's first day of work. Your EAD is an acceptable document for I-9.",fr:"Les employeurs doivent vérifier le formulaire I-9 dans les 3 jours ouvrables suivant le premier jour de travail."}},
  {question:{ht:"Ki fòm ou ranpli pou Ajisteman Estati (Green Card) pandan w nan Etazini?",en:"Which form do you file for Adjustment of Status (Green Card) while in the U.S.?",fr:"Quel formulaire déposez-vous pour l'Ajustement de Statut (Green Card) aux États-Unis ?"},options:{ht:["Fòm I-130","Fòm N-400","Fòm I-485","Fòm I-765"],en:["Form I-130","Form N-400","Form I-485","Form I-765"],fr:["Formulaire I-130","Formulaire N-400","Formulaire I-485","Formulaire I-765"]},correctIndex:2,explanation:{ht:"Fòm I-485 (Adjustment of Status) pèmèt ou aplike pou vin rezidan pèmanan (Green Card) pandan w deja nan Etazini.",en:"Form I-485 (Adjustment of Status) allows you to apply for permanent residence (Green Card) while already in the United States.",fr:"Le formulaire I-485 (Ajustement de Statut) permet de demander la résidence permanente (Green Card) depuis les États-Unis."}}
];

var currentQ=0,score=0,answered=false;

function getLang(){return window.HT_i18n?window.HT_i18n.getLang():'ht'}
function t(key){var i=window.HT_i18n;if(i&&i.T[key])return i.T[key][getLang()]||i.T[key].ht;return key}

function shuffle(arr){for(var i=arr.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var tmp=arr[i];arr[i]=arr[j];arr[j]=tmp}return arr}

function renderQuestion(){
  var container=document.getElementById('trivia-game');
  if(!container)return;
  answered=false;
  var lang=getLang(),q=questions[currentQ];
  var pct=((currentQ)/questions.length*100).toFixed(0);
  var html='<div class="trivia-progress"><span>'+t('trivia_q_of').replace('%1',currentQ+1).replace('%2',questions.length)+'</span><div class="trivia-progress-bar"><div class="trivia-progress-fill" style="width:'+pct+'%"></div></div><span>'+score+'/'+questions.length+'</span></div>';
  html+='<div class="trivia-question">'+q.question[lang]+'</div><div class="trivia-options">';
  q.options[lang].forEach(function(opt,i){
    html+='<div class="trivia-option" data-index="'+i+'" onclick="window._triviaAnswer('+i+')">'+String.fromCharCode(65+i)+'. '+opt+'</div>';
  });
  html+='</div><div class="trivia-explanation" id="trivia-explain"></div><div class="trivia-next" id="trivia-next"><button class="btn btn-primary" onclick="window._triviaNext()">'+t('trivia_next')+'</button></div>';
  container.innerHTML=html;
}

window._triviaAnswer=function(idx){
  if(answered)return;answered=true;
  var q=questions[currentQ],lang=getLang();
  var opts=document.querySelectorAll('.trivia-option');
  opts.forEach(function(o){o.classList.add('disabled')});
  if(idx===q.correctIndex){opts[idx].classList.add('correct');score++}
  else{opts[idx].classList.add('wrong');opts[q.correctIndex].classList.add('correct')}
  var ex=document.getElementById('trivia-explain');
  ex.textContent=q.explanation[lang];ex.classList.add('show');
  document.getElementById('trivia-next').style.display='block';
  document.querySelector('.trivia-progress span:last-child').textContent=score+'/'+questions.length;
};

window._triviaNext=function(){
  currentQ++;
  if(currentQ>=questions.length){showResults()}else{renderQuestion()}
};

function showResults(){
  var container=document.getElementById('trivia-game');
  if(!container)return;
  var lang=getLang();
  container.innerHTML='<div class="trivia-results"><h3>'+t('trivia_results_title')+'</h3><div class="trivia-score">'+score+'/'+questions.length+'</div><p>'+t('trivia_score_msg').replace('%1',score).replace('%2',questions.length)+'</p><button class="btn btn-primary" onclick="window._triviaRestart()" style="margin-top:20px">'+t('trivia_play_again')+'</button></div>';
}

window._triviaRestart=function(){currentQ=0;score=0;shuffle(questions);renderQuestion()};

function initTrivia(){
  if(!document.getElementById('trivia-game'))return;
  shuffle(questions);renderQuestion();
  window.onLangChange=function(){renderQuestion()};
}

if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',initTrivia)}
else{initTrivia()}
})();
