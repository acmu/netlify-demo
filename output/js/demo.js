let cc = (...val) => console.log(...val);

window.onload = function() {
  let uli = document.querySelectorAll('ul>li');
  let headImg = document.querySelector('.head>.img');
  for(let i=0;i<uli.length;i++) {
    setTimeout(() => {
      uli[i].style.animation = 'flip 1s linear';
      uli[i].style.opacity = '1';
    }, 300*i);
  }
  headImg.style.opacity = '1';
}

