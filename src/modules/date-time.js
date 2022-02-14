// eslint-disable-next-line import/extensions
import * as domElements from './dom-elements.js';
// eslint-disable-next-line import/extensions
import { DateTime } from '../../dist/modules/luxon/src/luxon.js';

export default function addDate() {
  const navbarContainer = domElements.dateTimeContainer;
  navbarContainer.innerHTML = '';
  const date = DateTime.now();
  navbarContainer.append(date.toHTTP());
}
