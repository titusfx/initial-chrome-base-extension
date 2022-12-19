import { createInvisibleIframe } from './utils'

console.log("ContentPage script loaded2");

function sendControlToAngular(whichPath = 'index.html?#/content-script', id = `invisible${Math.random()}`) {
  const el = createInvisibleIframe(id);
  el.src = chrome?.runtime?.getURL(whichPath);
  document.body.appendChild(el);
  return el;
}

// NOTE: If you want to have contentScript under Angular ( with dependency Injection and everything else) use this 👇 (ContentPageManagerService)
sendControlToAngular();