const currLoc = location.href;
const red = document.querySelectorAll('a');
const nav = document.querySelector('nav');
const redLength = red.length;

for (let i = 0; i<redLength; i++){
      if(red[i].href === currLoc){
            red[i].classList.add('active');
      }
}

nav.addEventListener('mouseenter', () => {
      nav.classList.toggle('gray');
});
nav.addEventListener('mouseleave', () => {
      nav.classList.toggle('gray');
});
