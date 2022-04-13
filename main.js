const brg = document.querySelector('.menu_brg');
const menu = document.querySelector('.menu_list');
const wrapp = document.querySelector('.wrapper')


brg.addEventListener('click', ()=>{
   brg.classList.toggle('ative')
   menu.classList.toggle('visible')
   if(menu.classList.contains('visible')){
      wrapp.style.overflowY = 'hidden';
   }else{
      wrapp.style.overflowY = 'auto';
   }
})