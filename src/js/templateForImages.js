export function templateForImages(
  largeImageURL,
  webwormURL,
  tags,
  likes,
  views,
  comments,
  downloads
) {
  return `<li class="gallery-item">
            <a class="gallery-link" href="${largeImageURL}">
              <img class="gallery-image" src="${webwormURL}" alt="${tags}" />
            </a>
               <ul class="list-content">      
                  <li class="list-text"><p>Likes <span>${likes}</span></p></li>
                  <li class="list-text"><p>Views <span>${views}</span></p></li>
                  <li class="list-text"><p>Comments <span>${comments}</span></p></li>
                  <li class="list-text"><p>Downloads <span>${downloads}</span></p></li>
              </ul>

              
          </li>`;
}
