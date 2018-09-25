let cc = (...val) => console.log(...val);

window.onload = function() {
  let uli = document.querySelectorAll('ul>li');
  for(let i=0;i<uli.length;i++) {
    uli[i].style.margin = '0';
    uli[i].style.opacity = '1';
  }
  let headImg = document.querySelector('.head>.img');
  headImg.style.opacity = '1';
}

