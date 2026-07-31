
// Language Toggle
const langBtns = document.querySelectorAll('.lang-btn');
const translatableElements = document.querySelectorAll('[data-de]');

// Load saved language
const savedLang = localStorage.getItem('language') || 'de';
langBtns.forEach(btn => {
    if (btn.dataset.lang === savedLang) {
        btn.classList.add('active');
    } else {
        btn.classList.remove('active');
    }
});

if (savedLang === 'uz') {
    translatableElements.forEach(el => {
        if (el.dataset.uz) {
            el.textContent = el.dataset.uz;
        }
    });
}

langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;

        langBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        localStorage.setItem('language', lang);

        translatableElements.forEach(el => {
            if (el.dataset[lang]) {
                el.textContent = el.dataset[lang];
            }
        });
    });
});


/* ===== i18n DICTIONARY (DE & UZ) ===== */
const I18N = {
    de: {
        'meta.title': 'EuroLink Consulting Group - Zukunft beginnt hier',
        'meta.description': 'Professionelle Beratung für Bildung, Ausbildung, Karriere und Migration nach Europa. Sprachkurse, Au-pair, FSJ/BFD/FÖJ, Ausbildung, Studium und Direkteinstieg für Fachkräfte.',
        'nav.home': 'Home', 'nav.about': 'Über uns', 'nav.structure': 'Struktur', 'nav.team': 'Team', 'nav.services': 'Unsere Dienstleistungen', 'nav.germany': 'Weg nach Europa', 'nav.results': 'Resultate', 'nav.contact': 'Kontakt',
        'hero.tag': 'Premium Consulting', 'hero.title': 'EuroLink Consulting Group (ECG)', 'hero.lead': 'Professionelle Beratung für Bildung, Ausbildung, Karriere und Migration nach Europa. Sprachkurse, Au-pair, FSJ/BFD/FÖJ, Ausbildung, Studium und Direkteinstieg für Fachkräfte.',
        'cta.start': 'Beratung starten', 'cta.learn': 'Mehr erfahren',
        'about.tag': 'ÜBER UNS', 'about.title': 'EuroLink Consulting Group', 'about.subtitle': 'Seit Mai 2022 begleiten wir ambitionierte Menschen auf ihrem Weg nach Europa',
        'about.cards.info.title': 'Kurzinfo', 'about.cards.info.text': '„EuroLink CG“ ist seit Mai 2022 in Betrieb. Hauptsitz Taschkent. Online/offline Sprachkurse (Deutsch, Englisch, Russisch, Chinesisch, Koreanisch) und IT Web Developing. Unterstützung bei Stipendien, Karriere, Forschung.',
        'about.cards.edu.title': 'Bildungsprogramme', 'about.cards.edu.text': 'Sprachkurse (Goethe, telc, TestDaF usw.), Studienkolleg, Bachelor, Master, PhD in Deutschland/Europa.',
        'about.cards.career.title': 'Karriere & Programme', 'about.cards.career.text': 'Au-pair, FSJ/BFD/FÖJ, Ausbildung, Direkteinstieg (IT, Medizin, Technik, KI u.a.).',
        'about.cards.full.title': 'Full-Service', 'about.cards.full.text': 'Dokumente, Botschaftstermine, Versicherung, Wohnung, Flug, Transport, Integration & Community.',
        'structure.tag': 'STRUKTUR', 'structure.title': 'Struktur von EuroLink', 'structure.subtitle': 'Front-Office, Status-Quo-Analyse, Back-Office, Strategie, Coworking (Steuerung & Monitoring)',
        'structure.cards.company.badge': 'Company', 'structure.cards.company.title': 'ECG Überblick', 'structure.cards.company.text': 'Alle Strukturen wirken je nach Projektumfang mit: Bildungszentrum, Recht, Marketing, Übersetzung, Marktanalyse, Kooperationen, Programmierung/Design, Buchhaltung & Partner.',
        'structure.cards.team.badge': 'Teamwork', 'structure.cards.team.title': 'Prozess & Qualität', 'structure.cards.team.text': 'Kontrollen & Berichte durch Gründer und Rechtsabteilung. Fokus auf Ergebnis, Qualität und Geschwindigkeit.',
        'team.tag': 'UNSER TEAM', 'team.title': 'Führung & Expertise', 'team.subtitle': 'Erfahrene Experten mit internationaler Perspektive', 'team.ceo.role': 'Gründer & CEO', 'team.ceo.text': 'Qualitäts- und Strategiemanager, Controller von Automatisierung und Marktanalyse. IT System Manager bei addOn Solution GmbH.',
        'team.cof1.title': 'Elbek Shomurodov — Gründer', 'team.cof1.text': 'Operations & Digitalisierung, juristische/logistische Prozesse, Hauswirtschaft. IT-Security Student (Osh/Samarkand).',
        'team.cof2.title': 'Murodjon Shomurodov — Gründer', 'team.cof2.text': 'Strategie & internationale Beziehungen, Audit, HR, Transformation. Junior Analyst BDU; M.Sc Universität Hamburg.',
        'team.exp1.text': 'IT-Experte & Mentor, Senior Consultant für Interviews & Networking. IT Engineer in Legal Digital Transformation bei POELLATH+ (München).',
        'team.exp2.text': 'Studienkolleg/Sprachkurse, Integration & Bildung, psychologische Methoden. Biotech/Medizin (Leipzig).',
        'team.exp3.text': 'Medizin-Experte & Mentor. Zahnarzt bei Pezeshkpour Zahnarztpraxis (Aachen).',
        'team.exp4.text': 'B2B & FSJ/BFD/FÖJ mentor, 3y Klinikum Stuttgart, Manager „E-Bike Laden Stuttgart“.',
        'team.t1.text': 'Deutschlehrer & Mentor, Lehrplanungsberater, C1; Erfahrungen in Würzburg, Bremen, Stuttgart. Student der Weltsprachenuni, Taschkent.',
        'team.t2.text': 'Lehrerin DE/EN/RU, 3y Erfahrung, C1, Koordinatorin Übersetzungstheorie & Stilistik. Studentin der Weltsprachenuni, Taschkent.',
        'services.tag': 'UNSERE DIENSTLEISTUNGEN', 'services.title': 'Akademische & Beratungs-Leistungen', 'services.subtitle': 'Sprachzertifikate (IELTS, TestDaF, telc, HSK, TOPIK, TRKI), IT-Kurslar, Au-pair, FSJ/BFD/FÖJ, Ausbildung, Studium, Visa & mehr',
        'services.c1.title': 'Sprach- & IT-Kurse', 'services.c1.text': 'Deutsch/Englisch/Russisch/Chinesisch\n/Koreanisch, IELTS, TestDaF, telc, HSK, TOPIK, TRKI, Full-Stack, Webdesign, Marketing/SMM.',
        'services.c2.title': 'Au-pair', 'services.c2.text': 'Agentur-Coaching, Familien-Interviews, Botschaftsvorbereitung.',
        'services.c3.title': 'FSJ/BFD/FÖJ', 'services.c3.text': '6–18 Monate Einsatz, Stipendium, Unterkunft, ÖPNV je nach Träger.',
        'services.c4.title': 'Ausbildung', 'services.c4.text': 'Mit B1–B2 Studium+Arbeit (2–4 Jahre), Vergütung, Übernahmechancen.',
        'services.c5.title': 'Studium', 'services.c5.text': 'Uni-Assist, dual, Stipendien: DAAD, Erasmus, KAS, Deutschlandstipendium u.a.',
        'services.c6.title': 'Fachkräfte', 'services.c6.text': 'Arbeitsvisum mit B2 oder 6 Monate Job-Seeker in IT/Medizin/Tech/AI.',
        'services.c7.title': 'Visa & Legal', 'services.c7.text': 'Visa (Sprachkurs/Study/Business/Medical/Travel), Botschaftscoaching.',
        'services.c8.title': 'Support', 'services.c8.text': 'Versicherung, Wohnung, Flug, Transfer, Job, Community.',
        'services.c9.title': 'B2B/B2C', 'services.c9.text': 'LKW & Logistik, Immobilien (TR/DE), Med-Tourismus Marketing, Export.',
        'services.c10.title': 'Praktikum & Research', 'services.c10.text': 'Bezahlte Praktika, Grants und Forschungsprojekte für 18+.',
        'germany.tag': 'WEG NACH EUROPA', 'germany.title': 'Weg nach Europa', 'germany.subtitle': 'Ausbildung | Au-pair | FSJ/BFD/FÖJ | Sprachkurs | Studium | Direkteinstieg',
        'germany.s1.title': '1) Was ist Ausbildung?', 'germany.s1.text': 'Dualer Weg: 2–3 Tage Betrieb + 1–2 Tage Schule. Vorteile: Vergütung, Übernahmechancen, B1–B2 genügt, 11-Klassen-Abschluss möglich. Start meist Aug/Sept – früh bewerben.',
        'germany.s2.title': '2) Au-pair Programm', 'germany.s2.text': '18–26 Jahre, Grunddeutsch; Unterkunft, Verpflegung, Taschengeld. 30–35 Std/Woche, 6–12(18) Monate, Sprachkurs & Kultur.',
        'germany.s3.title': '3) Freiwilligendienste (FSJ/FÖJ/BFD)', 'germany.s3.text': '6–18 Monate; sozial/ökologisch. 300–560€; teils Unterkunft/ÖPNV. FSJ/FÖJ ≤27; BFD ohne Altersgrenze.',
        'germany.s4.title': '4) Sprachkurs in Deutschland', 'germany.s4.text': 'Mind. 6 Monate intensiv (≥18 Std/Woche), Vertrag, Übersetzungen, Sperrkonto, Versicherung, CV & Motivation. Weiter: Ausbildung/Studium.',
        'germany.s5.title': '5) Studium (Bachelor/Master/PhD)', 'germany.s5.text': 'uni-assist; DE-Programme meist C1, englisch mit IELTS. Öffentliche Unis oft gebührenfrei; viele Stipendien (DAAD, Erasmus...).',
        'germany.s6.title': '6) Direkteinstieg als Fachkraft', 'germany.s6.text': 'Mit B2 + Vertrag Arbeitsvisum, sonst Job-Seeker (6 Monate). Bedarf: IT, Medizin, Technik, KI.',
        'germany.g1.title': 'Ausbildung', 'germany.g1.text': 'Praxis + Theorie, Vergütung, Einstieg in Beruf.',
        'germany.g2.title': 'Studium', 'germany.g2.text': 'Dual, klassisch, zahlreiche Stipendien.',
        'germany.g3.title': 'Au-pair', 'germany.g3.text': 'Sprache, Kultur, Erfahrung.',
        'germany.g4.title': 'FSJ/BFD/FÖJ', 'germany.g4.text': '6–18 Monate Dienst.',
        'germany.g5.title': 'Fachkräfte', 'germany.g5.text': 'Direktes Arbeitsvisum.',
        'germany.g6.title': 'Sprachkurs', 'germany.g6.text': 'Intensiv, Sperrkonto, Plan.',
        'results.tag': 'ERFOLGSGESCHICHTEN', 'results.title': 'Unsere Resultate', 'results.subtitle': 'Au-pair, Ausbildung, Medizinische Fachangestellte — echte Erfolge',
        'contact.tag': 'KONTAKT', 'contact.title': 'Bereit für den ersten Schritt?', 'contact.subtitle': 'Nehmen Sie jetzt Kontakt mit uns auf', 'contact.email': 'Email', 'contact.phone': 'Telefon', 'contact.telegram': 'Telegram', 'contact.address': 'Adresse', 'contact.address_text': 'Bunyodkorstr 1, 100035 Taschkent, Usbekistan — Orientierung: Ziraatbank, S-Bahn Station Novza.', 'contact.social': 'Social',
        'footer.copy': 'Eurolink Consulting Group (ECG) © Alle Rechte vorbehalten'
    },
    uz: {
        'meta.title': 'EuroLink Consulting Group - Kelajak shu yerdan boshlanadi',
        'meta.description': 'Evropaga ta’lim, o‘qish, martaba va migratsiya bo‘yicha professional maslahat. Til kurslari, Au-pair, FSJ/BFD/FÖJ, Ausbildung, oliy ta’lim va mutaxassislar uchun ish.',
        'nav.home': 'Bosh sahifa', 'nav.about': 'Biz haqimizda', 'nav.structure': 'Tuzilma', 'nav.team': 'Jamoa', 'nav.services': 'Xizmatlar', 'nav.germany': 'Yevropaga yo‘l', 'nav.results': 'Natijalar', 'nav.contact': 'Aloqa',
        'hero.tag': 'Premium Konsalting', 'hero.title': 'EuroLink Consulting Group (ECG)', 'hero.lead': 'Evropaga ta’lim, o‘qish, martaba va migratsiya bo‘yicha professional maslahat. Til kurslari, Au-pair, FSJ/BFD/FÖJ, Ausbildung, oliy ta’lim va mutaxassislar uchun ishga yo‘naltirish.',
        'cta.start': 'Maslahat boshlash', 'cta.learn': 'Ko‘proq bilish',
        'about.tag': 'BIZ HAQIMIZDA', 'about.title': 'EuroLink Consulting Group', 'about.subtitle': '2022-yil maydan beri Evropaga yo‘l olgan yoshlarni qo‘llab-quvvatlaymiz',
        'about.cards.info.title': 'Qisqacha ma’lumot', 'about.cards.info.text': '"EuroLink CG" 2022-yil maydan beri faol. Bosh ofis Toshkent. Onlayn/oflayn til kurslari (Nemis, Ingliz, Rus, Xitoy, Koreys) va IT Web Dasturlash. Grant, karera va tadqiqotlarda ko‘mak.',
        'about.cards.edu.title': 'Ta’lim dasturlari', 'about.cards.edu.text': 'Til kurslari (Goethe, telc, TestDaF va b.), Studienkolleg, Bakalavr, Magistr, PhD — Germaniya/Yevropa.',
        'about.cards.career.title': 'Karera & Dasturlar', 'about.cards.career.text': 'Au-pair, FSJ/BFD/FÖJ, Ausbildung, to‘g‘ridan-to‘g‘ri ish (IT, tibbiyot, texnika, AI).',
        'about.cards.full.title': 'To‘liq xizmat', 'about.cards.full.text': 'Hujjatlar, elchixona navbati, sug‘urta, uy-joy, parvoz, transfer, integratsiya va community.',
        'structure.tag': 'TUZILMA', 'structure.title': 'EuroLink tuzilmasi', 'structure.subtitle': 'Front-office, holat tahlili, back-office, strategiya, coworking (boshqaruv & monitoring)',
        'structure.cards.company.badge': 'Kompaniya', 'structure.cards.company.title': 'ECG umumiy ko‘rinish', 'structure.cards.company.text': 'Loyiha hajmiga qarab bo‘limlar: ta’lim markazi, yuridik, marketing, tarjima, bozor tahlili, hamkorlik, dasturlash/dizayn, buxgalteriya va boshqalar.',
        'structure.cards.team.badge': 'Jamoa', 'structure.cards.team.title': 'Jarayon & sifat', 'structure.cards.team.text': 'Nazorat va hisobotlar — asoschilar va yuridik bo‘lim orqali. Natija, sifat va tezlik — ustuvor.',
        'team.tag': 'JAMOAMIZ', 'team.title': 'Raxbariyat & Ekspertiza', 'team.subtitle': 'Xalqaro tajribaga ega mutaxassislar', 'team.ceo.role': 'Founder & CEO', 'team.ceo.text': 'Sifat va strategiya menejeri, avtomatlashtirish va bozor tahlili nazoratchisi. IT System Manager — addOn Solution GmbH.',
        'team.cof1.title': 'Elbek Shomurodov — Founder', 'team.cof1.text': 'Operatsiyalar & raqamlashtirish, yuridik/logistika jarayonlari. IT-Security talabasi (Osh/Samarqand).',
        'team.cof2.title': 'Murodjon Shomurodov — Founder', 'team.cof2.text': 'Strategiya & xalqaro aloqalar, audit, HR, transformatsiya. Junior Analyst BDU; M.Sc Hamburg universiteti.',
        'team.exp1.text': 'IT mutaxassisi & mentor. Intervyu va networking bo‘yicha consultant. POELLATH+ (Myunxen) da Legal Digital Transformation yo‘nalishi.',
        'team.exp2.text': 'Studienkolleg/til kurslari, integratsiya & ta’lim, psixologik metodlar. Biotex/Med (Leyptsig).',
        'team.exp3.text': 'Tibbiyot eksperti & mentor. Pezeshkpour stomatologiya klinikasi (Aaxen).',
        'team.exp4.text': 'B2B & FSJ/BFD/FÖJ mentor, 3 yil Klinikum Stuttgart, “E-Bike Laden Stuttgart” menejeri.',
        'team.t1.text': 'Nemis tili o‘qituvchisi & mentor, o‘quv reja maslahatchisi, C1; Vürzburg, Bremen, Shtutgart tajribasi. Toshkent Jahon tillari universiteti talabasi.',
        'team.t2.text': 'DE/EN/RU o‘qituvchisi, 3 yil tajriba, C1, tarjima nazariyasi & uslubiyati koordinatori. Toshkent JTU talabasi.',
        'services.tag': 'XIZMATLAR', 'services.title': 'Akademik & maslahat xizmatlari', 'services.subtitle': 'Til sertifikatlari (IELTS, TestDaF, telc, HSK, TOPIK, TRKI), IT kurslar, Au-pair, FSJ/BFD/FÖJ, Ausbildung, OTM, viza va boshqalar',
        'services.c1.title': 'Til & IT kurslari', 'services.c1.text': 'Nemis/Ingliz/Rus/Xitoy/Koreys, IELTS, TestDaF, telc, HSK, TOPIK, TRKI, Full-Stack, Web-dizayn, Marketing/SMM.',
        'services.c2.title': 'Au-pair', 'services.c2.text': 'Agentlik-trening, oilalar bilan intervyu, elchixona tayyorgarligi.',
        'services.c3.title': 'FSJ/BFD/FÖJ', 'services.c3.text': '6–18 oy ijtimoiy/ekologik xizmat, stipendiya, yashash va transport imkonlari.',
        'services.c4.title': 'Ausbildung', 'services.c4.text': 'B1–B2 bilan o‘qish+ish (2–4 yil), oylik to‘lov, ishga qabul ehtimoli yuqori.',
        'services.c5.title': 'OTM (Studium)', 'services.c5.text': 'Uni-Assist, dual o‘qish, grantlar: DAAD, Erasmus, KAS, Deutschlandstipendium va b.',
        'services.c6.title': 'Mutaxassislar', 'services.c6.text': 'B2 bilan ish vizasi yoki 6 oylik Job-Seeker (IT/Med/Tech/AI).',
        'services.c7.title': 'Viza & yuridik', 'services.c7.text': 'Sprachkurs/Study/Business/Medical/Travel vizalar, elchixona intervyusi.',
        'services.c8.title': 'Qo‘llab-quvvatlash', 'services.c8.text': 'Sug‘urta, uy-joy, parvoz, transfer, ish topish, community.',
        'services.c9.title': 'B2B/B2C', 'services.c9.text': 'Yuk logistika, ko‘chmas mulk (Turkiya/Germaniya), med-turizm marketingi, eksport.',
        'services.c10.title': 'Amaliyot & tadqiqot', 'services.c10.text': '18+ uchun pullik stajirovkalar, grantlar va ilmiy loyihalar.',
        'germany.tag': 'YEVROPAGA YO‘L', 'germany.title': 'Yevropaga yo‘l', 'germany.subtitle': 'Ausbildung | Au-pair | FSJ/BFD/FÖJ | Til kursi | OTM | Ish',
        'germany.s1.title': '1) Ausbildung nima?', 'germany.s1.text': 'Dual yo‘l: 2–3 kun korxona + 1–2 kun maktab. Afzalliklar: oylik, ishga qabul ehtimoli, B1–B2 yetarli, 11-sinf diplom bilan ham mumkin. Start odatda avg/sen — erta ariza bering.',
        'germany.s2.title': '2) Au-pair dasturi', 'germany.s2.text': '18–26 yosh, elementar nemis tili; yashash, ovqat, nafaqa. 30–35 soat/hafta, 6–12(18) oy, til kursi va madaniyat almashinuvi.',
        'germany.s3.title': '3) Ko‘ngillilik xizmatlari (FSJ/FÖJ/BFD)', 'germany.s3.text': '6–18 oy; ijtimoiy/ekologik yo‘nalish. 300–560€, ba’zan turar-joy/transport ta’minlanadi. FSJ/FÖJ ≤27; BFD — yosh cheklovi yo‘q.',
        'germany.s4.title': '4) Germaniyada til kursi', 'germany.s4.text': 'Kamida 6 oy intensiv (≥18 soat/hafta), shartnoma, tarjimalar, sperrkonto, sug‘urta, CV & motivatsion xat. Keyingi qadam: Ausbildung/OTM.',
        'germany.s5.title': '5) OTM (Bakalavr/Magistr/PhD)', 'germany.s5.text': 'uni-assist; nemis dasturlari odatda C1 (ba’zida B2), ingliz dasturlari — IELTS. Davlat OTMlari ko‘pincha bepul; ko‘plab grantlar (DAAD, Erasmus...).',
        'germany.s6.title': '6) Mutaxassis sifatida ish', 'germany.s6.text': 'B2 + mehnat shartnomasi bilan ish vizasi; aks holda 6 oylik Job-Seeker. Talab yuqori: IT, tibbiyot, texnika, AI.',
        'germany.g1.title': 'Ausbildung', 'germany.g1.text': 'Amaliyot + nazariya, oylik, kasbga kirish.',
        'germany.g2.title': 'OTM', 'germany.g2.text': 'Dual, an’anaviy, ko‘p grantlar.',
        'germany.g3.title': 'Au-pair', 'germany.g3.text': 'Til, madaniyat, tajriba.',
        'germany.g4.title': 'FSJ/BFD/FÖJ', 'germany.g4.text': '6–18 oy xizmat.',
        'germany.g5.title': 'Mutaxassislar', 'germany.g5.text': 'To‘g‘ridan-to‘g‘ri ish vizasi.',
        'germany.g6.title': 'Til kursi', 'germany.g6.text': 'Intensiv, sperrkonto, reja.',
        'results.tag': 'MUVAFFAQIYAT HIKOYALARI', 'results.title': 'Natijalarimiz', 'results.subtitle': 'Au-pair, Ausbildung, tibbiy asistent — real natijalar',
        'contact.tag': 'ALOQA', 'contact.title': 'Birinchi qadamga tayyormisiz?', 'contact.subtitle': 'Hozir biz bilan bog‘laning', 'contact.email': 'Email', 'contact.phone': 'Telefon', 'contact.telegram': 'Telegram', 'contact.address': 'Manzil', 'contact.address_text': 'Bunyodkor ko‘chasi 1, 100035 Toshkent, O‘zbekiston — Mo‘ljal: Ziraatbank, Novza metro.',
        'contact.social': 'Ijtimoiy tarmoqlar', 'footer.copy': 'Eurolink Consulting Group (ECG) © Barcha huquqlar himoyalangan'
    }
};

