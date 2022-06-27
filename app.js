const currLoc = location.href;
const red = document.querySelectorAll('a');
const redLength = red.length;

for (let i = 0; i<redLength; i++){
      if(red[i].href === currLoc){
            red[i].className = 'active';
      }
}
