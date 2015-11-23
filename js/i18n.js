// Create language switcher instance and set default language to en
window.lang = new Lang('zh');

// Define the chinese language pack as a dynamic pack to be loaded on demand
// if the user asks to change to that language. We pass the two-letter language
// code and the path to the language pack js file
window.lang.dynamic('en', 'languages/en.json');
