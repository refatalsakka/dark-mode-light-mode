export function transitionend(elm, callback) {
  elm.addEventListener('transitionend', () => callback(), { once: true });
}

export function hasBodyDarkMode(elm) {
  return elm.classList.contains('dark-mode') ? true : '';
}
