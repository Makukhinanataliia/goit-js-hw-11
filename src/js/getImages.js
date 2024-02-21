import { refs } from './refs';

export function getImages(userInput) {
  const API_KEY = '42406888-248cc758d404d4e51dcff55ab';
  const BASE_URL = 'https://pixabay.com/api/';
  const parameters = `q=${userInput}&image_type=photo&orientation=horizontal&safesearch=true`;
  const URL = `${BASE_URL}?key=${API_KEY}&${parameters}`;

  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
