var start = null; 
var element = document.getElementById('waapi-test'); 
var count = 0;

function step(timestamp) {
  if (!start) start = timestamp;
  var progress = timestamp - start;
  element.style.left = Math.min(progress / 10, 200) + 'px';
  console.log(timestamp + '-' + start + '=' + progress);
  if (progress < 2000) {
    window.requestAnimationFrame(step);
  } else {
    count += 1;
    if (count < 5) {
      element.style.left = '0px';
      start = null;
      window.requestAnimationFrame(step);
    }  
  }
}

window.requestAnimationFrame(step);
