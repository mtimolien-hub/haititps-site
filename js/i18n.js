/**
 * HaitiTPS Trilingual Translation System
 * Supports: Haitian Creole (ht), English (en), French (fr)
 * v2.1.0 — Fixed: window.HT_i18n exposed globally
 */
(function(){
'use strict';

var T = {
  /* Legal Bar */
  legal_bar:{
    ht:'<strong>AVÈTISMAN:</strong> Sagesse Solutions Administratives (SSA) pa avoka e pa bay konsèy legal. Nou kolekte done pèsonèl sèlman pou prepare aplikasyon yo. Pou ka konplèks, kontakte yon avoka imigrasyon. <a href="privacy.html">Règ Konfidansyalite</a> | <a href="legal.html">Avètisman Legal</a>',
    en:'<strong>DISCLAIMER:</strong> Sagesse Solutions Administratives (SSA) is not a law firm and does not provide legal advice. We collect personal data solely to prepare applications. For complex cases, consult an immigration attorney. <a href="privacy.html">Privacy Policy</a> | <a href="legal.html">Legal Disclaimer</a>',
    fr:'<strong>AVERTISSEMENT :</strong> Sagesse Solutions Administratives (SSA) n\'est pas un cabinet d\'avocats et ne fournit pas de conseils juridiques. Nous collectons les donn\u00e9es personnelles uniquement pour pr\u00e9parer les demandes. Pour les cas complexes, consultez un avocat en immigration. <a href="privacy.html">Confidentialit\u00e9</a> | <a href="legal.html">Avertissement L\u00e9gal</a>'
  },

  /* Header / Nav */
  header_phone:{ht:"Rele nou: ",en:"Call us: ",fr:"Appelez-nous : "},
  header_address:{ht:"P.O. Box 282, Pittsville, MD 21850, USA",en:"P.O. Box 282, Pittsville, MD 21850, USA",fr:"P.O. Box 282, Pittsville, MD 21850, USA"},
  site_tagline:{ht:"Sagesse Solutions Administratives",en:"Sagesse Solutions Administratives",fr:"Sagesse Solutions Administratives"},
  nav_home:{ht:"Akèy",en:"Home",fr:"Accueil"},
  nav_services:{ht:"Sèvis",en:"Services",fr:"Services"},
  nav_tps:{ht:"TPS Info",en:"TPS Info",fr:"Info TPS"},
  nav_about:{ht:"Konsènan Nou",en:"About Us",fr:"\u00c0 Propos"},
  nav_contact:{ht:"Kontakte Nou",en:"Contact Us",fr:"Contactez-Nous"},
  nav_privacy:{ht:"Règ Konfidansyalite",en:"Privacy Policy",fr:"Politique de Confidentialit\u00e9"},
  nav_legal:{ht:"Avètisman Legal",en:"Legal Disclaimer",fr:"Avertissement L\u00e9gal"},

  /* Hero */
  hero_badge:{ht:"Sèvis Imigrasyon Pwofesyonèl",en:"Professional Immigration Services",fr:"Services d'Immigration Professionnels"},
  hero_title:{
    ht:'Èd Ekspè pou <span class="highlight">Aplikasyon USCIS</span> ou yo',
    en:'Expert Help for Your <span class="highlight">USCIS Applications</span>',
    fr:'Aide Experte pour vos <span class="highlight">Demandes USCIS</span>'
  },
  hero_subtitle:{
    ht:"Sagesse Solutions Administratives (SSA) konekte imigran Ayisyen ak ekspè ki ka ede yo ak TPS, Kat Travay, Dokiman Vwayaj, Green Card, Sitwayènte, ak plis ankò. Nou la pou gide w nan chak etap.",
    en:"Sagesse Solutions Administratives (SSA) connects Haitian immigrants with experts who can help with TPS, Work Permits, Travel Documents, Green Cards, Citizenship, and more. We guide you every step of the way.",
    fr:"Sagesse Solutions Administratives (SSA) connecte les immigrants ha\u00eftiens avec des experts pour les aider avec le TPS, les permis de travail, les documents de voyage, les cartes vertes, la citoyennet\u00e9, et plus encore."
  },
  hero_btn_apply:{ht:"Kòmanse Aplikasyon W",en:"Start Your Application",fr:"Commencer Votre Demande"},
  hero_btn_call:{ht:"Rele Nou: (302) 290-8592",en:"Call Us: (302) 290-8592",fr:"Appelez-Nous: (302) 290-8592"},
  hero_btn_whatsapp:{ht:"WhatsApp Nou",en:"WhatsApp Us",fr:"WhatsApp"},
  stat_forms:{ht:"Fòm USCIS",en:"USCIS Forms",fr:"Formulaires USCIS"},
  stat_languages:{ht:"Lang Disponib",en:"Languages",fr:"Langues"},
  stat_dedication:{ht:"Dedikasyon",en:"Dedication",fr:"D\u00e9vouement"},

  /* TPS Alert */
  tps_alert_title:{ht:"\u26a0 DÈNYE NOUVÈL TPS AYITI \u2014 Avril 2026",en:"\u26a0 LATEST HAITI TPS NEWS \u2014 April 2026",fr:"\u26a0 DERNI\u00c8RES NOUVELLES TPS HA\u00cfTI \u2014 Avril 2026"},
  tps_alert_body:{
    ht:"Sekretè Sekirite Nasyonal la te deside mete fen nan deziyasyon TPS pou Ayiti nan dat 28 Novanm 2025. Men, yon lòd tribinal federal (Miot v. Trump, D.D.C.) bloke desizyon sa a. TPS Ayiti toujou an vigè pou kounye a. Tout EAD ki te gen dat ekspirasyon ki rive yo resevwa yon ekstansyon otomatik. Kou Siprèm lan gen odyans oral ki planifye pou fen Avril 2026.",
    en:"The Secretary of Homeland Security terminated Haiti's TPS designation on November 28, 2025. However, a federal court order (Miot v. Trump, D.D.C.) has blocked that decision. Haiti TPS remains in effect for now. All EADs with approaching expiration dates have received automatic extensions. The Supreme Court has oral arguments scheduled for late April 2026.",
    fr:"Le secr\u00e9taire \u00e0 la S\u00e9curit\u00e9 int\u00e9rieure a mis fin \u00e0 la d\u00e9signation TPS pour Ha\u00efti le 28 novembre 2025. Cependant, une ordonnance du tribunal f\u00e9d\u00e9ral (Miot v. Trump, D.D.C.) a bloqu\u00e9 cette d\u00e9cision. Le TPS Ha\u00efti reste en vigueur pour le moment."
  },
  tps_alert_date:{ht:"Dènye mizajou: Avril 2026 | Sous: USCIS.gov",en:"Last updated: April 2026 | Source: USCIS.gov",fr:"Derni\u00e8re mise \u00e0 jour : Avril 2026 | Source : USCIS.gov"},

  /* Services Section */
  services_title:{ht:"Sèvis Nou Yo",en:"Our Services",fr:"Nos Services"},
  services_subtitle:{ht:"Nou ede w ak tout kalite aplikasyon USCIS",en:"We help you with all types of USCIS applications",fr:"Nous vous aidons avec tous les types de demandes USCIS"},
  svc_tps:{ht:"TPS (Estati Pwoteksyon Tanporè)",en:"TPS (Temporary Protected Status)",fr:"TPS (Statut de Protection Temporaire)"},
  svc_tps_desc:{ht:"Prepare ak soumèt Fòm I-821 pou aplike oswa renouvle TPS ou.",en:"Prepare and submit Form I-821 to apply for or renew your TPS.",fr:"Pr\u00e9parer et soumettre le formulaire I-821 pour demander ou renouveler votre TPS."},
  svc_ead:{ht:"Kat Travay (EAD)",en:"Work Permit (EAD)",fr:"Permis de Travail (EAD)"},
  svc_ead_desc:{ht:"Prepare Fòm I-765 pou jwenn oswa renouvle Kat Travay ou.",en:"Prepare Form I-765 to get or renew your Work Permit.",fr:"Pr\u00e9parer le formulaire I-765 pour obtenir ou renouveler votre permis de travail."},
  svc_travel:{ht:"Dokiman Vwayaj",en:"Travel Document",fr:"Document de Voyage"},
  svc_travel_desc:{ht:"Prepare Fòm I-131 pou vwayaje deyò Etazini ak retounen legalman.",en:"Prepare Form I-131 to travel outside the U.S. and return legally.",fr:"Pr\u00e9parer le formulaire I-131 pour voyager hors des \u00c9tats-Unis et revenir l\u00e9galement."},
  svc_i130:{ht:"Petisyon Fanmi (I-130)",en:"Family Petition (I-130)",fr:"P\u00e9tition Familiale (I-130)"},
  svc_i130_desc:{ht:"Prepare Fòm I-130 pou fè petisyon pou yon manm fanmi.",en:"Prepare Form I-130 to petition for a family member.",fr:"Pr\u00e9parer le formulaire I-130 pour parrainer un membre de la famille."},
  svc_i485:{ht:"Ajisteman Estati (I-485)",en:"Adjustment of Status (I-485)",fr:"Ajustement de Statut (I-485)"},
  svc_i485_desc:{ht:"Prepare Fòm I-485 pou aplike pou rezidans pèmanan (Green Card).",en:"Prepare Form I-485 to apply for permanent residence (Green Card).",fr:"Pr\u00e9parer le formulaire I-485 pour demander la r\u00e9sidence permanente (Green Card)."},
  svc_n400:{ht:"Sitwayènte (N-400)",en:"Citizenship (N-400)",fr:"Citoyennet\u00e9 (N-400)"},
  svc_n400_desc:{ht:"Prepare Fòm N-400 pou aplike pou sitwayènte Ameriken.",en:"Prepare Form N-400 to apply for U.S. Citizenship.",fr:"Pr\u00e9parer le formulaire N-400 pour demander la citoyennet\u00e9 am\u00e9ricaine."},
  svc_translation:{ht:"Tradiksyon Dokiman",en:"Document Translation",fr:"Traduction de Documents"},
  svc_translation_desc:{ht:"Tradwi dokiman ofisyèl ou yo (Kreyòl, Anglè, Fransè) pou aplikasyon USCIS.",en:"Translate your official documents (Creole, English, French) for USCIS applications.",fr:"Traduire vos documents officiels (cr\u00e9ole, anglais, fran\u00e7ais) pour les demandes USCIS."},
  svc_submission:{ht:"Soumisyon ak Peman USCIS",en:"USCIS Submission & Payment",fr:"Soumission et Paiement USCIS"},
  svc_submission_desc:{ht:"Soumèt aplikasyon ak peman frè USCIS sou non ou.",en:"Submit applications and USCIS fee payments on your behalf.",fr:"Soumettre les demandes et les paiements de frais USCIS en votre nom."},
  svc_learn_more:{ht:"Aprann Plis \u2192",en:"Learn More \u2192",fr:"En Savoir Plus \u2192"},

  /* Services Detail Page */
  services_page_title:{ht:"Sèvis Nou Yo",en:"Our Services",fr:"Nos Services"},
  services_page_subtitle:{ht:"Nou ofri asistans konplè pou tout aplikasyon imigrasyon USCIS ou yo.",en:"We offer complete assistance for all your USCIS immigration applications.",fr:"Nous offrons une assistance compl\u00e8te pour toutes vos demandes d'immigration USCIS."},
  svc_detail_tps_title:{ht:"\ud83d\udccb Fòm I-821 \u2014 Temporary Protected Status (TPS)",en:"\ud83d\udccb Form I-821 \u2014 Temporary Protected Status (TPS)",fr:"\ud83d\udccb Formulaire I-821 \u2014 Statut de Protection Temporaire (TPS)"},
  svc_detail_tps_p1:{ht:"Temporary Protected Status (TPS) se yon estati tanporè ki pèmèt sitwayen Ayisyen ki deja nan Etazini rete legalman ak travay pandan yon peryòd ki detèmine. Pou elijib, ou dwe te nan Etazini depi dat USCIS mande a.",en:"Temporary Protected Status (TPS) is a temporary status that allows Haitian nationals already in the U.S. to stay legally and work for a designated period. To be eligible, you must have been in the U.S. since the date required by USCIS.",fr:"Le TPS est un statut temporaire qui permet aux ressortissants ha\u00eftiens d\u00e9j\u00e0 aux \u00c9tats-Unis de rester l\u00e9galement et de travailler pendant une p\u00e9riode d\u00e9termin\u00e9e."},
  svc_detail_tps_p2:{ht:"<strong>Sa nou fè pou ou:</strong> Nou prepare Fòm I-821 la, rasanble tout dokiman sipò yo, verifye tout bagay, epi soumèt aplikasyon an bay USCIS. Nou jere renouvèlman TPS tou.",en:"<strong>What we do for you:</strong> We prepare Form I-821, gather all supporting documents, verify everything, and submit the application to USCIS. We also handle TPS renewals.",fr:"<strong>Ce que nous faisons :</strong> Nous pr\u00e9parons le formulaire I-821, rassemblons tous les documents justificatifs, v\u00e9rifions tout et soumettons la demande \u00e0 l'USCIS."},
  svc_detail_tps_p3:{ht:"<strong>Dènye Nouvèl:</strong> TPS Ayiti aktyèlman an vigè gras ak yon lòd tribinal federal (Miot v. Trump). Kontakte nou pou konnen si w elijib.",en:"<strong>Latest News:</strong> Haiti TPS is currently in effect thanks to a federal court order (Miot v. Trump). Contact us to find out if you're eligible.",fr:"<strong>Derni\u00e8res nouvelles :</strong> Le TPS Ha\u00efti est actuellement en vigueur gr\u00e2ce \u00e0 une ordonnance du tribunal f\u00e9d\u00e9ral (Miot v. Trump)."},
  svc_detail_ead_title:{ht:"\ud83d\udcb3 Fòm I-765 \u2014 Employment Authorization Document (Kat Travay / EAD)",en:"\ud83d\udcb3 Form I-765 \u2014 Employment Authorization Document (EAD)",fr:"\ud83d\udcb3 Formulaire I-765 \u2014 Document d'Autorisation de Travail (EAD)"},
  svc_detail_ead_p1:{ht:"EAD la se kat travay ofisyèl la ki pèmèt ou travay legalman nan Etazini. Li nesesè pou tout moun ki gen TPS.",en:"The EAD is the official work permit that allows you to legally work in the United States. It is required for all TPS holders.",fr:"L'EAD est le permis de travail officiel qui vous permet de travailler l\u00e9galement aux \u00c9tats-Unis."},
  svc_detail_ead_p2:{ht:"<strong>Sa nou fè pou ou:</strong> Nou prepare Fòm I-765 la, rasanble foto paspò ki konfòm, verifye tout enfòmasyon, epi soumèt li bay USCIS.",en:"<strong>What we do for you:</strong> We prepare Form I-765, collect compliant passport photos, verify all information, and submit to USCIS.",fr:"<strong>Ce que nous faisons :</strong> Nous pr\u00e9parons le formulaire I-765, collectons les photos conformes et soumettons \u00e0 l'USCIS."},
  svc_detail_travel_title:{ht:"\u2708\ufe0f Fòm I-131 \u2014 Travel Document (Dokiman Vwayaj)",en:"\u2708\ufe0f Form I-131 \u2014 Travel Document",fr:"\u2708\ufe0f Formulaire I-131 \u2014 Document de Voyage"},
  svc_detail_travel_p1:{ht:"Fòm I-131 (Advance Parole) pèmèt ou vwayaje deyò Etazini ak retounen legalman. Ou dwe jwenn apwobasyon ANVAN ou vwayaje.",en:"Form I-131 (Advance Parole) allows you to travel outside the U.S. and return legally. You must get approval BEFORE traveling.",fr:"Le formulaire I-131 (Advance Parole) vous permet de voyager hors des \u00c9tats-Unis et de revenir l\u00e9galement."},
  svc_detail_travel_p2:{ht:"<strong>Sa nou fè pou ou:</strong> Nou prepare Fòm I-131 la ak tout dokiman sipò yo epi soumèt li bay USCIS.",en:"<strong>What we do for you:</strong> We prepare Form I-131 with all supporting documents and submit to USCIS.",fr:"<strong>Ce que nous faisons :</strong> Nous pr\u00e9parons le formulaire I-131 avec tous les documents justificatifs."},
  svc_detail_i130_title:{ht:"\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66 Fòm I-130 \u2014 Petition for Alien Relative",en:"\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66 Form I-130 \u2014 Petition for Alien Relative",fr:"\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66 Formulaire I-130 \u2014 P\u00e9tition pour Parent \u00c9tranger"},
  svc_detail_i130_p1:{ht:"Fòm I-130 pèmèt yon sitwayen Ameriken oswa yon rezidan pèmanan fè petisyon pou yon manm fanmi pwòch vin rezidan pèmanan.",en:"Form I-130 allows a U.S. citizen or permanent resident to petition for a close family member to become a permanent resident.",fr:"Le formulaire I-130 permet \u00e0 un citoyen am\u00e9ricain ou r\u00e9sident permanent de parrainer un membre de sa famille."},
  svc_detail_i485_title:{ht:"\ud83d\udce6 Fòm I-485 \u2014 Adjustment of Status (Green Card)",en:"\ud83d\udce6 Form I-485 \u2014 Adjustment of Status (Green Card)",fr:"\ud83d\udce6 Formulaire I-485 \u2014 Ajustement de Statut (Green Card)"},
  svc_detail_i485_p1:{ht:"Fòm I-485 pèmèt ou aplike pou vin rezidan pèmanan (jwenn Green Card) san ou pa bezwen kite Etazini.",en:"Form I-485 allows you to apply to become a permanent resident (get a Green Card) without leaving the U.S.",fr:"Le formulaire I-485 vous permet de demander la r\u00e9sidence permanente (Green Card) sans quitter les \u00c9tats-Unis."},
  svc_detail_n400_title:{ht:"\ud83c\uddfa\ud83c\uddf8 Fòm N-400 \u2014 Application for Naturalization (Sitwayènte)",en:"\ud83c\uddfa\ud83c\uddf8 Form N-400 \u2014 Application for Naturalization (Citizenship)",fr:"\ud83c\uddfa\ud83c\uddf8 Formulaire N-400 \u2014 Demande de Naturalisation (Citoyennet\u00e9)"},
  svc_detail_n400_p1:{ht:"Fòm N-400 se fòm ou ranpli pou aplike pou vin sitwayen Ameriken. Ou dwe gen Green Card pou omwen 5 an (oswa 3 an si ou marye ak yon sitwayen Ameriken).",en:"Form N-400 is the form to apply for U.S. Citizenship. You must have had a Green Card for at least 5 years (or 3 years if married to a U.S. citizen).",fr:"Le formulaire N-400 est utilis\u00e9 pour demander la citoyennet\u00e9 am\u00e9ricaine. Vous devez avoir une Green Card depuis au moins 5 ans."},
  svc_detail_translation_title:{ht:"\ud83d\udcc4 Tradiksyon Dokiman",en:"\ud83d\udcc4 Document Translation",fr:"\ud83d\udcc4 Traduction de Documents"},
  svc_detail_translation_p1:{ht:"Nou tradwi tout dokiman ofisyèl ou yo (Kreyòl \u2194 Anglè \u2194 Fransè) pou aplikasyon USCIS yo. Tradiksyon sètifye disponib.",en:"We translate all your official documents (Creole \u2194 English \u2194 French) for USCIS applications. Certified translations available.",fr:"Nous traduisons tous vos documents officiels (cr\u00e9ole \u2194 anglais \u2194 fran\u00e7ais) pour les demandes USCIS."},
  svc_detail_submission_title:{ht:"\ud83d\udce8 Soumisyon Dokiman ak Peman USCIS",en:"\ud83d\udce8 USCIS Document & Payment Submission",fr:"\ud83d\udce8 Soumission de Documents et Paiement USCIS"},
  svc_detail_submission_p1:{ht:"Nou soumèt aplikasyon ou ak tout dokiman sipò yo bay USCIS. Nou jere peman frè USCIS tou sou non ou.",en:"We submit your application and all supporting documents to USCIS. We also handle USCIS fee payments on your behalf.",fr:"Nous soumettons votre demande et tous les documents justificatifs \u00e0 l'USCIS. Nous g\u00e9rons \u00e9galement les paiements de frais."},

  /* TPS Info Page */
  tps_page_title:{ht:"Enfòmasyon sou TPS Ayiti",en:"Haiti TPS Information",fr:"Information sur le TPS Ha\u00efti"},
  tps_page_subtitle:{ht:"Tout sa ou bezwen konnen sou Temporary Protected Status (TPS) pou Ayiti.",en:"Everything you need to know about Temporary Protected Status (TPS) for Haiti.",fr:"Tout ce que vous devez savoir sur le TPS pour Ha\u00efti."},
  tps_current_title:{ht:"\u26a0 Estati Aktyèl TPS Ayiti \u2014 Avril 2026",en:"\u26a0 Current Haiti TPS Status \u2014 April 2026",fr:"\u26a0 Statut Actuel du TPS Ha\u00efti \u2014 Avril 2026"},
  tps_current_p1:{ht:"Nan dat 28 Novanm 2025, Sekretè Sekirite Nasyonal Kristi Noem te anonse fen deziyasyon TPS pou Ayiti, avèk yon dat tèminazon 3 Fevriye 2026.",en:"On November 28, 2025, DHS Secretary Kristi Noem announced the termination of Haiti's TPS designation, with a termination date of February 3, 2026.",fr:"Le 28 novembre 2025, la secr\u00e9taire du DHS Kristi Noem a annonc\u00e9 la fin de la d\u00e9signation TPS pour Ha\u00efti."},
  tps_current_p2:{ht:"<strong>Men, nan dat 2 Fevriye 2026,</strong> yon jij federal nan Tribinal Distri Washington D.C. te bay yon lòd pou bloke desizyon tèminazon an. Dosye a se: <em>Miot et al. v. Trump et al., No. 25-cv-02471-ACR (D.D.C.)</em>.",en:"<strong>However, on February 2, 2026,</strong> a federal judge in the D.C. District Court issued a stay blocking the termination. The case is: <em>Miot et al. v. Trump et al., No. 25-cv-02471-ACR (D.D.C.)</em>.",fr:"<strong>Cependant, le 2 f\u00e9vrier 2026,</strong> un juge f\u00e9d\u00e9ral a \u00e9mis une ordonnance bloquant la terminaison. L'affaire est : <em>Miot et al. v. Trump et al.</em>."},
  tps_current_p3:{ht:"<strong>Sa vle di:</strong> TPS Ayiti toujou an vigè pou kounye a gras ak lòd tribinal la. Tout EAD ki te gen dat ekspirasyon ki rive yo resevwa yon ekstansyon otomatik.",en:"<strong>This means:</strong> Haiti TPS remains in effect for now thanks to the court order. All EADs with approaching expiration dates have received automatic extensions.",fr:"<strong>Cela signifie :</strong> Le TPS Ha\u00efti reste en vigueur pour le moment gr\u00e2ce \u00e0 l'ordonnance du tribunal."},
  tps_current_p4:{ht:"Kou Siprèm lan gen odyans oral sou dosye sa a ki planifye pou fen Avril 2026.",en:"The Supreme Court has oral arguments scheduled for late April 2026.",fr:"La Cour supr\u00eame a des audiences orales pr\u00e9vues pour fin avril 2026."},
  tps_current_date:{ht:"Dènye mizajou: Avril 2026 | Sous: USCIS.gov",en:"Last updated: April 2026 | Source: USCIS.gov",fr:"Derni\u00e8re mise \u00e0 jour : Avril 2026 | Source : USCIS.gov"},
  tps_dates_title:{ht:"Dat Enpòtan TPS Ayiti",en:"Key Haiti TPS Dates",fr:"Dates Importantes du TPS Ha\u00efti"},
  tps_date1_title:{ht:"TPS Deziye Jiska",en:"TPS Designated Until",fr:"TPS D\u00e9sign\u00e9 Jusqu'au"},
  tps_date1_desc:{ht:"3 Fevriye 2026 (men bloke pa lòd tribinal \u2014 toujou an vigè)",en:"February 3, 2026 (blocked by court order \u2014 still in effect)",fr:"3 f\u00e9vrier 2026 (bloqu\u00e9 par ordonnance \u2014 toujours en vigueur)"},
  tps_date2_title:{ht:"Dat Rezidans Kontini",en:"Continuous Residence Date",fr:"Date de R\u00e9sidence Continue"},
  tps_date2_desc:{ht:"3 Jen 2024 \u2014 ou dwe te nan Etazini depi dat sa a",en:"June 3, 2024 \u2014 you must have been in the U.S. since this date",fr:"3 juin 2024 \u2014 vous devez avoir \u00e9t\u00e9 aux \u00c9.-U. depuis cette date"},
  tps_date3_title:{ht:"Prezans Fizik",en:"Physical Presence Date",fr:"Date de Pr\u00e9sence Physique"},
  tps_date3_desc:{ht:"Ou dwe te fizikman nan Etazini nan dat deziyasyon orijinal la",en:"You must have been physically present in the U.S. on the original designation date",fr:"Vous devez avoir \u00e9t\u00e9 physiquement pr\u00e9sent aux \u00c9.-U. \u00e0 la date de d\u00e9signation"},
  tps_eligibility_title:{ht:"Ki Moun ki Elijib pou TPS?",en:"Who is Eligible for TPS?",fr:"Qui est \u00e9ligible au TPS ?"},
  tps_elig1:{ht:"Ou se yon sitwayen Ayisyen (oswa yon moun san nasyonalite ki te abite Ayiti an dènye)",en:"You are a Haitian national (or a stateless person who last lived in Haiti)",fr:"Vous \u00eates un ressortissant ha\u00eftien (ou une personne apatride ayant v\u00e9cu en Ha\u00efti)"},
  tps_elig2:{ht:"Ou te nan Etazini depi dat USCIS mande a (3 Jen 2024 pou rezidans kontini)",en:"You have been in the U.S. since the USCIS required date (June 3, 2024 for continuous residence)",fr:"Vous \u00eates aux \u00c9.-U. depuis la date requise par l'USCIS (3 juin 2024)"},
  tps_elig3:{ht:"Ou pa gen okenn kondanasyon kriminèl grav",en:"You have no serious criminal convictions",fr:"Vous n'avez aucune condamnation p\u00e9nale grave"},
  tps_elig4:{ht:"Ou ranpli tout fòm nesesè yo ak tout dokiman sipò yo",en:"You complete all required forms and submit all supporting documents",fr:"Vous remplissez tous les formulaires requis et soumettez les documents justificatifs"},
  tps_faq_title:{ht:"Kesyon Yo Mande Souvan (FAQ)",en:"Frequently Asked Questions (FAQ)",fr:"Questions Fr\u00e9quemment Pos\u00e9es (FAQ)"},

  /* FAQ items */
  faq1_q:{ht:"Èske TPS Ayiti toujou an vigè an 2026?",en:"Is Haiti TPS still in effect in 2026?",fr:"Le TPS Ha\u00efti est-il toujours en vigueur en 2026 ?"},
  faq1_a:{ht:"Wi, TPS Ayiti toujou an vigè gras ak yon lòd tribinal federal (Miot v. Trump). Kou Siprèm lan gen odyans oral ki planifye pou fen Avril 2026.",en:"Yes, Haiti TPS remains in effect thanks to a federal court order (Miot v. Trump). The Supreme Court has oral arguments scheduled for late April 2026.",fr:"Oui, le TPS Ha\u00efti reste en vigueur gr\u00e2ce \u00e0 une ordonnance du tribunal f\u00e9d\u00e9ral (Miot v. Trump)."},
  faq2_q:{ht:"Èske mwen ka travay ak TPS?",en:"Can I work with TPS?",fr:"Puis-je travailler avec le TPS ?"},
  faq2_a:{ht:"Wi, lè ou gen TPS ou ka aplike pou yon EAD (Kat Travay) avèk Fòm I-765. EAD la pèmèt ou travay legalman nan Etazini.",en:"Yes, with TPS you can apply for an EAD (Work Permit) using Form I-765. The EAD allows you to legally work in the U.S.",fr:"Oui, avec le TPS vous pouvez demander un EAD (permis de travail) avec le formulaire I-765."},
  faq3_q:{ht:"Èske mwen ka vwayaje deyò Etazini avèk TPS?",en:"Can I travel outside the U.S. with TPS?",fr:"Puis-je voyager hors des \u00c9.-U. avec le TPS ?"},
  faq3_a:{ht:"Wi, men ou dwe aplike pou yon Dokiman Vwayaj (Fòm I-131 / Advance Parole) ANVAN ou vwayaje. Si ou kite Etazini san apwobasyon, ou ka pèdi estati TPS ou.",en:"Yes, but you must apply for a Travel Document (Form I-131 / Advance Parole) BEFORE traveling. If you leave the U.S. without approval, you may lose your TPS status.",fr:"Oui, mais vous devez demander un document de voyage (formulaire I-131) AVANT de voyager."},
  faq4_q:{ht:"Konbyen sa koute pou aplike pou TPS?",en:"How much does it cost to apply for TPS?",fr:"Combien co\u00fbte la demande de TPS ?"},
  faq4_a:{ht:"Frè USCIS yo ka chanje. Aktyèlman gen yon frè pou I-821 ak yon frè separeman pou I-765 (EAD). Kontakte nou pou konnen frè aktyèl yo. Remake: Depi 2026, USCIS pa aksepte chèk ankò \u2014 sèlman peman elektwonik oswa money order.",en:"USCIS fees change periodically. There is a fee for I-821 and a separate fee for I-765 (EAD). Contact us for current fees. Note: Since 2026, USCIS no longer accepts checks \u2014 only electronic payments or money orders.",fr:"Les frais USCIS changent p\u00e9riodiquement. Contactez-nous pour les frais actuels. Note : Depuis 2026, l'USCIS n'accepte plus les ch\u00e8ques."},
  faq5_q:{ht:"Èske SSA se yon kabinè avoka?",en:"Is SSA a law firm?",fr:"SSA est-il un cabinet d'avocats ?"},
  faq5_a:{ht:"Non. Sagesse Solutions Administratives (SSA) pa yon kabinè avoka epi pa bay konsèy legal. Nou se yon sant sèvis administratif ki ede kliyan prepare ak soumèt fòm imigrasyon. Pou ka konplèks oswa kesyon legal, nou rekòmande pou w kontakte yon avoka imigrasyon ki gen lisans.",en:"No. Sagesse Solutions Administratives (SSA) is not a law firm and does not provide legal advice. We are an administrative service center that helps clients prepare and submit immigration forms. For complex cases or legal questions, we recommend consulting a licensed immigration attorney.",fr:"Non. SSA n'est pas un cabinet d'avocats et ne fournit pas de conseils juridiques. Pour les cas complexes, consultez un avocat en immigration."},
  faq6_q:{ht:"Ki diferans ant TPS ak rezidans pèmanan (Green Card)?",en:"What is the difference between TPS and permanent residence (Green Card)?",fr:"Quelle est la diff\u00e9rence entre le TPS et la r\u00e9sidence permanente ?"},
  faq6_a:{ht:"TPS se yon estati tanporè \u2014 li pa mennen dirèkteman a Green Card. Green Card bay rezidans pèmanan. Ou ka aplike pou Green Card separeman si w elijib (pa egzanp, atravè yon petisyon fanmi I-130 + I-485).",en:"TPS is a temporary status \u2014 it does not directly lead to a Green Card. A Green Card provides permanent residence. You can apply for a Green Card separately if eligible (e.g., through a family petition I-130 + I-485).",fr:"Le TPS est un statut temporaire \u2014 il ne m\u00e8ne pas directement \u00e0 une Green Card. Vous pouvez demander une Green Card s\u00e9par\u00e9ment si \u00e9ligible."},

  /* About Page */
  about_page_title:{ht:"Konsènan Sagesse Solutions Administratives",en:"About Sagesse Solutions Administratives",fr:"\u00c0 Propos de Sagesse Solutions Administratives"},
  about_page_subtitle:{ht:"Aprann plis sou misyon nou, valè nou, ak angajman nou pou kominote Ayisyen an.",en:"Learn more about our mission, values, and commitment to the Haitian community.",fr:"En savoir plus sur notre mission, nos valeurs et notre engagement envers la communaut\u00e9 ha\u00eftienne."},
  about_mission_title:{ht:"Misyon Nou",en:"Our Mission",fr:"Notre Mission"},
  about_mission_p1:{ht:"Sagesse Solutions Administratives (SSA) se yon sant sèvis konsiltasyon ki fonde ak yon sèl objektif: konekte imigran Ayisyen ak ekspè ki ka ede yo navige nan sistèm imigrasyon Ameriken an avèk konfyans, presizyon, ak diyite.",en:"Sagesse Solutions Administratives (SSA) is a consultancy service center founded with a single goal: connecting Haitian immigrants with experts who can help them navigate the U.S. immigration system with confidence, precision, and dignity.",fr:"SSA est un centre de services de conseil fond\u00e9 avec un seul objectif : connecter les immigrants ha\u00eftiens avec des experts."},
  about_mission_p2:{ht:"Nou konnen kijan pwosesis imigrasyon an ka konplike ak estrèsan. Se poutèt sa nou la \u2014 pou fè tout bagay pi senp pou ou.",en:"We know how complicated and stressful the immigration process can be. That's why we're here \u2014 to make everything simpler for you.",fr:"Nous savons combien le processus d'immigration peut \u00eatre compliqu\u00e9 et stressant."},
  about_mission_p3:{ht:"Nou pa avoka. Nou pa bay konsèy legal. Men nou gen eksperyans nan prepare ak soumèt aplikasyon imigrasyon yo kòrèkteman ak pwofesyonalis. Pou ka konplèks oswa kesyon legal, nou toujou rekòmande pou w kontakte yon avoka imigrasyon ki gen lisans.",en:"We are not lawyers. We do not provide legal advice. But we have experience preparing and submitting immigration applications correctly and professionally. For complex cases or legal questions, we always recommend contacting a licensed immigration attorney.",fr:"Nous ne sommes pas avocats. Nous ne fournissons pas de conseils juridiques. Pour les cas complexes, consultez un avocat."},
  about_values_title:{ht:"Valè Nou Yo",en:"Our Values",fr:"Nos Valeurs"},
  value1:{ht:"Entegrite \u2014 Nou travay ak onètete ak transparans nan tout sa nou fè.",en:"Integrity \u2014 We work with honesty and transparency in everything we do.",fr:"Int\u00e9grit\u00e9 \u2014 Nous travaillons avec honn\u00eatet\u00e9 et transparence."},
  value2:{ht:"Presizyon \u2014 Nou verifye chak detay nan aplikasyon w pou evite erè.",en:"Precision \u2014 We verify every detail in your application to avoid errors.",fr:"Pr\u00e9cision \u2014 Nous v\u00e9rifions chaque d\u00e9tail pour \u00e9viter les erreurs."},
  value3:{ht:"Respè \u2014 Nou trete chak kliyan ak diyite ak respè.",en:"Respect \u2014 We treat every client with dignity and respect.",fr:"Respect \u2014 Nous traitons chaque client avec dignit\u00e9 et respect."},
  value4:{ht:"Aksesibilite \u2014 Nou sèvi w nan lang ou: Kreyòl, Anglè, ak Fransè.",en:"Accessibility \u2014 We serve you in your language: Creole, English, and French.",fr:"Accessibilit\u00e9 \u2014 Nous vous servons dans votre langue."},
  value5:{ht:"Konfidansyalite \u2014 Done pèsonèl ou an pwoteje e itilize sèlman pou aplikasyon w.",en:"Confidentiality \u2014 Your personal data is protected and used only for your application.",fr:"Confidentialit\u00e9 \u2014 Vos donn\u00e9es personnelles sont prot\u00e9g\u00e9es."},
  about_do_title:{ht:"Sa Nou Fè",en:"What We Do",fr:"Ce Que Nous Faisons"},
  about_dont_title:{ht:"Sa Nou PA Fè",en:"What We DON'T Do",fr:"Ce Que Nous NE Faisons PAS"},
  about_do1:{ht:"Prepare fòm imigrasyon USCIS",en:"Prepare USCIS immigration forms",fr:"Pr\u00e9parer les formulaires USCIS"},
  about_do2:{ht:"Rasanble dokiman sipò",en:"Gather supporting documents",fr:"Rassembler les documents justificatifs"},
  about_do3:{ht:"Tradwi dokiman ofisyèl",en:"Translate official documents",fr:"Traduire les documents officiels"},
  about_do4:{ht:"Soumèt aplikasyon bay USCIS",en:"Submit applications to USCIS",fr:"Soumettre les demandes \u00e0 l'USCIS"},
  about_do5:{ht:"Jere peman frè USCIS",en:"Handle USCIS fee payments",fr:"G\u00e9rer les paiements de frais USCIS"},
  about_dont1:{ht:"Bay konsèy legal",en:"Provide legal advice",fr:"Fournir des conseils juridiques"},
  about_dont2:{ht:"Reprezante ou nan tribinal",en:"Represent you in court",fr:"Vous repr\u00e9senter au tribunal"},
  about_dont3:{ht:"Garanti apwobasyon USCIS",en:"Guarantee USCIS approval",fr:"Garantir l'approbation de l'USCIS"},
  about_dont4:{ht:"Ranplase yon avoka imigrasyon",en:"Replace an immigration attorney",fr:"Remplacer un avocat en immigration"},

  /* Contact Page */
  contact_page_title:{ht:"Kontakte Nou",en:"Contact Us",fr:"Contactez-Nous"},
  contact_page_subtitle:{ht:"Nou la pou ede w. Kontakte nou pa telefòn, WhatsApp, oswa ranpli fòm sa a.",en:"We're here to help. Contact us by phone, WhatsApp, or fill out this form.",fr:"Nous sommes l\u00e0 pour vous aider. Contactez-nous par t\u00e9l\u00e9phone, WhatsApp ou remplissez ce formulaire."},
  contact_info_title:{ht:"Enfòmasyon Kontak",en:"Contact Information",fr:"Coordonn\u00e9es"},
  contact_phone_label:{ht:"Telefòn / WhatsApp",en:"Phone / WhatsApp",fr:"T\u00e9l\u00e9phone / WhatsApp"},
  contact_address_label:{ht:"Adrès Postal",en:"Mailing Address",fr:"Adresse Postale"},
  contact_hours_label:{ht:"Lè Travay",en:"Business Hours",fr:"Heures d'Ouverture"},
  contact_hours_value:{ht:"Lendi - Vandredi: 9:00 AM - 6:00 PM EST\nSamdi: 10:00 AM - 2:00 PM EST",en:"Monday - Friday: 9:00 AM - 6:00 PM EST\nSaturday: 10:00 AM - 2:00 PM EST",fr:"Lundi - Vendredi : 9h00 - 18h00 EST\nSamedi : 10h00 - 14h00 EST"},
  contact_privacy_note:{ht:"Tout enfòmasyon ou pataje ak nou konfidansyèl. Nou itilize done w sèlman pou prepare aplikasyon USCIS ou yo.",en:"All information you share with us is confidential. We use your data solely to prepare your USCIS applications.",fr:"Toutes les informations que vous partagez sont confidentielles."},
  contact_form_title:{ht:"Voye yon Mesaj",en:"Send a Message",fr:"Envoyer un Message"},
  form_name:{ht:"Non Konplè",en:"Full Name",fr:"Nom Complet"},
  form_phone:{ht:"Nimewo Telefòn / WhatsApp",en:"Phone / WhatsApp Number",fr:"Num\u00e9ro de T\u00e9l\u00e9phone / WhatsApp"},
  form_email:{ht:"Adrès Email",en:"Email Address",fr:"Adresse Email"},
  form_service:{ht:"Sèvis ou Bezwen",en:"Service You Need",fr:"Service Dont Vous Avez Besoin"},
  form_service_select:{ht:"-- Chwazi yon Sèvis --",en:"-- Select a Service --",fr:"-- Choisir un Service --"},
  form_message:{ht:"Mesaj ou",en:"Your Message",fr:"Votre Message"},
  form_consent:{ht:"Mwen dakò pou SSA kolekte enfòmasyon mwen pou prepare aplikasyon imigrasyon mwen. Mwen konprann SSA pa yon kabinè avoka.",en:"I agree for SSA to collect my information to prepare my immigration application. I understand SSA is not a law firm.",fr:"J'accepte que SSA collecte mes informations pour pr\u00e9parer ma demande d'immigration. Je comprends que SSA n'est pas un cabinet d'avocats."},
  form_submit:{ht:"Voye Mesaj",en:"Send Message",fr:"Envoyer le Message"},
  form_success_msg:{ht:"Mèsi! Nou resevwa mesaj ou. Nap kontakte w byento.",en:"Thank you! We received your message. We will contact you soon.",fr:"Merci ! Nous avons re\u00e7u votre message. Nous vous contacterons bient\u00f4t."},

  /* Privacy Policy Page */
  privacy_page_title:{ht:"Règ Konfidansyalite",en:"Privacy Policy",fr:"Politique de Confidentialit\u00e9"},
  privacy_page_subtitle:{ht:"Kijan nou kolekte, itilize, ak pwoteje enfòmasyon pèsonèl ou.",en:"How we collect, use, and protect your personal information.",fr:"Comment nous collectons, utilisons et prot\u00e9geons vos informations personnelles."},
  privacy_updated:{ht:"Dènye mizajou: Avril 2026",en:"Last updated: April 2026",fr:"Derni\u00e8re mise \u00e0 jour : Avril 2026"},

  /* Legal Disclaimer Page */
  legal_page_title:{ht:"Avètisman Legal",en:"Legal Disclaimer",fr:"Avertissement L\u00e9gal"},
  legal_page_subtitle:{ht:"Tanpri li avètisman legal sa a avèk atansyon anvan ou itilize sèvis nou yo.",en:"Please read this legal disclaimer carefully before using our services.",fr:"Veuillez lire cet avertissement l\u00e9gal avant d'utiliser nos services."},
  legal_updated:{ht:"Dènye mizajou: Avril 2026",en:"Last updated: April 2026",fr:"Derni\u00e8re mise \u00e0 jour : Avril 2026"},

  /* Trivia Section */
  trivia_title:{ht:"Teste Konesans Ou sou Imigrasyon!",en:"Test Your Immigration Knowledge!",fr:"Testez vos Connaissances en Immigration !"},
  trivia_subtitle:{ht:"Jwe jwèt trivia sa a pou aprann plis sou règ ak fòm USCIS yo.",en:"Play this trivia game to learn more about USCIS rules and forms.",fr:"Jouez \u00e0 ce quiz pour en apprendre davantage sur les r\u00e8gles et formulaires USCIS."},
  trivia_start:{ht:"Kòmanse Jwèt la",en:"Start the Game",fr:"Commencer le Jeu"},
  trivia_next:{ht:"Kesyon Swivan \u2192",en:"Next Question \u2192",fr:"Question Suivante \u2192"},
  trivia_finish:{ht:"Wè Rezilta",en:"See Results",fr:"Voir les R\u00e9sultats"},
  trivia_score_title:{ht:"Rezilta Ou!",en:"Your Score!",fr:"Votre Score !"},
  trivia_play_again:{ht:"Jwe Ankò",en:"Play Again",fr:"Rejouer"},
  trivia_score_great:{ht:"Ekselan! Ou konnen anpil sou imigrasyon!",en:"Excellent! You know a lot about immigration!",fr:"Excellent ! Vous connaissez bien l'immigration !"},
  trivia_score_good:{ht:"Bon travay! Men gen kèk bagay ou ka aprann ankò.",en:"Good job! But there are some things you can still learn.",fr:"Bon travail ! Mais il reste des choses \u00e0 apprendre."},
  trivia_score_low:{ht:"Pa dekouraje! Kontakte nou pou n ka ede w konprann pwosesis la pi byen.",en:"Don't be discouraged! Contact us so we can help you better understand the process.",fr:"Ne vous d\u00e9couragez pas ! Contactez-nous pour mieux comprendre."},

  /* CTA */
  cta_title:{ht:"Bezwen Èd ak Aplikasyon USCIS ou?",en:"Need Help with Your USCIS Application?",fr:"Besoin d'Aide avec votre Demande USCIS ?"},
  cta_subtitle:{ht:"Kontakte nou jodi a epi kite ekspè nou yo ede w navige nan pwosesis imigrasyon an.",en:"Contact us today and let our experts help you navigate the immigration process.",fr:"Contactez-nous aujourd'hui et laissez nos experts vous guider."},

  /* Footer */
  footer_about:{ht:"Sagesse Solutions Administratives (SSA) se yon sant sèvis konsiltasyon ki konekte imigran Ayisyen ak ekspè pou ede yo ak aplikasyon USCIS yo.",en:"Sagesse Solutions Administratives (SSA) is a consultancy service center connecting Haitian immigrants with experts for USCIS application support.",fr:"SSA est un centre de services de conseil connectant les immigrants ha\u00eftiens avec des experts pour l'aide aux demandes USCIS."},
  footer_links_title:{ht:"Lyen Rapid",en:"Quick Links",fr:"Liens Rapides"},
  footer_services_title:{ht:"Sèvis Nou Yo",en:"Our Services",fr:"Nos Services"},
  footer_legal_title:{ht:"Legal",en:"Legal",fr:"L\u00e9gal"},
  footer_translation:{ht:"Tradiksyon",en:"Translation",fr:"Traduction"},
  footer_disclaimer:{ht:'<strong>AVÈTISMAN LEGAL:</strong> Sagesse Solutions Administratives (SSA) pa yon kabinè avoka epi pa bay konsèy legal. Nou kolekte done pèsonèl sèlman pou prepare aplikasyon imigrasyon yo. Pou ka konplèks, kontakte yon avoka imigrasyon ki gen lisans. <a href="privacy.html" style="color:var(--ht-gold)">Règ Konfidansyalite</a> | <a href="legal.html" style="color:var(--ht-gold)">Avètisman Legal</a>',en:'<strong>LEGAL DISCLAIMER:</strong> Sagesse Solutions Administratives (SSA) is not a law firm and does not provide legal advice. We collect personal data solely to prepare immigration applications. For complex cases, consult a licensed immigration attorney. <a href="privacy.html" style="color:var(--ht-gold)">Privacy Policy</a> | <a href="legal.html" style="color:var(--ht-gold)">Legal Disclaimer</a>',fr:'<strong>AVERTISSEMENT L\u00c9GAL :</strong> SSA n\'est pas un cabinet d\'avocats. Nous collectons les donn\u00e9es personnelles uniquement pour pr\u00e9parer les demandes. <a href="privacy.html" style="color:var(--ht-gold)">Confidentialit\u00e9</a> | <a href="legal.html" style="color:var(--ht-gold)">Avertissement</a>'},
  footer_copy:{ht:"\u00a9 2026 Sagesse Solutions Administratives (SSA). Tout dwa rezève.",en:"\u00a9 2026 Sagesse Solutions Administratives (SSA). All rights reserved.",fr:"\u00a9 2026 Sagesse Solutions Administratives (SSA). Tous droits r\u00e9serv\u00e9s."},
  no_content:{ht:"Pa gen kontni disponib pou kounye a.",en:"No content available at this time.",fr:"Aucun contenu disponible pour le moment."}
};

/* ---- Current language ---- */
var currentLang = localStorage.getItem('haititps_lang') || 'ht';

/* ---- Apply translations ---- */
function applyTranslations(lang) {
  currentLang = lang;
  localStorage.setItem('haititps_lang', lang);

  /* Update all elements with data-i18n */
  var els = document.querySelectorAll('[data-i18n]');
  for (var i = 0; i < els.length; i++) {
    var key = els[i].getAttribute('data-i18n');
    if (T[key] && T[key][lang] !== undefined) {
      els[i].innerHTML = T[key][lang];
    }
  }

  /* Update lang buttons */
  var btns = document.querySelectorAll('.lang-btn');
  for (var j = 0; j < btns.length; j++) {
    btns[j].classList.remove('active');
    if (btns[j].getAttribute('data-lang') === lang) {
      btns[j].classList.add('active');
    }
  }

  /* Update HTML lang attribute */
  document.documentElement.setAttribute('lang', lang === 'ht' ? 'ht' : (lang === 'fr' ? 'fr' : 'en'));

  /* Emit custom event so trivia can react */
  var evt;
  try { evt = new CustomEvent('langchange', {detail:{lang:lang}}); }
  catch(e) { evt = document.createEvent('CustomEvent'); evt.initCustomEvent('langchange',true,true,{lang:lang}); }
  document.dispatchEvent(evt);
}

/* ---- Set language (called by buttons) ---- */
function setLang(lang) {
  applyTranslations(lang);
}

/* ---- Get current language ---- */
function getLang() {
  return currentLang;
}

/* ---- Get translation by key ---- */
function t(key, lang) {
  lang = lang || currentLang;
  if (T[key] && T[key][lang] !== undefined) return T[key][lang];
  if (T[key] && T[key]['ht'] !== undefined) return T[key]['ht'];
  return key;
}

/* ============================================================
   EXPOSE GLOBALLY — This is the critical fix.
   Without this, onclick="window.HT_i18n.setLang('en')" fails.
   ============================================================ */
window.HT_i18n = {
  setLang: setLang,
  getLang: getLang,
  t: t,
  apply: applyTranslations
};

/* ---- Auto-apply on DOM ready ---- */
function init() {
  applyTranslations(currentLang);
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

})();
