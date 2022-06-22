function convertToText(res) {
  if (res.ok) {
    return res.text();
  } else {
    throw new Error('Bad response');
  }
}

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
  console.log(urlParams.get(param));
  return urlParams.get(param);
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

export async function loadHeaderFooter() {
  const header = await loadTemplate('../partials/header.html');
  const footer = await loadTemplate('../partials/footer.html');
  const headerTemplate = document.getElementById('main-header');
  const footerTemplate = document.getElementById('main-footer');
  renderWithTemplate(header, headerTemplate);
  renderWithTemplate(footer, footerTemplate);
}

export function alertMessage(message, scroll = true, duration = 3000){
  const alert = document.createElement('div');
  alert.classList.add('alert');
  alert.innerHTML = `<p>${message}</p><span>X</span>`;
  alert.addEventListener('click', function(e){
    if(e.target.tagName == 'SPAN'){
      main.removeChild(this);
    }
  })
  const main = document.querySelector('main');
  main.prepend(alert);
  if(scroll)
    window.scrollTo(0,0);
}

export function removeAllAlerts(){
  const alerts = document.querySelector('.alert');
  alerts.forEach(alert => document.querySelector('main').removeChild(alert));
}