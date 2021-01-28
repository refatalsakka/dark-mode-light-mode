export function transitionend(elm, callback) {
  elm.addEventListener('transitionend', () => callback(), { once: true });
}

function isBodyHasDarkMode(elm) {
  return elm.classList.contains('dark-mode') ? true : '';
}

export function getCurrentMode(elm, Cookies) {
  if (isBodyHasDarkMode(elm)) return 'dark';
  return Cookies.get('mode') ? 'dark' : '';
}