/* ===== LANGUAGE HANDLER ===== */
const qs = new URLSearchParams(location.search);
const saved = localStorage.getItem('language');
const browser = (navigator.language || 'de').slice(0, 2);
const fallback = 'de';
const initialLang = ['de', 'uz'].includes(qs.get('lang')) ? qs.get('lang') : (['de', 'uz'].includes(saved) ? saved : (browser === 'uz' ? 'uz' : fallback));

function showGermanyTab(tabNumber) {
  // Barcha tab contentlarni yashirish
  const contents = document.querySelectorAll('.germany-tab-content');
  contents.forEach(content => content.classList.remove('active'));
  
  // Barcha buttonlarni deactivate qilish
  const buttons = document.querySelectorAll('.germany-tab-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  
  // Tanlangan tabni ko'rsatish
  document.getElementById('germanyTab' + tabNumber).classList.add('active');
  buttons[tabNumber - 1].classList.add('active');
  
  // Smooth scroll to content
  document.getElementById('germanyTab' + tabNumber).scrollIntoView({ 
    behavior: 'smooth', 
    block: 'nearest' 
  });
}

function switchLanguage(lang) {
    const elements = document.querySelectorAll('[data-de], [data-uz]');
    elements.forEach(el => {
        if (el.dataset.de && el.dataset.uz) {
            el.textContent = lang === 'de' ? el.dataset.de : el.dataset.uz;
        }
    });
}

function loadMoreResults() {
    const cards = document.querySelectorAll('.result-card.hidden');
    const loadCount = Math.min(cards.length, 3); 
    for (let i = 0; i < loadCount; i++) {
        cards[i].classList.remove('hidden');
    }

    // Qolgan kartalarni tekshirish
    if (cards.length <= 3) {
        document.getElementById('moreButtonContainer').style.display = 'none'; // Agar barchasi yuklandi, tugmani yashir
    } else {
        // 9 tadan keyin qolganlarni tekshirib, agar qolsa tugmani saqlab qol
        setTimeout(() => {
            const remainingCards = document.querySelectorAll('.result-card.hidden');
            if (remainingCards.length === 0) {
                document.getElementById('moreButtonContainer').style.display = 'none';
            }
        }, 100); // Kichik kechikish uchun
    }
}

// Boshlang'ich til (masalan, nemis)

// Service Modal Data
const serviceDetailsData = {
    uz: {
        1: {
            title: 'Til va IT Kurslari',
            content: `
        <h4>Til Kurslari:</h4>
        <ul>
          <li><strong>Nemis tili:</strong> Goethe Zertifikat, TestDaF, telc Deutsch, DSH tayyorgarlik</li>
          <li><strong>Ingliz tili:</strong> IELTS, SAT, GMAT, GRE tayyorgarlik</li>
          <li><strong>Xitoy tili:</strong> HSK sertifikati tayyorgarlik</li>
          <li><strong>Koreys tili:</strong> TOPIK sertifikati tayyorgarlik</li>
          <li><strong>Rus tili:</strong> TRKI sertifikati tayyorgarlik</li>
        </ul>
        <h4>IT Kurslari:</h4>
        <ul>
          <li>Full-Stack dasturlash (Frontend va Backend)</li>
          <li>Web dizayn va UI/UX</li>
          <li>Digital marketing va SMM</li>
          <li>Nemis va yapon standartlariga mos ta'lim</li>
        </ul>
      `
        },
        2: {
            title: 'Au-pair Dasturi',
            content: `
        <h4>Xizmatlarimiz:</h4>
        <ul>
          <li>Au-pair agentliklar bilan professional ishlash</li>
          <li>Nemis oilalari bilan intervyuga tayyorgarlik</li>
          <li>Elchixonaga hujjatlar tayyorlash</li>
          <li>Vizaga tayyorgarlik va suhbat mashqlari</li>
          <li>Germaniyada adaptatsiya bo'yicha maslahatlar</li>
          <li>Nemis tili va madaniyatiga kirish</li>
        </ul>
      `
        },
        3: {
            title: 'FSJ/BFD/FÖJ Dasturlari',
            content: `
        <h4>Dastur haqida:</h4>
        <ul>
          <li><strong>Davomiyligi:</strong> 6-18 oy</li>
          <li><strong>Yo'nalishlar:</strong> Ijtimoiy xizmat, ekologiya, sport</li>
          <li><strong>Imkoniyatlar:</strong> Oylik stipendiya (300-450 euro), bepul uy-joy, bepul jamoat transporti, nemis tilini o'rganish, professional tajriba</li>
          <li>To'liq yuridik yordam va qo'llab-quvvatlash</li>
        </ul>
      `
        },
        4: {
            title: 'Ausbildung - Kasbiy Ta\'lim',
            content: `
        <h4>Dastur haqida:</h4>
        <ul>
          <li><strong>Til darajasi:</strong> B1-B2 nemis tili</li>
          <li><strong>Davomiyligi:</strong> 2-4 yil</li>
          <li><strong>Oylik to'lov:</strong> 800-1200 euro</li>
          <li><strong>Mashhur yo'nalishlar:</strong> Tibbiyot, texnika va mexanika, IT va dasturlash, mehmonxona biznesi, moliya va buxgalteriya</li>
          <li>Diplom Yevropa davlatlarida tan olinadi</li>
          <li>Ta'limdan keyin doimiy ish kafolati</li>
        </ul>
      `
        },
        5: {
            title: 'Oliy Ta\'lim (Studium)',
            content: `
        <h4>Xizmatlarimiz:</h4>
        <ul>
          <li><strong>Universitet tanlash:</strong> Uni-Assist orqali ariza topshirish</li>
          <li><strong>Ta'lim turlari:</strong> Normales Studium, Duales Studium, Fernstudium</li>
          <li><strong>Grantlar:</strong> DAAD, Erasmus+, Deutschlandstipendium, KAS</li>
          <li>Sperrkonto ochishda yordam</li>
          <li>To'liq hujjat tayyorlash xizmati</li>
        </ul>
      `
        },
        6: {
            title: 'Malakali Kadrlar',
            content: `
        <h4>Kimlar uchun:</h4>
        <ul>
          <li>Oliy ma'lumotli mutaxassislar</li>
          <li>2+ yil ish tajribasi</li>
          <li>B2 nemis tili (ba'zi holatlarda ingliz)</li>
        </ul>
        <h4>Yo'nalishlar:</h4>
        <ul>
          <li>IT va dasturlash</li>
          <li>Tibbiyot va farmatsevtika</li>
          <li>Injeneriya va texnika</li>
          <li>Sun'iy intellekt va data science</li>
        </ul>
      `
        },
        7: {
            title: 'Visa va Yuridik Xizmatlar',
            content: `
        <h4>Visa turlari:</h4>
        <ul>
          <li><strong>Til kursi vizasi:</strong> Nemis tilini o'rganish uchun</li>
          <li><strong>Ta'lim vizasi:</strong> Universitet va Ausbildung</li>
          <li><strong>Ish vizasi:</strong> Malakali kadrlar uchun</li>
          <li><strong>Biznes vizasi:</strong> Tadbirkorlar uchun</li>
        </ul>
        <h4>Xizmatlar:</h4>
        <ul>
          <li>To'liq hujjat tayyorlash</li>
          <li>Elchixona suhbatiga professional tayyorgarlik</li>
          <li>Yuridik maslahatlar</li>
        </ul>
      `
        },
        8: {
            title: 'Qo\'shimcha Xizmatlar',
            content: `
        <h4>To'liq qo'llab-quvvatlash:</h4>
        <ul>
          <li>Tibbiy va sayohat sug'urtasi</li>
          <li>Uy-joy qidirish va ijara shartnomasi</li>
          <li>Arzon aviachiptalar xarid qilish</li>
          <li>Aeroportdan kutib olish va transfer</li>
          <li>Germaniyada ish topish</li>
          <li>O'zbek community'ga qo'shilish</li>
        </ul>
      `
        }
    },
    de: {
        1: {
            title: 'Sprach- & IT-Kurse',
            content: `
        <h4>Sprachkurse:</h4>
        <ul>
          <li><strong>Deutsch:</strong> Goethe Zertifikat, TestDaF, telc Deutsch, DSH Vorbereitung</li>
          <li><strong>Englisch:</strong> IELTS, SAT, GMAT, GRE Vorbereitung</li>
          <li><strong>Chinesisch:</strong> HSK Zertifikat Vorbereitung</li>
          <li><strong>Koreanisch:</strong> TOPIK Zertifikat Vorbereitung</li>
          <li><strong>Russisch:</strong> TRKI Zertifikat Vorbereitung</li>
        </ul>
        <h4>IT-Kurse:</h4>
        <ul>
          <li>Full-Stack Programmierung (Frontend & Backend)</li>
          <li>Webdesign und UI/UX</li>
          <li>Digital Marketing und SMM</li>
          <li>Nach deutschen und japanischen Standards</li>
        </ul>
      `
        },
        2: {
            title: 'Au-pair Programm',
            content: `
        <h4>Unsere Dienstleistungen:</h4>
        <ul>
          <li>Professionelle Zusammenarbeit mit Au-pair Agenturen</li>
          <li>Vorbereitung auf Interviews mit deutschen Familien</li>
          <li>Dokumentenvorbereitung für Botschaft</li>
          <li>Visa-Vorbereitung und Gesprächstraining</li>
          <li>Beratung zur Integration in Deutschland</li>
          <li>Einführung in deutsche Sprache und Kultur</li>
        </ul>
      `
        },
        3: {
            title: 'FSJ/BFD/FÖJ Programme',
            content: `
        <h4>Über das Programm:</h4>
        <ul>
          <li><strong>Dauer:</strong> 6-18 Monate</li>
          <li><strong>Bereiche:</strong> Sozialdienst, Ökologie, Sport</li>
          <li><strong>Leistungen:</strong> Monatliches Stipendium (300-450 Euro), kostenlose Unterkunft, kostenloses ÖPNV-Ticket, Deutschlernen, Berufserfahrung</li>
          <li>Vollständige rechtliche Unterstützung</li>
        </ul>
      `
        },
        4: {
            title: 'Ausbildung - Berufsausbildung',
            content: `
        <h4>Über das Programm:</h4>
        <ul>
          <li><strong>Sprachniveau:</strong> B1-B2 Deutsch</li>
          <li><strong>Dauer:</strong> 2-4 Jahre</li>
          <li><strong>Vergütung:</strong> 800-1200 Euro monatlich</li>
          <li><strong>Beliebte Bereiche:</strong> Medizin, Technik und Mechanik, IT und Programmierung, Hotellerie, Finanzen und Buchhaltung</li>
          <li>Diplom wird in ganz Europa anerkannt</li>
          <li>Jobangebot nach Abschluss garantiert</li>
        </ul>
      `
        },
        5: {
            title: 'Studium (Hochschulbildung)',
            content: `
        <h4>Unsere Dienstleistungen:</h4>
        <ul>
          <li><strong>Universitätswahl:</strong> Bewerbung über Uni-Assist</li>
          <li><strong>Studienformen:</strong> Normales Studium, Duales Studium, Fernstudium</li>
          <li><strong>Stipendien:</strong> DAAD, Erasmus+, Deutschlandstipendium, KAS</li>
          <li>Hilfe bei Sperrkonto-Eröffnung</li>
          <li>Vollständige Dokumentenvorbereitung</li>
        </ul>
      `
        },
        6: {
            title: 'Fachkräfte',
            content: `
        <h4>Für wen:</h4>
        <ul>
          <li>Fachkräfte mit Hochschulabschluss</li>
          <li>2+ Jahre Berufserfahrung</li>
          <li>B2 Deutsch (teilweise Englisch)</li>
        </ul>
        <h4>Bereiche:</h4>
        <ul>
          <li>IT und Programmierung</li>
          <li>Medizin und Pharmazie</li>
          <li>Ingenieurwesen und Technik</li>
          <li>KI und Data Science</li>
        </ul>
      `
        },
        7: {
            title: 'Visa & Rechtsdienste',
            content: `
        <h4>Visa-Arten:</h4>
        <ul>
          <li><strong>Sprachkursvisum:</strong> Zum Deutschlernen</li>
          <li><strong>Studienvisum:</strong> Für Universität und Ausbildung</li>
          <li><strong>Arbeitsvisum:</strong> Für Fachkräfte</li>
          <li><strong>Geschäftsvisum:</strong> Für Unternehmer</li>
        </ul>
        <h4>Dienstleistungen:</h4>
        <ul>
          <li>Vollständige Dokumentenvorbereitung</li>
          <li>Professionelle Vorbereitung auf Botschaftsgespräch</li>
          <li>Rechtsberatung</li>
        </ul>
      `
        },
        8: {
            title: 'Zusätzliche Services',
            content: `
        <h4>Vollständige Unterstützung:</h4>
        <ul>
          <li>Kranken- und Reiseversicherung</li>
          <li>Wohnungssuche und Mietvertrag</li>
          <li>Günstige Flugtickets</li>
          <li>Abholung vom Flughafen und Transfer</li>
          <li>Jobsuche in Deutschland</li>
          <li>Integration in usbekische Community</li>
        </ul>
      `
        }
    }
};

// Modal Functions
function openServiceModal(serviceId) {
    const modal = document.getElementById('serviceModal');
    const currentLang = localStorage.getItem('language') || 'de';
    const service = serviceDetailsData[currentLang][serviceId];

    if (service) {
        document.getElementById('modalTitle').textContent = service.title;
        document.getElementById('modalBody').innerHTML = service.content;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeServiceModal(event) {
    if (!event || event.target === event.currentTarget) {
        const modal = document.getElementById('serviceModal');
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ESC tugmasi bilan yopish
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeServiceModal();
    }
});


function setOrgLang(lang) { document.getElementById('orgStructure').setAttribute('data-lang', lang === 'de' ? 'de' : 'uz'); }
// Organization Structure Data
const orgData = {
    uz: {
        departments: [
            {
                name: "Old ofis",
                label: "Bo'limlar:",
                items: ["Administratsiya", "O'quv markazi", "Marketing va Dizayn", "SMM va Targeting", "Raqamlashtirish", "Juridik", "Status tahlili", "Xo'jalik", "Logistika"]
            },
            {
                name: "Ort ofis",
                label: "Bo'limlar:",
                items: ["Co-working", "Monitoring", "Ekspertlar", "Murabbiylar", "Tarjimonlik markazi", "Notariat", "Tashqi hamkorlar", "Psixologiya", "Coaching"]
            },
            {
                name: "Maqbullashtirish",
                label: "Bo'limlar:",
                items: ["Strategik boshqaruv", "Sifat boshqaruvi", "Bozor tadqiqotlari", "Bugalteriya va Audit", "Xalqaro aloqalar", "Avtomatlashtirish", "Kadrlar bo'limi", "Bozorga moslashtirish"]
            }
        ]
    },
    de: {
        departments: [
            {
                name: "Front Office",
                label: "Abteilungen:",
                items: ["Administration", "IT- und Sprachschule", "Marketing & Design", "SMM & Targeting", "Digitalisierung", "Juristik", "Status Quo-Analyse", "Hauswirtschaft", "Logistik"]
            },
            {
                name: "Back Office",
                label: "Abteilungen:",
                items: ["Co-working", "Monitoring", "Experten", "Mentoren", "Übersetzungszentrum", "Notariat", "Externe Partner", "Psychologie", "Coaching"]
            },
            {
                name: "Optimierung",
                label: "Abteilungen:",
                items: ["Strategiemanagement", "Qualitätsmanagement", "Marktforschung", "Buchhaltung & Audit", "Internationale Beziehungen", "Automatisierung", "HR & Recruiting", "Transformation"]
            }
        ]
    }
};

// Render organization structure
function renderOrgStructure(lang) {
    const container = document.getElementById('departments');
    if (!container) return;

    const orgStructure = document.getElementById('orgStructure');
    if (orgStructure) orgStructure.setAttribute('data-lang', lang);

    container.innerHTML = '';

    orgData[lang].departments.forEach((dept, index) => {
        const card = document.createElement('div');
        card.className = 'department-card';
        card.style.animationDelay = `${0.1 + index * 0.1}s`;

        const itemsHTML = dept.items.map(item => `<li>${item}</li>`).join('');

        card.innerHTML = `
      <div class="dept-header">
        <div class="dept-title">${dept.name}</div>
      </div>
      <div class="dept-body">
        <div class="dept-label">${dept.label}</div>
        <ul class="dept-list">${itemsHTML}</ul>
      </div>
    `;

        container.appendChild(card);
    });
}

// Call this when language changes
window.setOrgLang = function (lang) {
    renderOrgStructure(lang === 'de' ? 'de' : 'uz');
};

// Initialize on page load
renderOrgStructure('uz');

function applyLang(lang) {
    const dict = I18N[lang] || I18N[fallback];
    document.documentElement.lang = lang;
    // Buttons state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        const active = btn.dataset.lang === lang; btn.classList.toggle('active', active); btn.setAttribute('aria-pressed', active);
    });
    // Swap all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) {
            if (el.tagName === 'META') {
                if (el.getAttribute('name') === 'description') el.setAttribute('content', dict[key]);
            } else if (el.tagName === 'TITLE') {
                document.title = dict[key];
            } else {
                el.textContent = dict[key];
            }
        }
        if (window.setOrgLang) window.setOrgLang(lang);
        setOrgLang(lang);
    });
    // Update URL (without reload)
    const url = new URL(location.href); url.searchParams.set('lang', lang); history.replaceState(null, '', url.toString());
    localStorage.setItem('language', lang);
}

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body; const savedTheme = localStorage.getItem('theme') || 'dark';
body.setAttribute('data-theme', savedTheme); updateThemeIcon(savedTheme);
themeToggle.addEventListener('click', () => { const t = body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'; body.setAttribute('data-theme', t); localStorage.setItem('theme', t); updateThemeIcon(t); });
function updateThemeIcon(t) { themeToggle.textContent = t === 'dark' ? '🌙' : '☀️'; themeToggle.title = t === 'dark' ? 'Light Mode' : 'Dark Mode' }

// Mobile menu
const menuBtn = document.getElementById('menuBtn'), menu = document.getElementById('menu');
menuBtn.addEventListener('click', () => {
    const isOpen = getComputedStyle(menu).display !== 'none';
    menu.style.display = isOpen ? 'none' : 'flex';
    menu.style.flexDirection = 'column'; menu.style.gap = '1rem';
    menuBtn.setAttribute('aria-expanded', String(!isOpen));
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => { e.preventDefault(); const t = document.querySelector(a.getAttribute('href')); if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' }); if (window.innerWidth <= 1100) menu.style.display = 'none'; });
});

// Reveal on view
const io = new IntersectionObserver((entries) => { entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } }); }, { threshold: .12, rootMargin: '0px 0px -80px 0px' });
document.querySelectorAll('.reveal, .feature-card, .result-card, .service-card, .team-card').forEach(el => io.observe(el));

// Language buttons
document.querySelectorAll('.lang-btn').forEach(b => b.addEventListener('click', () => applyLang(b.dataset.lang)));

// INIT
applyLang(initialLang);