document.addEventListener("DOMContentLoaded", function () {
        const langSelect = document.getElementById("lang");

        langSelect.addEventListener("change", function () {
            const selectedLang = langSelect.value;

            // Define translations for all supported languages
            const translations = {
                "eng": {
                    "close": "Close",
                    "settings": "Settings",
                    "language": "Language",
                    "autoplay_videos": "Autoplay videos",
                    "autoplay_description": "Choose if you want to autoplay on your browser",
                    "show_profile_photo": "Show profile photo",
                    "profile_photo_description": "Choose whether to show or hide profile photos of other members.",
                    "save": "Save",
                    "cancel": "Cancel"
                },
                "arab": {
                    "close": "إغلاق",
                    "settings": "الإعدادات",
                    "language": "لغة",
                    "autoplay_videos": "تشغيل تلقائي للفيديوهات",
                    "autoplay_description": "اختر ما إذا كنت تريد التشغيل التلقائي على متصفحك",
                    "show_profile_photo": "عرض الصورة الشخصية",
                    "profile_photo_description": "اختر ما إذا كنت تريد عرض أو إخفاء صور الشخصية للأعضاء الآخرين.",
                    "save": "حفظ",
                    "cancel": "إلغاء"
                },
                "swahili": {
                    "close": "Funga",
                    "settings": "Mipangilio",
                    "language": "Lugha",
                    "autoplay_videos": "Chezesha video moja kwa moja",
                    "autoplay_description": "Chagua kama unataka kucheza video moja kwa moja kwenye kivinjari chako",
                    "show_profile_photo": "Onesha picha ya wasifu",
                    "profile_photo_description": "Chagua ikiwa unataka kuonyesha au kuficha picha za wasifu za wanachama wengine.",
                    "save": "Hifadhi",
                    "cancel": "Ghairi"
                }
            };

            // Update the text of all <h3> and <p> elements with the selected language
            for (const elementId in translations[selectedLang]) {
                const element = document.getElementById(elementId);
                if (element) {
                    element.textContent = translations[selectedLang][elementId];
                }
            }
        });
});

const closerElements = document.querySelectorAll(".top_nav, #cancel, #save");
const card = document.querySelector(".card");

closerElements.forEach(element => {
  element.addEventListener("click", () => {
    card.classList.add("unactive");
    
    // Remove the "unactive" class after 400 milliseconds
    setTimeout(() => {
      card.classList.remove("unactive");
    }, 1000);
  });
});
