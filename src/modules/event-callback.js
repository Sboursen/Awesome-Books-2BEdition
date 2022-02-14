import * as domElements from './dom-elements.js';

const MEDIA_BREAKPOINT = 768;
const showMobileMenu = (e) => {
  if (
    e.currentTarget.classList.contains('mobile-menu-button')
  ) {
    domElements.mobileMenu.classList.remove('hidden');
    domElements.mobileMenu.classList.add('block');
    domElements.body.style.overflowY = 'hidden';
  }
};

const hideMobileMenu = (e) => {
  if (
    e.currentTarget.classList.contains('cancel') ||
    e.currentTarget.parentNode.parentNode.classList.contains(
      'page-navigation',
    )
  ) {
    domElements.mobileMenu.classList.remove('block');
    domElements.mobileMenu.classList.add('hidden');
    domElements.body.style.overflowY = 'scroll';
  }
};

const hideMobileMenuOnEvent = (e) => {
  if (domElements.mobileMenu.style.display !== 'none') {
    if (e.type === 'resize') {
      if (window.innerWidth > MEDIA_BREAKPOINT) {
        domElements.mobileMenu.classList.remove('block');
        domElements.mobileMenu.classList.add('hidden');
        document.body.style.overflowY = 'scroll';
      }
    } else {
      domElements.mobileMenu.classList.remove('block');
      domElements.mobileMenu.classList.add('hidden');
      document.body.style.overflowY = 'scroll';
    }
  }
};

const toggleSection = (e) => {
  if (
    e.currentTarget.parentNode.parentNode.classList.contains(
      'page-navigation',
    )
  ) {
    const eventCaller = [
      e.currentTarget.classList.contains(
        'mobile-list-link',
      ),
      e.currentTarget.classList.contains(
        'mobile-add-new-link',
      ),
      e.currentTarget.classList.contains(
        'mobile-contact-link',
      ),
    ].join('');

    switch (eventCaller) {
      case 'truefalsefalse':
        domElements.homeSection.classList.add('flex');
        domElements.homeSection.classList.remove('hidden');
        domElements.addNewSection.classList.add('hidden');
        domElements.addNewSection.classList.remove('flex');
        domElements.contactSection.classList.add('hidden');
        domElements.contactSection.classList.remove('flex');

        break;
      case 'falsetruefalse':
        domElements.homeSection.classList.add('hidden');
        domElements.homeSection.classList.remove('flex');
        domElements.addNewSection.classList.add('flex');
        domElements.addNewSection.classList.remove(
          'hidden',
        );
        domElements.contactSection.classList.add('hidden');
        domElements.contactSection.classList.remove('flex');
        break;
      case 'falsefalsetrue':
        domElements.homeSection.classList.add('hidden');
        domElements.homeSection.classList.remove('flex');
        domElements.addNewSection.classList.add('hidden');
        domElements.addNewSection.classList.remove('flex');
        domElements.contactSection.classList.add('flex');
        domElements.contactSection.classList.remove(
          'hidden',
        );
        break;
      default:
        domElements.homeSection.classList.add('flex');
        domElements.homeSection.classList.remove('hidden');
        domElements.addNewSection.classList.add('hidden');
        domElements.addNewSection.classList.remove('flex');
        domElements.contactSection.classList.add('hidden');
        domElements.contactSection.classList.remove('flex');
    }
  }
};

export {
  toggleSection,
  hideMobileMenuOnEvent,
  hideMobileMenu,
  showMobileMenu,
};
