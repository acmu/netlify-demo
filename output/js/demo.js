let cc = (...val) => console.log(...val);

window.onload = function() {
  let uli = document.querySelectorAll('ul>li');
  let img = document.querySelectorAll('img');
  for(let i=0;i<uli.length;i++) {
    setTimeout(() => {
      uli[i].style.animation = 'flip 1s linear';
      uli[i].style.opacity = '1';
    }, 300*i);
  }
}

