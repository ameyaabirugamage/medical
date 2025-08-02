// Language Switcher using Dropdown or Icons
document.addEventListener('DOMContentLoaded', function () {
  // Dropdown selector (optional if you use a <select>)
  const langSelect = document.getElementById('lang-select');

  // Icon-based switching (Serbian, Latin, English)
  const flags = document.querySelectorAll('img[alt]');

  function switchLanguage(lang) {
    document.querySelectorAll('[data-en]').forEach(el => {
      const translation = el.getAttribute(`data-${lang}`);
      if (translation) el.textContent = translation;
    });
  }

  // If you're using <select> language dropdown
  if (langSelect) {
    langSelect.addEventListener('change', function () {
      switchLanguage(this.value);
    });
  }

  // If using flag icons
  flags.forEach(flag => {
    flag.addEventListener('click', () => {
      const alt = flag.getAttribute('alt');
      let langCode = 'en';
      if (alt.toLowerCase().includes('latin')) langCode = 'sr-latin';
      else if (alt.toLowerCase().includes('serbian')) langCode = 'sr-cyrillic';
      switchLanguage(langCode);
    });
  });
});
