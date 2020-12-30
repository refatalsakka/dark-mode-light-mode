export function transitionend(elm, callback) {
  elm.addEventListener('transitionend', () => callback(), { once: true });
}

export function getCurrentMode(elm) {
  return elm.classList.contains('dark-mode') ? 'dark' : '';
}
