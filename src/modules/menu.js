// eslint-disable-next-line import/extensions
import * as eventCallback from './event-callback.js';
// eslint-disable-next-line import/extensions
import * as domElements from './dom-elements.js';

domElements.mobileMenuButton.addEventListener(
  'click',
  eventCallback.showMobileMenu,
);
domElements.cancelMobileMenu.addEventListener(
  'click',
  eventCallback.hideMobileMenu,
);
domElements.mobileMenuList.forEach((node) => node.addEventListener(
  'click',
  eventCallback.hideMobileMenu,
));

window.addEventListener(
  'resize',
  eventCallback.hideMobileMenuOnEvent,
);

domElements.desktopMenuList.forEach((node) => node.addEventListener(
  'click',
  eventCallback.toggleSection,
));

domElements.mobileMenuList.forEach((node) => node.addEventListener(
  'mousedown',
  eventCallback.toggleSection,
));

domElements.mobileMenuList.forEach((node) => node.addEventListener(
  'mouseup',
  eventCallback.hideMobileMenu,
));
