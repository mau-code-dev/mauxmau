// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
  } else {
    progressBar.classList.remove('hide');
    if (event.detail.totalProgress === 0) {
      event.target.querySelector('.center-pre-prompt').classList.add('hide');
    }
  }
};
document.querySelector('model-viewer').addEventListener('progress', onProgress);
/* 
var isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
navigator.userAgent &&
navigator.userAgent.indexOf('CriOS') == -1 &&
navigator.userAgent.indexOf('FxiOS') == -1;

var el = document.createElement("p");
el.innerText = "Is it Safari: " + isSafari;

if (isSafari == True) {

var ttt = document.getElementById("test");


ttt.style.display = "inline";


}

var isSafari2 = window.safari !== undefined;
if (isSafari2) alert("Safari, yeah!"); */

if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) 
{
   
var ttt = document.getElementById("test");


ttt.style.display = "inline";  


}