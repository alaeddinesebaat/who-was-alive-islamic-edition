const people = [
  { name: "الإمام البخاري", birthHijri: 194, deathHijri: 256 },
  { name: "ابن سينا", birthHijri: 370, deathHijri: 428 },
  { name: "ابن خلدون", birthHijri: 732, deathHijri: 808 },
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
];
const countries = [
  { name: "الدولة الأموية", startHijri: 41, endHijri: 132, capital: "دمشق" },
  { name: "الدولة العباسية الأولى", startHijri: 132, endHijri: 233, capital: "بغداد" },
  { name: "الدولة العباسية الثانية (نفوذ الأتراك)", startHijri: 233, endHijri: 334, capital: "بغداد" },
  { name: "الدولة العباسية الثالثة (نفوذ البويهيين)", startHijri: 334, endHijri: 447, capital: "بغداد" },
   { name: "الدولة العباسية الرابعة (السلاجقة)", startHijri: 447, endHijri: 656, capital: "بغداد" },
  { name: "الدولة العباسية الخامسة في القاهرة (حكم المماليك)", startHijri: 656, endHijri: 923, capital: "القاهرة" },
  { name: "الدولة الأموية في الأندلس", startHijri: 138, endHijri: 422, capital: "قرطبة" },
  { name: "فترة ملوك الطوائف الاولى", startHijri: 422, endHijri: 479, capital: "لا توجد عاصمة موحدة" },
  { name:  "دولة المرابطين", startHijri: 479, endHijri: 541, capital: "مراكش" },
  { name: "دولة الموحدين", startHijri: 541, endHijri: 622, capital: "مراكش" },
  { name: "فترة ملوك الطوائف الثانية", startHijri: 622, endHijri: 635, capital: "لا توجد عاصمة موحدة" },
  { name: "الدولة الفاطمية", startHijri: 297, endHijri: 359, capital: "المهدية" },
  { name: "الدولة الفاطمية", startHijri: 359, endHijri: 567, capital: "القاهرة" },
  { name: "الدولة الأيوبية", startHijri: 567, endHijri: 648, capital: "القاهرة" },

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

   
