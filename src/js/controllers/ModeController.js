import Cookies from 'js-cookie';

import elms from '../helpers/elements';
import { transitionend, hasBodyDarkMode } from '../helpers/functions';

export default class ModeController {
  constructor(mode) {
    this.mode = mode || ModeController.getCurrentMode();
    this.steps = [
      'mode-scale',
      'mode-transition',
      'mode-resize',
    ];

    if (this.mode === 'dark') this.steps.reverse();
  }

  run() {
    if (this.mode === 'dark') return this.addClasses();
    this.removeClasses();
  }

  toggle(callback) {
    ModeController.setCookie();

    elms.body.classList.toggle('dark-mode');
    elms.layer.classList.toggle(this.steps[0]);

    transitionend(elms.layer, () => {
      elms.layer.classList.toggle(this.steps[1]);
      elms.layer.classList.toggle(this.steps[2]);

      this.steps.reverse();

      callback();
    });
  }

  addClasses() {
    elms.body.classList.add('dark-mode');
    elms.layer.classList.add(...this.steps);
  }

  removeClasses() {
    elms.body.classList.remove('dark-mode');
    elms.layer.classList.remove(...this.steps);
  }

  static setCookie() {
    if (!Cookies.get('mode')) return Cookies.set('mode', true);
    Cookies.remove('mode');
  }

  static getCurrentMode() {
    if (hasBodyDarkMode(elms.body)) return 'dark';
    return Cookies.get('mode') ? 'dark' : '';
  }
}
