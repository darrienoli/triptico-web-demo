const infoBtn=document.getElementById('infoBtn');
const modal=document.getElementById('modal');
const closeModal=document.getElementById('closeModal');
infoBtn.addEventListener('click',()=>modal.classList.add('show'));
closeModal.addEventListener('click',()=>modal.classList.remove('show'));
modal.addEventListener('click',e=>{if(e.target===modal)modal.classList.remove('show')});
