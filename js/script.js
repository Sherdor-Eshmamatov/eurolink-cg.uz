"use strict";

const langEl = document.querySelector(".langWrap");
const link = document.querySelectorAll(".translate");
const menu1 = document.querySelector(".menu1");
const menu2 = document.querySelector(".menu2");
const menu3 = document.querySelector(".menu3");
const menu4 = document.querySelector(".menu4");
const menu5 = document.querySelector(".menu5");
const menu6 = document.querySelector(".menu6");
const menu7 = document.querySelector(".menu7");
const menu8 = document.querySelector(".menu8");
const menu9 = document.querySelector(".menu9");
const translation1 = document.querySelector(".translation1");
const translation2 = document.querySelector(".translation2");
const translation3 = document.querySelector(".translation3");
const translation4 = document.querySelector(".translation4");
const translation5 = document.querySelector(".translation5");
const translation6 = document.querySelector(".translation6");
const translation7 = document.querySelector(".translation7");
const translation8 = document.querySelector(".translation8");
const translation9 = document.querySelector(".translation9");
const translation10 = document.querySelector(".translation10");
const translation11 = document.querySelector(".translation11");
const translation12 = document.querySelector(".translation12");
const translation13 = document.querySelector(".translation13");
const translation14 = document.querySelector(".translation14");
const translation15 = document.querySelector(".translation15");
const translation16 = document.querySelector(".translation16");
const translation17 = document.querySelector(".translation17");
const translation18 = document.querySelector(".translation18");
const translation19 = document.querySelector(".translation19");
const translation20 = document.querySelector(".translation20");
const translation21 = document.querySelector(".translation21");
const translation22 = document.querySelector(".translation22");
const translation23 = document.querySelector(".translation23");
const translation24 = document.querySelector(".translation24");
const translation25 = document.querySelector(".translation25");
const translation26 = document.querySelector(".translation26");
const translation27 = document.querySelector(".translation27");
const translation28 = document.querySelector(".translation28");
const translation29 = document.querySelector(".translation29");
const translation30 = document.querySelector(".translation30");
const translation31 = document.querySelector(".translation31");
const translation33 = document.querySelector(".translation33");
const translation34 = document.querySelector(".translation34");
const translation35 = document.querySelector(".translation35");
const translation36 = document.querySelector(".translation36");
const translation37 = document.querySelector(".translation37");
const translation38 = document.querySelector(".translation38");
const translation39 = document.querySelector(".translation39");
const translation40 = document.querySelector(".translation40");
const translation41 = document.querySelector(".translation41");
const translation42 = document.querySelector(".translation42");
const translation43 = document.querySelector(".translation43");
const translation44 = document.querySelector(".translation44");
const translation45 = document.querySelector(".translation45");
const translation46 = document.querySelector(".translation46");
const translation47 = document.querySelector(".translation47");
const translation48 = document.querySelector(".translation48");
const translation49 = document.querySelector(".translation49");
const translation50 = document.querySelector(".translation50");
const translation51 = document.querySelector(".translation51");
const translation52 = document.querySelector(".translation52");
const translation53 = document.querySelector(".translation53");
const translation54 = document.querySelector(".translation54");
const translation55 = document.querySelector(".translation55");
const translation56 = document.querySelector(".translation56");
const translation57 = document.querySelector(".translation57");
const translation58 = document.querySelector(".translation58");
const translation59 = document.querySelector(".translation59");
const translation60 = document.querySelector(".translation60");
const translation61 = document.querySelector(".translation61");
const translation62 = document.querySelector(".translation62");
const translation63 = document.querySelector(".translation63");
const translation64 = document.querySelector(".translation64");
const translation65 = document.querySelector(".translation65");
const translation66 = document.querySelector(".translation66");
const translation67 = document.querySelector(".translation67");
const translation68 = document.querySelector(".translation68");
const translation69 = document.querySelector(".translation69");
const translation70 = document.querySelector(".translation70");
const translation71 = document.querySelector(".translation71");
const translation72 = document.querySelector(".translation72");
const translation73 = document.querySelector(".translation73");
const translation74 = document.querySelector(".translation74");
const translation75 = document.querySelector(".translation75");
const translation76 = document.querySelector(".translation76");
const translation77 = document.querySelector(".translation77");
const translation78 = document.querySelector(".translation78");
const translation79 = document.querySelector(".translation79");
const translation80 = document.querySelector(".translation80");
const translation81 = document.querySelector(".translation81");
const translation82 = document.querySelector(".translation82");
const translation83 = document.querySelector(".translation83");
const translation84 = document.querySelector(".translation84");
const translation85 = document.querySelector(".translation85");
const translation86 = document.querySelector(".translation86");
const translation87 = document.querySelector(".translation87");
const translation88 = document.querySelector(".translation88");
const translation89 = document.querySelector(".translation89");
const translation90 = document.querySelector(".translation90");
const translation91 = document.querySelector(".translation91");
const translation92 = document.querySelector(".translation92");
const translation93 = document.querySelector(".translation93");
const translation94 = document.querySelector(".translation94");
const translation95 = document.querySelector(".translation95");
const translation96 = document.querySelector(".translation96");
const translation97 = document.querySelector(".translation97");
const translation98 = document.querySelector(".translation98");
const translation99 = document.querySelector(".translation99");
const translation100 = document.querySelector(".translation100");
const translation101 = document.querySelector(".translation101");
const translation102 = document.querySelector(".translation102");
const translation103 = document.querySelector(".translation103");
const translation104 = document.querySelector(".translation104");
const translation105 = document.querySelector(".translation105");
const translation106 = document.querySelector(".translation106");
const translation107 = document.querySelector(".translation107");
const translation108 = document.querySelector(".translation108");
const translation109 = document.querySelector(".translation109");
const translation110 = document.querySelector(".translation110");
const translation111 = document.querySelector(".translation111");
const translation112 = document.querySelector(".translation112");
const translation113 = document.querySelector(".translation113");
const translation114 = document.querySelector(".translation114");
const translation115 = document.querySelector(".translation115");
const translation116 = document.querySelector(".translation116");
const translation117 = document.querySelector(".translation117");
const translation118 = document.querySelector(".translation118");
const translation119 = document.querySelector(".translation119");
const translation120 = document.querySelector(".translation120");
const translation121 = document.querySelector(".translation121");
const translation122 = document.querySelector(".translation122");
const translation123 = document.querySelector(".translation123");
const translation124 = document.querySelector(".translation124");
const translation125 = document.querySelector(".translation125");
const translation126 = document.querySelector(".translation126");
const translation127 = document.querySelector(".translation127");
const translation128 = document.querySelector(".translation128");
const translation129 = document.querySelector(".translation129");
const translation130 = document.querySelector(".translation130");
const translation131 = document.querySelector(".translation131");
const translation132 = document.querySelector(".translation132");
const translation133 = document.querySelector(".translation133");
const translation134 = document.querySelector(".translation134");
const translation135 = document.querySelector(".translation135");
const translation136 = document.querySelector(".translation136");
const translation137 = document.querySelector(".translation137");
const translation138 = document.querySelector(".translation138");
const translation139 = document.querySelector(".translation139");
const translation140 = document.querySelector(".translation140");

const descrEl = document.querySelector(".description");
link.forEach((el) => {
  el.addEventListener("click", () => {
    langEl.querySelector(".active").classList.remove("active");
    el.classList.add("active");
    const attr = el.getAttribute("language");
    descrEl.innerHTML = data[attr].description;
    menu1.innerHTML = data[attr].menu1;
    menu2.innerHTML = data[attr].menu2;
    menu3.innerHTML = data[attr].menu3;
    menu4.innerHTML = data[attr].menu4;
    menu5.innerHTML = data[attr].menu5;
    menu6.innerHTML = data[attr].menu6;
    menu7.innerHTML = data[attr].menu7;
    menu8.innerHTML = data[attr].menu8;
    menu9.innerHTML = data[attr].menu9;
    translation1.innerHTML = data[attr].translation1;
    translation2.innerHTML = data[attr].translation2;
    translation3.innerHTML = data[attr].translation3;
    translation4.innerHTML = data[attr].translation4;
    translation5.innerHTML = data[attr].translation5;
    translation6.innerHTML = data[attr].translation6;
    translation7.innerHTML = data[attr].translation7;
    translation8.innerHTML = data[attr].translation8;
    translation9.innerHTML = data[attr].translation9;
    translation10.innerHTML = data[attr].translation10;
    translation11.innerHTML = data[attr].translation11;
    translation12.innerHTML = data[attr].translation12;
    translation13.innerHTML = data[attr].translation13;
    translation14.innerHTML = data[attr].translation14;
    translation15.innerHTML = data[attr].translation15;
    translation16.innerHTML = data[attr].translation16;
    translation17.innerHTML = data[attr].translation17;
    translation18.innerHTML = data[attr].translation18;
    translation19.innerHTML = data[attr].translation19;
    translation20.innerHTML = data[attr].translation20;
    translation21.innerHTML = data[attr].translation21;
    translation22.innerHTML = data[attr].translation22;
    translation23.innerHTML = data[attr].translation23;
    translation24.innerHTML = data[attr].translation24;
    translation25.innerHTML = data[attr].translation25;
    translation26.innerHTML = data[attr].translation26;
    translation27.innerHTML = data[attr].translation27;
    translation28.innerHTML = data[attr].translation28;
    translation29.innerHTML = data[attr].translation29;
    translation30.innerHTML = data[attr].translation30;
    translation31.innerHTML = data[attr].translation31;
    translation33.innerHTML = data[attr].translation33;
    translation34.innerHTML = data[attr].translation34;
    translation35.innerHTML = data[attr].translation35;
    translation36.innerHTML = data[attr].translation36;
    translation37.innerHTML = data[attr].translation37;
    translation38.innerHTML = data[attr].translation38;
    translation43.innerHTML = data[attr].translation43;
    translation44.innerHTML = data[attr].translation44;
    translation45.innerHTML = data[attr].translation45;
    translation46.innerHTML = data[attr].translation46;
    translation47.innerHTML = data[attr].translation47;
    translation48.innerHTML = data[attr].translation48;
    translation49.innerHTML = data[attr].translation49;
    translation50.innerHTML = data[attr].translation50;
    translation51.innerHTML = data[attr].translation51;
    translation52.innerHTML = data[attr].translation52;
    translation53.innerHTML = data[attr].translation53;
    translation54.innerHTML = data[attr].translation54;
    translation55.innerHTML = data[attr].translation55;
    translation56.innerHTML = data[attr].translation56;
    translation57.innerHTML = data[attr].translation57;
    translation58.innerHTML = data[attr].translation58;
    translation59.innerHTML = data[attr].translation59;
    translation60.innerHTML = data[attr].translation60;
    translation61.innerHTML = data[attr].translation61;
    translation62.innerHTML = data[attr].translation62;
    translation61.innerHTML = data[attr].translation61;
    translation62.innerHTML = data[attr].translation62;
    translation63.innerHTML = data[attr].translation63;
    translation64.innerHTML = data[attr].translation64;
    translation65.innerHTML = data[attr].translation65;
    translation66.innerHTML = data[attr].translation66;
    translation67.innerHTML = data[attr].translation67;
    translation68.innerHTML = data[attr].translation68;
    translation69.innerHTML = data[attr].translation69;
    translation70.innerHTML = data[attr].translation70;
    translation71.innerHTML = data[attr].translation71;
    translation72.innerHTML = data[attr].translation72;
    translation73.innerHTML = data[attr].translation73;
    translation74.innerHTML = data[attr].translation74;
    translation75.innerHTML = data[attr].translation75;
    translation76.innerHTML = data[attr].translation76;
    translation77.innerHTML = data[attr].translation77;
    translation78.innerHTML = data[attr].translation78;
    translation79.innerHTML = data[attr].translation79;
    translation80.innerHTML = data[attr].translation80;
    translation81.innerHTML = data[attr].translation81;
    translation82.innerHTML = data[attr].translation82;
    translation83.innerHTML = data[attr].translation83;
    translation84.innerHTML = data[attr].translation84;
    translation85.innerHTML = data[attr].translation85;
    translation86.innerHTML = data[attr].translation86;
    translation87.innerHTML = data[attr].translation87;
    translation88.innerHTML = data[attr].translation88;
    translation89.innerHTML = data[attr].translation89;
    translation90.innerHTML = data[attr].translation90;
    translation91.innerHTML = data[attr].translation91;
    translation92.innerHTML = data[attr].translation92;
    translation93.innerHTML = data[attr].translation93;
    translation94.innerHTML = data[attr].translation94;
    translation95.innerHTML = data[attr].translation95;
    translation96.innerHTML = data[attr].translation96;
    translation97.innerHTML = data[attr].translation97;
    translation98.innerHTML = data[attr].translation98;
    translation99.innerHTML = data[attr].translation99;
    translation100.innerHTML = data[attr].translation100;
    translation101.innerHTML = data[attr].translation101;
    translation102.innerHTML = data[attr].translation102;
    translation103.innerHTML = data[attr].translation103;
    translation104.innerHTML = data[attr].translation104;
    translation105.innerHTML = data[attr].translation105;
    translation106.innerHTML = data[attr].translation106;
    translation107.innerHTML = data[attr].translation107;
    translation108.innerHTML = data[attr].translation108;
    translation109.innerHTML = data[attr].translation109;
    translation110.innerHTML = data[attr].translation110;
    translation111.innerHTML = data[attr].translation111;
    translation112.innerHTML = data[attr].translation112;
    translation113.innerHTML = data[attr].translation113;
    translation114.innerHTML = data[attr].translation114;
    translation115.innerHTML = data[attr].translation115;
    translation116.innerHTML = data[attr].translation116;
    translation117.innerHTML = data[attr].translation117;
    translation118.innerHTML = data[attr].translation118;
    translation119.innerHTML = data[attr].translation119;
    translation120.innerHTML = data[attr].translation120;
    translation121.innerHTML = data[attr].translation121;
    translation122.innerHTML = data[attr].translation122;
    translation123.innerHTML = data[attr].translation123;
    translation124.innerHTML = data[attr].translation124;
    translation125.innerHTML = data[attr].translation125;
    translation126.innerHTML = data[attr].translation126;
    translation127.innerHTML = data[attr].translation127;
    translation128.innerHTML = data[attr].translation128;
    translation129.innerHTML = data[attr].translation129;
    translation130.innerHTML = data[attr].translation130;
    translation130.innerHTML = data[attr].translation130;
    translation131.innerHTML = data[attr].translation131;
    translation132.innerHTML = data[attr].translation132;
    translation133.innerHTML = data[attr].translation133;
    translation134.innerHTML = data[attr].translation134;
    translation135.innerHTML = data[attr].translation135;
    translation136.innerHTML = data[attr].translation136;
    translation137.innerHTML = data[attr].translation137;
    translation138.innerHTML = data[attr].translation138;
    translation139.innerHTML = data[attr].translation139;
    translation140.innerHTML = data[attr].translation140;
  });
});
document.getElementById("germanyBtn").onclick = function () {
  let btnOne = document.querySelector(".imgagetwo");
  btnOne.style.display = "none";
  let btntwo = document.querySelector(".imgageOne");
  btntwo.style.display = "block";
};
document.getElementById("uzbBtn").onclick = function () {
  let btnthree = document.querySelector(".imgageOne");
  btnthree.style.display = "none";
  let btnfour = document.querySelector(".imgagetwo");
  btnfour.style.display = "block";
};

