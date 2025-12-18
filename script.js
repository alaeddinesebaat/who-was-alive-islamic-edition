const people = [
{ id: "al-bukhari", name: "الإمام البخاري", birthHijri: 194, deathHijri: 256 },
  { id: "ibn-sina", name: "ابن سينا", birthHijri: 370, deathHijri: 428 },
  { id: "ibn-ishaq", name: "ابن اسحاق", birthHijri: 85, deathHijri: 151 },
  { id: "ibn-al-muqaffa", name: "ابن المقفع", birthHijri: 106, deathHijri: 142 },
  { id: "abu-hanifa", name: "ابو حنيفة", birthHijri: 80, deathHijri: 150 },
  { id: "malik", name: "مالك بن أنس", birthHijri: 93, deathHijri: 179 },
  { id: "ibn-hisham", name: "بن هشام", birthHijri: 150, deathHijri: 218 },
  { id: "al-shafi", name: "الشافعي", birthHijri: 150, deathHijri: 204 },
  { id: "al-jahiz", name: "الجاحظ", birthHijri: 159, deathHijri: 255 },
  { id: "al-khwarizmi", name: "الخوارزمي", birthHijri: 164, deathHijri: 232 },
  { id: "ahmad-ibn-hanbal", name: "أحمد بن حنبل", birthHijri: 164, deathHijri: 241 },
  { id: "al-baladhuri", name: "البلاذري", birthHijri: 190, deathHijri: 279 },
  { id: "ibn-majah", name: "ابن ماجة", birthHijri: 209, deathHijri: 273 },
  { id: "ibn-qutaybah", name: "ابن قتيبة", birthHijri: 213, deathHijri: 276 },
  { id: "al-tabari", name: "الطبري", birthHijri: 224, deathHijri: 310 },
  { id: "al-hallaj", name: "الحلاج", birthHijri: 244, deathHijri: 309 },
  { id: "al-maturidi", name: "الماتريدي", birthHijri: 238, deathHijri: 333 },
  { id: "al-tahawi", name: "الطحاوي", birthHijri: 239, deathHijri: 321 },
  { id: "abu-hasan-al-ashari", name: "أبو الحسن الاشعري", birthHijri: 260, deathHijri: 324 },
  { id: "al-barbahari", name: "البربهاري", birthHijri: 253, deathHijri: 329 },
  { id: "al-asfahani", name: "الأصفهاني", birthHijri: 284, deathHijri: 356 },
  { id: "al-daraqutni", name: "الدارقطني", birthHijri: 306, deathHijri: 385 },
  { id: "ibn-al-nadim", name: "ابن النديم", birthHijri: 320, deathHijri: 385 },
  { id: "al-hakim-nisaburi", name: "الحاكم النيسابوري", birthHijri: 321, deathHijri: 405 },
  { id: "ibn-jinni", name: "ابن جني", birthHijri: 322, deathHijri: 392 },
  { id: "miskawayh", name: "مسكويه", birthHijri: 320, deathHijri: 421 },
  { id: "abu-hayyan-al-tawhidi", name: "ابو حيان التوحيدي", birthHijri: 310, deathHijri: 400 },
  { id: "al-baqillani", name: "الباقلاني", birthHijri: 338, deathHijri: 403 },
  { id: "qadi-abdul-jabbar", name: "القاضي عبدالجبار", birthHijri: 359, deathHijri: 415 },
  { id: "al-qushayri", name: "القشيري", birthHijri: 376, deathHijri: 465 },
  { id: "ibn-hazm", name: "ابن حزم", birthHijri: 384, deathHijri: 456 },
  { id: "al-bayhaqi", name: "البيهقي", birthHijri: 384, deathHijri: 458 },
  { id: "al-khatib-al-baghdadi", name: "الخطيب البغدادي", birthHijri: 392, deathHijri: 463 },
  { id: "al-jarjani", name: "الجرجاني", birthHijri: 400, deathHijri: 471 },
  { id: "al-juwayni", name: "الجويني", birthHijri: 419, deathHijri: 478 },
  { id: "al-baghawi", name: "البغوي", birthHijri: 433, deathHijri: 516 },
  { id: "al-ghazali", name: "الغزالي", birthHijri: 450, deathHijri: 505 },
  { id: "al-zamakhshari", name: "الزمخشري", birthHijri: 467, deathHijri: 538 },
  { id: "ibn-arabi-al-maliki", name: "ابن العربي المالكي", birthHijri: 468, deathHijri: 543 },
  { id: "qadi-iyyad", name: "القاضي عياض", birthHijri: 476, deathHijri: 544 },
  { id: "al-shahrastani", name: "الشهرستاني", birthHijri: 479, deathHijri: 548 },
  { id: "ibn-atiyah", name: "ابن عطية", birthHijri: 481, deathHijri: 541 },
  { id: "ibn-asakir", name: "ابن عساكر", birthHijri: 499, deathHijri: 571 },
  { id: "ibn-tufayl", name: "ابن طفيل", birthHijri: 494, deathHijri: 581 },
  { id: "ibn-jawzi", name: "ابن الجوزي", birthHijri: 510, deathHijri: 597 },
  { id: "ibn-rushd", name: "ابن رشد", birthHijri: 520, deathHijri: 595 },
  { id: "ibn-qudamah", name: "ابن قدامة", birthHijri: 541, deathHijri: 620 },
  { id: "fakhr-al-din-al-razi", name: "فخر الدين الرازي", birthHijri: 544, deathHijri: 604 },
  { id: "ibn-abi-hadid", name: "ابن أبي الحديد", birthHijri: 586, deathHijri: 656 },
  { id: "ibn-salah", name: "ابن الصلاح", birthHijri: 577, deathHijri: 643 },
  { id: "ibn-arabi", name: "ابن عربي", birthHijri: 560, deathHijri: 638 },
  { id: "al-qurtubi", name: "القرطبي", birthHijri: 611, deathHijri: 671 },
  { id: "ibn-sab'in", name: "ابن سبعين", birthHijri: 614, deathHijri: 669 },
  { id: "al-qarafi", name: "القرافي", birthHijri: 626, deathHijri: 684 },
  { id: "al-nawawi", name: "النووي", birthHijri: 631, deathHijri: 676 },
  { id: "ibn-daqiq-al-eid", name: "ابن دقيق العيد", birthHijri: 625, deathHijri: 702 },
  { id: "ibn-taymiyyah", name: "ابن تيمية", birthHijri: 661, deathHijri: 728 },
  { id: "ibn-qayyim", name: "ابن القيم", birthHijri: 691, deathHijri: 751 },
  { id: "al-dhahabi", name: "الذهبي", birthHijri: 673, deathHijri: 748 },
  { id: "ibn-kathir", name: "ابن كثير", birthHijri: 701, deathHijri: 774 },
  { id: "al-suyuti", name: "السيوطي", birthHijri: 849, deathHijri: 911 },
  { id: "abu-yusuf", name: "ابو يوسف", birthHijri: 113, deathHijri: 182 },
  { id: "al-shaybani", name: "الشيباني", birthHijri: 131, deathHijri: 189 },
  { id: "muslim-al-nisaburi", name: "مسلم النيسابوري", birthHijri: 204, deathHijri: 261 },
  { id: "al-tirmidhi", name: "الترمذي", birthHijri: 210, deathHijri: 279 },
  { id: "ibn-khuzaymah", name: "ابن خزيمة", birthHijri: 223, deathHijri: 311 },
  { id: "taj-al-din-al-subki", name: "تاج الدين السبكي", birthHijri: 727, deathHijri: 771 },
  { id: "al-taftazani", name: "التفتازاني", birthHijri: 712, deathHijri: 792 },
  { id: "al-thaalibi", name: "الثعالبي", birthHijri: 786, deathHijri: 875 },
  { id: "al-wansharisi", name: "الونشريسي", birthHijri: 834, deathHijri: 914 },
  { id: "al-senussi", name: "السنوسي", birthHijri: 830, deathHijri: 895 },
  { id: "al-akhDhari", name: "الأخضري", birthHijri: 920, deathHijri: 953 },
  { id: "muhammad-ibn-abdul-wahhab", name: "محمد بن عبد الوهاب", birthHijri: 1115, deathHijri: 1206 },
  { id: "al-shawkani", name: "الشوكاني", birthHijri: 1173, deathHijri: 1250 },
  { id: "al-jabarti", name: "الجبرتي", birthHijri: 1166, deathHijri: 1240 },
  { id: "abu-ras-al-maaskari", name: "ابو راس المعسكري", birthHijri: 1165, deathHijri: 1238 },
  { id: "ibn-abidin", name: "ابن عابدين", birthHijri: 1198, deathHijri: 1252 },
  { id: "al-izz-bin-abd-al-salam", name: "العز بن عبد السلام", birthHijri: 577, deathHijri: 660 },
  { id: "zakariya-al-ansari", name: "زكريا الأنصاري", birthHijri: 824, deathHijri: 926 },
  { id: "abd-al-qadir-al-jilani", name: "عبد القادرالجيلاني", birthHijri: 470, deathHijri: 561 },
  { id: "ibn-hiban", name: "ابن حبان", birthHijri: 270, deathHijri: 354 },
  { id: "ibn-furk", name: "ابن فورك", birthHijri: 330, deathHijri: 406 },
  { id: "ibn-al-jarzi", name: "ابن الجرزي", birthHijri: 751, deathHijri: 833 },
  { id: "ismail-bin-yahya-al-mazni", name: "اسماعيل بن يحي المزني", birthHijri: 175, deathHijri: 264 },
  { id: "abu-ishaq-al-asfarini", name: "ابو اسحاق الاسفاريني", birthHijri: 337, deathHijri: 418 },
  { id: "taqi-al-din-al-subki", name: "تقي الدين السبكي", birthHijri: 683, deathHijri: 756 },
  { id: "abu-ismail-al-harawi", name: "أبو إسماعيل الهروي", birthHijri: 396, deathHijri: 481 },
  { id: "abd-al-wahid-bin-ashir", name: "عبد الواحد بن عاشر", birthHijri: 990, deathHijri: 1040 },
  { id: "ibn-ata-allah-al-sakandari", name: "ابن عطاء الله السكندري", birthHijri: 658, deathHijri: 709 },
  { id: "muhammad-bin-ajroum", name: "محمد بن آجروم الصنهاجي", birthHijri: 672, deathHijri: 723 },
  { id: "najm-al-din-al-tufi", name: "نجم الدين الطوفي", birthHijri: 657, deathHijri: 726 },
  { id: "abu-bakr-al-jassas", name: "ابوبكر الجصاص", birthHijri: 305, deathHijri: 370 },
  { id: "shams-al-umma-sarakhsi", name: "شمس الأئمة السرخسي", birthHijri: 400, deathHijri: 490 },
  { id: "ala-al-din-al-samarqandi", name: "علاء الدين السمرقندي", birthHijri: 488, deathHijri: 539 },
  { id: "ala-al-din-al-kasani", name: "علاء الدين الكاساني", birthHijri: 514, deathHijri: 587 },
  { id: "ibn-al-ather", name: "ابن الأثير", birthHijri: 555, deathHijri: 630 },
  { id: "khalil-bin-ishaq-al-jundi", name: "خليل بن اسحاق الجندي", birthHijri: 767, deathHijri: 700 },
  { id: "al-dardir", name: "الدردير", birthHijri: 1127, deathHijri: 1200 },
  { id: "abu-ala-al-maarri", name: "أبو العلاء المعري", birthHijri: 363, deathHijri: 449 },
  { id: "abu-nuwas", name: "أبو نواس", birthHijri: 145, deathHijri: 198 },
  { id: "al-mutanabbi", name: "المتنبي", birthHijri: 303, deathHijri: 354 },
  { id: "ibn-abdul-bar", name: "ابن عبد البر", birthHijri: 368, deathHijri: 463 },
  { id: "yaqut-al-hamawi", name: "ياقوت الحمري", birthHijri: 574, deathHijri: 626 },
  { id: "ibn-battuta", name: "ابن بطوطة", birthHijri: 703, deathHijri: 779 },
  { id: "ibn-khulkan", name: "ابن خلكان", birthHijri: 607, deathHijri: 680 },
  { id: "wasil-bin-ata", name: "واصل ابن عطاء", birthHijri: 80, deathHijri: 131 },
  { id: "amr-bin-ubayd", name: "عمرو بن عبيد", birthHijri: 80, deathHijri: 143 },
  { id: "abu-hadheel-al-allaf", name: "أبو هذيل العلاف", birthHijri: 135, deathHijri: 235 },
  { id: "al-nizam", name: "النظام", birthHijri: 160, deathHijri: 231 },
  { id: "abu-hashim-al-jubai", name: "أبوهاشم الجبائي", birthHijri: 277, deathHijri: 321 },
  { id: "abu-madin-al-tlemsani", name: "أبومدين التلمساني", birthHijri: 509, deathHijri: 594 },
  { id: "al-mulla-sadra", name: "الملاصدرا الشيرازي", birthHijri: 980, deathHijri: 1050 },
  { id: "al-suhrawardi-maktul", name: "االسهروردي المقتول", birthHijri: 550, deathHijri: 586 },
  { id: "al-kindi", name: "الكندي", birthHijri: 185, deathHijri: 256 },
  { id: "al-farabi", name: "الفارابي", birthHijri: 260, deathHijri: 339 },
  { id: "ibn-bajah", name: "ابن باجه", birthHijri: 487, deathHijri: 533 },
  { id: "abu-yala-al-farra", name: "ابو يعلى الفراء", birthHijri: 380, deathHijri: 458 },
  { id: "ibn-aqil-al-hanbali", name: "ابن عقيل الحنبلي", birthHijri: 431, deathHijri: 513 },
  { id: "ibn-al-haytham", name: "ابن الهيثم", birthHijri: 354, deathHijri: 430 },
  { id: "al-biruni", name: "البيروني", birthHijri: 362, deathHijri: 440 },
  { id: "al-darmi", name: "الدارمي", birthHijri: 195, deathHijri: 280 },
  { id: "ibn-kilab", name: "ابن كلاب", birthHijri: 185, deathHijri: 245 },
  { id: "al-husayn-al-karabisi", name: "الحسين الكرابيسي", birthHijri: 190, deathHijri: 248 },
  { id: "al-harith-al-muhasibi", name: "الحارث المحاسبي", birthHijri: 170, deathHijri: 243 },
  { id: "harb-al-karamani", name: "حرب الكرماني", birthHijri: 190, deathHijri: 280 },
  { id: "abdullah-bin-ahmad-bin-hanbal", name: "عبد الله بن احمد بن حنبل", birthHijri: 213, deathHijri: 290 },
  { id: "abu-ali-al-jubai", name: "أبو علي الجبائي", birthHijri: 235, deathHijri: 303 },
  { id: "al-junayd", name: "الجنيد", birthHijri: 215, deathHijri: 298 },
  { id: "al-awzai", name: "الأوزاعي", birthHijri: 88, deathHijri: 157 },
  { id: "al-laith-bin-saad", name: "الليث بن سعد", birthHijri: 94, deathHijri: 175 },
  { id: "sufyan-al-thawri", name: "سفيان الثوري", birthHijri: 97, deathHijri: 161 },
];

];
const relations = {
  "ibn-taymiyyah": ["ibn-qayyim", "al-dhahabi", "ibn-kathir"],
  "ibn-qayyim": ["ibn-taymiyyah"],
  "al-dhahabi": ["ibn-taymiyyah"],
  "ibn-kathir": ["ibn-taymiyyah"]
};
const countries = [
  { name: "الدولة الأموية", startHijri: 41, endHijri: 132, capital: "دمشق" },
  { name: "العصر العباسي الأول", startHijri: 132, endHijri: 233, capital: "بغداد" },
  { name: " (نفوذ الأتراك)العصر العباسي الثاني", startHijri: 233, endHijri: 334, capital: "بغداد" },
  { name: "العصر العباسي الثالث (نفوذ البويهيين)", startHijri: 334, endHijri: 447, capital: "بغداد" },
   { name: "العصر العباسي الرابع (السلاجقة)", startHijri: 447, endHijri: 656, capital: "بغداد" },
  { name: "العصر العباسي الخامس (حكم المماليك)", startHijri: 656, endHijri: 923, capital: "القاهرة" },
  { name: "الدولة الأموية في الأندلس", startHijri: 138, endHijri: 422, capital: "قرطبة" },
  { name: "فترة ملوك الطوائف الاولى", startHijri: 422, endHijri: 479, capital: "لا توجد عاصمة موحدة" },
  { name:  "دولة المرابطين", startHijri: 479, endHijri: 541, capital: "مراكش" },
  { name: "دولة الموحدين", startHijri: 541, endHijri: 622, capital: "مراكش" },
  { name: "فترة ملوك الطوائف الثانية", startHijri: 622, endHijri: 635, capital: "لا توجد عاصمة موحدة" },
  { name: "الدولة الفاطمية", startHijri: 297, endHijri: 359, capital: "المهدية" },
  { name: "الدولة الفاطمية", startHijri: 359, endHijri: 567, capital: "القاهرة" },
  { name: "الدولة الأيوبية", startHijri: 567, endHijri: 648, capital: "القاهرة" },
  { name: "الدولة العثمانية", startHijri: 923, endHijri: 1342, capital: "اسطنبول" },
  { name: "إمارة غرناطة", startHijri: 635, endHijri: 897, capital: "غرناطة" },

];

