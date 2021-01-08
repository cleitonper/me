import { library, config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';


import {
  faServer,
  faHammer,
  faPencilRuler,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

import {
  faGithub,
  faGitlab,
  faLinkedinIn,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';


library.add(
  faServer,
  faHammer,
  faPencilRuler,
  faEnvelope,
  faGithub,
  faGitlab,
  faLinkedinIn,
  faWhatsapp,
);


config.autoAddCss = false;
