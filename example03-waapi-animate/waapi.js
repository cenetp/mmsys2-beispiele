var test = document.querySelector('#waapi-test');
// Keyframes-Array
var keyframes = [
  { opacity: 0.9, width: '75px', left: '150px' },
  { opacity: 0.6, width: '50px', left: '275px' },
  { opacity: 0.3, width: '25px', left: '400px' },
  { opacity: 0, width: '0', left: '525px' }
];
// Konfigurationsobjekt
var config = {
  iterations: Infinity,
  duration: 700,
  easing: 'ease-in'
}
test.animate(keyframes, 1500);