function checkYear() {
  const year = parseInt(document.getElementById("yearInput").value);
  const resultsDiv = document.getElementById("results");
  const countriesDiv = document.getElementById("countriesResults");

  // مسح النتائج السابقة
  resultsDiv.innerHTML = "";
  countriesDiv.innerHTML = "";

  // التحقق من الإدخال
  if (isNaN(year)) {
    countriesDiv.innerHTML = "<p>من فضلك أدخل سنة صحيحة.</p>";
    return;
  }

  // البحث عن الدول الموجودة في تلك السنة
  const activeCountries = countries.filter(c => year >= c.startHijri && year <= c.endHijri);

  // عرض الدول
  if (activeCountries.length > 0) {
    countriesDiv.innerHTML += "<h2>الدول الإسلامية في هذه السنة:</h2>";
    activeCountries.forEach(c => {
      countriesDiv.innerHTML += `
        <div class="card country">
          <h2>${c.name}</h2>
          <p>العاصمة: ${c.capital}</p>
        </div>
      `;
    });
  } else {
    countriesDiv.innerHTML += "<p>لا توجد دول مسجلة في هذه السنة.</p>";
  }

  // البحث عن الشخصيات الأحياء
  const alive = people.filter(p => year >= p.birthHijri && year <= p.deathHijri);

  // عرض الشخصيات
  if (alive.length > 0) {
    alive.forEach(p => {
      const age = year - p.birthHijri;
      resultsDiv.innerHTML += `
         <div class="card person-card"
         data-id="${p.id || ''}"
          onclick="highlightRelations('${p.id || ''}')">
          <h2>${p.name}</h2>
          <p>عمره في سنة ${year} هـ هو <strong>${age}</strong> سنة</p>
        </div>
      `;
    });
  } else {
    resultsDiv.innerHTML += "<p>لا يوجد شخصيات مسجّلة في هذه السنة.</p>";
  }
}
function highlightRelations(personId) {
  // إزالة أي تمييز سابق
  const allCards = document.querySelectorAll(".person-card");
  allCards.forEach(card => card.classList.remove("highlight"));

  if (!personId) return; // إذا لم يكن للشخص id، لا نفعل شيئًا

  // تلوين بطاقة الشخصية المختارة
  const selectedCard = document.querySelector(`.person-card[data-id='${personId}']`);
  if (selectedCard) selectedCard.classList.add("highlight");

  // تلوين بطاقات الشخصيات المرتبطة بها
  const relatedIds = relations[personId] || [];
  relatedIds.forEach(id => {
    const card = document.querySelector(`.person-card[data-id='${id}']`);
    if (card) card.classList.add("highlight");
  });
}
   
