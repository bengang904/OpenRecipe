function autoRedirectByLanguage() {
    var userLang = (navigator.language || navigator.userLanguage || 'zh-CN').toLowerCase();

    var langMap = {
        'zh-tw': 'https://or.2024-10-24.zip/tw/', // 繁體中文
        'en': 'https://or.2024-10-24.zip/en/',    // English (en-US, en-GB, en-*)
        'ja': 'https://or.2024-10-24.zip/ja/',    // 日本語 (ja-JP, ja)
        'ko': 'https://or.2024-10-24.zip/ko/',    // 한국어 (ko-KR, ko)
        'ru': 'https://or.2024-10-24.zip/ru/'     // Русский (ru-RU, ru)
    };

    var targetPath = '';

    if (userLang.startsWith('zh-tw')) targetPath = langMap['zh-tw'];
    else if (userLang.startsWith('en')) targetPath = langMap['en'];
    else if (userLang.startsWith('ja')) targetPath = langMap['ja'];
    else if (userLang.startsWith('ko')) targetPath = langMap['ko'];
    else if (userLang.startsWith('ru')) targetPath = langMap['ru']; 

    if (targetPath && window.location.href !== targetPath) {
        window.location.replace(targetPath);
    }
}

function toggleLanguageMenu() {
    var menu = document.getElementById("language-menu");
    if (menu) menu.classList.toggle("show");
}

document.addEventListener('click', function(event) {
    var dropdown = document.querySelector('.language-dropdown');
    var menu = document.getElementById("language-menu");
    var toggle = document.getElementById("language-toggle");
    
    if (!dropdown) return;
    
    if (event.target !== toggle && !dropdown.contains(event.target) && menu && menu.classList.contains('show')) {
        menu.classList.remove('show');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname === '/' || window.location.pathname.endsWith('index.html')) {
        autoRedirectByLanguage();
    }
});