// document.getElementsByClassName("dtnnn").onclick = function () {
//   let btn = document.querySelector("imgageOne");
//   btn.style.display = "none";
// };
var data = {
  germany: {
    menu1: "Hauptseite",
    menu2: "Über uns",
    menu3: "Allgemeiner Ablauf",
    menu4: "Struktur von",
    menu5: `„Team EuroLink"`,
    menu6: "Unsere Dienstleistungen",
    menu7: "Weg nach Europa",
    menu8: "Unsere Resultate",
    menu9: "Kontakt",
    translation1: "Kurzinfo über uns",
    translation2:
      "„EuroLink CG“ ist seit Mai 2022 in Betrieb. Unser Hauptsitz befindet sich in der Stadt Taschkent, und derzeit lernen unsere Schüler in den online/offline Kursen von Fremdsprachen wie Deutsch, Englisch, Russisch, Chinesisch, Koreanisch und IT Web Developing sowohl hier in Usbekistan als auch im Ausland. Unser Team verbessert ihre Fähigkeiten damit sie verschiedene internationale Stipendienprogramme gewinnen und überall gute Karriere machen. Wir beabsichtigen, junge Wissenschaftlerinnen und Wissenschaftler in Bereichen mit großer wissenschaftlicher Kapazität wie Technik, Energie, Medizin, Ingenieurwesen, Technologie und Wirtschaftswissenschaften bei der Durchführung von Forschungsarbeiten im Ausland eng zu unterstützen.",
    translation3: "Allgemeiner Ablauf",
    translation4:
      "Jeder neue Antrag wird von <span>Administration</span> im primären Aufnahmeprozess befragt und konsultiert. Aus diesem Teil des <span>Front-Office</span> wird es an Status Quo-Analyse gesendet. Ausgehend von der Situation werden die aktuellen Möglichkeiten, Pläne, Stärken und bestehenden Risiken des Hilfesuchenden von den fachbezogenen Teammitgliedern untersucht. Nachdem die Analyse abgeschlossen sind, werden die in den <span>Back-Office</span> übertragen. Basierend auf der aktuellen politisch-gesellschaftlichen und internationalen Situation und den Ergebnissen der Status Quo-Analyse erstellt das Strategieteam einen speziellen Algorithmus. Entsprechend der Reihenfolge dieser Aufgaben wird mit der Arbeit begonnen. Im <span>Coworking</span> (Steuerung- und Monitoring) Center wird ein Projekt auf Basis des oben genannten Algorithmus erstellt und dessen Umsetzung organisiert. Je nach Umfang des Projekts werden sich alle Strukturen innerhalb von EuroLink daran teilnehmen, insbesondere das Bildungszentrum, die Rechts- und Marketingabteilung, unsere Experten, das Übersetzungszentrum, die Marktanalysten, die Abteilung für Zusammenarbeit und internationale Beziehungen, die Programmierer und Designer, die Buchhaltung und externe Partner tätig sind. Kontrollen und Berichte werden von den Gründern und der Rechtsabteilung überprüft und Maßnahmen ergriffen.",
    translation5: `Team „EuroLink"`,
    translation6: "Gründer",
    translation7:
      "Begründer, Qualitäts-und Strategiemanager, <br>Controller von Automatisierung und Marktanalyse. <br>Extra: IT System Manager bei addOn Solition GmbH ",
    translation8:
      "Begründer, Manager für Strategie und internationale Beziehungen, <br>Controller von Audit, HR und Transformation. <br>Extra: Junior Analyst bei BDU Studentische Unternehmensberatung Co.&GmbH; <br>M.Sc an der Universität Hamburg, <br>Hamburg (Deutschland)",
    translation9:
      "Begründer, Manager für Operations und Digitalisierung, <br>Controller von den juristischen und logistischen <br>Prozessen und Hauswirtschaft. <br>Extra: Student in IT Security an der Universität Osh, <br>Samarkand (Usbekistan)",
    translation10: "Experten",
    translation11:
      "IT-Experte und Mentor, <br>Senior Consultant für Interviews und Networking. <br>Extra: IT Engineer in Legal Digital <br>Transformation bei POELLATH+. <br>München (Deutschland)",
    translation12:
      "Experte/Mentor für Studienkolleg und Sprachkurse,<br>Senior Consultant im Rahmen Integration und Bildung,<br>Betreuer in psychologische Methoden.<br>Extra: Teilnehmer an Studienkollegprogramm,<br>Junior Experte für Biotechnologie und Medizin,<br>Leipzig (Deutschland)",
    translation13:
      "Experte für Madizin und Mentor, <br>Consultant für Interviews und Networking, <br>Senior Betreuer in psychologische Methoden. <br>Extra: Zahnarzt bei Pezeshkpour Zahnarztpraxis <br>Aachen (Deutschland)",
    translation14: "Bildungszentrum",
    translation15: "Unsere Dienstleistungen",
    translation16: `<br><span>Akademische Dienstleistungen:</span><br><br>
    • Die aktuell meistgesprochenen Fremdsprachen- und IT-Kursen nach deutschen und japanischen Standards. Beispielsweise die bestimmte Zertifikate je nach die Fremdsprachen wie Englisch (IELTS, SAT, GMAT, GRE), Deutsch (Goethe Zertifikat, TestDAF, ECL, telc Deutsch, Test-AS, TM-WISO, DSH, DSD), Chinesisch (HSK), Koreanisch (TOPIC) und Russisch (TRKI). Die vollständige wissenschaftliche und spirituelle Vorbereitung unserer Schüler auf das Bildungssystem der europäischen Länder;
    <br> • Spezialisierte Kursen moderner Berufe wie IT-Programmiersprachen (Full-Stack), Webdesign, Marketing und SMM;
    <br><br><span>Konsultation und Coaching:</span><br><br>
    • Beratung und juristische Hilfe bei der Teilnahme an allen Arten von Freiwilligendiensten (FSJ/BFD/FÖJ ) und Anpassungsprogrammen (Au-Pair) sowie Belehrung der Dokumentation bei der Botschaft;
    <br> • Begleitung bei der Suche nach Stipendienprogrammen für Bachelor-und Masterstudium, PhD Forschungsprogramme  und Vorbereitung auf Strategie darin (Europa, China und wirtschaftlich und technologisch hochentwickelte „asiatische Tiger“-Länder wie Südkorea, Singapur, Malaysia, Hongkong, Taiwan);
    <br> • Förderung zum Erhalten des Studium Visums in verschiedenen Studienarten (Normal-, Dual-, Trial-, Doppel- und Fernstudium) ohne Sperrkonto;
    <br> • Coaching bei der Suche nach Ausbildungsstelle in allen modernen und gutbezahlten Bereichen;
    <br> • Für die Abiturienten, die bei Eintrittsexamen durchgefallen sind, wird jederzeit im Laufe des Jahres  Chance zum Studium ohne Examen nur mit Interview angeboten. Dieses Angebot ist für die TOP 1000 Universitäten in Kirgisistan, Kasachstan, Tajikistan und in der Türkei. Für solche Universitätsabschlüsse gibt es keine Anerkennungsverfahren in Usbekistan.
    <br> • Strategische und praktische Beratung mithilfe der externen Partner für die medizinische Fachkräfte damit die als MFA (Medizinische Fachangestellte) ohne Sperrkonto oder andere Barriere nach Europa kommen, ab sofort selbst und ihre Familie gut finanziell unterstützen können und in kürzerem Zeitraum die spezifische Fachprüfungen wie FSP (Fachsprachprüfung) und KP (Kenntnisprüfung) erfolgreich bestehen dann mit praktischen Fähigkeiten zum Arzt ihre Karriere weiterentwickeln;
    <br> • Koordination und Betreuung bei dem Direkteinstieg oder Fortsetzung der professionellen Karriere von der  erfahrenen Fachkräfte in europäischen Ländern wie Deutschland, Österreich,  Polen, Vereinigten Königreich, Estland, Litauen usw und asiatischen Ländern wie Südkorea, China, Japan, Malaysia, Taiwan, Singapur und mehr anderen. Die fokussierte Branchen sind IT, Technologie, künstliche Intelligenz, Medizin, Nano- und Biotechnologie, Ingenieurwesen, Banking, Wirtschaftsprüfung, Übersetzung, Physik und Mathematik, wirtschaftspsychologische Analyst, Ökonometrie, alternative Energie, SAP-Spezialisten, Maschinenbau, Wasserwirtschaft und Schiffbau.
    <br> • Methodenberatung für Studierende im Sommer nicht nur in den Bereichen Landwirtschaft und Dienstleistungen (Ferienbeschäftigung, Work and Travel), sondern auch bei der Teilnahme an <span>Praktika</span> und <span>Spring week</span> Programmen in den Großunternehmen;
    <br> • Rechtshilfe bei der Einreichung von Unterlagen zu allen Arten von Sprachkursen in Deutschland und Österreich;
    <br> • Rechtsberatung zum Erhalt von Reise-, Behandlungs- und Businessvisa;
    <br> • Vorbereitung auf alle Arten von Termingespräche bei der Botschaft;
    <br> • Versicherungsregistrierung (Reise- und Krankenversicherung);
    <br> • Unterstützung bei der Wohnungssuche;
    <br> • Einfacher und günstiger Kauf von Flugtickets;
    <br> • Transportation, Abholung vom Flughafen und Begleitung zur Unterkunft;
    <br> • Unterstützung bei der Jobsuche während des Studiums im ganzen Europa (falls erforderlich);
    <br> • Einladen und Integrieren zu den „Uzbek Community“ Gemeinde und Freizeitgesellschaften, die heutzutage eine unvergleichliche Rolle beim Networking, Weiterentwicklung, Zusammenarbeit und bei der Vermeidung der schon von älterer Generation gemachten Fehler spielen.
    <br><br><span>B2B und B2C Geschäftsdienstleistungen:</span> <br>
    <br> • Juristische und praktische Unterstützung bei der Suche, Beratung, Erwerb, Transportation und Bereitstellung die LKW-Transporte und alle Arten von Logistik- und landwirtschaftlichen Maschinen und Technologien;
    <br> • Strategie-und Rechtsberatung beim Kauf von Immobilien in der Türkei und Deutschland;
    <br> • Marketingdienstleistungen zur Gewinnung ausländischer Kunden für alle privaten medizinischen Kliniken in Zentralasien im Rahmen des Medizintourismus, bzw Haartransplantation und Liposuction;
    <br> • Outsourcing als Unterstützung Ihre Waren und Dienstleistungen sowohl im Privatgeschäft als auch in der Herstellung auf den Weltmarkt zu bringen, eine Website zu erstellen, Kunden zu sammeln, an internationalen Handels- und Industrieausstellungen teilzunehmen, Investitionen anzuziehen und neue Märkte zu entdecken.
    <br><br><span>Praktikum und Forschung:</span><br>
    <br> • Wir bieten bezahlte Praktikumsprogramme, Stipendien und Forschungsprojekte für alle ambitionierten und aktiven Personen über 18 Jahren an, die ausgebildet und Muttersprachler von Englisch, Deutsch, Chinesisch, Koreanisch, Russisch und anderen Fremdsprachen sind. Dazu genügt es, eine Nachricht im Kommunikationsbereich dieser Website zu hinterlassen. Wir arbeiten immer gerne mit Ihnen zusammen!
    <br><br><span>EuroLink Consulting Group – zu großen  Zielen…!</span><br>
    `,
    translation17: `Weg nach Europa`,
    translation18: `<br> 1. Was ist <span>Ausbildung?</span> <br>
    <br>Die Ausbildung ist ein Bildungssystem, genau wie unsere Berufsschulen.
    <br><br> (Es ist nicht 100% ähnlich. Tatsächlich gibt es keine alternative Vergleichsmöglichkeit in Usbekistan) Durch die Ausbildung erwerben Sie gleichzeitig praktisches und theoretisches Wissen in Bezug auf den Beruf, den Sie später ausüben möchten. Die Ausbildung kann je nach Fachgebiet zwischen 2 und 4 Jahren dauern.
    <br><br> Für manche Berufe reicht die Ausbildung aus, manche können nur durch ein Studium an einer Universität erlernt werden. Beispielsweise werden Berufe wie Koch, Klempner, Verkäufer, Bäcker, Friseur durch Ausbildung erworben, während Berufe wie Arzt, Lehrer, Rechtsanwalt durch ein Hochschulstudium erworben werden müssen. Informatik und ähnliche technische Fachrichtungen können sowohl mit Ausbildung als auch mit Hochschulstudium studiert werden. Sogar mit guten Kenntnisse und Arbeitserfahrungen kann man auch ohne Abschluss einsteigen.
    <br><br> Ein Auszubildender verbringt 2-3 Tage pro Woche in einer Berufsschule, um theoretisches Wissen zu erlernen, und die restlichen 2-3 Tage erlernt er praktisch, d.h. im Ausbildungsbetrieb. Oder er geht 1-2 Monate an einer Berufsschule und arbeitet dann die nächsten 1-2 Monate in seinem Betrieb. Es kommt auf den Ausbildungsbereich an (z. B. beim Koch durch Kochen im Restaurant).
    <br><br> Auch wenn der Hochschulzugang in Deutschland einfach und das Studium kostenlos ist, ziehen es viele Schulabgänger vor, eine Ausbildung zu machen, anstatt an einer Universität zu studieren. Dafür gibt es gute Gründe bzw Vorteile:
    <br><br> 1)<span> Sie werden während deiner Ausbildung monatlich bezahlt.</span> Im Durchschnitt erhält ein Auszubildender im 1. Jahr 750€, im 2. Jahr 850€ und im 3. Jahr 1000€.
    <br><br> In manchen Gegenden ist es bei 1100-1350€, mit einem Durchschnitt von 1000€.
    <br><br> 2)<span>Ausbildung ist viel einfacher als ein Studium an einer Universität</span>. Die Schüler müssen nicht den ganzen Tag in der Bibliothek verbringen. Nachdem er ein wenig Theorie gelernt hat, widmet er sich den Rest der Zeit seinem Beruf.
    <br><br> 3)<span>Nach der Ausbildung können Sie in der Organisation arbeiten, in der Sie die Ausbildung gemacht haben</span> (Wenn die und Sie es wollen). Dann, wenn dir der Ort, an dem du gearbeitet hast, nicht gefällt, können Sie sowohl den Ort und als auch den Arbeitgeber wechseln. Sie haben mit Ihrem Abschluss keine Schwierigkeiten wie bei den Hochschulabsolventen auf der Suche nach einem Job.
    <br><br> 4)<span>Für die Ausbildung ist kein C1-Sprachniveau erforderlich</span>, Sie können je nach Fachgebiet problemlos mit B1-B2 Deutschkenntnisse in die Ausbildung einsteigen.
    <br><br> 5)<span>Sie können eine Ausbildung mit Fachhochschulreife oder 11 jährigem Schulabschluss machen.</span> (Im Fall des usbekischen Bildungssystems)
    <br><br> In einigen Fragen gibt es diejenigen, die fragen, was zu tun ist, wenn das Gehalt niedrig ist. Sie beantragen BAB (Ausbildungsbeihilfe). Das zahlt das Jobcenter. Antragsberechtigt sind Personen, die außer Haus, ohne Betreuung durch Eltern und Angehörige sind und deren Monatsgehalt (während der Ausbildung) unter dem vom deutschen Statistikamt ermittelten monatlichen Mindesteinkommen liegt. Dieser Betrag beträgt derzeit 934 Euro (Oktober 2022).
    <br> <br>Die Ausbildung beginnt in der Regel im August oder September. Aber wenn du die Ausbildung an einem guten Ort machen willst, bewirb dich besser früh (5-6 Monate im Voraus).
    <br> <br> Manche Leute fragen, ob die Botschaft ein Visum für die Ausbildung ausstellt. Na sicher!!! Es braucht nur etwas Präzision und eine gute Vorbereitung in der Dokumentation.
    <br><br><span>2.Aupair-Programm</span>
    <br><br> "Au-Pair" ist ein kulturelles Austauschprogramm für Jugendliche, das es den Teilnehmern ermöglicht, neue Freunde zu finden und etwas über das europäische Leben zu lernen; bietet die Möglichkeit, bestehende Traditionen kennenzulernen und die Sprache schneller zu beherrschen, während Sie in einer deutschen Familie leben. 
    <br><br> Im Rahmen dieses Programms vermitteln Agenturen im Einvernehmen mit dem Bundesministerium junge Menschen als „Au Pairs“. Sie können im Internet nach Agenturen suchen, die Jugendliche im Rahmen des „Au-Pair“-Programms zum Arbeiten nach Deutschland entsenden, und sich ausführlich informieren.
    <br><br> Regeln für die Teilnahme am Programm
    <br><br> Um an einem "Au Pair" teilnehmen zu können, müssen Sie zwischen 18 und 26 Jahre alt sein und über Grundkenntnisse der deutschen Sprache verfügen. In einer deutschen Familie wird man als Familienmitglied willkommen empfangen und ist für sie kein Gast oder Arbeiter, sondern eine „ältere Schwester oder ein älterer Bruder“ für deren Kinder sowie eine „Hilfe“ für die Hausfrau.
    <br><br> Zu den Aufgaben eines „Au-Pair“ gehört die Betreuung derr Kinder mit Zustimmung der Eltern.
    <br><br> Die Betreuung umfasst die Teilnahme an verschiedenen Spielen zu Hause, im Kindergarten und auf dem Spielplatz, den Kindern vorlesen, baden und Essen anreichen, malen, einschläfern, ankleiden, das Kinderzimmer reinigen, die ständige Überwachung und Pflege und die Mithilfe bei der Hausarbeit.
    <br><br> Der befristete Arbeitsplan des Au Pairs wird mit der Familie vereinbart. Die Mithilfe bei der Hausarbeit kann bis zu 50 % der wöchentlichen Arbeitszeit ausmachen. Die wöchentliche Arbeitszeit von "Au-Pair" beträgt insgesamt 30-35 Stunden. Dazu gehört auch die abendliche Kinderbetreuung 2-3 Mal pro Woche.
    <br><br> Die Gastfamilie wiederum ist verpflichtet, dem Aupair ein separates Zimmer, Verpflegung und eine monatliche Taschengeld (durchschnittlich 260 Euro) zur Verfügung zu stellen. „Au Pair“ können sich wieder am für Ausländer offenen Deutschkurs teilnehmen. Einige Familien zahlen für den Deutschkurs. Dies ist eine weitere großartige Gelegenheit.
    <br><br> Au Pairs haben mindestens 1,5 freie Tage pro Monat und Ruhetage je nach Freizeit der Eltern. Außerdem wird von der Familie eine Monatskarte für den öffentlichen Nahverkehr gestellt oder, falls die Familie über ein Auto verfügt, darf dieses genutzt werden.
    <br><br> Bei einer Programmdauer von 10 Monaten 2 Wochen pro „Au Pair“; Bei 12 Monaten werden 4 Wochen bezahlter Urlaub gewährt.
    <br><br> Dauer des Aufenthalts?
    <br><br> - Du kannst als "Au-Pair" von 6 bis 18 Monaten arbeiten.
    <br> <br><span>3. Freiwilligendienste (FSJ, FÖJ, BFD)</span>
    <br><br> Wenn Sie kein Au Pair sein möchten, können Sie durch die Programme FSJ (Freiwilliges Soziales Jahr), BFD (Bundesfreiwilligendienst) oder FÖJ (Freiwilliges Ökologisches Jahr) nach Deutschland kommen. Dieses Programm dauert 6 bis 18 Monate und während des Programms können Sie nicht nur in Pflegeheimen, Behindertenheimen, Kindergärten, Schulen, Krankenhäusern und ähnlichen sozialen Bereichen, sondern auch in Naturschutzgebieten, Sportvereinen, Forstwirtschaft arbeiten als ehrenamtlicher Mitarbeiter in Nichtregierungsorganisationen und verschiedenen Stiftungen. Sie erhalten ein Taschengeld von ca. 300-560€ pro Monat. Einige Arbeitgeber stellen ihren Freiwilligen auch eine Unterkunft und eine Monatskarte für die öffentlichen Verkehrsmittel zur Verfügung. Freiwillige müssen während des Praktikums 40 Stunden pro Woche in ihrem Unternehmen arbeiten. Während dieser Zeit ist Ihnen jegliche andere Erwerbstätigkeit untersagt. Außerdem werden durchschnittlich 26 Tage Jahresurlaub gewährt.
    <br><br> Die Anforderungen für das Programm sind wie folgt:
    <br><br> Deutschkenntnisse mindestens auf B1-Niveau (wenn Sie leichter einen Platz finden und einen besseren Platz auswählen möchten, empfehlen wir B1-Niveau. Tatsächlich ist es auch möglich mit A1 Deutschkenntnisse aber in der Praxis wird auf diesem Fall sehr schwierig, konkurrenzfähig zu sein. Deutsch besser zu lernen hat immer empfohlen, damit Sie zu Ihnen mehr Chance gewinnen können)
    <br><br> Für FSJ und FÖJ ist ein Mindestalter von 27 Jahren erforderlich. Es gibt keine Altersgrenze für BFD, das ist der einzige Unterschied zwischen denen.
    <br><br><span>4. Sprachkurs.</span> 
    <br><br>  Einen Sprachkurs direkt in Deutschland zu machen ist eine tolle Option, aber nicht jeder kann es sich leisten. Trotzdem ist es eine sehr optimale Möglichkeit, Zeit zu gewinnen, sich schneller an die deutsche Gesellschaft anzupassen und Chancen schneller wahrzunehmen.
    <br><br>  Benötigte Unterlagen dafür:
    <br><br>  1) Sprachkursvertrag
    <br><br>  Im Vertrag sollte festgehalten werden, dass die Unterrichtseinheiten des Sprachkurses mindestens 6 Monate dauern und offline (live und klassisch) stattfinden.
    <br><br>  2) Nachweisen und zu Verfügung stellen die Ausbildungsunterlagen.
    <br><br>  Zeugnisse und Zeugnisse vom Schul-, Fachhochschul-, Realschul-, Fachhochschul- oder Bachelorabschluss und deren notariell beglaubigte Übersetzung ins Deutsch.
    <br><br>  3) Geldbetrag auf Sperrkonto (eingefrorenes Bankkonto) für mindestens 6 Monate. Die monatlichen Mindestausgaben werden jährlich vom Statistischen Bundesamt und der Regierung veröffentlicht. Ab dem 1. Januar 2023 beträgt das 934 Euro (11.208 Euro pro Jahr).
    <br><br>  4) Krankenversicherung (nach Ausstellung des Visums zur Botschaft bringen)
    <br><br>  5) Lebenslauf
    <br><br>  6) Motivationsschreiben (Begründung)
    <br><br>  7) Roter Pass
    <br><br>  8) Deutscher Sprachnachweis (wenn vorhanden, aber in der Praxis einer der wichtigsten Aspekte für die Erhaltung eines Visums)
    <br><br>  9) Biometrisches Foto (3×5 und 4×5), 3 Stück
    <br><br>  10) Der Sprachkurs muss intensiv sein und sollte mindestens 18 Stunden pro Woche umfassen.
    <br><br>  11) Während des Sprachkurses darf nicht gearbeitet werden!
    <br><br>  12) Wenn Sie nach dem Sprachkurs bleiben möchten, geben Sie einen Grund an. Zum Beispiel: Ausbildung, Studienkolleg, Hochschule usw.
    <br><br>  13) Das Gespräch wird einfacher sein als in anderen Fällen.
    <br><br><span>5. Studium: Bachelor, Master, PhD</span>
    <br><br> Die Plattform www.uni-assist.de ist eine der nützlichsten Seiten für Bewerber, die in Deutschland einen Bachelor- oder Masterstudiengang absolvieren möchten.
    <br><br> Über diese Plattform können Sie genügend Informationen über Universitäten erhalten und alle ihre Dienste zur Erstellung von Dokumenten nutzen. Diese Dienste der internationalen Seite sind definitiv nicht kostenlos!
    <br><br> Um an deutschen Hochschulen studieren zu können, muss Ihr Deutschniveau auf C1 liegen. An einigen Orten finden Sie Universitäten, die B2-Abschlüsse akzeptieren.
    <br><br> Wenn Sie auf Englisch studieren möchten, muss Ihr IELTS-Level mindestens 6 oder 6,5 betragen. Die staatliche Universitäten, an denen der Unterricht auf Englisch gehalten wird, sind gesetzlich kostenfrei. Man muss nur manche Administrativkosten bezahlen. Das ist auch maximal 450 Euro pro Semester. Auch wenn Sie nach Deutschland kommen, um auf Englisch zu studieren, sind Sie verpflichtet, Deutsch zu lernen. Denn die Landessprache ist Deutsch. Dies macht sich sehr bemerkbar, wenn Sie  Geld verdienen möchten und arbeiten anfangen.
    <br><br> Eine der besten Möglichkeiten in der Hochschulbildung ist die duales Studium. Der Prozess ist derselbe wie die oben beschriebene Ausbildung. Aber am Ende Ihrer Ausbildung erhalten Sie ein Hochschulabschluss und finden dank der umfangreichen theoretischen und praktischen Erfahrungen, die Sie während des Studiums gesammelt haben, sehr schnell und zuverlässig einen gutbezahlten Job. Es gibt für Studium zahlreiche Stipendien, Stiftung und Förderungen wie DAAD, Heinrich Seidel, Konrad Adenauer, Erasmus, Copernicus, Deutschlandstipendium, Heinrich Böll, SdW (Stipendium für die deutsche Wirtschaft), Fulbright, Friedrich-Naumann-Stiftung, Avicenna, Cusanuswerk, Studienstiftung des Deutschen Volkes, Hans Böckler und noch mehr andere. Monatlich kann jeder begabte Student etwa bis zu 1000-1200 Euro finanzielle Unterstützung erhalten. PhD Forscher bekommen schon etwa 1000-2500 Euro.
    <br><br> <span>6. Als erfahrene Fachkraft arbeiten</span>
    <br><br> Wenn Sie über einen Hochschulabschluss, Berufserfahrung und Qualifikationen verfügen, können Sie durch Abschluss eines Arbeitsvertrags direkt mit einem Arbeitgeber in Deutschland ein Arbeitsvisum erhalten, wenn Sie Deutsch auf dem B2-Niveau gelernt haben. Wenn Sie noch keinen Vertrag haben, erhalten Sie ein Visum zur Arbeitssuche, um für 6 Monate nach einem Job zu suchen. Sie alle erfordern, dass Sie systematisch an sich arbeiten und ein Niveau erreichen, das den Anforderungen entspricht. Vor allem in den Bereichen IT, Medizin, Technologie, Ingenieurwesen und künstliche Intelligenz besteht eine wachsende Nachfrage nach ausländischen Fachkräften.
    `,
    translation19: "Unsere Resultate",
    translation20: "Kontakt",
    translation21:
      "Ihre Meinung uns sehr wichtig! Falls Sie Fragen, Vorschläge, Beschwerden, Gedanken und Wünsche haben, können Sie jeder Zeit rund um die Uhr uns kontaktieren:",
    translation22: "Ihre Errungenschaft ist unser Ziel!",
    translation23: "EuroLink- zu großen Zielen...",
    translation24: "Adresse : <span>Bunyodkorstr 1</span>, , 100035 Taschkent,",
    translation25: "Orientierung:  Ziraatbank, S-Bahn Station Novza.",
    translation26: "Folge uns👇",
    translation27: `Experte und Mentor für B2B Dienstleistungen und FSJ/BFD/ FÖJ,
                    Beauftragte im Rahmen Förderung beim Berufsauswahl. <br>
                    Hat 3 jährige Berufserfahrung in Klinikum Stuttgart.<br>
                    Extra: Manager bei „E-Bike Laden Stuttgart"<br>
                    Stuttgart (Deutschland)<br>
    `,
    translation28:
      "Deutschlehrer und Mentor, Lehrplanungsberater. Junior Consultant im Rahmen des Ferienjobs, Erfahrungen seit 2021  <br> in Würzburg, Bremen und Stuttgart. C1 Sprachkenntnisse. <br> Hat 2017 in der Olympiade für die deutsche Sprache die 1.Stelle bekommen .  Aktivist an der Uni und im Goethe Institut Taschkent. <br> Extra: Student an der Weltsprachenuniversität Usbekistans. <br> Taschkent (Usbekistan) <br>",
    translation29:
      "Lehrerin für Deutsch, Englisch und Russisch. Beraterin in der Lehrplanung.  Hat 3 jährige professionellen pädagogischen Berufserfahrungen  <br> und C1 Sprachniveau in diesen Sprachen. Koordinatorin der Richtung Übersetzungstheorie und stilistische Methodik. Hat 2017 die 1.Stelle in der Olympiade für russische Sprache bekommen. <br> Extra: Studentin an der Weltsprachenuniversität Usbekistans. <br> Taschkent (Usbekistan) <br>",
    translation30: `Lehrerin für Deutsch und English.  Lehrplanungskoordinatorin. Mentorin mit 4 jährigen pädagogischen Berufserfahrungen und C1 Sprachkenntnisse in beiden Sprachen. Grafikeditorin und Targetologe,  Journalistin der ECG Akademie. Ehrenamtliche Dolmetscherin im Goethe Institut, Moderatorin in Telekanal „Foreign Languages". Zusage von Viadrina Universität Frankfurt am Oder und Stipendiat Mint Sommerschule. <br>Extra: Studentin an der Weltsprachenuniversität Usbekistans. <br>Taschkent (Usbekistan) <br>`,
    translation31:
      "Administration, Operatorin für den Targeting, SMM und Design, Kontrolle der Lehrprozesse und Rezeption, <br> Beauftragte für die Organisierung der Operationprozessen. <br> Extra: Studentin an der Weltsprachenuniversität Usbekistans. <br> Taschkent (Usbekistan) <br>",
    translation33:
      "Administration, Beirat für die Leitung und Planung, Kontrolle der Lehrprozesse und Rezeption, <br> Beauftragte für die Organisierung der Operationprozessen. <br> Extra: Studentin an der Taschkenter pädagogischer Universität. <br> Taschkent (Usbekistan) <br>",
    translation34:
      "Grafikdesigner, Mitglied der Marketing und SSM Abteilung, Spezialist für die Bearbeitung und Sozialbefragung. <br> Extra: Student an der Samarkander medizinische Universität <br> im Fachbereich Chirurgie. <br> Samarkand (Usbekistan) <br>",
    translation35: "Yusupova Sevinchoy (Usbekistan, 26 J.a.)",
    translation36: "Visum für Aupair Programm im Mai (2022) erhalten.",
    translation37:
      "Sie hatte EuroLink Consulting Group im April kontaktiert. Aber im Laufe eines Monats hat sie geschafft, mit A2 Sprachzertifikat auf die allen Bewerbungsprozessen gut sich vorzubereiten, das Visum zu bekommen und die Gastfamilie in Dresden zu erreichen.",
    translation38: "Heutzutage macht sie Aupair in Sachsen.",
    translation43: "Bui Thi Phuong (Vietnam, 20 J.a.)",
    translation44: "Sie hat Aupairvisum im August (2022) bekommen.",
    translation45:
      "Als sie EuroLink CG kontaktierte, lernte sie Deutsch laut unserer Empfehlung in EuroLink Academy weiter, weil sie A2 Prüfung nicht geschafft hatte. In kurzer Zeit konnte sie wegen unserer Unterstützung dann A2 Zertifikat erhalten und Zusage von Gastfamilie und Botschaft bekommen.",
    translation46: "Heutzutage macht sie Ihr Aupair in München weiter.",
    translation47: "Abdullokh Akhmadjonov (Usbekistan, 23 J.a.)",
    translation48:
      "Er hat sein Visum für die Ausbildung als Hotelfachmann im September (2022) bekommen.",
    translation49:
      "Obwohl sein B1 Zertifikat nicht vollständig war, hat er seine Hoffnung nicht verloren und uns kontaktiert. Er war sehr verantwortungsvoll und hatte sich auf die Aufgaben von ECG fokussiert. Deshalb konnte er weniger als 5 Monaten Zusage ohne Zertifikat bekommen. Es ist sehr schön nicht dass er seine Ausbildung in Traumberuf macht, außerdem auch dass er in 2 Jahren schon abschließen  wird und in diesem Zeitraum im besten Hotel und in malerischen Landschaften in den Alpen bei München arbeitet. Das kann sogar kein Milliarder schaffen..",
    translation50: "Jetzt führt er seine Ausbildung in Bayern weiter.",
    translation51: "Charos Boltaeva (Usbekistan, 21 J.a.)",
    translation52: "Sie hat ein Visum für Aupair im September (2022) bekommen.",
    translation53:
      "Bei ihr war schon A2 Sprachkenntnisse und lernte sie noch weiter. Für Beratung im Rahmen Aupair hat sie mit uns im Juli einen Vertrag abgeschlossen. Um sich auf die Gespräche mit der Gastfamilie und Botschaft gut vorbereiten zu können, lernte sie Deutsch noch in unserer EuroLink Academy. In 2 Monaten konnte nach Deutschland fliegen.",
    translation54: "Heutzutage macht sie Aupair in Bayern.",
    translation55: "E'zozakhon Inomjonova (Usbekistan, 21 J.a.)",
    translation56: "Ihr Visum im August (2022) für Aupair erhalten.",
    translation57:
      "Sie hatte mit B1 Sprachzertifikat uns kontaktiert und die Planung von unser Coworking ernst gefolgt. Sie hat dann alle notwendigen Kenntnisse erlernt, die Gastfamilie gesucht und sich auf die Botschaft vorbereitet. In 2 Monaten hatte Visum gekriegt und zur Familie geflogen.",
    translation58: "Heutzutage macht sie Aupair in Baden-Württemberg.",
    translation59: "Malika Bayazova (Kirgisistan, 19 J.a.)",
    translation60: "Sie hat ihr Visum für Aupair im August (2022) bekommen.",
    translation61:
      "Im Juni hatte sie angefangen unsere Coaching zu benutzen. Obwohl sie nur A1 Sprachzertifikat hatte, konnte sie in 3 Monaten Visum erhalten und in der Gastfamilie sein. Weil sie die Strategie von EuroLink Consulting  Group gut verstanden und Mühe gegeben hatte.",
    translation62: "Jetzt macht sie Aupair in Stuttgart.",
    translation63: "Gulinargiz Khurramova (Usbekistan, 25 J.a.)",
    translation64:
      "Im August(2022) hat sie ihr Visum für die Ausbildung als Zahnmedizinsche Fachangestellte erhalten.",
    translation65:
      "Nachdem Ihr Interesse an der Ausbildung entstanden war, versuchte sie zuerst alles selsbst zu machen. Aber das war unerfolgreich weil sie nur B1 Sprachkenntnisse und keine Arbeitserfahrung hatte. Trotzdem hatte sie weitergekämpft und EuroLink CG angerufen. Mit den Kenntnisse in unserem Coworking Centre konnte sie sich gut vorbereiten und sich an den Interviews besser teilnehmen. Als Resultat unterschrieb sie nur in einem Monat einen Ausbildungsvertrag.",
    translation66: `Jetzt arbeitet sie als Azubi bei "Hahm Dental" Zahnarztpraxis in Jena (Thüringen).`,
    translation67: "Orzugul Murodova (Usbekistan, 25 J.a.)",
    translation68:
      "Sie hat ein Ausbildungsvisum als Steuerfachangestellte im August(2022) bekommen.",
    translation69:
      "Mit B2 Sprachkenntnisse hat sie im Juni EuroLink CG kontaktiert. Während der Quo-Status Analyse wurde ihr empfohlen durch das Sprachzertifikat noch einen Vorteil zu sichern. In kurzer Zeit hat sie sich in Coworking Zentrum gut vorbereitet und Zertifikat erhalten. Nach den vielen Interviews und Praktika hat sie sich für Steuer und Wirtschaftsprüfung entschieden.",
    translation70: `Heutzutage arbeitet sie in Duisburg(NRW) bei "Taxim Steuerhilfeverein GmbH".`,
    translation71: "Shakhriddin Korakhanov (Usbekistan, 25 J.a.)",
    translation72:
      "Sein Visum ist im September (2022) für die Ausbildung in Hotel Management erteilt.",
    translation73: `Mit EuroLink Consulting Group hatte er im Juni Vertrag gemacht. Da sein Sprachkenntnisse B1 war, musste er sehr intensiv lernen. Er konnte die tägliche Aufgaben, psychologische Übungen von uns gut erledigen.
    Nach der 4 monatigen Vorbereitung hat er in Interviews viele Zusagen bekommen. So war er vor dem Auswahl zwischen München, Berlin und Stuttgart.`,
    translation74: `Heutzutage beschäftigt sich er in Berlin mit Ausbildung in "Palace Hotel".`,
    translation75: "Marjona Kuvondikova (Usbekistan, 25 J.a.)",
    translation76:
      "Ihr Visum für die Ausbildung in Zahnmedizinische Fachangestellte ist im Oktober (2022) erteilt.",
    translation77:
      "Obwohl sie B2 Deutschsprachzertifikat hatte, erhielt sie nur Absagen von Aupair Programm (laut ihr). Dann hat sie mit EuroLink CG Kontakte aufgenommen. Bei erster Quo-Status Analyse im Juni wurde ihr die Ausbildung angeboten anstatt Aupair und direkt neue Strategie erstellt. Sie war selbst auch ambitioniert und belastbar. Als Resultat hat sie viele Zusagen bekommen.",
    translation78: `Heutzutage führt sie ihre Tätigkeit als Azubi bei "Hahm Dental" GmbH Zahnarztpraxis bei Frau Dr Buchheim in Jena (Thüringen).`,
    translation79: "Ihr Vor- und Nachname *",
    translation80: "Ihre Telefonnummer *",
    translation81: "Ihre Emailadresse *",
    translation82: "Ihre Nachricht *",
    translation83: "Senden",
    translation84: "Eurolink Consulting Group (ECG) © Alle Rechte vorbehalten",
    // new Unsere Resultate
    translation85: "Saida Sayduvalieva (Usbekistan,20 J.a)",
    translation86:
      " Unsere Kunden wird ab November das Aupair-Programm in Frankfurt starten.",
    translation87:
      "Doch es ist nicht ihr erster Versuch, ein Visum zu bekommen. Trotz einer vor einiger Zeit erfolgten Absage der Botschaft haben sie sich bei uns beworben, unsere Schulungen besucht und die Aufgaben des Coworking Centers übernommen.",
    translation88:
      "Danach verging ein Monat und sie bekamen endlich das Visum!",
    translation89:
      "Bei Problemen mit Botschaft, Dokumenten und Visa können Sie sich gerne an uns wenden",
    translation90: "Abdukakhkhorov Mukhammadjon (Usbekistan,27 J.a)",
    translation91:
      "Unser Kunde kontaktierte uns im Juni und lernte weiter die Sprache. Auch unser Coworking Center kümmerte sich um ihre Unterlagen. Die Absolventen der Zahnmedizin in Usbekistan und Muhammadjon erhielten ein Visum, um direkt in Deutschland als Zahnmedizinische Fachangestellte zu arbeiten. Der zukünftige Arbeitsplatz ist die private Zahnklinik „Pezeshkpour“ in Aachen. Sie beginnen ihre Arbeit mit einem Gehalt von 2000 €.",
    translation92: "Khurozova Marjona (Usbekistan,23 J.a)",
    translation93: "Visum fur Aupair Programm im Nowember (2022) erhalten.",
    translation94:
      "Unser Kunde hat sich erst vor 20 Tagen beworben und obwohl seine Sprachkenntnisse A1 sind, hat er die gegebenen Ratschläge befolgt, die Sprache ordnungsgemäß gelernt, die Dokumente recherchiert und vorbereitet und schließlich das Visum erhalten.",
    translation95:
      "Khurozova Marjona startete im November das Aupair-Programm in Groß Krams, Mecklenburg-Vorpommern.",
    translation96: "Homidov Bekhzod (Usbekistan,26 J.a)",
    translation97:
      "Unser Kunde Hamidov Bekhzod kontaktierte uns im Juli und lernte weiter die Sprache. Auch unser Coworking Center kümmerte sich um ihre Unterlagen. Bekhzod, der als Arzt in Usbekistan arbeitet, erhielt ein Visum, um direkt in Deutschland als Medizinischer Fachangestellter zu arbeiten. Sie begannen mit einem Gehalt von 2000 €. Dieses Ergebnis erreichten sie, indem sie die richtige Wahl trafen und vier Monate lang geduldig und hart arbeiteten!",
    translation98: "Matnazarov Bunyod (Usbekistan, 19 J.a)",
    translation99:
      "Er hat sein Visum für die Ausbildung als Hotelfachmann im Januar(2023) bekommen.",
    translation100:
      "Matnazarov Bunyod bewarb sich im September bei uns und lernte dann weiter die Sprache. Außerdem hat er, den gegebenen Ratschlägen folgend, die Dokumente sorgfältig durchsucht und vorbereitet. Dadurch erhielt er ein Visum für das Ausbildungsprogramm. Matnazarov Bunyod begann am 1. Februar als Hotelfachmann im Ibis-Hotelsystem in München, Bayern, zu arbeiten.",
    translation101: "Khayitbayeva Shokhsanam (Usbekistan, 22 J.a)",
    translation102:
      "Sie bekam sein Visum im Februar (2023) im Rahmen des Aupair-Programms!",
    translation103: "Geduld zahlt sich auf jeden Fall aus.",
    translation104:
      "Hayitboyeva Shohsanam folgte den gegebenen Ratschlägen und studierte systematisch die Sprache, recherchierte und bereitete Dokumente vor. Deshalb starteten sie im Februar ein Aupair-Programm in Hagen.",
    translation105: "Mukhtorov Khumoyunmirzo (Usbekistan,25 J.a)",
    translation106: "Visum fur Aupair Programm im Februar (2023) erhalten.",
    translation107:
      "Unser Kunde hat im Februar ein Aupair-Programm in Pulheim gestartet!Humayunmirza folgte den gegebenen Ratschlägen und lernte die Sprache in geordneter Weise. Auch unser Coworking Center kümmerte sich um ihre Unterlagen. Infolgedessen bekam er ein Visum.",
    translation108:
      "Wir glauben, dass viele dieser Aspiranten sicherlich Erfolg haben werden, wenn sie es versuchen. Du kannst es auch tun!",
    translation109: "Mukhtorov Javokhir (Usbekitan,33 J. a)",
    translation110:
      "Er hat sein Visum im Februar (2023) des Programms „Medizinische Fachangestellte“ erhalten!",
    translation111:
      "Unser Kunde  Javahkir kontaktierte uns im November und lernte weiter die Sprache. Auch unser Coworking Center kümmerte sich um ihre Unterlagen. Jawohkir, der als Arzt in Usbekistan arbeitet, erhielt ein Visum, um direkt in Deutschland als Medizinischer Fachangestellter zu arbeiten. Sie begannen mit einem Monatsgehalt von 2000 €. Dieses Ergebnis erreichten sie, indem sie die richtige Wahl trafen und vier Monate lang geduldig und hart arbeiteten!",
    translation112: "Khotamova Ezoza (Usbekistan,20 J.a)",
    translation113:
      "Sie hat es im Februar (2023) geschafft, ihr Visum im Rahmen des Aupair-Programms zu bekommen!",
    translation114:
      "Unser Kunden, Ezoza folgte den gegebenen Ratschlägen und recherchierte und bereitete die Unterlagen systematisch auf.Deshalb starteten die Ezozas im Februar ein Au-Pair-Programm im baden-württembergischen Winzeln.",
    translation115: "Murotova Khusniyakhon (Usbekistan, 19 J.a)",
    translation116:
      "Sein Visum erhielt er im Februar (2023) im Rahmen des Aupair-Programms.",
    translation117:
      "Unser Kunde hat im Februar ein Aupair-Programm in Hamburg gestartet!",
    translation118:
      "Khusniyakhon folgte den gegebenen Ratschlägen und lernte die Sprache in geordneter Weise. Auch unser Coworking Center kümmerte sich um ihre Unterlagen. Infolgedessen bekam er ein Visum.",
    translation119:
      "Wir glauben, dass viele dieser Aspiranten sicherlich Erfolg haben werden, wenn sie es versuchen. Du kannst es auch tun!",
    translation120: "Makhmudov Shokhruhbek (Usbekitan, 21 J.a)",
    translation121:
      "Unser Lehrer Makhmudov Shokhrukhbek, der unsere Schüler unterrichtet, hat jetzt ein Erasmus+-Stipendium für ein Studium in Deutschland gewonnen.",
    translation122:
      "Sein Austauschstudium begann er an der Ruhr-Universität in Bochum, Nordrhein-Westfalen (NRW).",
    translation123:
      "Unser Team hilft nicht nur dabei, das Niveau ihrer Zuhörer und Lehrer zu verbessern, sondern ihnen auch Türen zu neuen Möglichkeiten zu öffnen!",
    translation124: "Mamadaliev Islomjon (Usbekistan, 27 J.a)",
    translation125:
      "Er hat es im März (2023) geschafft, sein Visum im Rahmen des Programms „Medizinische Fachangestellte“ zu bekommen!",
    translation126:
      "Islamjon, der als Arzt in Usbekistan arbeitet, erhielt ein Visum, um direkt in Deutschland als Medizinischer Fachangestellter zu arbeiten.Unser Kunde ist seit März als Medizinische Fachangestellte im Radiologischen Zentrum in Rottweil, Baden-Württemberg tätig.",
    translation127: "Rakhmatullayev Umidulla (Usbekistan, 25 J.a)",
    translation128:
      "Sein Visum erhielt er im März (2023) im Rahmen des Programms „Medizinische Fachangestellte“.",
    translation129:
      "Umidulla hat nun ein Visum für die Tätigkeit als Medizinische Fachangestellte erhalten und arbeitet seit März in der privaten Zahnklinik „Doctor Nienaber und Partner“ in der Nähe von Dortmund, Nordrhein-Westfalen (NRW).",
    translation130: "Makhmudov Ramziddin (Usbekistan, 25 J.a)",
    translation131:
      "Es ist mir gelungen, im März (2023) ein Visum im Rahmen des Aupair-Programms zu bekommen!",
    translation132:
      "Makhmudov Ramziddin seit März startet Balve ein Au Pair Programm in Garbeck.Ramziddin folgte den gegebenen Ratschlägen und lernte die Sprache in geordneter Weise. Auch unser Coworking Center kümmerte sich um ihre Unterlagen. Als Ergebnis bekamen sie ein Visum.",
    translation133: "Wir freuen uns, zur Zukunft unserer Kunden beizutragen!",
    translation134: "Mamadalieva Mubinakhon (Usbekistan, 25 J.a)",
    translation135:
      "Im März (2023) gelang es ihnen, im Rahmen des Programms „Medizinische Fachangestellte“ ein Visum zu bekommen.",
    translation136:
      "Mamadalieva Mubinakhon, die als Ärztin in Usbekistan arbeitet, hat ein Visum erhalten, um direkt in Deutschland als Medizinische Fachangestellte zu arbeiten.Mubinakhon mit seinem Partner Islambek Mamadaliev sie begannen ihre Arbeit im Radiologischen Zentrum im baden-württembergischen Rottweil.",
    translation137:
      " Nun unterstützt Sie unser Team tatkräftig bei der Fortführung Ihres Familienunternehmens in Deutschland!!!",
    translation138: "Akramjonova Khulkaroy (Usbekistan, 23 J.a)",
    translation139:
      "Er hat es geschafft, sein Visum im Mai (2023) im Rahmen des Aupair-Programms zu bekommen.",
    translation140:
      "Unser Kunde, Khulkaroy im Juni startet die Familie Hersch Rahman Ahmed ein Au-Pair-Programm im nordrhein-westfälischen Neuss.Khulkaroy folgte den gegebenen Ratschlägen, lernte die Sprache in geordneter Weise und war gefragt. Auch unser Coworking Center kümmerte sich um ihre Unterlagen. Infolgedessen bekam er ein Visum.",
  },

  UZB: {
    menu1: "Bosh sahifa",
    menu2: "Biz haqimizda",
    menu3: "Umumiy ish jarayoni",
    menu4: "Firma tuzilishi",
    menu5: "„EuroLink“ jamoasi ",
    menu6: " Xizmatlar",
    menu7: "Yevropaga yo'l ",
    menu8: "Natijalar",
    menu9: "Biz bilan bog'laning",
    translation1: "Biz haqimizda qisqacha ma'lumot",
    translation2:
      "„EuroLink“ firmasi 2022- yil may oyidan boshlab faoliyat yuritib kelmoqda. Bosh ofisimiz Toshkent shahrida joylashgan bo’lib, hozirgi kunda nemis, ingliz, rus, xitoy, koreys kabi chet tillari va IT sohasida yoshlarga bilim berish bilan birga chet elda o’qish, ish, malaka oshirish, turlicha xalqaro stipendiya dasturlarini yutishda hamda tibbiyot, texnologiya, energetika, muhandislik va iqtisodiyot kabi ilm sig'imi katta sohalarda yosh olimlarni chet davlatlarda tadqiqot ishlarini olib borishlarida yaqindan yordam berishni niyat qilganmiz.",
    translation3: "Umumiy ish jarayoni",
    translation4:
      "Har bir murojaat birlamchi qabul qismida <span>administratsiya</span> tomonidan suhbatdan o'tadi va konsultatsiya beriladi. <span>Front-Office</span> ning bu qismidan <span>Status Quo-Analiz</span> jarayoniga yuboriladi. Bunda vaziyatdan kelib chiqib, sohaga aloqador jamoa a'zolari tomonidan yordam so'ragan shaxsning joriy imkoniyatlari, rejalari, kuchli jihatlari va mavjud risklar o'rganiladi. Tahlil tugatilgach <span>Back-Office</span>  qismiga o'tkaziladi. Strategik jamoa aktual siyosiy-ijtimoiy va xalqaro vaziyat hamda Status Quo-Analyse natijalaridan kelib chiqib, maxsus algoritm yaratadi. Ushbu vazifalar ketma-ketligi bo'yicha ishga kirishiladi. <span>Coworking</span> (qo'llab-quvvatlash va nazorat) markazida yuqoridagi algoritm asosida loyiha yaratiladi hamda uning amalga oshirilishi tashkil etiladi. Bunda loyiha ko'lamiga qarab, EuroLink tarkibidagi barcha tuzilmalar, xususan o'quv markaz, yuridik va marketing bo'limi, ekspertlarimiz, tarjima markazi, bozor analitiklari, kooperatsion va xalqaro aloqalar bo'limi, dasturchi va dizaynerlar, bugalteriya va tashqi hamkorlarimiz faol qatnashishadi.Nazorat va arznomalar ta'sischilar va yuridik bo'lim tomonidan ko'rib chiqilib, chora-tadbirlar amalga oshiriladi. ",
    translation5: "„EuroLink“ jamoasi",
    translation6: "Ta'sischilar",
    translation7:
      "Ta’sischi, sifat va strategik menejer,<br>avtomatlashtirish va bozor analitikasi nazorati.<br>Qo'shimcha: addOn Solution MChJ texnologik <br>firmasida IT tizimlari menejeri, <br>Jena (Germaniya)",
    translation8:
      " Ta’sischi, strategiya va xalqaro aloqalar bo'yicha menejer,  <br>Audit, HR va transformatsion jarayonlar nazorati. <br>Qo'shimcha: BDU menejment maslahatlari <br>federativ birlashmasida Junior analitik;  <br>Hamburg universiteti magistranti, <br>Hamburg (Germaniya)",
    translation9:
      "Ta'sischi, operatsion faoliyat va raqamlashtirish menejeri, <br>yurisprudensiya, logistika va xo'jalik nazorati. <br>Qo'shimcha: O'sh Davlat Universiteti Information xavfsizlik yo'nalishi talabasi, <br>Samarqand (O'zbekiston)",
    translation10: "Ekspertlar",
    translation11:
      "IT-ekspert va mentor, <br>intervyular va networking  bo'yicha bosh maslahatchi. <br>Qo'shimcha: POELLATH+ firmasi Legal Digital <br>Transformatsion bo'limida IT Injener. <br>München (Germaniya)",
    translation12:
      "Studienkolleg va til kurslari bo'yicha ekspert va mentor, <br>integratsiya hamda ta'lim mavzularida bosh maslahatchi, <br>psixologik usullar murabbiyi. <br>Qo'shimcha: Leipzig Studienkolleg dasturi ishtirokchisi, <br>bo’lajak biotexnologiya va tibbiyot eksperti, <br>Leipzig (Germaniya)",
    translation13:
      " Tibbiyot eksperti va mentor, <br>intervyular va networking bo'yicha maslahatchi, <br>psixologik usullar bosh murabbiyi. <br>Qo'shimcha: Pezeshkpour xususiy stomatologiya <br>klinikasida vrach bo'lib faoliyat yuritmoqda. <br>Aachen (Germani",
    translation14: "O'quv markaz",
    translation15: "Bizning xizmatlarimiz",
    translation16: `<br>
    <span>Akademik xizmatlar:</span> <br> <br> 
    • Hozirda zamon trendidagi chet tillari  hamda IT sohasida nemis va yapon standartlariga mos ta’lim berish. Xususan, ingliz (IELTS, SAT, GMAT, GRE),  nemis  ( Goethe Zertifikat, TestDAF, ECL, telc Deutsch, Test-AS, TM-WISO, DSH, DSD), xitoy (HSK), koreys (TOPIC) va rus (TRKI) tilidagi barcha xalqaro sertifikatlari hamda Yevropa davlatlari ta’lim sistemasiga  o‘quvchilarimizni to’liq ilmiy va ruhan tayyorlash; 
    <br>• IT dasturlash tillari (Full-stack), web dizayn, marketing va SMM kabi zamonaviy kasblarni o'rgatish;
    <br> <br>  <span>Konsultatsiya va Coaching:</span> <br>
    <br>  •  Barcha turdagi  ko'nggilli xizmat ( FSJ/BFD/FÖJ ) va adaptatsion (Au-pair) dasturlarida qatnashish uchun yo'nalish va yuridik  yordam ko'rsatish hamda elchixonaga hujjatlar masalasida maslahatlar berish;
     <br> •  Oliy ta'lim uchun stipendiya dasturlari topish va undagi raqobatga tayyorlash ( Yevropa, Xitoy hamda iqtisodiy va texnologik rivojlangan „Osiyo yo'lbarslari“ deb nomlanadigan Janubiy Koreya, Singapur, Malayziya, Hong-Kong, Tayvan mamlakatlari);
    <br>  •  Oliy ta'limning turlicha usullarida (normales, duales, triales, Doppel-va Fernstudium) muzlatilgan bank hisobisiz (Sperrkonto) ta'lim olishda ko'maklashish;
    <br>  •  Kasbiy ta’lim (Ausbildung) bo’yicha barcha zamonaviy va daromadli sohalarda ish o'rni topishda konsultatsiya berish;
    <br>  • O'qishga kira olmagan abiturientlar uchun eng kuchli 1000 talikka kirgan va nostrifikatsiyasiz diplomi amal qiladigan Qirg'iziston, Qozog'iston, Tojikiston va hattoki Turkiya davlatlaridagi universitetlarga imtihonsiz va suhbat orqali talaba bo'lish imkoniyatini taqdim etadi. Bunda yilning har qanday vaqtida ularga ariza topshirish mumkin;
    <br>  •  Shifokorlar uchun MFA (Medizinische Fachangestellte) dasturi orqali hech qanaqa muzlatilgan bank hisobisiz kelib, darhol daromadli ravishda ish boshlash hamda qisqa vaqtda FSP (Fachsprachprüfung) hamda KP (Kenntnisprüfung) dan muvaffaqiyatli o'tib, vrach lavozimiga erishishda amaliy ko’nikmalarni tajribali (Insighder) kadrlar orqali o'rgatish;
    <br>  • IT, texnika, sun'iy intellekt, tibbiyot, nano va biotexnologiya, injeneriya, bank, audit, tarjimonlik, fizika va matematika, iqtisodiy psixologik analitika, ekonometrika, alternativ energetika, SAP mutaxxassislari, mashinasozlik, suv xo'jaligi hamda kemasozlik sohalarida oliy ma’lumotli va ish tajribaga ega milliy kadrlariga Germaniya, Avstriya, Polsha, Chexiya va boshqa yevropa davlatlarida to'g'ridan to'g'ri mehnat faoliyatini davom ettirishda ko'maklashish;
    <br>  • O'zbek talabalari uchun yozda nafaqat qishloq xo'jaligi va servis sohalarida (Ferienbeschäftigung, Work and Travel), balki yirik koorporatsiyalardagi <span>Praktikum</span> va <span>spring week</span>  dasturlarida qatnashishda uslubiy maslahatlar berish;
    <br>  •  Germaniya va Avstriyadagi barcha turdagi til kurslariga hujjatlarni topshirishda yuridik jihatdan yordam berish;
    <br>  •  Sayohat, davolanish va biznes vizalarini olishda yuridik maslahat;
    <br>  •  Barcha turdagi elchixona suhbatlariga tayyorlash;
    <br>  •  Sug’urta rasmiylashtirish (safar va tibbiy sug’urtalar);
    <br>  •  Turar-joy qidirishda amaliy yordam;
    <br>  •  Samolyotga oson va hamyonbop aviachiptalar xarid qilish;
    <br>  •  Aeroportdan kutib olish va turar joygacha kuzatib qo’yish;
    <br>  •  Talabalik davrida ish butun yevropa hududida ish topishga ko’maklashish (agar lozim bo’lsa);
    <br>  •  Germaniya hayotiga ko’nikib olish va barchamiz bilmasdan qilgan xatolarni takrorlamaslik hamda ulardan chiqargan xulosalarni bo'lishishda o'rni beqiyos bo'lgan <span>O'zbek Community</span>lariga kiritish, yevropada ham O'zbek townlari yaratishga jalb etish va bundan tashqari yana ko’plab xizmatlarni taklif etamiz. 


  <br> <br> <span>B2B va B2C biznes xizmatlari:</span> <br>
  <br>  • Trucking, barcha turdagi logistika hamda qishloq xo'jalik texnika va texnologiyalarini kafolatli ravishda topish, xarid qilish va yetkazib berishda yuridik va amaliy yordam;
  <br>  • Turkiya va Germaniya hududida ko'chmas mulk xaridiga yuridik maslahat;
  <br>  • Tibbiyot turizmi doirasida O'rta Osiyodagi barcha xususiy tibbiyot klinikalariga chet eldan mijoz jalb etishda marketing xizmatlari, xususan, soch ekish va qorindagi yog'ni eritish;
  <br>  • Xususiy tadbirkorlik va ishlab chiqarishdagi tovar va xizmatlaringizni jahon bozoriga olib chiqish, web sayt yaratish, mijoz yig'ish, xalqaro savdo-sanoat ko'rgazmalarida ishtirok etish, investitsiya jalb qilish va yangi bozorlarni kashf qilishda Outsourcing xizmatini berib, siz bilan yelkadosh bo'lib vatanimiz iqtisodiy qudratini oshirishga bel bog'ladik.
  
  <br> <br><span> Malaka oshirish va tadqiqotlar:</span> <br> <br>
  • Oliy ma'lumotli hamda ingliz, nemis, xitoy, koreys, rus hamda boshqa chet tillar ona tilisi bo'lgan 18 yoshdan katta barcha umidli va faol shaxslarga haq to'lanadigan amaliyot dasturlari, stipendiya va tadqiqot loyihalari taklif etamiz. Buning uchun ushbu saytdagi muloqot qismiga xat qoldirsangiz kifoya. Siz bilan hamkorlik qilishdan doim mamnunmiz!
   <br><br> <span> EuroLink Consulting Group – Ulug' maqsadlar sari…!</span> <br>
   `,

    translation17: `Yevropaga yo'l`,
    translation18: `<br>  <span>1. Ausbildung – bu o'zi nima?</span> <br>

   <br>  <span class="italic"><span id="italic">Ausbildung bu xuddi bizdagi texnikumlar singari ta'lim tizimi.</span> </span>
   <br>  (100%  o'xshash emas. Aslida  O'zbekistonda  bunga  solishtirish uchun  alternativ  variant yo'q) Ausbildung orqali siz bir vaqtning o'zida kelajakda egallamoqchi bo'lgan kasbingizga oid amaliy va nazariy bilimlarni egallaysiz. Ausbildung sohaga qarab 2 yildan 4 yilgacha davom etishi mumkin. <br>

   <br>  Ba'zi kasblarni egallash uchun Ausbilding yetarli, ba'zilarini esa faqat universitetda o'qibgina o'rganish mumkin. Misol uchun, <span class="italic underline">oshpaz, santexnik, sotuvchi, novvoy, sartarosh</span> kabi kasblar Ausbildung orqali egallansa,<span class="italic underline"> vrach, o'qituvchi, yurist</span> kabi kasblarni universitetda o'qish orqali egallash zarur. Informatika va shunga o'xshash zamonaviy yo'nalishlarni Ausbildung bilan ham universitetda o'qish bilan ham o'rganish mumkin. Hattoki yetarli bilim va ish tajriba bilan diplomsiz ham ishga kirish mumkin. <br>

   <br>  Ausbildung qilayotgan inson haftada 2-3 kun vaqtini nazariy bilimlarni o'rganish uchun kasb maktabi (Berufsschule)da o'tkazsa, qolgan 2-3 kun vaqtini o'zi Ausbildung qilayotgan tashkilotda amaliy tarzda ya'ni ishlab o'tkazadi. Yoki 1-2 oy Berufsschuleda dars qiladi, keyingi 1-2 oy ishxonada ishlaydi. Bu Ausbildung qilayotgan sohasiga bog'liq <span class="italic">(Misol uchun, Oshpaz bo'lsa restoranda ovqat pishirish orqali).</span> <br>

   <br>  Germaniyada universitetga kirish oson va universitetda o'qish bepul bo'lsa ham, juda ko'p maktab bitiruvchilari universitetda o'qishdan ko'ra Ausbildung qilishni afzal ko'radi. Buning o'ziga yarasha sabablari bor:

   <br>  <span>1) Ausbildung davomida sizga oylik to'lanadi.</span> O'rtacha olganda Ausbildung qilayotgan inson 1-yili 750€, 2-yili 850€, 3-yili <span>1000 €</span> atrofida oylik ( Vergütung) oladi.
   <br>  Ba'zi sohalarda <span>1100-1350€</span> atrofida, ya’ni o’rta hisobda 1000€.

   <br>  <span>2) Ausbildung qilish universitetda o'qishdan ancha oson.</span> Ausbildung qilayotganlar kutubxonada soatlab o'tirishi shart emas. Ozgina nazariyani o'rganib, qolgan vaqt o'z  kasbi bilan shug'ullanadi.

   <br>  <span>3) Ausbildungdan so'ng o'zingiz Ausbildung qilgan tashkilotda ishlab qolishingiz mumkin.</span>         (Agar ular va siz  buni hohlasangiz) Mabodo ishlagan joy yoqmasa joyni va ish beruvchini almashtirasiz. Universitet bitiruvchilariga o'xshab, diplomni qo'ltiqlab ish qidirib yurmaysiz.

   <br> <span> 4) Ausbildung qilish uchun sizdan C1 til darajasi talab qilishmaydi,</span> sohaga qarab B1-B2 bilan ham bemalol Ausbildung boshlasangiz bo'ladi. 

   <br>  <span>5) Kollej diplomi yoki 11 yillik maktab attestati bilan ham Ausbildung qilish mumkin. </span><span class="italic">(O'zbek ta'lim sistemasi misolida)</span>

   <br>  Ba'zi savollarda oylik kam ekan, yetmasa nima qilaman deganlar ham bor. BAB (Ausbildungsbeihilfe) uchun ariza topshirasiz. Buni Jobcenter to'lab beradi. Uyidan uzoqda, ota-onasi va yaqinlari qaramogʻidan yiroqdagi va oylik maoshi (Ausbildung davrida) Germaniya rasmiy statistik ma'lumotiga ko'ra belgilangan bir oylik minimal daromaddan kam bo'lgan har kim ariza topshirsa bo'ladi. Bu miqdor aktual 934 yevroni tashkil etadi. (oktabr 2022)
   <br>  Odatda Ausbildung avgust yoki sentabr oylarida boshlanadi. Lekin yaxshi joyda Ausbildung qilmoqchi bo'lsangiz, ancha erta hujjat topshirganingiz ma‘qul (5-6 oy oldin). 
   <br>  Ba'zilar elchixona Ausbildung uchun viza beradimi deb so'rab qoladi. Albatta!!! Faqat biroz aniqlik va hujjatlardagi yaxshi tayyorgarlik talab etiladi.


   <br><br><span>2. Aupair dasturi</span> <br>

   <br>      «Au-Pair» yoshlarning madaniy almashinuv dasturi bo’lib, ishtirokchilarga yangi do’stlar orttirish, Yevropa  hayotini o‘rganish;  mavjud an’analar bilan tanishish hamda nemis oilasi bilan yashab til o’rganish imkoniyatini beradi.

   <br>      Ushbu dastur doirasida agentliklar Germaniya Mehnat Vazirligi bilan kelishgan holda yoshlarni «Au Pair» sifatida ish bilan ta’minlaydi. «Au-Pair» dasturi bo’yicha yoshlarni Germaniyaga ishga jo’natuvchi agentliklar haqida internet orqali qidirib, batafsil ma’lumot topishingiz mumkin.

         Dasturda ishtirok etish qoidalari

   <br>      „Au Pair“da qatnashish uchun <span>yoshingiz 18 dan 26 gacha</span> bo’lishi va <span>nemis tilini boshlang’ich  darajada bilishingiz</span> kerak. Siz nemis oilasiga oila a’zosi sifatida qabul qilinasiz va siz ular uchun mehmon yoki ishchi emas, balki farzandlari uchun „katta opa yoki aka“, shuningdek, uy bekasining „yordamchisi“ hisoblanasiz.

   <br>      „Au Pair“ vazifalariga ota-onaning roziligi bilan ularning farzandlariga qarash, g’amxo’rlik qilish kiradi.

   <br>      G’amxo’rlikka uy, bog’cha va o’yin maydonchasida turli-tuman o’yinlarda qatnashish, bolalarga kitob o’qib berish, cho’miltirish va ovqatlantirish, rasm chizish, uxlatish, kiyintirish, bolalar xonasini yig’ishtirish, ovqat tayyorlash, doimiy nazorat va parvarish, uy ishlarida yordamlashish kabi vazifalar kiradi.

   <br>      “Au Pair”ning vaqtinchalik ish tartibi oila bilan kelishilgan holda bo’ladi. Uy ishlarida yordamlashish haftalik ish kunining 50 foizigacha yetishi mumkin. “Au-Pair”ning haftalik ish soati umumiy 30-35 soatni tashkil etadi. Bunga yana hafta ichida 2-3 marotaba bolalarga kechqurungi qarov ham kiradi.

   <br>      O’z navbatida, mezbon oila Aupairni <span>alohida xona, ovqat va oylik puli</span> (o'rtacha 260 yevro) bilan ta'minlashga majbur. “Au Pair” yana xorijliklar uchun ochilgan nemis tili kursiga qatnashishi mumkin. Ba’zi oilalar nemis tili kursi badalini to’lab berishadi. Bu yana bir katta imkoniyat.

   <br>      “Au Pair” uchun har oyda eng kamida 1,5 bo’sh kun, boshqa kunlarda ota-onalarning bo’sh vaqtiga qarab dam olish kuni beriladi. Undan tashqari, mahalliy jamoat transporti uchun <span>oylik chipta</span> oila tarafidan olib beriladi yoki oila mashinasi bo’lsa, undan <span>foydalanishga</span> ruxsat beriladi.
   <br>      Dastur davomiyligi 10 oy bo’lsa, “Au Pair”ga 2 haftalik; 12 oy bo'lsa, 4 haftalik haq to’lanadigan ta’til beriladi.

   <br>      Qolish muddati?
   <br>      - Siz “Au-pair” sifatida 6 oydan 18 oygacha ishlashingiz mumkin.


    <br><br> <span>3. Volontyorlik amaliyoti (FSJ, FÖJ, BFD)</span> <br>
    <br>  Agar sizga Au pairlik ma'qul bo'lmasa, FSJ (Freiwilliges Soziales Jahr), BFD (Bundesfreiwilligendienst) yoki FÖJ (Freiwilliges Ökologisches Jahr) dasturi orqali Germaniyaga kelishingiz mumkin. Bu dastur 6 oydan 18 oygacha bo'lib, dastur davomida nafaqat qariyalar uyi, nogironlar uyi, bog'cha, maktab, kasalxona va shunga o'xshash ijtimoiy sohalarda, balki tabiat qo'riqxonalari, sport birlashmalari, o'rmon xo'jaligi, nodavlat muassasalari va turli jamg'armalarida ham  volontyor sifatida ishlashingiz mumkin. Sizga oyiga 300-560€ atrofida cho'ntak puli beriladi. Ba'zi ish beruvchilar o'z volontyorlarini yotoqxona va jamoat transporti uchun oylik chipta bilan ham ta'minlaydi. Volontyorlar amaliyot davomida haftasiga 40 soat o'z firmalarida ishlashlari kerak. Bu davrda qonunan boshqa har qanday haq to'lanadigan mehnat faoliyati bilan shug'ullanishlari ta'qiqlangan. Yillik o'rtacha 26 kun ta'til ham beriladi. 
    <br>  Dastur uchun talablar quyidagicha :

    <br>  Nemis tilini <span>eng kami B1 darajada bilish</span> (joyni osonroq topib, yaxshiroq joyni tanlamoqchi bo'lsangiz, B1 darajani maslahat beramiz. Aslida A1 bilan qonunan ruhsat bo'lsa ham, amalda judayam qiyin. Nemis tilini yaxshiroq o'rganing)

    <br>  FSJ va FÖJ uchun 27 yoshdan kichik bo'lish talab qilinadi. BFD uchun esa yosh chegaralanmagan, ikkisining farqi ham faqat shunda.

    <br><br><span>4. Til kursi.</span> <br>
    <br>      Germaniyada to'g'ridan to'g'ri til kursi qilish juda yaxshi usul, ammo hammada ham bunga yetarli moliyaviy imkoniyatlar bo'lmasligi mumkin. Shunday bo'lsada vaqtdan yutish, tezroq nemis jamiyatiga moslashish hamda imkoniyatlarni tezroq payqash uchun juda optimal imkoniyat.
    <br>      Bunga kerakli hujjatlar:
    <br>      1) Til kursi shartnomasi 
    <br>      Shartnomada til kursidagi darslar kamida 6 oy davom etishi va offline (jonli va klassik uslubda) bo'lishi ta'kidlab o'tilishi lozim.

    <br>      2) Ta'lim va ma'lumotingiz haqidagi hujjatlarni taqdim etish.
    <br>      Maktabdan shahodatnoma va attestatlar, kollej, litsey, texnikum yoki bakalavr diplomlari va ularning nemischaga notarial tarjimasi.

    <br>       3) Sperrkonto (muzlatilgan bank hisobi)da kamida 6 oy uchun pul miqdori. Oylik minimal xarajatlar nemis statisika qo'mitasi va hukumati tomonidan har yili e'lon qilinadi. Aktual 2023-yil 1-yanvardan 934 yevro (bir yilga 11 208 yevro)ni tashkil etadi.
    <br>      4) Tibbiy sug'urta (visa chiqqandan so'ng elchixonaga olib borasiz)
    <br>      5) Tarjimai hol (Lebenslauf)
    <br>      6) Motivatsiya xati (Asosnoma)
    <br>      7) Qizil (zagran) passport
    <br>      8) Nemis tili sertifikati (agar mavjud bo’lsa, ammo amaliyotda bu viza olishda ahamiyatli jihatlardan) 
    <br>      9) 3:5 va 4:5 biometrik surat, 3 dona
    <br>      10) Til kursi intensiv va haftasiga kamida 18 soat bo'lishi lozim.
    <br>      11) Til kursi mobaynida ishlash mumkin emas!
    <br>      12) Til kursidan keyin qolmoqchi bo’lsangiz, sababini keltiring. Masalan: Ausbildung, Studienkolleg, oliy ta'lim va boshqalar. 
    <br>      13) Suhbat boshqa hollarga nisbatan oddiyroq bo‘ladi.

    <br><br> <span>5. Oliy va professional ta'lim: Bakalavr, Magistr, PhD</span><br>

    <br>  Germaniyada oliy ta'lim sifatida <span>Bachelor</span> yoki <span>Master</span> o’qimochi bo’lgan talabgorlarga www.uni-assist.de platformasi eng kerakli saytlardan biri hisoblanadi.

    <br>  Siz bu platforma orqali oliygohlar haqida yetarlicha ma’lumot olishingiz va hujjatlar tayyorlash uchun barcha xizmatlaridan foydalanishingiz mumkin. Xalqaro saytning bu xizmatlari albatta bepul <span>emas!</span>

    <br>  Germaniya oliygohlarida o’qishingiz uchun sizning nemis tilini bilish darajangiz <span>C1</span> bo’lishi shart. Ba’zi joylarda B2 daraja bilan ham qabul qiladigan oliygohlarni topish mumkin.
    <br>  Ingliz tili bilan o’qimoqchi bo’langiz, <span>IELTS</span> darajangiz kamida 6 yoki 6.5 bo’lishi shart. Ingliz tilida darslar olib boriladigan davlat oliygohlarni bepul hisoblanadi. Gemaniyaga ingliz tili bilan o’qishga kelgan taqdiringizda ham nemis tilini o’rganishga majbursiz. Chunki davlat tili nemis tili hisoblanadi. Bu siz talab sifatida ishlab pul topaman yoki amaliyot qilaman degan paytingiz juda seziladi. <br>
    <br>  Oliy ta'limdagi eng zo'r imkoniyatlardan biri-bu dual ta'lim. Bu jarayon xuddi tepada yozilgandek Ausbildung bilan bir xil. Ammo ta'lim oxirida oliy ta'lim diplomini olasiz va o'quv jarayonida olgan ulkan nazariy va amaliy tajribalar orqali juda tez va ishonchli ravishda ish topasiz. Iqtidorli talabalarga juda ko'plab jamg'arma, grant va fondlar mavjud, masalan DAAD, Heinrich Seidel, Konrad Adenauer, Erasmus, Copernicus, Deutschlandstipendium, Heinrich Böll, SdW (Stipendium für die deutsche Wirtschaft), Fulbright, Friedrich-Naumann-Stiftung, Avicenna, Cusanuswerk, Studienstiftung des Deutschen Volkes, Hans Böckler va hokazolar. Bu orqali talaba oyiga 1000-1200 yevrogacha moliyaviy ko'mak olishi mumkin.
    <br> <br>  PhD tadqiqotlari uchun grant yutganlar maoshi oyiga 1000-2500 yevro hisoblanadi.
    <br><br><span> 6. Professional ishchi sifatida ketish</span><br>
    <br>  Agar siz oliy ma'lumotli, ish tajriba va malakaga ega bo'lsangiz, nemis tilini B2 darajada o'rganish natijasida Germaniya hududida to'g'ridan to'g'ri ish beruvchi bilan ish shartnomasi tuzish orqali ishchi viza olishingiz mumkin. Agarda hali shartnoma ololmagan bo'lsangiz, 6 oy muddatga ish izlash uchun sizga ish izlash vizasini berishadi. Hammasi uchun sizdan tizimli ravishda o'z ustingizda ishlab, talablarga mos darajaga yetishingiz talab etiladi. Ayniqsa, IT, tibbiyot, texnologiya, injeneriya va sun'iy intellekt sohalarida chet eldan juda ko'plab mutaxxasisslarga extiyoj ortgan hozirda. `,
    translation19: "Natijalarimiz",
    translation20: "Biz bilan bog'laning",
    translation21:
      "Sizning fikringiz biz uchun juda muhim! Agarda Sizda savol, taklif, norozilik, mulohaza va istaklar bo'lsa har qanday vaqt bizga murojaat qilishingiz mumkin:",
    translation22: "Sizning muvaffaqiyatingiz – bizning maqsadimiz!",
    translation23: "EuroLink- Ulug' maqsadlar sari...",
    translation24:
      "Manzil : <span>Bunyodkor ko'chasi 1-uy</span>, 100035 Toshkent.",
    translation25: "Mo'ljal Ziraat banki, Novza metrosi.",
    translation26: "Bizni kuzatib boring👇",
    translation27: `B2B biznes xizmatlari va FSJ/BFD/FÖJ bo'yicha ekspert va mentor,
                    Kasbiy yo'naltirish va qo'llab-quvvatlashga mas'ul. <br>
                    Klinikum Stuttgartda 3 yillik tajribaga ega. <br>
                    Qo'shimcha: „E-Bike Laden Stuttgart“ da manager. <br>
                    Stuttgart ( Germaniya) <br>`,
    translation28:
      "Nemis tili o'qituvchisi va mentor,  Ferienjob (work and travel) bo'yicha junior konsultant, o'quv dasturi bo'yicha maslahatchi. 2021-yildan beri Würzburg, Bremen va Stuttgart shaharlarida tajriba orttirmoqda. C1 til darajasiga ega.2017-yilgi nemis tili bo'yicha Respublika Olimpiadasi g'olibi. <br>Universitet va Gyote Institutda aktivist. <br>Qo'shimcha: O'zbekiston Davlat Jahon tillar universiteti talabasi. <br>Toshkent (O'zbekiston) <br>",
    translation29:
      "Nemis, ingliz va rus tili o'qituvchisi, o'quv dasturi bo'yicha maslahatchi, 3 yillik professional pedagogik tajriba va uchala tilda ham C1 darajaga ega, tarjima nazariyasi va uslubiyat yo'nalishi koordinatori.<br> 2017-yilgi rus tili bo'yicha Respublika Olimpiadasi g'olibasi.<br> Qo'shimcha: O'zbekiston Davlat Jahon tillar universiteti talabasi.<br> Toshkent (O'zbekiston) <br>",
    translation30:
      "Nemis va ingliz tili o'qituvchisi, o'quv dasturi bo'yicha koordinator, 2 yillik professional pedagogik tajriba va ikkala tilda ham C1 darajaga ega mentor, grafik muharrir va targetolog, ECG akademiyasining mustaqil jurnalisti. <br> Gyote institut ko'ngilli tarjimoni, „Foreign Languages“ telekanali boshlovchisi. <br> Frankfurt (Oder) dagi Viadrina universitetiga qabul qilingan va Mint Sommerschulega yo'llanma sohibasi. <br> Qo'shimcha: O'zbekiston Davlat Jahon tillar universiteti talabasi. <br> Toshkent (O'zbekiston) <br>",
    translation31:
      " Administrator, targeting, SMM va dizayn bo'yicha bosh operator.O'quv jarayoni va qabul nazorati. <br>Operatsion faoliyatni tashkillashtirish bo'yicha mas'ul xodima. <br>Qo'shimcha: O'zbekiston Davlat Jahon tillar universiteti talabasi. <br>Toshkent (O'zbekiston) <br>",
    translation33:
      "Administrator, boshqaruv va rejalashtirish bo'yicha maslahatchi, O'quv jarayoni va qabul nazorati, <br> Operatsion faoliyatni tashkillashtirish bo'yicha mas'ul xodima. <br> Qo'shimcha: Toshkent Davlat pedagogika universiteti talabasi. <br> Toshkent (O'zbekiston) <br>",
    translation34:
      "Grafik dizayner, marketing va SMM bo'limi a'zosi, Tahrirlash va ijtimoiy so'rov bo'yicha mutaxassisi. <br> Qo'shimcha: Samarqand Tibbiyot universiteti, jarrohlik yo'nalishi talabasi. <br> Samarqand (O'zbekiston) <br>",
    translation35: "Yusupova Sevinchoy (O'zbekiston, 26 yosh)",
    translation36: `<span class="underline">Aupair</span> dasturi bilan may oyida (2022) vizani qo'lga kiritdi.`,
    translation37:
      "Aprel oyida  Eurolink Consulting Group bilan   shartnomani  imzolagan bu qiz A2 til sertifikati bilan bor yo'g'i bir oy muddatda barcha jarayonlardan tezlik bilan a'lo darajada o'tib, elchixonadan vizani olishga va Dresden shahridagi oilasiga yetib kelishga ulgurdi.",
    translation38: "Hozirda Sachsen (Saksoniya) o'lkasida Aupairlik qilmoqda.",
    translation43: "Bui Thi Phuong (Vietnam, 20 yosh)",
    translation44: `<span class="underline">Aupair</span> dasturi orqali avgust (2022) oyida vizani olishga muvaffaq bo'ldi.`,
    translation45:
      "EuroLink CG ga bog'langanda nemis tili bilimi A2 edi ammo sertifikat ololmagani uchun Coworking markazimiz tavsiyasiga ko'ra EuroLink Akademiyasida til o'rganishni davom ettirdi. Qisqa vaqtda unumli va qattiq mehnati orqali til sertifikatini qo'öga kiritdi. Konsalting maslahatlarimizga vaqtida amal qilib oila va elchixona suhbatlaridan yaxshi o'tib viza oldi. ",
    translation46:
      "Hozirda Bavariya o'lkasining München shahrida Aupairlik  faoliyatini davom ettirmoqda.",
    translation47: "Akhmadjonov Abdullokh (O'zbekiston, 23 yosh",
    translation48: `<span class="undeline">Ausbildung</span> Hotelfachmann sohasida sentabr (2022) oyida viza olishga muvaffaq bo'ldi`,
    translation49: `B1 sertifikati chala bo'lishiga qaramasdan umidsizlikka tushmagan Abdulloh may oyida EuroLink CG bilan shartnoma imzoladi va u bergan maslahatlarga jiddiy yondashdi. Berilgan har bir vazifani vaqtida bajardi. Nasibasi ekan, 5 oyga qolmasdsn to'liq til sertifikatisiz ham yevropaning o'ta g'o'zal Alp tog'larida, München shahri yaqinida o'zi sevgan sohada Ausbildung boshladi. Eng quvonarlisi bor yo'g'i 2 yil ichida diplomini oladi  hamda bu vaqt mobaynida millionerlar ham orzu qiladigan besh yulduzli mehmonxonada yashaydigan bo'ldi`,
    translation50:
      "Hozirda Bayern (Bavariya) o'lkasida menejment sohasidagi mehnat faoliyatini davom ettrimoqda.",
    translation51: "Charos Boltaeva (O'zbekiston, 21 yosh)",
    translation52: `<span class="underline">Aupair</span> dasturi bo'yicha sentabr (2022) oyida vizani qo'lga kiritdi.`,
    translation53:
      "A2 Deutschniveau til sertifikatiga ega edi va yana o'rganishni davom ettirdi.  Au pair dasturi uchun iyul oyida  EuroLink  CG bilan shartnomani imzolagach, mezbon oila va elchixonadagi suhbatga  tayyorgarlik uchun  Eurolink Akademiyasida darslarda  qatnashdi. Oradan 2 oy o'tar o'tmas sentabr oyida vizasini  olib, germaniyaga parvoz qilishga ulgurdi.",
    translation54:
      "Hozirda Bayern (Bavariya) o'lkasida Aupairlik  faoliyatini amalga oshirmoqda.",
    translation55: "Inomjonova E'zozakhon (O'zbekiston, 21 yosh)",
    translation56: `<span>Aupair</span>  dasturi bo'yicha avgust (2022) oyida vizani qo'lga kiritdi.`,
    translation57:
      "B1 nemis tili sertifikati bilan iyun  oyida EuroLink CG ga murojaat qildi va jamoamiz maslahatlariga vaqtida amal qildi, kerakli ilmlarni o'rgandi hamda mezbon oila izlab topdi va elchixona suhbatlariga tayyorlandi. 2 oy ichida viza olib, nemis oilasiga keldi.",
    translation58:
      "Hozirda  Baden-Württemberg o'lkasida  Aupairlik faoliyatini olib boryapti.",
    translation59: "Bayazova Malika (Qirg'iziston, 19 yosh)",
    translation60: `<span>Aupair</span> dasturi orqali avgust (2022) oyida vizani qo'lga kiritdi.`,
    translation61:
      "Iyun oyida biz bilan shartnoma tuzgan bu qizimiz til sertifikati A1 darajada bo'lishiga qaramasdan EuroLink CG maslahatlariga to'g'ri amal qilishi natijasida 3 oy ichida viza olishga ham Aupair oilada bo'lishga ham ulgurdi.",
    translation62:
      "Hozirda Baden-Württemberg o'lkasining Stuttgart  shahrida  Aupairlik  faoliyatini olib boryapti.",
    translation63: "Gulinargiz Khurramova (O'zbekiston, 25 yosh)",
    translation64: `Stomatologiya sohasidagi <span class="underline">Ausbildung</span> uchun avgust (2022) oyida vizani qo'lga kiritdi.`,
    translation65:
      "Ausbildungga qiziqishi uyg'ongach, bu nomzodimiz avval o'zi mustaqil harakat qilgan ekan. Ammo B1 nemis tili bilimi va tajribasizligi tufayli bu jarayon omadsiz kechgan. Shunday bo'lsada u izlanishda davom etib, nihoyat EuroLink CG bilan bog'landi. Biz bilan iyul oyida shartnoma imzolagan bo'lsada, tirishqoqligi sababli bizning Coworking markazimizda qanday qilib hujjat topshirish, ish beruvchini qiziqtirish, intervyudagi suhbat va viza masalalari haqida kuchli o'rgandi. Natija o'laroq bor yo'g'i bir oy fursatda shartnoma imzolashga erishdi.",
    translation66: `Hozirda Thüringen (Tyuringiya) o'lkasi Jena shahridagi "Hahm Dental" xususiy stomatologiya klinikasida Zahnmedizinfachangestellte sifatida  Ausbildungni davom  ettirmoqda.`,
    translation67: "Orzugul Murodova (O'zbekiston, 25 yosh)",
    translation68: `Steuerfachangestellte sifatida soliq sohasida <span class="underline">Ausbildung</span> uchun avgust (2022) oyida viza oldi.`,
    translation69:
      "Nemis tilida B2 bilimiga ega bu nomzodimiz iyun  oyida  EuroLink CG bilan shartnoma imzolagan. Quo-Status Analiz jarayonida unga sertifikat olish orqali ustunlik jihatga ega bo'lish vazifasi yuklandi. Qisqa vaqt ichida Coworking markazi bergan rejaga munosib tayyorlanib, B2 sertifikatini oldi. Keyin ko'p intervyu va amaliyotlardan o'tib, eng zo'r sohalardan birida Ausbildung shartnomasini imzolashga erishdi.",
    translation70: `Hozirda Nordrhein-Westfalen (Shimoliy Reyn-Vestfaliya) o'lkasi Duisburg shahridagi "Taxim Steuerhilfeverein" firmasida yevropa yoshlari ham havas qiladigan Ausbildungni davom ettirmoqda. Endilikda ham undan ulkan g'alabalar va ilk o'zbek mustaqil Steurberaterlari qatoridan joy olishini kutib qolamiz.`,
    translation71: "Shakhriddin Korakhanov (O'zbekiston, 25 yosh)",
    translation72: `Hotel Management sohasida <span class="underline"> Ausbildungni</span> sentabr (2022)oyida boshladi.`,
    translation73:
      "EuroLink CG bilan shartnomani iyun oyida imzoladi. Til darajasi B1 bo'lgani bois, ish beruvchi bilan suhbatlarga o'ta jiddiy tayyorlanishi zarur edi. Jamoamiz tomonidan berilgan kunlik rejadagi o'quv va psixologik mashqlarni bajarib, o'sha suhbatlardan muvaffaqiyatli o'tishga erishdi. 4 oylik tayyorgarlikdan keyin intervyularda ketma-ket ijobiy javoblar oldi. Natijada u München, Berlin va Stuttgart shaharlaridan birini tanlashiga to'g'ri kelib qoldi.",
    translation74: `Berlindagi "Palace Hotel" mehmonxonasida ishlashga qaror qildi va hozirda o'sha yerda menejment sirlarini o'ganish bilan band.`,
    translation75: "Marjona Kuvondikova (O'zbekiston, 25 yosh)",
    translation76: `Stomatologiya yo'nalishidagi<span class="underline"> Ausbildungni</span> vizasini oktabr (2022) oyida qo'lga kiritdi.`,
    translation77:
      "Nemis tilidan B2 sertifikati bo'lishiga qaramasdan Aupair dasturidan rad javobi olaverganligi uchun EuroLink CG jamoasiga murojaat qilgan edi. Iyun oyidagi ilk Quo-Status tahlil jarayonida Aupair emas balki Ausbildung qilishi optimalroq ekani aytdik hamda yangi strategiya shakllantirdik. Tartibli va mehnatkash bo'lgan bu qizimiz barcha vazifalarni vaqtida bajarib, Jena shahridan shartnoma olishga erishdi.",
    translation78: `Hozirda u ham Tyuringen o'lkasi Jena shahridagi "Hahm Dental" xususiy stomatologiya klinikasida Doktor Buchheim rahbarligida faoliyat yuritmoqda.`,
    translation79: "Ism va familyangiz *",
    translation80: "Telefon raqamingiz *",
    translation81: "Email manzilingiz *",
    translation82: "Izoh *",
    translation83: "Yuborish",
    translation84:
      "Eurolink Consulting Group (ECG) © Barcha huquqlar himoyalangan",
    // new Unsere Resultate
    translation85: "Saida Sayduvalieva (O'zbekiston, 20 yosh)",
    translation86:
      "Aupair dasturi bo`yicha oktyabr (2022) oyida vizasini qo`lga kiritdi.  ",
    translation87:
      "BIzning mijozimiz noyabrdan Frankfurt shahrida Aupair dasturini boshladilar.",
    translation88:
      "Lekin bu ularni viza olish uchun birinchi harakatlari emas. Biroz oldin elchixonadan rad javobini olganlariga qaramay ular bizga murojaat qildi,  bizning o'quv kurslarimizda qatnashdi va coworking markaz vazifalarini bajardi.Shundan so'ng 1 oy o'tib va nihoyat viza oldilar!",
    translation89:
      "Elchixona, hujjat ishlari va Viza olish uchun har qanday muammolar bo'lmasin, siz bemalol biz bilan bog'lanishingiz mumkin.",
    translation90: "Abdukakhkhorov Mukhammadjon (O'zbekiston, 27 yosh)",
    translation91: `Mijozimiz bizga iyun oyida murojaat qilgan edilar va til o'rganishni davom ettirdilar. Shuningdek, bizning Coworking markaz ularning hujjatlari bilan shug'ullandi. O'zbekistonda stomatologiya yo'nalishini bitirganlar va Muhammadjon to'g'ridan to'g'ri Germaniyaga Zahnmedizinische Fachangestellte lavozimida ishlash uchun vizani qo'lga kiritdilar. Bo'lajak ish joylari Aachen shahridagi "Pezeshkpour" xususiy stomatologiya klinikasidir.   2000€ yo'qori  oylik  bilan  ish boshladilar.`,
    translation92: "Khurozova Marjona (O'zbekiston,23 yosh)",
    translation93:
      "Aupair dasturi bo`yicha noyabr (2022) oyida vizasini qo`lga kiritdi.",
    translation94:
      "Mijozimiz bor yo'g'i 20 kun oldin murojaat qilgan va til bilimi ham A1 bo'lsada, berilgan maslahatlarga amal qilib, tartibli ravishda til o'rgandi, izlandi va hujjatlarni tayyorladi.Natijada vizani qoʻlga kiritdi.",
    translation95:
      "Khurozova Marjona  noyabrdan Mecklenburg-Vorpommern ölkasining Groß Krams shahrida Aupair dasturini boshladi.",
    translation96: "Homidov Bekhzod (O'zbekiston, 26 yosh)",
    translation97:
      "Mijozimiz  Homidov Bekhzod bizga iyul oyida murojaat qilgan edilar va til o'rganishni davom ettirdilar. Shuningdek, bizning Coworking markaz ularning hujjatlari bilan shug'ullandi. O'zbekistonda Shifokor bo'lib  ishlayotgan Bekhzod  to'g'ridan to'g'ri Germaniyaga Medizinische Fachangestellte lavozimida ishlash uchun vizani qo'lga kiritdilar. 2000€ yo'qori  oylik  bilan  ish boshladi.Ushbu natijaga ular to'g'ri tanlov qilganliklari va 4 oy mobaynida sabr bilan doimiy harakatlari orqali erishdilar!",
    translation98: "Matnazarov Bunyod (O'zbekiston,19 yosh)",
    translation99:
      "Ausbildung Hotelfchman sohasida yanvar(2023) oyida viza olishga muvaffaq bo`ldi.",
    translation100:
      "Matnazarov Bunyod bizga sentabr oyida murojaat qilib so'ngra til o'rganishni davom ettirdilar. Shuningdek, berilgan maslahatlarga amal qilib, tartibli ravishda izlandi va hujjatlarni tayyorladi. Natijada, 1-fevraldan boshlab Bayern (Bavariya) o'lkasining München shahrida Ibis mehmonxonalar tizimida Hotelfachmann sifatida ish boshladilar.",
    translation101: "Khayitboyeva Shokhsanam (O'zbekiston,22 yosh)",
    translation102:
      "Aupair dasturi boʻyicha fevral(2023) oyida vizasini qoʻlga kiritdi!",
    translation103: "Harakat sabr albatta o'z samarasini beradi.",
    translation104:
      "Hayitboyeva Shohsanam berilgan maslahatlarga amal qilib, tartibli ravishda til o'rgandi, izlandi va hujjatlarni tayyorladi. Natijada u fevraldan Hagen shahrida Aupair dasturini boshladilar.",
    translation105: "Mukhtorov Khumoyunmirzo (O'zbekiston,25 yosh)",
    translation106:
      "Aupair dasturi boʻyicha fevral (2023) oyida vizasini qoʻlga kiritdi.",
    translation107:
      "Mijozimiz  fevraldan Pulheim shahrida Aupair darturini boshladilar!Humoyunmirzo berilgan maslahatlarga amal qilib, tartibli ravishda til o'rgandi, izlandi. Shuningdek, bizning Coworking markaz ularning hujjatlari bilan shug'ullandi. Natijada vizani qo'lga kiritdi.",
    translation108:
      "Bu kabi ko'plab qiziquvchilar ham harakat qilishsa, albatta muvaffaqiyatga erishishlariga ishonamiz. Siz ham buni uddalaysiz!",
    translation109: "Mukhtorov Javokhir (O'zbekiton,33 yosh)",
    translation110:
      "Medizinische Fachangestellte dasturi bo`yicha fevral (2023) oyida vizasini qo`lga kiritdi.",
    translation111:
      "Mijozimiz  Javohkir bizga Noyabr oyida murojaat qilgan edilar va til o'rganishni davom ettirdilar. Shuningdek, bizning Coworking markaz ularning hujjatlari bilan shuģullandi. O'zbekistonda Shifokor bo'lib  ishlayotgan Javohkir  to'g'ridan to'g'ri Germaniyaga Medizinische Fachangestellte lavozimida ishlash uchun vizani qo'lga kiritdilar. 2000€ yo'qori  oylik  bilan  ish boshladilar.Ushbu natijaga ular to'g'ri tanlov qilganliklari va 4 oy mobaynida sabr bilan doimiy harakatlari orqali erishdilar!",
    translation112: "Khotamova E'zoza (O'zbekiston,20 yosh)",
    translation113:
      "Aupair dasturi boʻyicha fevral (2023) oyida vizasini olishga muvaffaq boʻldi!",
    translation114:
      "Mijozimiz, E'zoza berilgan maslahatlarga amal qilib, tartibli ravishda izlandi va hujjatlarni tayyorladi.Natijada, E'zoza fevraldan boshlab Baden-Württemberg o'lkasining Winzeln shahrida Au Pair dasturini boshladilar.",
    translation115: "Murotova Khusniyakhon (O'zbekiston,19 yosh)",
    translation116:
      "Aupair dasturi boʻyicha fevral (2023) oyida vizasini qoʻlga kiritdi.",
    translation117:
      "Mijozimiz fevraldan Hamburg shahrida Aupair darturini boshladilar!",
    translation118:
      "Khusniyakhon berilgan maslahatlarga amal qilib, tartibli ravishda til o'rgandi, izlandi. Shuningdek, bizning Coworking markaz ularning hujjatlari bilan shug'ullandi. Natijada vizani qo'lga kiritdi.",
    translation119:
      "Bu kabi ko'plab qiziquvchilar ham harakat qilishsa, albatta muvaffaqiyatga erishishlariga ishonamiz. Siz ham buni uddalaysiz!",
    translation120: "Makhmudov Shokhruhbek (Usbekiton,21 yosh)",
    translation121:
      "Tinglovchilarimizga dars berib kelayotgan o'qituvchimiz Makhmudov Shokhrukhbek endilikda Erasmus+ stipendiyasini qoʻlga kiritib Germaniyaning Shimoliy Reyn-Vestfaliya (NRW) o'lkasi Bochum shahridagi Ruhr Universitetida almashinuv orqali ta'lim olishni boshladilar.",
    translation122:
      "Jamoamiz, nafaqat oʻz tinglovchi va oʻqituvchilarining saviyasini oshirishda, balki ular uchun imkoniyat eshiklarini ochishda ham koʻmaklashadi!",
    translation123: " ",
    translation124: "Mamadaliev Islomjon (O'zbekiston,27 yosh)",
    translation125:
      "Medizinesche Fachangestellte dasturi boʻyicha mart (2023) oyida vizasini olishga muvaffaq boʻldi!",
    translation126:
      "O'zbekistonda Shifokor bo'lib  ishlayotgan  Islomjon to'g'ridan to'g'ri Germaniyaga Medizinische Fachangestellte lavozimida ishlash uchun vizani qo'lga kiritdilar.Mijozimiz mart oyidan  boshlab Medizinische Fachangestellte sifatida Baden-Württemberg ölkasining Rottweil shahrida Radiologik Markazda ish boshladilar.",
    translation127: "Rakhmatullayev Umidulla (O'zbekiston, 25 yosh)",
    translation128:
      "Medizinesche Fachangestellte dasturi boʻyicha mart (2023)oyida vizasini qoʻlga kiritdi.",
    translation129: `Umidulla  Medizinische Fachangestellte  lavozimida ishlash uchun vizani qo'lga kiritdilar va  mart oyidan boshlab Shimoliy Reyn-Vestfaliya (NRW) ölkasi Dortmund shahri yaqinidagi "Doktor Nienaber und Partner" xususiy stamotologiya klinikasida ish faoliyatini boshladilar.`,
    translation130: "Makhmudov Ramziddin (O'zbekiston, 25 yosh)",
    translation131:
      "Aupair dasturi boʻyicha mart (2023) oyida vizani olishga muvaffaq boʻldi!",
    translation132:
      "Makhmudov Ramziddin mart oyidan boshlab Balve Garbeck shahrida Au Pair dasturini boshladilar.Ramziddin berilgan maslahatlarga amal qilib, tartibli ravishda til o'rgandi, izlandi. Shuningdek, bizning Coworking markaz ularning hujjatlari bilan shug'ullandi. Natijada, vizani qoʻlga kiritdilar.",
    translation133:
      "Mijozlarimizning mavaqqiyatlariga oʻz hissamizni qoʻshayotganimizdan mamnunmiz!",
    translation134: "Mamadalieva Mubinakhon (O'zbekiston, 25 yosh)",
    translation135:
      "Medizinesche Fachangestellte dasturi boʻyicha mart (2023) oyida viza olishga muvaffaq boʻldilar.",
    translation136:
      "O'zbekistonda Shifokor bo'lib  ishlayotgan Mamadalieva Mubinakhon to'g'ridan to'g'ri Germaniyada  Medizinische Fachangestellte lavozimida ishlash uchun visani qo'lga kiritdilar. Mubinakhon umr yo'ldoshi Islombek Mamadaliev bilan Baden-Württemberg ölkasining Rottweil shahrida Radiologik Markazda ish boshladilar.",
    translation137:
      "Endilikda jamoamiz, sizga oilaviy ish faoliyatingizni Germaniyada davom ettirishingizda ham yaqindan koʻmaklashadi!!!",
    translation138: "Akramjonova Khulkaroy (Usbekiston, 23 yosh)",
    translation139:
      "Aupair dasturi boʻyicha may (2023) oyida vizasini olishga muvaffaq boʻldi.",
    translation140:
      "Mijozimiz, Khulkaroy iyun  oyidan boshlab Nordhein-Westfalen  oʻlkasining Neuss  shahrida Hersch  Rahman Ahmed oilasida Au- Pair dasturini boshlaydilar.Khulkaroy berilgan maslahatlarga amal qilib, tartibli ravishda til o'rgandi, izlandi. Shuningdek, bizning Coworking markaz ularning hujjatlari bilan shug'ullandi. Natijada vizani qo'lga kiritdi.",
  },
};
