// Adds panel
addTranslateBar = function () {
  var googleTranslate = document.createElement('script');
  googleTranslate.setAttribute(
    'src',
    'https://translate.google.com/translate_a/element.js?cb=nexgenGoogleTranslateElementInit'
  );
  document.head.appendChild(googleTranslate);
  document.getElementById('nexgen-translate-panel').classList.add('active');
  document.getElementById('button').classList.add('disable');
};

nexgenGoogleTranslateElementInit = function () {
  new google.translate.TranslateElement(
    {
      pageLanguage: 'en',
      layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL,
    },
    'google-translate-element'
  );
};

// Closes panel
closeTranslateBar = function () {
  document.getElementById('nexgen-translate-panel').classList.remove('active');
  document.getElementById('button').classList.remove('disable');

  var elem = document.getElementById('google-translate-element');
  elem.innerHTML = '';
};

// Closes panel when clicked
var select = document.getElementById('nexgen-translate-panel');
select.addEventListener('change', function () {
  document.getElementById('nexgen-translate-panel').classList.remove('active');
  document.getElementById('button').classList.remove('disable');
  var elem = document.getElementById('google-translate-element');
  elem.innerHTML = '';
});
