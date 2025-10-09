const people = [
  { name: "الإمام البخاري", birthHijri: 194, deathHijri: 256 },
  { name: "ابن سينا", birthHijri: 370, deathHijri: 428 },
   { name: "ابن اسحاق", birthHijri: 85, deathHijri: 151 },
  { name: "ابن المقفع", birthHijri: 106, deathHijri: 142 },
{ name: "ابو حنيفة", birthHijri: 80, deathHijri: 150 },
{ name: "مالك بن أنس", birthHijri: 93, deathHijri: 179 },
{ name: "بن هشام", birthHijri: 150, deathHijri: 218 },
  { name: "الشافعي", birthHijri: 150, deathHijri: 204 },
  { name: "الجاحظ", birthHijri: 159, deathHijri: 255 },
  { name: "الخوارزمي", birthHijri: 164, deathHijri: 232 },
  { name: "أحمد بن حنبل", birthHijri: 164, deathHijri: 241 },
  { name: "البلاذري", birthHijri: 190, deathHijri: 279 },
  { name: "ابن ماجة", birthHijri: 209, deathHijri: 273 },
  { name: "ابن قتيبة", birthHijri: 213, deathHijri: 276 },
  { name: "الطبري", birthHijri: 224, deathHijri: 310 },
  { name: "الحلاج", birthHijri: 244, deathHijri: 309 },
  { name: "الماتريدي", birthHijri: 238, deathHijri: 333 },
  { name: "الطحاوي", birthHijri: 239, deathHijri: 321 },
  { name: "أبو الحسن الاشعري", birthHijri: 260, deathHijri: 324 },
  { name: "البربهاري", birthHijri: 253, deathHijri: 329 },
  { name: "الأصفهاني", birthHijri: 284, deathHijri: 356 },
  { name: "الدارقطني", birthHijri: 306, deathHijri: 385 },
  { name: "ابن النديم", birthHijri: 320, deathHijri: 385 },
  { name: "الحاكم النيسابوري", birthHijri: 321, deathHijri: 405 },
  { name: "ابن جني", birthHijri: 322, deathHijri: 392 },
  { name: "مسكويه", birthHijri: 320, deathHijri: 421 },
  { name: "ابو حيان التوحيدي", birthHijri: 310, deathHijri: 400 },
  { name: "الباقلاني", birthHijri: 338, deathHijri: 403 },
  { name: "القاضي عبدالجبار", birthHijri: 359, deathHijri: 415 },
  { name: "القشيري", birthHijri: 376, deathHijri: 465 },
  { name: "ابن حزم", birthHijri: 384, deathHijri: 456 },
  { name: "البيهقي", birthHijri: 384, deathHijri: 458 },
  { name: "الخطيب البغدادي", birthHijri: 392, deathHijri: 463 },
  { name: "الجرجاني", birthHijri: 400, deathHijri: 471 },
  { name: "الجويني", birthHijri: 419, deathHijri: 478 },
  { name: "البغوي", birthHijri: 433, deathHijri: 516 },
  { name: "الغزالي", birthHijri: 450, deathHijri: 505 },
  { name: "الزمخشري", birthHijri: 467, deathHijri: 538 },
  { name: "ابن العربي المالكي", birthHijri: 468, deathHijri: 543 },
  { name: "القاضي عياض", birthHijri: 476, deathHijri: 544 },
  { name: "الشهرستاني", birthHijri: 479, deathHijri: 548 },
  { name: "ابن عطية", birthHijri: 481, deathHijri: 541 },
  { name: "ابن عساكر", birthHijri: 499, deathHijri: 571 },
  { name: "ابن طفيل", birthHijri: 494, deathHijri: 581 },
  { name: "ابن الجوزي", birthHijri: 510, deathHijri: 597 },
  { name: "ابن رشد", birthHijri: 520, deathHijri: 595 },
  { name: "ابن قدامة", birthHijri: 541, deathHijri: 620 },
   { name: "فخر الدين الرازي", birthHijri: 544, deathHijri: 604 },
   { name: "ابن أبي الحديد", birthHijri: 586, deathHijri: 656 },
   { name: "ابن الصلاح", birthHijri: 577, deathHijri: 643 },
   { name: "ابن عربي", birthHijri: 560, deathHijri: 638 },
   { name: "القرطبي", birthHijri: 611, deathHijri: 671 },
   { name: "ابن سبعين", birthHijri: 614, deathHijri: 669 },
   { name: "القرافي", birthHijri: 626, deathHijri: 684 },
   { name: "النووي", birthHijri: 631, deathHijri: 676 },
   { name: "ابن دقيق العيد", birthHijri: 625, deathHijri: 702 },
   { name: "ابن تيمية", birthHijri: 661, deathHijri: 728 },
   { name: "ابن القيم", birthHijri: 691, deathHijri: 751 },
   { name: "الذهبي", birthHijri: 673, deathHijri: 748 },
   { name: "ابن كثير", birthHijri: 701, deathHijri: 774 },
   { name: "الشاطبي", birthHijri: 730, deathHijri: 790 },
   { name: "ابن رجب", birthHijri: 736, deathHijri: 795 },
   { name: "ابن خلدون", birthHijri: 732, deathHijri: 808 },
   { name: "الزركشي", birthHijri: 745, deathHijri: 794 },
   { name: "ابن حجر العسقلاني", birthHijri: 773, deathHijri: 852 },
   { name: "السيوطي", birthHijri: 849, deathHijri: 911 },
   { name: "ابو يوسف", birthHijri: 113, deathHijri: 182 },
   { name: "الشيباني", birthHijri: 131, deathHijri: 189 },
   { name: "مسلم النيسابوري", birthHijri: 204, deathHijri: 261 },
   { name: "الترمذي", birthHijri: 210, deathHijri: 279 },
   { name: "ابن خزيمة", birthHijri: 223, deathHijri: 311 },
   { name: "تاج الدين السبكي", birthHijri: 727, deathHijri: 771 },
   { name: "التفتازاني", birthHijri: 712, deathHijri: 792 },
   { name: "الثعالبي", birthHijri: 786, deathHijri: 875 },
   { name: "الونشريسي", birthHijri: 834, deathHijri: 914 },
   { name: "السنوسي", birthHijri: 830, deathHijri: 895 },
   { name: "الأخضري", birthHijri: 920, deathHijri: 953 },
   { name: "محمد بن عبد الوهاب", birthHijri: 1115, deathHijri: 1206 },
   { name: "الشوكاني", birthHijri: 1173, deathHijri: 1250 },
   { name: "الجبرتي", birthHijri: 1166, deathHijri: 1240 },
   { name: "ابو راس المعسكري", birthHijri: 1165, deathHijri: 1238 },
   { name: "ابن عابدين", birthHijri: 1198, deathHijri: 1252 },
     { name: "العز بن عبد السلام", birthHijri: 577, deathHijri: 660 },
     { name: "زكريا الأنصاري", birthHijri: 824, deathHijri: 926 },
     { name: "عبد القادرالجيلاني", birthHijri: 470, deathHijri: 561 },
     { name: "ابن حبان", birthHijri: 270, deathHijri: 354 },
    { name: "ابن فورك", birthHijri: 330, deathHijri: 406 },
     { name: "ابن الجرزي", birthHijri: 751, deathHijri: 833 },
     { name: "اسماعيل بن يحي المزني", birthHijri: 175, deathHijri: 264 },
     { name: "ابو اسحاق الاسفاريني", birthHijri: 337, deathHijri: 418 },
    { name: "تقي الدين السبكي", birthHijri: 683, deathHijri: 756 },
     { name: "أبو إسماعيل الهروي", birthHijri: 396, deathHijri: 481 },
     { name: "عبد الواحد بن عاشر", birthHijri: 990, deathHijri: 1040 },
     { name: "ابن عطاء الله السكندري", birthHijri: 658, deathHijri: 709 },
    { name: "محمد بن آجروم الصنهاجي", birthHijri: 672, deathHijri: 723 },
     { name: "نجم الدين الطوفي", birthHijri: 657, deathHijri: 726 },
     { name: "ابوبكر الجصاص", birthHijri: 305, deathHijri: 370 },
     { name: "شمس الأئمة السرخسي", birthHijri: 400, deathHijri: 490 },
    { name: "علاء الدين السمرقندي", birthHijri: 488, deathHijri: 539 },
     { name: "علاء الدين الكاساني", birthHijri: 514, deathHijri: 587 },
     { name: "ابن الأثير", birthHijri: 555, deathHijri: 630 },
     { name: "خليل بن اسحاق الجندي", birthHijri: 767, deathHijri: 700 },
    { name : "الدردير", birthHijri: 1127, deathHijri: 1200 },
     { name: "أبو العلاء المعري", birthHijri: 363, deathHijri: 449},
     { name: "أبو نواس", birthHijri: 145, deathHijri: 198 },
     { name: "المتنبي", birthHijri: 303, deathHijri: 354 },
    { name: "ابن عبد البر", birthHijri: 368, deathHijri: 463 },
     { name: "ياقوت الحمري", birthHijri: 574, deathHijri: 626 },
     { name: "ابن بطوطة", birthHijri: 703, deathHijri: 779 },
     { name: "ابن خلكان", birthHijri: 607, deathHijri: 680 },
    { name: "واصل ابن عطاء", birthHijri: 80, deathHijri: 131 },
     { name: "عمرو بن عبيد", birthHijri: 80, deathHijri: 143 },
     { name: "أبو هذيل العلاف", birthHijri: 135, deathHijri: 235 },
     { name: "النظام", birthHijri: 160, deathHijri: 231 },
    { name: "أبوهاشم الجبائي", birthHijri: 277, deathHijri: 321 },
     { name: "أبومدين التلمساني", birthHijri: 509, deathHijri: 594 },
     { name: "الملاصدرا الشيرازي", birthHijri: 980, deathHijri: 1050 },
     { name: "االسهروردي المقتول", birthHijri: 550, deathHijri: 586 },
    { name: "الكندي", birthHijri: 185, deathHijri: 256 },
     { name: "الفارابي", birthHijri: 260, deathHijri: 339 },
     { name: "ابن باجه", birthHijri: 487, deathHijri: 533 },
     { name: "ابو يعلى الفراء ", birthHijri: 380, deathHijri: 458 },
    { name: "ابن عقيل الحنبلي", birthHijri: 431, deathHijri: 513 },
     { name: "ابن الهيثم", birthHijri: 354, deathHijri: 430 },
     { name: "البيروني", birthHijri: 362, deathHijri: 440 },
       { name: "الدارمي", birthHijri: 195, deathHijri: 280 },
     { name: "ابن كلاب", birthHijri: 185, deathHijri: 245 },
     { name: "الحسين الكرابيسي", birthHijri: 190, deathHijri: 248 },
     { name: "الحارث المحاسبي", birthHijri: 170, deathHijri: 243 },
     { name: "البيروني", birthHijri: 362, deathHijri: 440 },
       { name: "حرب الكرماني", birthHijri: 190, deathHijri: 280 },
     { name: "عبد الله بن احمد بن حنبل", birthHijri: 213, deathHijri: 290 },
     { name: "أبو علي الجبائي", birthHijri: 235, deathHijri: 303 },
     { name: "الجنيد", birthHijri: 215, deathHijri: 298 },
     { name: "الأوزاعي", birthHijri: 88, deathHijri: 157 },
     { name: "الليث بن سعد", birthHijri: 94, deathHijri: 175 },
     { name: "سفيان الثوري", birthHijri: 97, deathHijri: 161 },
     { name: "واصل بن عطاء", birthHijri: 80, deathHijri: 131 },


];
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
        <div class="card">
          <h2>${p.name}</h2>
          <p>عمره في سنة ${year} هـ هو <strong>${age}</strong> سنة</p>
        </div>
      `;
    });
  } else {
    resultsDiv.innerHTML += "<p>لا يوجد شخصيات مسجّلة في هذه السنة.</p>";
  }
}

   
