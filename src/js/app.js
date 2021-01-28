import '../sass/style.scss';

import Cookies from 'js-cookie';

import elms from './helpers/elements';
import { getCurrentMode } from './helpers/functions';
import ModeController from './controllers/ModeController';

const mode = getCurrentMode(elms.body, Cookies);
const modeController = new ModeController(mode);

modeController.set();

elms.btn.addEventListener('click', () => {
  elms.body.classList.toggle('dark-mode');
  elms.btn.classList.add('disable');
  elms.layer.classList.remove('mode-no-transition');

  modeController.toggle(() => {
    elms.btn.classList.remove('disable');
    if (!Cookies.get('mode')) return Cookies.set('mode', true);
    Cookies.remove('mode');
  });
});
