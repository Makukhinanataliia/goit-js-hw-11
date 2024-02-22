import { refs } from './refs';
import { renderImages } from './renderImages';
import { getImages } from './getImages';
import { showLoader, hideLoader } from './loader';
import { showError } from './showError';

function isValidInput(input) {
  return input.trim() !== '';
}

export function onFormSubmit(event) {
  event.preventDefault();
  const userInput = event.target.elements.query.value;
  if (!isValidInput(userInput)) {
    showError('Invalid query. Please enter a non-empty string.');
    return;
  }
  showLoader();
  refs.imageContainer.innerHTML = '';

  getImages(userInput).then(renderImages).catch(showError).finally(hideLoader);
  event.target.reset();
}
