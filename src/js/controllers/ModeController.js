import elms from '../helpers/elements';
import { transitionend } from '../helpers/functions';

export default class ModeController {
  constructor(mode) {
    this.mode = mode;
    this.steps = [
      'mode-scale',
      'mode-transition',
      'mode-resize',
    ];

    if (this.mode === 'dark') this.steps.reverse();
  }

  set() {
    if (this.mode === 'dark') return this.addClasses();

    this.removeClasses();
  }

  toggle(callback) {
    elms.layer.classList.toggle(this.steps[0]);

    transitionend(elms.layer, () => {
      elms.layer.classList.toggle(this.steps[1]);
      elms.layer.classList.toggle(this.steps[2]);

      this.steps.reverse();

      callback();
    });
  }

  addClasses() {
    elms.layer.classList.add('mode-no-transition', ...this.steps);
  }

  removeClasses() {
    elms.layer.classList.remove(...this.steps);
  }
}
