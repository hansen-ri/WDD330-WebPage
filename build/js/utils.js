import { doc } from "../web_modules/prettier.js";

// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener('touchend', (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener('click', callback);
}

export function getParams(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get('product');
  return product;
}

export function renderListWithTemplate(template, parent, list, callback){
        list.forEach(item => {
            const clone = template.content.cloneNode(true);
            const templateWithData = callback(clone, item);
            parent.appendChild(templateWithData);
      
        });
}

export function renderWithTemplate(template, parent, data, callback) {
  let clone = template.content.cloneNode(true);
  if (callback) {
    clone = callback(clone, data);
  } 
  parent.appendChild(clone);
};

export async function loadTemplate(path) {
  const html = await fetch(path).then(convertToText);
  const template = document.createElement('template');
  template.innerHTML = html;
  return template;
}

export function loadHeaderFooter() {
  const header = loadTemplate('/src/partials/header.html');
  const footer = loadTemplate('/src/partials/footer.html');
  headerTemplate = document.getElementById('header');
  footerTemplate = document.getElementById('footer');
  renderWithTemplate(headerTemplate, header);
  renderWithTemplate(footerTemplate, footer);
}