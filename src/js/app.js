import '../sass/style.scss';

import elms from './helpers/elements';
import ModeController from './controllers/ModeController';

const modeController = new ModeController();

elms.btn.addEventListener('click', () => {
  elms.body.classList.remove('no-transition');
  elms.btn.classList.add('disable');

  modeController.toggle(() => {
    elms.btn.classList.remove('disable');
  });
});

function run() {
  elms.body.classList.add('no-transition');
  modeController.run();
}
run();
