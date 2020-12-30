import '../sass/style.scss';

import elms from './helpers/elements';
import { getCurrentMode } from './helpers/functions';
import ModeController from './controllers/ModeController';

const modeController = new ModeController(getCurrentMode(elms.body));

modeController.set();

elms.btn.addEventListener('click', () => {
  elms.body.classList.toggle('dark-mode');
  elms.btn.classList.add('disable');
  elms.layer.classList.remove('mode-no-transition');

  modeController.toggle(() => elms.btn.classList.remove('disable'));
});
